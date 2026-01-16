export const DATA = {
    ui: {
        en: {
            pageTitle: "You are probably useless.",
            pageSubtitle: "Don't worry, almost everyone is.",
            aboutArticleLink: {
                title: "Read more about the 92.4% statistic",
                url: "https://medium.com/@tonprofil/92-4-of-humans-are-probably-useless-article"
            },
            subtitle: "Self-assessment",
            questionLabel: "Subject Query",
            placeholder: "Input optional...",
            validate: "Validate",
            recheck: "Recheck",
            uselessHook: "If you're still this useless.",
            refreshToast: "Refreshing does not count as a new evaluation.",
            shareRoast: "Shame on you.",
            registryTitle: "Central Registry",
            registrySubtitle: "Authenticated evaluations ledger",
            aboutOriginTitle: "Origin",
            aboutOriginText: "Probably Useless is an automated self-assessment framework. Our goal is simple: provide a slightly uncomfortable, self-reflective experience. No educational or therapeutic claims.",
            aboutDisclaimer: "Data is stored locally. Any perceived insight is a projection of the subject.",
            aboutCreatorsTitle: "The Committee",
            aboutChallenge: "One of us did nothing. They didn’t participate in development or ideas. Can you guess who it is? Record your suspicion in the public ledger.",
            aliceRole: "Systemic Concept",
            aliceBio: "Focuses on the aesthetics of discomfort and architectural friction. Believes clarity is a symptom of stress.",
            bobRole: "Technical Logic",
            bobBio: "Translates existential dread into stable functions. Prefers the binary silence of machines.",
            charlieRole: "Existential Oversight",
            charlieBio: "Monitors the gaps between user intent and system response. Often found staring at unhandled exceptions.",
            commentsTitle: "Public Records / Comments",
            commentPlaceholder: "Record your guess or observation...",
            postComment: "Post Record",
            historyTitle: "Subject History",
            historySubtitle: "Chronicle of past evaluations",
            viewDetails: "Examine",
            shareRequired: "Validation sharing required to reset parameters.",
            shamePopups: ["Shame on you.", "Integrity missing.", "Compliance is not optional.", "Sharing is caring. Or mandatory.", "A shortcut to disappointment."],
            thankYouPopups: ["Participation noted.", "Network expanding.", "Your vanity has been leveraged.", "Exposure confirmed."],
            recheckButtons: ["Try Again", "Reassess", "Check Once More", "Take Another Look"]
        },
        fr: {
            pageTitle: "Tu es probablement inutile.",
            pageSubtitle: "Mais t’inquiète, presque tout le monde l’est.",
            aboutArticleLink: {
                title: "Lire l’article sur les 92,4 %",
                url: "https://medium.com/@tonprofil/92-4-of-humans-are-probably-useless-article"
            },
            subtitle: "Auto-évaluation",
            questionLabel: "Requête Sujet",
            placeholder: "Saisie facultative...",
            validate: "Valider",
            recheck: "Réévaluer",
            uselessHook: "Si vous êtes toujours aussi inutile.",
            refreshToast: "Actualiser ne compte pas comme une nouvelle évaluation.",
            shareRoast: "Honte à vous.",
            registryTitle: "Registre Central",
            registrySubtitle: "Registre des évaluations authentifiées",
            aboutOriginTitle: "Origine",
            aboutOriginText: "Probably Useless est un cadre d'auto-évaluation automatisé. Notre objectif est simple : offrir une expérience d'auto-réflexion légèrement inconfortable. Aucune prétention éducative ou thérapeutique.",
            aboutDisclaimer: "Les données sont stockées localement. Toute intuition perçue est une projection du sujet.",
            aboutCreatorsTitle: "À propos des Créateurs",
            aboutChallenge: "L'un d'entre nous n'a rien fait. Il n'a participé ni au développement ni aux idées. Pouvez-vous deviner qui c'est ? Partagez votre supposition dans les commentaires ci-dessous !",
            aliceRole: "Concept & Design",
            aliceBio: "Alice se concentre sur l'architecture systémique et l'esthétique de l'inconfort. Elle croit que la clarté naît de la friction.",
            bobRole: "Développement",
            bobBio: "Bob traduit l'angoisse existentielle abstraite en code fonctionnel. Il préfère les machines aux gens pour leur prévisibilité.",
            charlieRole: "Supervision existentielle",
            charlieBio: "Surveille les écarts entre l’intention de l’utilisateur et la réponse du système. Souvent observé fixant des exceptions non gérées.",
            commentsTitle: "Archives Publiques / Commentaires",
            commentPlaceholder: "Enregistrez votre supposition ou observation...",
            postComment: "Publier l'enregistrement",
            historyTitle: "Historique du Sujet",
            historySubtitle: "Chronique des évaluations passées",
            viewDetails: "Examiner",
            shareRequired: "Partage de validation requis pour réinitialiser les paramètres.",
            shamePopups: ["Honte à vous.", "Intégrité manquante.", "La conformité n'est pas optionnelle.", "Le partage est obligatoire.", "Un raccourci vers la déception."],
            thankYouPopups: ["Participation notée.", "Réseau en expansion.", "Votre vanité a été exploitée.", "Exposition confirmée."],
            recheckButtons: ["Réessayer", "Réévaluer", "Revérifier", " Jeter un autre coup d'œil"]
        }
    },
    // emptyResponses: {
    //     en: [
    //         "Silence is also an answer.",
    //         "Not answering is consistent.",
    //         "We’ll take that as honesty.",
    //         "Vagueness noted.",
    //         "That was expected.",
    //         "Your non-compliance is recorded.",
    //         "A void where a thought should be.",
    //         "The absence of input is data itself.",
    //         "Predictable hesitation.",
    //         "You have nothing to add. Understood."
    //     ],
    //     fr: [
    //         "Le silence est aussi une réponse.",
    //         "Ne pas répondre est cohérent.",
    //         "Nous prendrons cela pour de l'honnêteté.",
    //         "Vague, comme prévu.",
    //         "C'était attendu.",
    //         "Votre non-conformité est enregistrée.",
    //         "Un vide là où une pensée devrait être.",
    //         "L'absence de saisie est une donnée en soi.",
    //         "Hésitation prévisible.",
    //         "Vous n'avez rien à ajouter. Compris."
    //     ]
    // },
questions: [
    {
        text: {
            en: "What did you do today that will still matter in five years?",
            fr: "Qu’as-tu fait aujourd’hui qui aura encore de l’impact dans cinq ans ?"
        },
        response: {
            en: "Thank you for your optimism. See you in five years.",
            fr: "Très bien. On se reverra dans cinq ans."
        },
        shareText: {
            en: "Every small step today matters in the long run.",
            fr: "Chaque petit pas aujourd’hui compte sur le long terme."
        }
    },
    {
        text: {
            en: "Which habit do you keep saying you want to change?",
            fr: "Quelle habitude dis-tu vouloir changer depuis trop longtemps ?"
        },
        response: {
            en: "Saying it won’t change it. Just so you know.",
            fr: "Le dire ne changera rien. Juste pour que tu saches."
        },
        shareText: {
            en: "Recognizing habits is the first step to change.",
            fr: "Reconnaître ses habitudes est le premier pas vers le changement."
        }
    },
    {
        text: {
            en: "When was the last time you voluntarily did something difficult?",
            fr: "Quand as-tu volontairement fait quelque chose de difficile pour la dernière fois ?"
        },
        response: {
            en: "The time you took to answer is already an answer.",
            fr: "Le temps que tu as mis à répondre est déjà une réponse."
        },
        shareText: {
            en: "Challenge yourself often, even in small ways.",
            fr: "Se challenger souvent, même modestement, change tout."
        }
    },
    {
        text: {
            en: "How disciplined are you when no one is watching?",
            fr: "À quel point es-tu discipliné quand personne ne te regarde ?"
        },
        response: {
            en: "That’s exactly what I thought.",
            fr: "C’est bien ce que je pensais."
        },
        shareText: {
            en: "Discipline in private builds freedom in public.",
            fr: "La discipline dans l’ombre crée la liberté au grand jour."
        }
    },
    {
        text: {
            en: "What would improve your life if you did it every day?",
            fr: "Qu’est-ce qui améliorerait ta vie si tu le faisais tous les jours ?"
        },
        response: {
            en: "You just described something you won’t apply.",
            fr: "Tu viens de décrire quelque chose que tu n’appliqueras pas."
        },
        shareText: {
            en: "Consistency beats intensity every time.",
            fr: "La régularité vaut mieux que l’intensité, toujours."
        }
    },
    {
        text: {
            en: "What are you still waiting for before taking action?",
            fr: "Qu’attends-tu encore avant de passer à l’action ?"
        },
        response: {
            en: "Same with a official permission. You’ll still wait.",
            fr: "Même avec une autorisation officielle, tu attendras quand même."
        },
        shareText: {
            en: "Stop waiting. Action teaches more than planning.",
            fr: "Arrête d’attendre. L’action apprend plus que la planification."
        }
    },
    {
        text: {
            en: "What is stopping you from taking action?",
            fr: "Qu’est-ce qui t’empêche de passer à l’action ?"
        },
        assertions: {
            en: [
                "Money",
                "Everything needs to be aligned",
                "I need more information",
                "Lack of time",
                "Lack of discipline",
                "Bad priorities"
            ],
            fr: [
                "L’argent",
                "Que tout soit aligné",
                "J’ai besoin de plus d’informations",
                "Le manque de temps",
                "Le manque de discipline",
                "De mauvaises priorités"
            ]
        },
        response: {
            en: "You checked something to avoid acting. Well played.",
            fr: "Tu as coché quelque chose pour éviter d’agir. Bien joué."
        },
        shareText: {
            en: "Excuses don’t move you forward. Choose action instead.",
            fr: "Les excuses ne font pas avancer. Choisis l’action."
        },
    },
    {
        text: {
            en: "Which part of your potential are you deliberately ignoring?",
            fr: "Quelle partie de ton potentiel ignores-tu volontairement ?"
        },
        response: {
            en: "You should keep ignoring it. It prevents you from failing by trying.",
            fr: "Tu ferais mieux de continuer à l’ignorer. Ça t’évite d’échouer en essayant."
        },
        shareText: {
            en: "Your untapped potential is quietly waiting for you.",
            fr: "Ton potentiel inexploité t’attend silencieusement."
        }
    },
    {
        text: {
            en: "If nothing changes, where will you be in one year?",
            fr: "Si rien ne change, où seras-tu dans un an ?"
        },
        response: {
            en: "You will sadly be in the same place. ",
            fr: "Tu seras tristement au même endroit."
        },
        shareText: {
            en: "Small changes today prevent regrets tomorrow.",
            fr: "De petits changements aujourd’hui évitent les regrets demain."
        }
    },
    {
        text: {
            en: "Why aren’t you yet the person you claim you want to become?",
            fr: "Pourquoi n’es-tu pas encore la personne que tu dis vouloir devenir ?"
        },
        response: {
            en: "No need to answer. Your actions already did.",
            fr: "Inutile de répondre. Tes actions l’ont déjà fait."
        },
        shareText: {
            en: "Your future self is watching. Start acting now.",
            fr: "Ton futur te regarde. Agis dès maintenant."
        }
    }
],


};