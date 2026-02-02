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
            refreshToast: "Refresh the page doesn't change anything.",
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
            shareRequired: "Share the link on social media or leave.",
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
            refreshToast: "Actualiser la page ne changera rien !",
            shareRoast: "Honte à vous.",
            registryTitle: "Registre Central",
            registrySubtitle: "Registre des évaluations authentifiées",
            aboutOriginTitle: "Origine",
            aboutOriginText: "Probably Useless est un cadre d'auto-évaluation automatisé. Notre objectif est simple : offrir une expérience d'auto-réflexion légèrement inconfortable. Aucune prétention éducative ou thérapeutique.",
            aboutDisclaimer: "Les données sont stockées localement. Toute intuition perçue est une projection du sujet.",
            aboutCreatorsTitle: "À propos des Créateurs",
            aboutChallenge: "L'un d'entre nous n'a rien fait. Il n'a participé ni au développement ni aux idées. Pouvez-vous deviner qui c'est ? Partagez votre supposition dans les commentaires ci-dessous !",
            aliceRole: "Concept & Design",
            aliceBio: "Joe se concentre sur l'architecture systémique et l'esthétique de l'inconfort. il croit que la clarté naît de la friction.",
            bobRole: "Développement",
            bobBio: "Devis traduit l'angoisse existentielle abstraite en code fonctionnel. Il préfère les machines aux gens pour leur prévisibilité.",
            charlieRole: "Supervision existentielle",
            charlieBio: "Surveille les écarts entre l’intention de l’utilisateur et la réponse du système. Souvent observé fixant des exceptions non gérées.",
            commentsTitle: "Archives Publiques / Commentaires",
            commentPlaceholder: "Enregistrez votre supposition ou observation...",
            postComment: "Publier l'enregistrement",
            historyTitle: "Historique du Sujet",
            historySubtitle: "Chronique des évaluations passées",
            viewDetails: "Examiner",
            shareRequired: "Partage le lien sur les réseaux ou vas t'en.",
            shamePopups: ["Honte à vous.", "Intégrité manquante.", "La conformité n'est pas optionnelle.", "Le partage est obligatoire.", "Un raccourci vers la déception."],
            thankYouPopups: ["Participation notée.", "Réseau en expansion.", "Votre vanité a été exploitée.", "Exposition confirmée."],
            recheckButtons: ["Réessayer", "Réévaluer", "Revérifier", " Jeter un autre coup d'œil"]
        }
    },



