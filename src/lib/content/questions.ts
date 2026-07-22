import type { Tier } from "../profiles";

export type LocalizedText = { fr: string; en: string };

export type Question = {
  id: string;
  tier: Tier;
  prompt: LocalizedText;
  options: LocalizedText[];
  correctIndex: number;
  explanation: LocalizedText;
};

export const QUESTIONS: Question[] = [
  // Explorateur - 6 ans
  {
    id: "expl-1",
    tier: "explorateur",
    prompt: {
      fr: "À quoi sert l'argent ?",
      en: "What is money for?",
    },
    options: [
      { fr: "À échanger contre des choses dont on a besoin ou envie", en: "To trade for things we need or want" },
      { fr: "À jouer uniquement", en: "Only for playing" },
      { fr: "À rien du tout", en: "Nothing at all" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "L'argent permet d'échanger contre de la nourriture, des vêtements ou des jouets, au lieu de troquer des objets.",
      en: "Money lets us trade for food, clothes, or toys instead of swapping objects directly.",
    },
  },
  {
    id: "expl-2",
    tier: "explorateur",
    prompt: {
      fr: "Où est-ce le mieux de garder les pièces que tu veux économiser ?",
      en: "Where is the best place to keep coins you want to save?",
    },
    options: [
      { fr: "Dans ta tirelire", en: "In your piggy bank" },
      { fr: "Dans ta poche trouée", en: "In your torn pocket" },
      { fr: "Par terre dans la rue", en: "On the ground outside" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Une tirelire garde ton argent en sécurité jusqu'à ce que tu en aies besoin.",
      en: "A piggy bank keeps your money safe until you need it.",
    },
  },
  {
    id: "expl-3",
    tier: "explorateur",
    prompt: {
      fr: "Tu veux un jouet mais tu n'as pas assez d'argent. Que fais-tu ?",
      en: "You want a toy but don't have enough money. What do you do?",
    },
    options: [
      { fr: "Tu économises un peu chaque semaine", en: "You save a little each week" },
      { fr: "Tu le prends sans payer", en: "You take it without paying" },
      { fr: "Tu pleures et tu abandonnes", en: "You cry and give up" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Mettre un peu d'argent de côté chaque semaine permet d'atteindre son objectif petit à petit.",
      en: "Putting a little money aside each week helps you reach your goal bit by bit.",
    },
  },
  {
    id: "expl-4",
    tier: "explorateur",
    prompt: {
      fr: "Lequel de ces exemples est un besoin (et pas juste une envie) ?",
      en: "Which of these is a need (not just a want)?",
    },
    options: [
      { fr: "Manger un repas", en: "Eating a meal" },
      { fr: "Un nouveau jouet", en: "A new toy" },
      { fr: "Un bonbon supplémentaire", en: "An extra candy" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Manger est un besoin : c'est nécessaire pour vivre. Un jouet ou un bonbon en plus, c'est une envie.",
      en: "Eating is a need: it is necessary to live. A toy or extra candy is a want.",
    },
  },
  {
    id: "expl-5",
    tier: "explorateur",
    prompt: {
      fr: "D'où vient l'argent que tes parents dépensent pour la famille ?",
      en: "Where does the money your parents spend on the family come from?",
    },
    options: [
      { fr: "Ils travaillent pour le gagner", en: "They work to earn it" },
      { fr: "Il pousse sur les arbres", en: "It grows on trees" },
      { fr: "Il apparaît par magie", en: "It appears by magic" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "L'argent s'obtient en travaillant : c'est pour ça qu'il faut faire attention à bien l'utiliser.",
      en: "Money is earned by working, which is why it is important to use it wisely.",
    },
  },
  {
    id: "expl-6",
    tier: "explorateur",
    prompt: {
      fr: "Si tu casses ta tirelire tous les jours pour acheter des bonbons, que se passe-t-il ?",
      en: "If you break your piggy bank every day to buy candy, what happens?",
    },
    options: [
      { fr: "Tu n'arrives jamais à économiser pour un gros cadeau", en: "You never manage to save for a big gift" },
      { fr: "Ta tirelire devient magique", en: "Your piggy bank becomes magic" },
      { fr: "Rien ne change", en: "Nothing changes" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Dépenser tout, tout de suite, empêche d'économiser pour quelque chose de plus grand plus tard.",
      en: "Spending everything right away stops you from saving for something bigger later.",
    },
  },
  {
    id: "expl-7",
    tier: "explorateur",
    prompt: {
      fr: "Pourquoi c'est une bonne idée d'attendre un peu avant d'acheter un nouveau jouet ?",
      en: "Why is it a good idea to wait a bit before buying a new toy?",
    },
    options: [
      { fr: "Pour être sûr d'en avoir vraiment envie", en: "To be sure you really want it" },
      { fr: "Parce que les jouets deviennent gratuits en attendant", en: "Because toys become free if you wait" },
      { fr: "Il n'y a aucune raison", en: "There is no reason" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Attendre permet de vérifier si l'envie dure, au lieu d'acheter sur un coup de tête puis de regretter.",
      en: "Waiting helps check if the want lasts, instead of buying on impulse and regretting it.",
    },
  },
  {
    id: "expl-8",
    tier: "explorateur",
    prompt: {
      fr: "Pourquoi c'est utile de compter combien d'argent tu as ?",
      en: "Why is it useful to count how much money you have?",
    },
    options: [
      { fr: "Pour savoir ce que tu peux t'offrir", en: "To know what you can afford" },
      { fr: "Pour impressionner tes amis", en: "To impress your friends" },
      { fr: "Ce n'est pas utile", en: "It is not useful" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Savoir combien on a permet de faire de bons choix avant d'acheter quelque chose.",
      en: "Knowing how much you have helps you make good choices before buying something.",
    },
  },
  {
    id: "expl-9",
    tier: "explorateur",
    prompt: {
      fr: "Quelle est la différence entre une pièce et un billet ?",
      en: "What is the difference between a coin and a banknote?",
    },
    options: [
      { fr: "Un billet vaut souvent plus qu'une pièce", en: "A banknote is often worth more than a coin" },
      { fr: "Il n'y a aucune différence", en: "There is no difference" },
      { fr: "Une pièce vaut toujours plus qu'un billet", en: "A coin is always worth more than a banknote" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Les pièces et les billets ont des valeurs différentes : il faut regarder le nombre écrit dessus.",
      en: "Coins and banknotes have different values: you need to look at the number printed on them.",
    },
  },
  {
    id: "expl-10",
    tier: "explorateur",
    prompt: {
      fr: "Dans un magasin, comment obtient-on un jouet ?",
      en: "In a shop, how do you get a toy?",
    },
    options: [
      { fr: "En l'échangeant contre de l'argent à la caisse", en: "By trading it for money at the checkout" },
      { fr: "En le prenant sans rien donner", en: "By taking it without giving anything" },
      { fr: "En le demandant très fort", en: "By asking for it very loudly" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Dans un magasin, on donne de l'argent à la caisse pour avoir le droit de garder ce qu'on a choisi.",
      en: "In a shop, you give money at the checkout to be allowed to keep what you picked.",
    },
  },
  {
    id: "expl-11",
    tier: "explorateur",
    prompt: {
      fr: "Tu as un peu d'argent de poche. Un copain te demande de lui en donner un peu. Que peux-tu faire ?",
      en: "You have some pocket money. A friend asks you to share a bit. What can you do?",
    },
    options: [
      { fr: "Partager une petite partie si tu le souhaites, sans tout donner", en: "Share a small part if you want to, without giving it all away" },
      { fr: "Lui donner absolument tout", en: "Give away absolutely all of it" },
      { fr: "Ne jamais rien partager avec personne", en: "Never share anything with anyone" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Partager un peu peut faire plaisir, mais il faut garder assez pour toi et tes propres projets.",
      en: "Sharing a little can feel good, but you should keep enough for yourself and your own plans.",
    },
  },
  {
    id: "expl-12",
    tier: "explorateur",
    prompt: {
      fr: "Tu trouves des pièces par terre dans la rue. Que fais-tu ?",
      en: "You find some coins on the ground in the street. What do you do?",
    },
    options: [
      { fr: "Tu le dis à un adulte de confiance", en: "You tell a trusted adult" },
      { fr: "Tu les gardes sans rien dire à personne", en: "You keep them without telling anyone" },
      { fr: "Tu les laisses tomber encore plus loin", en: "You drop them even further away" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Prévenir un adulte permet de savoir quoi faire, par exemple si quelqu'un cherche cet argent perdu.",
      en: "Telling an adult helps figure out what to do, for example if someone is looking for that lost money.",
    },
  },
  {
    id: "expl-13",
    tier: "explorateur",
    prompt: {
      fr: "Ta carte bancaire des parents, ça veut dire quoi ?",
      en: "What does your parents' bank card mean?",
    },
    options: [
      { fr: "C'est un moyen de payer avec de l'argent qui appartient aux parents", en: "It's a way to pay with money that belongs to the parents" },
      { fr: "C'est un jouet gratuit", en: "It's a free toy" },
      { fr: "Elle donne de l'argent illimité et gratuit", en: "It gives unlimited free money" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "La carte bancaire n'est pas magique : elle sert à payer avec de l'argent que les parents ont vraiment.",
      en: "A bank card is not magic: it pays using money the parents actually have.",
    },
  },
  {
    id: "expl-14",
    tier: "explorateur",
    prompt: {
      fr: "Pourquoi il ne faut jamais donner son argent à un inconnu qui le demande ?",
      en: "Why should you never give your money to a stranger who asks for it?",
    },
    options: [
      { fr: "Parce que ce n'est pas prudent et il faut en parler à un adulte de confiance", en: "Because it isn't safe, and you should talk to a trusted adult about it" },
      { fr: "Parce que c'est toujours obligatoire de refuser sans réfléchir", en: "Because you must always refuse without thinking" },
      { fr: "Ce n'est jamais un problème", en: "It is never a problem" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Face à une situation surprenante avec de l'argent, le bon réflexe est toujours d'en parler à un adulte de confiance.",
      en: "In a surprising situation involving money, the right move is always to talk to a trusted adult.",
    },
  },
  {
    id: "expl-15",
    tier: "explorateur",
    prompt: {
      fr: "Entre un petit jouet pas cher et un gros jouet très cher, comment sait-on lequel coûte le plus ?",
      en: "Between a small cheap toy and a big expensive toy, how do you know which costs more?",
    },
    options: [
      { fr: "En regardant le prix écrit sur l'étiquette", en: "By looking at the price written on the label" },
      { fr: "En regardant juste la couleur du jouet", en: "By just looking at the toy's color" },
      { fr: "Le prix ne se voit jamais nulle part", en: "The price is never visible anywhere" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Le prix est toujours indiqué sur une étiquette : c'est ce qui permet de comparer combien coûtent les choses.",
      en: "The price is always shown on a label: that's how you can compare how much things cost.",
    },
  },
  {
    id: "expl-16",
    tier: "explorateur",
    prompt: {
      fr: "Pourquoi c'est amusant de regarder sa tirelire grossir petit à petit ?",
      en: "Why is it fun to watch your piggy bank grow little by little?",
    },
    options: [
      { fr: "Ça montre que tes efforts d'épargne portent leurs fruits", en: "It shows your saving efforts are paying off" },
      { fr: "Ça ne montre rien du tout", en: "It shows nothing at all" },
      { fr: "La tirelire grossit toute seule sans rien faire", en: "The piggy bank grows on its own without doing anything" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Voir sa tirelire grossir, c'est la preuve concrète que chaque petite économie compte.",
      en: "Watching your piggy bank grow is real proof that every small bit of saving counts.",
    },
  },

  // Aventurier - 8 ans
  {
    id: "aven-1",
    tier: "aventurier",
    prompt: {
      fr: "Tu as 10 SouSous et tu veux un jeu à 30 SouSous. Quelle est la meilleure stratégie ?",
      en: "You have 10 SouSous and want a game costing 30 SouSous. What is the best strategy?",
    },
    options: [
      { fr: "Mettre de côté chaque semaine jusqu'à avoir assez", en: "Save some each week until you have enough" },
      { fr: "L'emprunter à un ami et ne jamais le rendre", en: "Borrow it from a friend and never pay it back" },
      { fr: "Abandonner tout de suite", en: "Give up right away" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Économiser petit à petit permet d'atteindre un objectif plus cher sans rien devoir à personne.",
      en: "Saving bit by bit lets you reach a more expensive goal without owing anyone anything.",
    },
  },
  {
    id: "aven-2",
    tier: "aventurier",
    prompt: {
      fr: "Lequel est vraiment un besoin en hiver ?",
      en: "Which one is really a need in winter?",
    },
    options: [
      { fr: "Un manteau chaud", en: "A warm coat" },
      { fr: "Le dernier jeu vidéo à la mode", en: "The latest trendy video game" },
      { fr: "Une troisième paire de baskets", en: "A third pair of sneakers" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Se protéger du froid est un besoin. Un jeu vidéo ou une paire de baskets en plus, c'est une envie.",
      en: "Staying warm is a need. An extra video game or sneakers is a want.",
    },
  },
  {
    id: "aven-3",
    tier: "aventurier",
    prompt: {
      fr: "Le même jouet coûte 20 SouSous dans un magasin et 15 SouSous dans un autre. Que fais-tu ?",
      en: "The same toy costs 20 SouSous in one shop and 15 in another. What do you do?",
    },
    options: [
      { fr: "Tu compares les prix et tu choisis le moins cher", en: "You compare prices and choose the cheaper one" },
      { fr: "Tu achètes toujours dans le premier magasin", en: "You always buy from the first shop" },
      { fr: "Le prix n'a pas d'importance", en: "Price does not matter" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Comparer les prix permet d'économiser de l'argent pour d'autres choses.",
      en: "Comparing prices helps you save money for other things.",
    },
  },
  {
    id: "aven-4",
    tier: "aventurier",
    prompt: {
      fr: "Qu'est-ce qu'un budget simple, pour de l'argent de poche ?",
      en: "What is a simple budget for pocket money?",
    },
    options: [
      { fr: "Répartir l'argent entre épargner, dépenser et partager", en: "Splitting money between saving, spending, and sharing" },
      { fr: "Tout dépenser le premier jour", en: "Spending it all on the first day" },
      { fr: "Ne jamais savoir combien on a", en: "Never knowing how much you have" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Répartir son argent en plusieurs parts (épargne, dépenses, partage) aide à mieux l'utiliser.",
      en: "Splitting money into parts (saving, spending, sharing) helps you use it better.",
    },
  },
  {
    id: "aven-5",
    tier: "aventurier",
    prompt: {
      fr: "Pourquoi éviter d'acheter quelque chose sur un coup de tête ?",
      en: "Why avoid buying something on a whim?",
    },
    options: [
      { fr: "Parce qu'on peut le regretter et manquer d'argent après", en: "Because you might regret it and run out of money after" },
      { fr: "Parce que c'est interdit par la loi", en: "Because it's against the law" },
      { fr: "Ce n'est jamais un problème", en: "It is never a problem" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Un achat impulsif peut sembler bien sur le moment, mais laisser moins d'argent pour ce qui compte vraiment.",
      en: "An impulse buy can feel good in the moment but leaves less money for what really matters.",
    },
  },
  {
    id: "aven-6",
    tier: "aventurier",
    prompt: {
      fr: "Que signifie 'faire des économies' ?",
      en: "What does 'saving up' mean?",
    },
    options: [
      { fr: "Garder une partie de son argent au lieu de tout dépenser", en: "Keeping part of your money instead of spending it all" },
      { fr: "Dépenser plus que ce qu'on a", en: "Spending more than you have" },
      { fr: "Perdre son argent de poche", en: "Losing your pocket money" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Faire des économies, c'est mettre de côté régulièrement pour un objectif futur.",
      en: "Saving up means regularly setting money aside for a future goal.",
    },
  },
  {
    id: "aven-7",
    tier: "aventurier",
    prompt: {
      fr: "Tu prêtes 5 SouSous à un copain. Que doit-il normalement faire ?",
      en: "You lend 5 SouSous to a friend. What should they normally do?",
    },
    options: [
      { fr: "Te les rendre comme promis", en: "Pay you back as promised" },
      { fr: "Les garder pour toujours sans rien dire", en: "Keep it forever without saying anything" },
      { fr: "Te demander encore plus d'argent", en: "Ask you for even more money" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Prêter de l'argent, c'est une confiance : l'emprunteur doit le rendre comme convenu.",
      en: "Lending money is based on trust: the borrower should pay it back as agreed.",
    },
  },
  {
    id: "aven-8",
    tier: "aventurier",
    prompt: {
      fr: "Pourquoi économiser un peu chaque semaine plutôt que tout dépenser d'un coup ?",
      en: "Why save a little each week instead of spending it all at once?",
    },
    options: [
      { fr: "Pour pouvoir s'offrir quelque chose de plus grand plus tard", en: "So you can afford something bigger later" },
      { fr: "Parce que l'argent s'use si on le garde", en: "Because money wears out if you keep it" },
      { fr: "Ça n'a aucun intérêt", en: "There is no benefit" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Les petites sommes économisées régulièrement s'additionnent pour réaliser un projet plus grand.",
      en: "Small amounts saved regularly add up to reach a bigger goal.",
    },
  },
  {
    id: "aven-9",
    tier: "aventurier",
    prompt: {
      fr: "Avant d'aller faire des courses, à quoi sert une liste ?",
      en: "Before going shopping, what is a list for?",
    },
    options: [
      { fr: "À n'acheter que ce dont on a vraiment besoin", en: "To only buy what you really need" },
      { fr: "À acheter le plus de choses possible", en: "To buy as many things as possible" },
      { fr: "Elle ne sert à rien", en: "It's completely useless" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Une liste de courses évite les achats imprévus et aide à respecter son budget.",
      en: "A shopping list avoids unplanned purchases and helps you stick to your budget.",
    },
  },
  {
    id: "aven-10",
    tier: "aventurier",
    prompt: {
      fr: "Quelle est la différence entre un cadeau et de l'argent gagné en aidant à la maison ?",
      en: "What is the difference between a gift and money earned by helping at home?",
    },
    options: [
      { fr: "L'argent gagné est une récompense pour un effort fourni", en: "Earned money is a reward for effort you put in" },
      { fr: "Il n'y a aucune différence", en: "There is no difference" },
      { fr: "Un cadeau demande toujours plus d'efforts", en: "A gift always requires more effort" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Un cadeau est offert librement, alors que l'argent gagné recompense un service rendu ou une tâche accomplie.",
      en: "A gift is given freely, while earned money rewards a favor done or a task completed.",
    },
  },
  {
    id: "aven-11",
    tier: "aventurier",
    prompt: {
      fr: "Un jouet d'occasion en bon état coûte moins cher qu'un jouet neuf. Que peux-tu en penser ?",
      en: "A used toy in good condition costs less than a new one. What can you think about that?",
    },
    options: [
      { fr: "Ça peut être un bon moyen d'économiser de l'argent", en: "It can be a good way to save money" },
      { fr: "Un jouet d'occasion ne fonctionne jamais", en: "A used toy never works" },
      { fr: "C'est toujours interdit d'acheter d'occasion", en: "Buying used is always forbidden" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Acheter d'occasion quand c'est en bon état permet souvent de payer moins cher pour la même chose.",
      en: "Buying used items in good condition often means paying less for the same thing.",
    },
  },
  {
    id: "aven-12",
    tier: "aventurier",
    prompt: {
      fr: "Tu reçois une carte cadeau de 20 SouSous. Comment bien l'utiliser ?",
      en: "You receive a 20 SouSous gift card. How should you use it well?",
    },
    options: [
      { fr: "Réfléchir à ce que tu veux vraiment avant de la dépenser", en: "Think about what you really want before spending it" },
      { fr: "La dépenser sur le premier objet vu sans réfléchir", en: "Spend it on the first item you see without thinking" },
      { fr: "La jeter car elle ne sert à rien", en: "Throw it away because it's useless" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Comme pour de l'argent normal, mieux vaut réfléchir avant de dépenser une carte cadeau.",
      en: "Just like with regular money, it's best to think before spending a gift card.",
    },
  },
  {
    id: "aven-13",
    tier: "aventurier",
    prompt: {
      fr: "Pourquoi ne pas dépenser tout son argent de poche le jour même où on le reçoit ?",
      en: "Why not spend all your pocket money the very day you receive it?",
    },
    options: [
      { fr: "Pour garder de quoi faire face à une envie plus tard dans le mois", en: "To keep enough for something you want later in the month" },
      { fr: "Parce que l'argent devient invalide au bout d'un jour", en: "Because money becomes invalid after one day" },
      { fr: "Il n'y a aucune bonne raison", en: "There is no good reason" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Étaler ses dépenses dans le temps évite de se retrouver sans rien pour le reste du mois.",
      en: "Spreading spending over time avoids being left with nothing for the rest of the month.",
    },
  },
  {
    id: "aven-14",
    tier: "aventurier",
    prompt: {
      fr: "Qu'est-ce qu'un compte épargne pour enfant, à la banque ?",
      en: "What is a children's savings account at the bank?",
    },
    options: [
      { fr: "Un endroit sûr où l'argent économisé est gardé et peut grossir un peu", en: "A safe place where saved money is kept and can grow a little" },
      { fr: "Un jeu vidéo gratuit", en: "A free video game" },
      { fr: "Un endroit où l'argent disparaît", en: "A place where money disappears" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Un compte épargne garde l'argent en sécurité à la banque, et peut même y ajouter un petit intérêt.",
      en: "A savings account keeps money safe at the bank, and can even add a bit of interest to it.",
    },
  },
  {
    id: "aven-15",
    tier: "aventurier",
    prompt: {
      fr: "Un copain te demande souvent de lui prêter de l'argent. Que peux-tu faire ?",
      en: "A friend often asks to borrow money from you. What can you do?",
    },
    options: [
      { fr: "Lui expliquer gentiment tes propres limites", en: "Kindly explain your own limits to them" },
      { fr: "Lui prêter à chaque fois sans jamais y penser", en: "Lend to them every time without ever thinking about it" },
      { fr: "Te fâcher immédiatement sans explication", en: "Get immediately angry without explanation" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Il est normal de fixer ses propres limites, même avec un ami, pour protéger ses propres économies.",
      en: "It's normal to set your own limits, even with a friend, to protect your own savings.",
    },
  },
  {
    id: "aven-16",
    tier: "aventurier",
    prompt: {
      fr: "Avant un achat en ligne avec l'aide d'un parent, que faut-il vérifier ?",
      en: "Before an online purchase with a parent's help, what should you check?",
    },
    options: [
      { fr: "Que le prix et le produit correspondent bien à ce que tu veux", en: "That the price and the product really match what you want" },
      { fr: "Rien du tout, on clique toujours vite", en: "Nothing at all, you should always click quickly" },
      { fr: "Uniquement la couleur du bouton d'achat", en: "Only the color of the buy button" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Vérifier avant de valider un achat en ligne évite les erreurs et les mauvaises surprises.",
      en: "Checking before confirming an online purchase avoids mistakes and bad surprises.",
    },
  },

  // Strategiste - 11 ans
  {
    id: "strat-1",
    tier: "strategiste",
    prompt: {
      fr: "Quelle est la différence entre un revenu et une dépense ?",
      en: "What is the difference between income and an expense?",
    },
    options: [
      { fr: "Le revenu est de l'argent qui arrive, la dépense est de l'argent qui part", en: "Income is money coming in, an expense is money going out" },
      { fr: "Il n'y a aucune différence", en: "There is no difference" },
      { fr: "Le revenu est toujours plus petit que la dépense", en: "Income is always smaller than the expense" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Un revenu (argent de poche, cadeau) fait grossir ta tirelire ; une dépense la fait diminuer.",
      en: "Income (pocket money, gifts) grows your piggy bank; an expense shrinks it.",
    },
  },
  {
    id: "strat-2",
    tier: "strategiste",
    prompt: {
      fr: "Quand on garde de l'argent longtemps à la banque, elle peut parfois donner un petit intérêt en plus. Ça veut dire quoi ?",
      en: "When money stays in a bank a long time, the bank sometimes adds a bit of interest. What does that mean?",
    },
    options: [
      { fr: "La banque ajoute un peu d'argent en récompense de l'épargne", en: "The bank adds a bit of extra money as a reward for saving" },
      { fr: "La banque retire de l'argent chaque année", en: "The bank removes money every year" },
      { fr: "Rien ne se passe jamais", en: "Nothing ever happens" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "L'intérêt est une petite somme en plus que la banque donne pour récompenser une épargne de longue durée.",
      en: "Interest is a small extra amount the bank gives to reward long-term saving.",
    },
  },
  {
    id: "strat-3",
    tier: "strategiste",
    prompt: {
      fr: "Qu'est-ce qu'un budget mensuel simple ?",
      en: "What is a simple monthly budget?",
    },
    options: [
      { fr: "Comparer ce qui rentre et ce qui sort pour savoir combien on peut épargner", en: "Comparing what comes in and goes out to know how much you can save" },
      { fr: "Dépenser sans jamais compter", en: "Spending without ever counting" },
      { fr: "Un jeu sans rapport avec l'argent", en: "A game unrelated to money" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Un budget compare revenus et dépenses sur un mois pour dégager ce qu'on peut mettre de côté.",
      en: "A budget compares income and expenses over a month to see what can be set aside.",
    },
  },
  {
    id: "strat-4",
    tier: "strategiste",
    prompt: {
      fr: "Avant d'acheter un objet cher, quelle est la meilleure habitude ?",
      en: "Before buying an expensive item, what is the best habit?",
    },
    options: [
      { fr: "Comparer les prix et réfléchir si c'est vraiment utile", en: "Compare prices and think about whether it's really useful" },
      { fr: "Acheter le premier objet vu", en: "Buy the first item you see" },
      { fr: "Ne jamais réfléchir avant d'acheter", en: "Never think before buying" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Comparer et réfléchir évite les dépenses inutiles et les regrets.",
      en: "Comparing and thinking things through avoids wasted spending and regrets.",
    },
  },
  {
    id: "strat-5",
    tier: "strategiste",
    prompt: {
      fr: "Qu'est-ce qu'emprunter de l'argent implique ?",
      en: "What does borrowing money involve?",
    },
    options: [
      { fr: "Il faut le rendre, parfois avec un peu plus en plus", en: "You must pay it back, sometimes with a bit extra" },
      { fr: "On peut le garder pour toujours", en: "You can keep it forever" },
      { fr: "Ça ne concerne jamais personne", en: "It never involves anyone" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Emprunter, c'est recevoir de l'argent qu'il faudra rembourser, parfois avec des intérêts en plus.",
      en: "Borrowing means receiving money that must be repaid, sometimes with extra interest.",
    },
  },
  {
    id: "strat-6",
    tier: "strategiste",
    prompt: {
      fr: "Tu as 20 SouSous. Tu dois acheter des fournitures scolaires (15 SouSous) et tu veux un jeu (20 SouSous). Que fais-tu en priorité ?",
      en: "You have 20 SouSous. You need school supplies (15) and want a game (20). What should you prioritize?",
    },
    options: [
      { fr: "Acheter d'abord les fournitures, le besoin avant l'envie", en: "Buy the supplies first, the need before the want" },
      { fr: "Acheter le jeu et oublier les fournitures", en: "Buy the game and forget the supplies" },
      { fr: "Ne rien acheter du tout", en: "Buy nothing at all" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Les besoins essentiels passent avant les envies, même quand l'envie est tentante.",
      en: "Essential needs come before wants, even when the want is tempting.",
    },
  },
  {
    id: "strat-7",
    tier: "strategiste",
    prompt: {
      fr: "Pourquoi se fixer un objectif d'épargne à long terme (comme un vélo) est utile ?",
      en: "Why is setting a long-term savings goal (like a bike) useful?",
    },
    options: [
      { fr: "Ça aide à économiser régulièrement au lieu de tout dépenser tout de suite", en: "It helps you save regularly instead of spending everything right away" },
      { fr: "Ça n'a aucun effet", en: "It has no effect" },
      { fr: "Ça oblige à emprunter de l'argent", en: "It forces you to borrow money" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Avoir un objectif clair motive à mettre de l'argent de côté chaque semaine ou chaque mois.",
      en: "Having a clear goal motivates you to set money aside every week or month.",
    },
  },
  {
    id: "strat-8",
    tier: "strategiste",
    prompt: {
      fr: "Pourquoi garder un peu d'argent de côté pour les imprévus ?",
      en: "Why keep a bit of money aside for unexpected surprises?",
    },
    options: [
      { fr: "Parce qu'une dépense surprise peut arriver à tout moment", en: "Because a surprise expense can happen at any time" },
      { fr: "Les imprévus n'existent pas", en: "Surprises never happen" },
      { fr: "Il faut toujours tout dépenser d'avance", en: "You should always spend everything in advance" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Garder une petite réserve permet de faire face à une dépense inattendue sans stress.",
      en: "Keeping a small reserve lets you handle an unexpected expense without stress.",
    },
  },
  {
    id: "strat-9",
    tier: "strategiste",
    prompt: {
      fr: "Qu'est-ce qu'un abonnement (comme un service en ligne payé chaque mois) ?",
      en: "What is a subscription (like an online service paid monthly)?",
    },
    options: [
      { fr: "Une dépense qui revient régulièrement, même si on ne l'utilise plus beaucoup", en: "An expense that comes back regularly, even if you stop using it much" },
      { fr: "Un cadeau offert une seule fois", en: "A gift given only once" },
      { fr: "Une dépense qui n'existe qu'une seule fois", en: "An expense that only happens once" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Un abonnement coûte de l'argent chaque mois, même sans y penser : c'est important de vérifier qu'on l'utilise vraiment.",
      en: "A subscription costs money every month, even without thinking about it: it's important to check you're really using it.",
    },
  },
  {
    id: "strat-10",
    tier: "strategiste",
    prompt: {
      fr: "Quelle est la différence entre épargner à court terme et à long terme ?",
      en: "What is the difference between short-term and long-term saving?",
    },
    options: [
      { fr: "Le court terme vise un petit objectif proche, le long terme un objectif plus grand et plus lointain", en: "Short-term aims at a small nearby goal, long-term at a bigger, more distant one" },
      { fr: "Il n'y a aucune différence entre les deux", en: "There is no difference between the two" },
      { fr: "Le court terme dure toujours plus longtemps", en: "Short-term always lasts longer" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Épargner à court terme sert un petit projet proche (un jeu), épargner à long terme un projet plus grand (un vélo, un voyage).",
      en: "Short-term saving serves a small nearby project (a game), long-term saving a bigger one (a bike, a trip).",
    },
  },
  {
    id: "strat-11",
    tier: "strategiste",
    prompt: {
      fr: "Un emprunt avec un intérêt élevé, ça veut dire quoi concrètement ?",
      en: "A loan with high interest, what does that mean in practice?",
    },
    options: [
      { fr: "Il faudra rembourser bien plus que ce qu'on a emprunté au départ", en: "You will have to repay much more than what you originally borrowed" },
      { fr: "On rembourse toujours exactement la même somme", en: "You always repay exactly the same amount" },
      { fr: "L'emprunt devient gratuit avec le temps", en: "The loan becomes free over time" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Plus l'intérêt d'un emprunt est élevé, plus la somme totale à rembourser augmente : il faut y faire très attention.",
      en: "The higher a loan's interest, the more the total amount to repay grows: it's important to pay close attention.",
    },
  },
  {
    id: "strat-12",
    tier: "strategiste",
    prompt: {
      fr: "Pourquoi ne pas garder toutes ses économies au même endroit peut être une bonne idée ?",
      en: "Why can it be a good idea not to keep all your savings in one place?",
    },
    options: [
      { fr: "Ça réduit le risque de tout perdre en cas de problème", en: "It reduces the risk of losing everything if something goes wrong" },
      { fr: "Ça ne change absolument rien", en: "It changes absolutely nothing" },
      { fr: "Ça fait automatiquement gagner plus d'argent", en: "It automatically earns more money" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Répartir ses économies (par exemple une part en tirelire, une part à la banque) limite les conséquences d'un imprévu.",
      en: "Spreading savings (for example part in a piggy bank, part at the bank) limits the impact of a mishap.",
    },
  },
  {
    id: "strat-13",
    tier: "strategiste",
    prompt: {
      fr: "Une offre en ligne promet de multiplier ton argent très vite, sans risque. Que dois-tu penser ?",
      en: "An online offer promises to multiply your money very quickly, with no risk. What should you think?",
    },
    options: [
      { fr: "C'est probablement une arnaque, il faut être très prudent", en: "It's probably a scam, you need to be very careful" },
      { fr: "Il faut foncer immédiatement sans réfléchir", en: "You should jump on it immediately without thinking" },
      { fr: "C'est toujours totalement fiable", en: "It's always completely reliable" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Une promesse de gain rapide et sans risque est presque toujours un signal d'arnaque : mieux vaut en parler à un adulte de confiance.",
      en: "A promise of fast, risk-free gain is almost always a scam warning sign: it's best to talk to a trusted adult about it.",
    },
  },
  {
    id: "strat-14",
    tier: "strategiste",
    prompt: {
      fr: "Qu'est-ce qu'un salaire ?",
      en: "What is a salary?",
    },
    options: [
      { fr: "L'argent qu'une personne reçoit régulièrement en échange de son travail", en: "The money a person regularly receives in exchange for their work" },
      { fr: "Un cadeau offert au hasard", en: "A gift given at random" },
      { fr: "De l'argent qui n'a aucune origine", en: "Money with no origin at all" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Le salaire est le revenu régulier gagné en travaillant, qui sert ensuite à couvrir les dépenses de la famille.",
      en: "A salary is the regular income earned by working, which is then used to cover the family's expenses.",
    },
  },
  {
    id: "strat-15",
    tier: "strategiste",
    prompt: {
      fr: "Tu reçois un gros cadeau en argent pour ton anniversaire. Quelle est la meilleure première étape ?",
      en: "You receive a big money gift for your birthday. What is the best first step?",
    },
    options: [
      { fr: "Réfléchir à tes priorités avant de le dépenser d'un coup", en: "Think about your priorities before spending it all at once" },
      { fr: "Le dépenser immédiatement sur le premier objet vu", en: "Spend it immediately on the first item you see" },
      { fr: "Le jeter car il ne sert à rien", en: "Throw it away because it's useless" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Face à une grosse somme, prendre le temps de réfléchir à ses priorités évite les regrets et les dépenses inutiles.",
      en: "With a large sum, taking time to think about priorities avoids regrets and wasted spending.",
    },
  },
  {
    id: "strat-16",
    tier: "strategiste",
    prompt: {
      fr: "Pourquoi comparer plusieurs options avant un gros achat (vélo, console) est important ?",
      en: "Why is comparing several options important before a big purchase (bike, console)?",
    },
    options: [
      { fr: "Pour trouver le meilleur rapport qualité-prix", en: "To find the best value for money" },
      { fr: "Parce que le premier prix vu est toujours le meilleur", en: "Because the first price you see is always the best" },
      { fr: "Comparer ne sert jamais à rien", en: "Comparing is never useful" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Comparer plusieurs options permet souvent de payer moins cher pour une qualité équivalente, ou d'avoir mieux pour le même prix.",
      en: "Comparing several options often means paying less for similar quality, or getting more for the same price.",
    },
  },
];

export function getQuestionsForTier(tier: Tier): Question[] {
  return QUESTIONS.filter((question) => question.tier === tier);
}
