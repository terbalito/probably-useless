import { createIcons, Share2, Clipboard, Twitter, Linkedin, Info, Github, Send } from 'lucide';
import { DATA } from './questions.js';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

/* ================================
   LOCAL COMMENTS SYSTEM (NO API)
================================ */

// Simule un "projet"
window.getCurrentProject = async function () {
    return {
        id: "probably-useless",
    };
};

// Sauvegarde un commentaire
window.postComment = async function ({ content }) {
    const raw = localStorage.getItem("pu_comments");
    const comments = raw ? JSON.parse(raw) : [];

    comments.unshift({
        id: crypto.randomUUID(),
        raw_content: content,
        created_at: new Date().toISOString(),
        author: {
            username: "anonymous"
        }
    });

    localStorage.setItem("pu_comments", JSON.stringify(comments));

    // Event temps réel fake
    window.dispatchEvent(new CustomEvent("comment:created", {
        detail: {
            comment: comments[0]
        }
    }));
};

class App {
    constructor() {
        this.lang = localStorage.getItem('pu_lang') || 'en';
        this.score = parseInt(localStorage.getItem('pu_score') || '0');
        this.answeredIndices = JSON.parse(localStorage.getItem('pu_answered') || '[]');
        this.history = JSON.parse(localStorage.getItem('pu_history') || '[]');
        
        // Share / Re-eval logic
        this.attemptsLeft = parseInt(localStorage.getItem('pu_attempts') || '0');
        this.sharesDone = parseInt(localStorage.getItem('pu_shares') || '0');
        this.recheckUnlocked = localStorage.getItem('pu_unlocked') === 'true';
        this.recheckCount = parseInt(localStorage.getItem('pu_recheck_count') || '0');

        this.currentIndex = this.determineCurrentIndex();
        this.isAnswered = false;
        this.lastResponse = '';
        this.lastUserAnswer = '';
        this.comments = [];
        this.currentPage = 'home';
        
        this.container = document.getElementById('app-container');
        this.langSwitcher = document.getElementById('lang-switcher');
        this.counterDisplay = document.getElementById('q-counter');
        this.toast = document.getElementById('toast-notif');

        this.init();
    }

    determineCurrentIndex() {
        let saved = localStorage.getItem('pu_current_index');
        if (saved !== null) return parseInt(saved);
        
        // Pick a new one that hasn't been answered
        let available = Array.from({length: DATA.questions.length}, (_, i) => i)
            .filter(i => !this.answeredIndices.includes(i));
        
        if (available.length === 0) {
            // Pool exhausted, reset or loop
            this.answeredIndices = [];
            available = Array.from({length: DATA.questions.length}, (_, i) => i);
        }
        
        const next = available[Math.floor(Math.random() * available.length)];
        localStorage.setItem('pu_current_index', next);
        return next;
    }