questions: [
  { 
    id: "q-001",
    type: "text",
    text: {
      en: "What did you do today that will still matter in five years?",
      fr: "Qu’as-tu fait aujourd’hui qui aura encore de l’impact dans cinq ans ?"
    },
    response: {
      en: "Thank you for your optimism. See you in five years.",
      fr: "Très bien. On se reverra dans cinq ans."
    }
  },
  {
    id: "q-002",
    type: "text",
    text: {
      en: "Describe what you’re proud of from the last 30 days.",
      fr: "Décris ce dont tu es fier sur les 30 derniers jours."
    },
    response: {
      en: "Cool. Keep it up.",
      fr: "Super. continues sur cette lancée."
    }
  },
  {
    id: "q-003",
    type: "text",
    text: {
      en: "What time did you wake up today?",
      fr: "À quelle heure t’es-tu réveillé aujourd’hui ?"
    },
    response: {
      en: "You woke up. That’s about it.",
      fr: "Tu t’es réveillé. C’est à peu près tout."
    }
  },
  {
    id: "q-004",
    type: "text",
    text: {
      en: "What did you eat today?",
      fr: "Qu’as-tu mangé aujourd’hui ?"
    },
    response: {
      en: "That explains the energy level.",
      fr: "Ça explique le niveau d’énergie."
    }
  },
  {
    id: "q-005",
    type: "text",
    text: {
      en: "What did you postpone today?",
      fr: "Qu’as-tu encore repoussé aujourd’hui ?"
    },
    response: {
      en: "You’re consistent, at least.",
      fr: "Au moins, tu es constant."
    }
  },
  {
    id: "q-006",
    type: "text",
    text: {
      en: "Did you do what you said you would do today?",
      fr: "As-tu fait ce que tu avais dit que tu ferais aujourd’hui ?"
    },
    response: {
      en: "I was just checking if you were aware.",
      fr: "Je vérifiais juste si t'étais au courant."
    }
  },
  {
    id: "q-007",
    type: "text",
    text: {
      en: "When was the last time you finished something?",
      fr: "Quand as-tu fini quelque chose pour la dernière fois ?"
    },
    response: {
      en: "Take your time. No rush.",
      fr: "Prends ton temps. Rien ne presse."
    }
  },
  {
    id: "q-008",
    type: "text",
    text: {
      en: "Explain why you’re not further ahead.",
      fr: "Explique pourquoi tu n’es pas plus avancé."
    },
    response: {
      en: "You know it now. Get your ass moving !",
      fr: "Tu le sais maintenant. Bouge toi le cul !"
    }
  },
  {
    id: "q-009",
    type: "text",
    text: {
      en: "What did you do instead of what mattered really today?",
      fr: "Qu’as-tu fait à la place de ce qui comptait vraiment aujourd’hui ?"
    },
    response: {
      en: "The easiest obviously.",
      fr: "Le plus facile évidemment."
    }
  },
  {
    id: "q-010",
    type: "text",
    text: {
      en: "What will you avoid again tomorrow?",
      fr: "Qu’est-ce que tu éviteras encore demain ?"
    },
    response: {
      en: "See you tomorrow then.",
      fr: "On se dit à demain alors."
    }
  },
  {
    id: "q-011",
    type: "text",
    text: {
      en: "Did you laugh today?",
      fr: "As-tu ri aujourd’hui ?"
    },
    response: {
      en: "At least you pretended to feel alive.",
      fr: "Au moins, tu as fait semblant de te sentir vivant."
    }
  },
  {
    id: "q-012",
    type: "text",
    text: {
      en: "Did you look outside today?",
      fr: "As-tu regardé dehors aujourd’hui ?"
    },
    response: {
      en: "Nature continues without you.",
      fr: "La nature continue sans toi."
    }
  },
  {
    id: "q-013",
    type: "text",
    text: {
      en: "Did you wash your hands today?",
      fr: "T’es-tu lavé les mains aujourd’hui ?"
    },
    response: {
      en: "Hygiene: minimal. Humanity: questionable.",
      fr: "Hygiène : minimale. Humanité : douteuse."
    }
  },
  {
    id: "q-014",
    type: "text",
    text: {
      en: "Did you check your reflection today?",
      fr: "T’es-tu regardé dans le miroir aujourd’hui ?"
    },
    response: {
      en: "Whatever. Still there. Still disappointing.",
      fr: "Peu importe. Toujours là. Toujours décevant."
    }
  },
  {
    id: "q-015",
    type: "assertion",
    text: {
      en: "How serious are your goals?",
      fr: "À quel point tes objectifs sont-ils sérieux ?"
    },
    assertions: {
      en: [
        "Very serious, just not urgent",
        "Important, but not right now",
        "Clear in my head",
        "I’ll start soon",
        "They’re evolving"
      ],
      fr: [
        "Très sérieux, mais pas urgents",
        "Importants, mais pas maintenant",
        "Clairs dans ma tête",
        "Je commence bientôt",
        "Ils évoluent"
      ]
    },
    response: {
      en: "So… not serious.",
      fr: "Donc… pas sérieux."
    }
  },
  {
    id: "q-016",
    type: "text",
    text: {
      en: "Describe what makes you productive.",
      fr: "Décris ce qui fait de toi quelqu’un de productif."
    },
    response: {
      en: "Interesting theory.",
      fr: "Théorie intéressante."
    }
  },
  {
    id: "q-017",
    type: "text",
    text: {
      en: "What excuse fits you best today?",
      fr: "Quelle excuse te correspond le mieux aujourd’hui ?"
    },
    response: {
      en: "It's noted. Hopefully it won’t be the same tomorrow.",
      fr: "C'est noté. Pourvu que ça soit pas la même chose demain."
    }
  },
  {
    id: "q-018",
    type: "text",
    text: {
      en: "What would you do if no one was watching you ?",
      fr: "Que ferais-tu si personne te regardait ?"
    },
    response: {
      en: "Exactly.",
      fr: "Exactement."
    }
  },
  {
    id: "q-019",
    type: "text",
    text: {
      en: "Tell me what you’re proud of lately.",
      fr: "Dis-moi ce dont tu es fier récemment."
    },
    response: {
      en: "That explains a lot.",
      fr: "Ça explique beaucoup de choses."
    }
  },
  {
    id: "q-020",
    type: "assertion",
    text: {
      en: "How do you usually describe yourself?",
      fr: "Comment te décris-tu habituellement ?"
    },
    assertions: {
      en: [
        "Worker",
        "Motivated but inconsistent",
        "Capable but distracted",
        "Busy but unfulfilled",
        "Potentially great",
        "Still figuring things out"
      ],
      fr: [
        "Travailleur",
        "Motivé mais irrégulier",
        "Capable mais distrait",
        "Occupé mais insatisfait",
        "Avec du potentiel",
        "Encore en train de chercher"
      ]
    },
    response: {
      en: "Different descriptions but the same outcome.",
      fr: "Des descriptions différentes mais le même résultat."
    }
  },
  {
    id: "q-021",
    type: "assertion",
    text: {
      en: "What do you usually blame when things don’t work?",
      fr: "Qu’est-ce que tu blâmes quand ça ne marche pas ?"
    },
    assertions: {
      en: [
        "Lack of time",
        "Other people",
        "Bad timing",
        "The system",
        "My situation"
      ],
      fr: [
        "Le manque de temps",
        "Les autres",
        "Le mauvais timing",
        "Le système",
        "Ma situation"
      ]
    },
    response: {
      en: "Well, I must say, you didn't exactly choose yourself ?",
      fr: "Eh bah dit donc, tu ne t’es pas choisi toi même !"
    }
  },
  {
    id: "q-022",
    type: "text",
    text: {
      en: "Which habit do you keep saying you want to change?",
      fr: "Quelle habitude dis-tu vouloir changer depuis trop longtemps ?"
    },
    response: {
      en: "Saying it won’t change it. Just so you know.",
      fr: "Le dire ne changera rien. Juste pour que tu saches."
    }
  },
  {
    id: "q-023",
    type: "assertion",
    text: {
      en: "How disciplined are you when no one is watching?",
      fr: "À quel point es-tu discipliné quand personne ne te regarde ?"
    },
    assertions: {
      en: [
        "I do what needs to be done, even alone",
        "I try, but without pressure I slow down",
        "I procrastinate when no one is watching",
        "I need structure to move forward"
      ],
      fr: [
        "Je fais ce que je dois faire, même seul.",
        "J'essaie, mais sans pression je ralentis.",
        "Je procrastine quand personne ne surveille.",
        "J'ai besoin d'un cadre pour avancer."
      ]
    },
    response: {
      en: "That’s exactly what I thought.",
      fr: "C’est bien ce que je pensais."
    }
  },
  {
    id: "q-024",
    type: "assertion",
    text: {
      en: "What do you tell yourself to feel better?",
      fr: "Qu’est-ce que tu te dis pour te rassurer ?"
    },
    assertions: {
      en: [
        "I’m doing my best",
        "It’ll get better",
        "Others have it worse",
        "I still have time",
        "It’s not that serious"
      ],
      fr: [
        "Je fais de mon mieux",
        "Ça ira mieux",
        "D’autres sont plus mal",
        "J’ai encore le temps",
        "Ce n’est pas si grave"
      ]
    },
    response: {
      en: "What people say in their comfort zone.",
      fr: "Ce que disent les gens dans leur zone de confort."
    }
  },
  {
    id: "q-025",
    type: "text",
    text: {
      en: "What would improve your life if you did it every day?",
      fr: "Qu’est-ce qui améliorerait ta vie si tu le faisais tous les jours ?"
    },
    response: {
      en: "You just described something you won’t apply.",
      fr: "Tu viens de décrire quelque chose que tu n’appliqueras pas."
    }
  },
  {
    id: "q-026",
    type: "text",
    text: {
      en: "What are you still waiting for before taking action?",
      fr: "Qu’attends-tu encore avant de passer à l’action ?"
    },
    response: {
      en: "Same with a official permission. You’ll still wait.",
      fr: "Même avec une autorisation officielle, tu attendras quand même."
    }
  },
  {
    id: "q-027",
    type: "assertion",
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
    }
  },
  {
    id: "q-028",
    type: "text",
    text: {
      en: "Which part of your potential are you deliberately ignoring?",
      fr: "Quelle partie de ton potentiel ignores-tu volontairement ?"
    },
    response: {
      en: "You should keep ignoring it. It prevents you from failing by trying.",
      fr: "Tu ferais mieux de continuer à l’ignorer. Ça t’évite d’échouer en essayant."
    }
  },
  {
    id: "q-029",
    type: "text",
    text: {
      en: "If nothing changes, where will you be in one year?",
      fr: "Si rien ne change, où seras-tu dans un an ?"
    },
    response: {
      en: "You will sadly be in the same place. It's crazy ! ",
      fr: "Tu seras tristement au même endroit. C'est fou !"
    }
  },
  {
    id: "q-030",
    type: "text",
    text: {
      en: "What are you pretending not to see in your life?",
      fr: "Qu’est-ce que tu fais semblant de ne pas voir dans ta vie ?"
    },
    response: {
      en: "You see it. You just prefer excuses.",
      fr: "Tu le vois très bien. Tu préfères juste les excuses."
    }
  },
  {
    id: "q-031",
    type: "text",
    text: {
      en: "What would change if you were actually serious?",
      fr: "Qu’est-ce qui changerait si tu étais vraiment sérieux ?"
    },
    response: {
      en: "You’ll never know. You don’t try.",
      fr: "Tu ne le sauras jamais. Tu n’essaies pas."
    }
  },
  {
    id: "q-032",
    type: "text",
    text: {
      en: "What do you talk about instead of doing?",
      fr: "De quoi parles-tu au lieu d’agir ?"
    },
    response: {
      en: "Plans. Dreams. Noise.",
      fr: "Des plans. Des rêves. Du bruit."
    }
  },
  {
    id: "q-033",
    type: "text",
    text: {
      en: "What do you avoid committing to?",
      fr: "À quoi refuses-tu de t’engager ?"
    },
    response: {
      en: "Anything that exposes your limits.",
      fr: "Tout ce qui révèle tes limites."
    }
  },
  {
    id: "q-034",
    type: "text",
    text: {
      en: "What are you afraid to measure?",
      fr: "Qu’as-tu peur de mesurer ?"
    },
    response: {
      en: "The actual measure.",
      fr: "La mesure réelle."
    }
  },
  {
    id: "q-035",
    type: "text",
    text: {
      en: "What keeps you at an average level ?",
      fr: "Qu’est-ce qui te maintient à niveau moyen ?"
    },
    response: {
      en: "This comfort. You chose it.",
      fr: "Ce confort. Tu l’as toi même choisi."
    }
  },
  {
    id: "q-036",
    type: "text",
    text: {
      en: "What are you waiting for to take the plunge ?",
      fr: "Qu’est-ce que tu attends pour te lancer ?"
    },
    response: {
      en: "Life won’t wait for you, but you keep waiting anyway... Good.",
      fr: "La vie ne t’attend pas, mais toi tu continues d’attendre... Très bien."
    }
  },
  {
    id: "q-037",
    type: "text",
    text: {
      en: "What would hurt your ego the most?",
      fr: "Qu’est-ce qui ferait le plus mal à ton ego ?"
    },
    response: {
      en: "Admitting you’re average by choice.",
      fr: "Admettre que tu es moyen par choix."
    }
  },
  {
    id: "q-038",
    type: "text",
    text: {
      en: "What do you complain about the most?",
      fr: "De quoi te plains-tu le plus ?"
    },
    response: {
      en: "The results of your own inaction.",
      fr: "Des résultats de ton inaction."
    }
  },
  {
    id: "q-039",
    type: "text",
    text: {
      en: "What are you supposed to be doing right now?",
      fr: "Qu’est-ce que tu es censé faire là, normalement ?"
    },
    response: {
      en: "If it was important, you wouldn’t be here answering this.",
      fr: "Si c’était important, tu ne serais pas ici à répondre à ça."
    }
  },
  {
    id: "q-040",
    type: "text",
    text: {
      en: "Describe what you think counts as learning.",
      fr: "Décris ce que tu considères comme apprendre."
    },
    response: {
      en: "I see... That’s exactly why nothing changes.",
      fr: "Je vois... C’est exactement pour ça que rien ne change."
    }
  },
]


};