    init() {
        this.langSwitcher.value = this.lang;
        this.langSwitcher.addEventListener('change', (e) => {
            this.lang = e.target.value;
            localStorage.setItem('pu_lang', this.lang);
            this.render();
        });

        // Navigation
        document.querySelectorAll('[data-page]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = e.target.getAttribute('data-page');
                window.location.hash = page;
                this.navigate(page);
            });
        });

        window.addEventListener('hashchange', () => this.handleRouting());

        // Refresh check
        if (sessionStorage.getItem('pu_refreshed')) {
            this.showToast(DATA.ui[this.lang].refreshToast);
        }
        sessionStorage.setItem('pu_refreshed', 'true');

        // Listen for real-time comments
        window.addEventListener('comment:created', (data) => {
            if (this.currentPage === 'comments') {
                this.comments.unshift(data.detail.comment);
                this.renderCommentsList();
            }
        });

        this.handleRouting();
        this.updateCounter();
    }

    handleRouting() {
        const hash = window.location.hash.substring(1);
        const [page, id] = hash.split('/');
        
        document.querySelectorAll('[data-page]').forEach(l => {
            l.classList.toggle('active', l.getAttribute('data-page') === (page || 'home'));
        });

        if (page === 'response' && id) {
            this.renderResponseDetail(id);
        } else {
            this.navigate(page || 'home');
        }
    }

    updateCounter() {
        this.counterDisplay.innerText = `Q: ${this.score}`;
    }

    showToast(msg) {
        this.toast.innerText = msg;
        this.toast.style.display = 'block';
        setTimeout(() => {
            this.toast.style.display = 'none';
        }, 3000);
    }

    navigate(page) {
        this.currentPage = page;
        if (page === 'home') this.renderHome();
        else if (page === 'registry') this.renderRegistry();
        else if (page === 'about') this.renderAbout();
        else if (page === 'history') this.renderHistory();
        else if (page === 'comments') this.renderCommentsPage();
    }

    render() {
        this.navigate(this.currentPage);
    }

    
    // =============================
    // UI HELPERS
    // =============================
    renderTextInput(ui) {
        return `
            <input
                type="text"
                id="answer-input"
                class="input-brutalist mono text-sm"
                placeholder="${ui.placeholder}"
                autocomplete="off"
            >
        `;
    }


    renderAssertions(q) {
        return `
            <div class="space-y-4">
                ${q.assertions[this.lang].map(a => `
                    <label class="flex items-center gap-3 mono text-sm cursor-pointer opacity-70 hover:opacity-100">
                        <input type="checkbox" class="assertion-checkbox">
                        <span>${a}</span>
                    </label>
                `).join('')}
            </div>
        `;
    }


    renderHome() {
        const q = DATA.questions[this.currentIndex];
        const ui = DATA.ui[this.lang];
        
        
        this.container.innerHTML = `
            <div class="max-w-2xl w-full flex flex-col gap-12 fade-in">
                <header class="text-center space-y-2">
                    <h1 class="text-4xl md:text-6xl font-bold uppercase tracking-tighter">Probably Useless</h1>
                    <p class="mono text-xs opacity-40 uppercase">${ui.subtitle}</p>
                </header>

                <div class="space-y-8">
                    <div class="space-y-4">
                        <label class="mono text-xs opacity-60 block uppercase">${ui.questionLabel}</label>
                        <h2 class="text-2xl md:text-3xl font-medium leading-tight">${q.text[this.lang]}</h2>
                    </div>

                    ${!this.isAnswered ? `
                        <div class="space-y-6">
                            ${q.assertions ? this.renderAssertions(q) : this.renderTextInput(ui)}
                            <button id="validate-btn" class="btn-brutalist w-full mt-6">
                                ${ui.validate}
                            </button>
                        </div>
                    ` : `
                        <div class="space-y-6 fade-in">
                            <div class="p-6 brutalist-border bg-white/5 mono text-sm leading-relaxed">
                                 ${this.lastResponse}
                            </div>
                            <div class="flex flex-col gap-2">
                                <button id="recheck-btn" class="btn-brutalist w-full">${ui.recheckButtons[Math.floor(Math.random() * ui.recheckButtons.length)]}</button>
                               
                            </div>
                            <p class="text-center text-[10px] mono opacity-30 italic">${ui.uselessHook}</p>
                        </div>
                    `}
                </div>

                <div class="flex justify-center gap-4 opacity-40 hover:opacity-100 transition-opacity">
                    <button class="share-trigger" data-platform="x"><i data-lucide="twitter" class="w-4 h-4"></i></button>
                    <button class="share-trigger" data-platform="linkedin"><i data-lucide="linkedin" class="w-4 h-4"></i></button>
                    <button class="share-trigger" data-platform="copy"><i data-lucide="clipboard" class="w-4 h-4"></i></button>
                </div>
            </div>
        `;

        createIcons({ icons: { Twitter, Linkedin, Clipboard } });
        this.attachHomeEvents();

        // this.currentIndex = DATA.questions.findIndex(q => q.assertions);


        console.log("QUESTION", this.currentIndex, DATA.questions[this.currentIndex]);

    }

    attachHomeEvents() {
        const validateBtn = document.getElementById('validate-btn');
        const recheckBtn = document.getElementById('recheck-btn');
        const input = document.getElementById('answer-input');

        if (validateBtn) {
            validateBtn.onclick = () => {
                const q = DATA.questions[this.currentIndex];
                let val = '';
                let selectedAssertions = [];

                // =====================
                // ASSERTIONS
                // =====================
                if (q.assertions) {
                    selectedAssertions = [...document.querySelectorAll('.assertion-checkbox')]
                        .filter(cb => cb.checked)
                        .map(cb => cb.nextElementSibling.innerText);

                    if (selectedAssertions.length === 0) {
                        this.showToast(DATA.ui[this.lang].mandatoryAnswer || "You must choose something.");
                        return;
                    }

                    const count = selectedAssertions.length;

                    this.lastResponse =
                        count === 1
                            ? {
                                en: "You picked one excuse  to avoid acting. Efficient.",
                                fr: "Tu as coché une excuse pour éviter d’agir. Efficace."
                            }[this.lang]
                            : {
                                en: `You picked ${count} excuses  to avoid acting. Impressive restraint.`,
                                fr: `Tu as coché ${count} excuses pour éviter d’agir. Belle maîtrise.`
                            }[this.lang];

                    val = selectedAssertions.join(', ');
                }

                // =====================
                // TEXTE LIBRE
                // =====================
                else {
                    const input = document.getElementById('answer-input');
                    val = input.value.trim();

                    if (!val) {
                        this.showToast(DATA.ui[this.lang].mandatoryAnswer || "You must choose something.");
                        return;
                    }

                    this.lastResponse = q.response[this.lang];
                }

                // =====================
                // FINALISATION
                // =====================
                this.isAnswered = true;
                this.score++;
                this.answeredIndices.push(this.currentIndex);

                this.history.unshift({
                    id: Date.now().toString(36),
                    qText: q.text[this.lang],
                    userInput: val,
                    botResponse: this.lastResponse,
                    timestamp: new Date().toISOString()
                });

                localStorage.setItem('pu_score', this.score);
                localStorage.setItem('pu_answered', JSON.stringify(this.answeredIndices));
                localStorage.setItem('pu_history', JSON.stringify(this.history));

                this.updateCounter();
                this.renderHome();
            };
        }



        if (recheckBtn) {
            recheckBtn.onclick = () => {
        this.recheckCount++;
        localStorage.setItem('pu_recheck_count', this.recheckCount);

        // 1ère fois → autorisée
        if (this.recheckCount === 1) {
            this.isAnswered = false;
            localStorage.removeItem('pu_current_index');
            this.currentIndex = this.determineCurrentIndex();
            this.renderHome();
            return;
        }

        // À partir de la 2e → verrouillage
        if (!this.recheckUnlocked) {
            this.showToast({
                en: "Share this evaluation using one of the icons below.",
                fr: "Partage cette évaluation en cliquant sur une icône ci-dessous."
            }[this.lang]);
            return;
        }

        // Déverrouillé → autorisé
        this.isAnswered = false;
        localStorage.removeItem('pu_current_index');
        this.currentIndex = this.determineCurrentIndex();
        this.renderHome();


            };
        }

        document.querySelectorAll('.share-trigger').forEach(btn => {
            btn.onclick = () => {
                    const platform = btn.getAttribute('data-platform');
                    const lastHistoryItem = this.history[0];
                    const shareUrl = `${window.location.origin}${window.location.pathname}#response/${lastHistoryItem?.id || ''}`;
                    const questionObj = DATA.questions.find(q => q.text[this.lang] === lastHistoryItem?.qText);
                    const text = questionObj?.shareText[this.lang] || "I just evaluated my existence on Probably Useless.";

                    
                    if (platform === 'copy') {
                        navigator.clipboard.writeText(shareUrl);
                        this.showToast("Link copied to clipboard.");
                    } else if (platform === 'x') {
                        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
                    } else if (platform === 'linkedin') {
                        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank');
                    }

                // Sharing logic
                if (!this.recheckUnlocked && platform !== 'copy') {
                    setTimeout(() => {
                        const thanks = DATA.ui[this.lang].thankYouPopups;
                        this.showToast(thanks[Math.floor(Math.random() * thanks.length)]);
                        this.sharesDone++;
                        localStorage.setItem('pu_shares', this.sharesDone);
                        
                        if (this.sharesDone >= 2) {
                            this.recheckUnlocked = true;
                            this.attemptsLeft = 0;
                            localStorage.setItem('pu_unlocked', 'true');
                        } else {
                            this.attemptsLeft = 5;
                        }
                        localStorage.setItem('pu_attempts', this.attemptsLeft);
                        this.renderHome();
                    }, 3000);
                }
            };
        });
    }

    renderRegistry() {
        const ui = DATA.ui[this.lang];
        const milestones = [1000, 500, 200, 100];
        
        // Mock data for other "users"
        const mocks = [
            { name: "Subject #842", score: 942, badge: "Persistent" },
            { name: "Anonymous_4", score: 320, badge: "Observer" },
            { name: "User_Null", score: 102, badge: "Initiated" }
        ];

        if (this.score > 0) {
            mocks.unshift({ name: "YOU", score: this.score, badge: this.getBadge(this.score), isUser: true });
        }

        this.container.innerHTML = `
            <div class="max-w-2xl w-full flex flex-col gap-8 fade-in h-full overflow-y-auto py-8">
                <header class="space-y-2">
                    <h2 class="text-3xl font-bold uppercase mono">${ui.registryTitle}</h2>
                    <p class="text-xs opacity-40 mono uppercase">${ui.registrySubtitle}</p>
                </header>

                <div class="space-y-1 brutalist-border p-4 bg-white/5">
                    <div class="grid grid-cols-3 text-[10px] mono opacity-40 pb-2 border-b border-white/10 mb-2">
                        <span>IDENTIFIER</span>
                        <span class="text-center">EVALUATIONS</span>
                        <span class="text-right">STATUS</span>
                    </div>
                    ${mocks.sort((a,b) => b.score - a.score).map(m => `
                        <div class="grid grid-cols-3 py-2 mono text-xs ${m.isUser ? 'text-white font-bold' : 'opacity-60'}">
                            <span>${m.name}</span>
                            <span class="text-center">${m.score}</span>
                            <span class="text-right uppercase">${m.badge}</span>
                        </div>
                    `).join('')}
                </div>

                <div class="mt-4">
                    <h3 class="text-xs mono opacity-40 mb-4 uppercase">Archive Milestones</h3>
                    <div class="grid grid-cols-2 gap-4">
                        ${milestones.map(ms => `
                            <div class="p-4 brutalist-border flex items-center justify-between ${this.score >= ms ? 'opacity-100' : 'opacity-20'}">
                                <span class="mono font-bold">${ms}</span>
                                <div class="w-4 h-4 brutalist-border bg-white ${this.score >= ms ? 'opacity-100' : 'opacity-0'}"></div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    getBadge(score) {
        if (score >= 1000) return "Transcendental";
        if (score >= 500) return "Committed";
        if (score >= 200) return "Reflective";
        if (score >= 100) return "Compliant";
        return "Unverified";
    }

    async renderAbout() {
        const ui = DATA.ui[this.lang];
        this.container.innerHTML = `
            <div class="max-w-2xl w-full flex flex-col gap-12 fade-in h-full overflow-y-auto py-8 px-4 no-scrollbar">
                <!-- Origin -->
                <section class="space-y-6">
                    <h2 class="text-2xl font-bold uppercase mono border-b border-white/10 pb-2">${ui.aboutOriginTitle}</h2>
                    <p class="mono text-sm leading-relaxed opacity-70">
                        ${ui.aboutOriginText}
                    </p>
                    <p class="mono text-[10px] opacity-30 italic">
                        ${ui.aboutDisclaimer}
                    </p>
                </section>

                <!-- Creators -->
                <section class="space-y-8">
                    <h2 class="text-2xl font-bold uppercase mono border-b border-white/10 pb-2">${ui.aboutCreatorsTitle}</h2>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <!-- Alice Card -->
                        <div class="brutalist-border p-5 space-y-4 hover:border-white transition-colors duration-300">
                            <div class="flex gap-4 items-center">
                                <img src="alice_avatar.png" alt="Alice" class="w-16 h-16 brutalist-border grayscale hover:grayscale-0 transition-all duration-300">
                                <div class="space-y-1">
                                    <h3 class="mono text-sm font-bold uppercase">Alice Smith</h3>
                                    <p class="mono text-[10px] opacity-40 uppercase tracking-tighter">${ui.aliceRole}</p>
                                </div>
                            </div>
                            <p class="mono text-xs opacity-60 leading-relaxed">${ui.aliceBio}</p>
                            <div class="flex gap-3">
                                <a href="https://twitter.com/alice" target="_blank" class="opacity-40 hover:opacity-100 transition-opacity"><i data-lucide="twitter" class="w-4 h-4"></i></a>
                                <a href="https://linkedin.com/in/alice-smith" target="_blank" class="opacity-40 hover:opacity-100 transition-opacity"><i data-lucide="linkedin" class="w-4 h-4"></i></a>
                            </div>
                        </div>

                        <!-- Bob Card -->
                        <div class="brutalist-border p-5 space-y-4 hover:border-white transition-colors duration-300">
                            <div class="flex gap-4 items-center">
                                <img src="bob_avatar.png" alt="Bob" class="w-16 h-16 brutalist-border grayscale hover:grayscale-0 transition-all duration-300">
                                <div class="space-y-1">
                                    <h3 class="mono text-sm font-bold uppercase">Bob Jones</h3>
                                    <p class="mono text-[10px] opacity-40 uppercase tracking-tighter">${ui.bobRole}</p>
                                </div>
                            </div>
                            <p class="mono text-xs opacity-60 leading-relaxed">${ui.bobBio}</p>
                            <div class="flex gap-3">
                                <a href="https://github.com/bobjones" target="_blank" class="opacity-40 hover:opacity-100 transition-opacity"><i data-lucide="github" class="w-4 h-4"></i></a>
                                <a href="https://linkedin.com/in/bob-jones" target="_blank" class="opacity-40 hover:opacity-100 transition-opacity"><i data-lucide="linkedin" class="w-4 h-4"></i></a>
                            </div>
                        </div>

                         <!-- Charlie Card -->
                        <div class="brutalist-border p-5 space-y-4 hover:border-white transition-colors duration-300">
                            <div class="flex gap-4 items-center">
                                <img src="charlie_avatar.png" alt="Charlie" class="w-16 h-16 brutalist-border grayscale hover:grayscale-0 transition-all duration-300">
                                <div class="space-y-1">
                                    <h3 class="mono text-sm font-bold uppercase">Charlie Doe</h3>
                                    <p class="mono text-[10px] opacity-40 uppercase tracking-tighter">${ui.charlieRole}</p>
                                </div>
                            </div>
                            <p class="mono text-xs opacity-60 leading-relaxed">${ui.charlieBio}</p>
                            <div class="flex gap-3">
                                <a href="#" class="opacity-40 hover:opacity-100 transition-opacity"><i data-lucide="twitter" class="w-4 h-4"></i></a>
                                <a href="#" class="opacity-40 hover:opacity-100 transition-opacity"><i data-lucide="linkedin" class="w-4 h-4"></i></a>
                            </div>
                        </div>
                    </div>

                    <!--  <div class="p-6 brutalist-border bg-white/5 border-dashed">
                      <p class="mono text-sm italic text-center opacity-80">
                            "${ui.aboutChallenge}"
                        </p>
                    </div> 
                </section> -->

                <div class="opacity-10 text-[10px] mono text-center uppercase tracking-widest pb-8">
                    v.1.2.0-stable // NO RIGHTS RESERVED
                </div>
            </div>
        `;
        createIcons({ icons: { Twitter, Linkedin, Github } });
    }

    renderHistory() {
        const ui = DATA.ui[this.lang];
        this.container.innerHTML = `
            <div class="max-w-2xl w-full flex flex-col gap-8 fade-in h-full overflow-y-auto py-8 px-4">
                <header class="space-y-2">
                    <h2 class="text-3xl font-bold uppercase mono">${ui.historyTitle}</h2>
                    <p class="text-xs opacity-40 mono uppercase">${ui.historySubtitle}</p>
                </header>

                <div class="space-y-4">
                    ${this.history.map(item => `
                        <div class="brutalist-border p-4 bg-white/5 hover:border-white transition-colors cursor-pointer group" onclick="window.location.hash = 'response/${item.id}'">
                            <div class="flex justify-between items-start mb-2">
                                <p class="mono text-[10px] opacity-40">${new Date(item.timestamp).toLocaleString()}</p>
                                <span class="mono text-[10px] opacity-0 group-hover:opacity-100 transition-opacity uppercase font-bold">${ui.viewDetails} →</span>
                            </div>
                            <p class="text-sm font-medium line-clamp-1 opacity-80">${item.qText}</p>
                            <p class="mono text-[10px] opacity-40 italic mt-2 line-clamp-1">${item.userInput || '...'}</p>
                        </div>
                    `).join('')}
                    ${this.history.length === 0 ? `<div class="text-center mono text-[10px] opacity-20 py-12 uppercase">No historical data available.</div>` : ''}
                </div>
            </div>
        `;
    }

    renderResponseDetail(id) {
        const item = this.history.find(h => h.id === id);
        const ui = DATA.ui[this.lang];
        
        if (!item) {
             this.container.innerHTML = `<div class="mono text-sm uppercase opacity-40">Entry Not Found.</div>`;
             return;
        }

        this.container.innerHTML = `
            <div class="max-w-2xl w-full flex flex-col gap-12 fade-in">
                <header class="text-center space-y-2">
                    <h1 class="text-4xl md:text-5xl font-bold uppercase tracking-tighter">Evaluation Archival</h1>
                    <p class="mono text-[10px] opacity-40 uppercase">${new Date(item.timestamp).toUTCString()}</p>
                </header>

                <div class="space-y-10">
                    <div class="space-y-4">
                        <label class="mono text-[10px] opacity-60 block uppercase">Query</label>
                        <h2 class="text-2xl font-medium leading-tight">${item.qText}</h2>
                    </div>

                    <div class="space-y-4">
                        <label class="mono text-[10px] opacity-60 block uppercase">Subject Input</label>
                        <div class="p-6 brutalist-border bg-white/5 mono text-sm italic">
                            ${item.userInput || '—'}
                        </div>
                    </div>

                    <div class="space-y-4">
                        <label class="mono text-[10px] opacity-60 block uppercase">Machine Response</label>
                        <div class="p-6 brutalist-border bg-white/80 text-black mono text-sm font-bold">
                            ${item.botResponse}
                        </div>
                    </div>
                </div>

                <div class="flex justify-center pt-8">
                    <button onclick="window.location.hash = 'history'" class="btn-brutalist text-xs">Return to History</button>
                </div>
            </div>
        `;
    }

    renderCommentsPage() {
        const ui = DATA.ui[this.lang];
        this.container.innerHTML = `
            <div class="max-w-2xl w-full flex flex-col gap-8 fade-in h-full overflow-y-auto py-8 px-4 no-scrollbar">
                <header class="space-y-2">
                    <h2 class="text-3xl font-bold uppercase mono">${ui.commentsTitle}</h2>
                    <p class="text-xs opacity-40 mono uppercase">Public discourse archives</p>
                </header>

                <div class="space-y-6">
                    <div class="flex flex-col gap-2">
                        <textarea id="comment-input" class="input-brutalist mono text-xs h-24 resize-none" placeholder="${ui.commentPlaceholder}"></textarea>
                        <button id="post-comment-btn" class="btn-brutalist text-xs flex items-center justify-center gap-2">
                            <i data-lucide="send" class="w-3 h-3"></i> ${ui.postComment}
                        </button>
                    </div>

                    <div id="comments-list" class="space-y-4 pt-4">
                        <div class="text-center mono text-[10px] opacity-20 py-4 uppercase">Initializing Archives...</div>
                    </div>
                </div>
            </div>
        `;
        createIcons({ icons: { Send } });
        this.attachAboutEvents(); // Re-use the event attacher as logic is identical
        this.loadComments();
    }

    attachAboutEvents() {
        const postBtn = document.getElementById('post-comment-btn');
        const input = document.getElementById('comment-input');

        if (postBtn) {
            postBtn.onclick = async () => {
                const content = input.value.trim();
                if (!content) return;
                
                postBtn.disabled = true;
                postBtn.innerText = "...";
                
                try {
                    await window.postComment({ content });
                    input.value = '';
                } catch (e) {
                    console.error(e);
                } finally {
                    postBtn.disabled = false;
                    postBtn.innerHTML = `<i data-lucide="send" class="w-3 h-3"></i> ${DATA.ui[this.lang].postComment}`;
                    createIcons({ icons: { Send } });
                }
            };
        }
    }

    async loadComments() {
        try {
            const raw = localStorage.getItem("pu_comments");
            this.comments = raw ? JSON.parse(raw) : [];
            this.renderCommentsList();
        } catch (e) {
            console.error("Failed to load comments", e);
            const list = document.getElementById('comments-list');
            if (list) {
                list.innerHTML = `<div class="text-[10px] mono opacity-40 uppercase">Archives corrupted.</div>`;
            }
        }
    }


    renderCommentsList() {
        const list = document.getElementById('comments-list');
        if (!list) return;

        if (this.comments.length === 0) {
            list.innerHTML = `<div class="text-[10px] mono opacity-20 uppercase text-center py-8">No records found.</div>`;
            return;
        }

list.innerHTML = this.comments
    .filter(c => c && c.raw_content)
    .map(c => {
        const htmlContent = DOMPurify.sanitize(marked.parse(c.raw_content));
        return `
            <div class="brutalist-border p-4 space-y-2 bg-white/5">
                <div class="flex justify-between items-center border-b border-white/5 pb-2">
                    <span class="mono text-[10px] font-bold text-white/80 uppercase">@${c.author.username}</span>
                    <span class="mono text-[8px] opacity-30">${new Date(c.created_at).toLocaleDateString()}</span>
                </div>
                <div class="mono text-xs opacity-70 prose prose-invert max-w-none prose-sm">
                    ${htmlContent}
                </div>
            </div>
        `;
    }).join('');
    }
}

new App();