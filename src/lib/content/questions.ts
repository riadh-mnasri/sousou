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
      fr: "A quoi sert l'argent ?",
      en: "What is money for?",
    },
    options: [
      { fr: "A echanger contre des choses dont on a besoin ou envie", en: "To trade for things we need or want" },
      { fr: "A jouer uniquement", en: "Only for playing" },
      { fr: "A rien du tout", en: "Nothing at all" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "L'argent permet d'echanger contre de la nourriture, des vetements ou des jouets, au lieu de troquer des objets.",
      en: "Money lets us trade for food, clothes, or toys instead of swapping objects directly.",
    },
  },
  {
    id: "expl-2",
    tier: "explorateur",
    prompt: {
      fr: "Ou est-ce le mieux de garder les pieces que tu veux economiser ?",
      en: "Where is the best place to keep coins you want to save?",
    },
    options: [
      { fr: "Dans ta tirelire", en: "In your piggy bank" },
      { fr: "Dans ta poche trouee", en: "In your torn pocket" },
      { fr: "Par terre dans la rue", en: "On the ground outside" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Une tirelire garde ton argent en securite jusqu'a ce que tu en aies besoin.",
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
      { fr: "Tu economises un peu chaque semaine", en: "You save a little each week" },
      { fr: "Tu le prends sans payer", en: "You take it without paying" },
      { fr: "Tu pleures et tu abandonnes", en: "You cry and give up" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Mettre un peu d'argent de cote chaque semaine permet d'atteindre son objectif petit a petit.",
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
      { fr: "Un bonbon supplementaire", en: "An extra candy" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Manger est un besoin : c'est necessaire pour vivre. Un jouet ou un bonbon en plus, c'est une envie.",
      en: "Eating is a need: it is necessary to live. A toy or extra candy is a want.",
    },
  },
  {
    id: "expl-5",
    tier: "explorateur",
    prompt: {
      fr: "D'ou vient l'argent que tes parents depensent pour la famille ?",
      en: "Where does the money your parents spend on the family come from?",
    },
    options: [
      { fr: "Ils travaillent pour le gagner", en: "They work to earn it" },
      { fr: "Il pousse sur les arbres", en: "It grows on trees" },
      { fr: "Il apparait par magie", en: "It appears by magic" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "L'argent s'obtient en travaillant : c'est pour ca qu'il faut faire attention a bien l'utiliser.",
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
      { fr: "Tu n'arrives jamais a economiser pour un gros cadeau", en: "You never manage to save for a big gift" },
      { fr: "Ta tirelire devient magique", en: "Your piggy bank becomes magic" },
      { fr: "Rien ne change", en: "Nothing changes" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Depenser tout, tout de suite, empeche d'economiser pour quelque chose de plus grand plus tard.",
      en: "Spending everything right away stops you from saving for something bigger later.",
    },
  },
  {
    id: "expl-7",
    tier: "explorateur",
    prompt: {
      fr: "Pourquoi c'est une bonne idee d'attendre un peu avant d'acheter un nouveau jouet ?",
      en: "Why is it a good idea to wait a bit before buying a new toy?",
    },
    options: [
      { fr: "Pour etre sur d'en avoir vraiment envie", en: "To be sure you really want it" },
      { fr: "Parce que les jouets deviennent gratuits en attendant", en: "Because toys become free if you wait" },
      { fr: "Il n'y a aucune raison", en: "There is no reason" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Attendre permet de verifier si l'envie dure, au lieu d'acheter sur un coup de tete puis de regretter.",
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

  // Aventurier - 8 ans
  {
    id: "aven-1",
    tier: "aventurier",
    prompt: {
      fr: "Tu as 10 SouSous et tu veux un jeu a 30 SouSous. Quelle est la meilleure strategie ?",
      en: "You have 10 SouSous and want a game costing 30 SouSous. What is the best strategy?",
    },
    options: [
      { fr: "Mettre de cote chaque semaine jusqu'a avoir assez", en: "Save some each week until you have enough" },
      { fr: "L'emprunter a un ami et ne jamais le rendre", en: "Borrow it from a friend and never pay it back" },
      { fr: "Abandonner tout de suite", en: "Give up right away" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Economiser petit a petit permet d'atteindre un objectif plus cher sans rien devoir a personne.",
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
      { fr: "Le dernier jeu video a la mode", en: "The latest trendy video game" },
      { fr: "Une troisieme paire de baskets", en: "A third pair of sneakers" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Se proteger du froid est un besoin. Un jeu video ou une paire de baskets en plus, c'est une envie.",
      en: "Staying warm is a need. An extra video game or sneakers is a want.",
    },
  },
  {
    id: "aven-3",
    tier: "aventurier",
    prompt: {
      fr: "Le meme jouet coute 20 SouSous dans un magasin et 15 SouSous dans un autre. Que fais-tu ?",
      en: "The same toy costs 20 SouSous in one shop and 15 in another. What do you do?",
    },
    options: [
      { fr: "Tu compares les prix et tu choisis le moins cher", en: "You compare prices and choose the cheaper one" },
      { fr: "Tu achetes toujours dans le premier magasin", en: "You always buy from the first shop" },
      { fr: "Le prix n'a pas d'importance", en: "Price does not matter" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Comparer les prix permet d'economiser de l'argent pour d'autres choses.",
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
      { fr: "Repartir l'argent entre epargner, depenser et partager", en: "Splitting money between saving, spending, and sharing" },
      { fr: "Tout depenser le premier jour", en: "Spending it all on the first day" },
      { fr: "Ne jamais savoir combien on a", en: "Never knowing how much you have" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Repartir son argent en plusieurs parts (epargne, depenses, partage) aide a mieux l'utiliser.",
      en: "Splitting money into parts (saving, spending, sharing) helps you use it better.",
    },
  },
  {
    id: "aven-5",
    tier: "aventurier",
    prompt: {
      fr: "Pourquoi eviter d'acheter quelque chose sur un coup de tete ?",
      en: "Why avoid buying something on a whim?",
    },
    options: [
      { fr: "Parce qu'on peut le regretter et manquer d'argent apres", en: "Because you might regret it and run out of money after" },
      { fr: "Parce que c'est interdit par la loi", en: "Because it's against the law" },
      { fr: "Ce n'est jamais un probleme", en: "It is never a problem" },
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
      fr: "Que signifie 'faire des economies' ?",
      en: "What does 'saving up' mean?",
    },
    options: [
      { fr: "Garder une partie de son argent au lieu de tout depenser", en: "Keeping part of your money instead of spending it all" },
      { fr: "Depenser plus que ce qu'on a", en: "Spending more than you have" },
      { fr: "Perdre son argent de poche", en: "Losing your pocket money" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Faire des economies, c'est mettre de cote regulierement pour un objectif futur.",
      en: "Saving up means regularly setting money aside for a future goal.",
    },
  },
  {
    id: "aven-7",
    tier: "aventurier",
    prompt: {
      fr: "Tu pretes 5 SouSous a un copain. Que doit-il normalement faire ?",
      en: "You lend 5 SouSous to a friend. What should they normally do?",
    },
    options: [
      { fr: "Te les rendre comme promis", en: "Pay you back as promised" },
      { fr: "Les garder pour toujours sans rien dire", en: "Keep it forever without saying anything" },
      { fr: "Te demander encore plus d'argent", en: "Ask you for even more money" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Preter de l'argent, c'est une confiance : l'emprunteur doit le rendre comme convenu.",
      en: "Lending money is based on trust: the borrower should pay it back as agreed.",
    },
  },
  {
    id: "aven-8",
    tier: "aventurier",
    prompt: {
      fr: "Pourquoi economiser un peu chaque semaine plutot que tout depenser d'un coup ?",
      en: "Why save a little each week instead of spending it all at once?",
    },
    options: [
      { fr: "Pour pouvoir s'offrir quelque chose de plus grand plus tard", en: "So you can afford something bigger later" },
      { fr: "Parce que l'argent s'use si on le garde", en: "Because money wears out if you keep it" },
      { fr: "Ca n'a aucun interet", en: "There is no benefit" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Les petites sommes economisees regulierement s'additionnent pour realiser un projet plus grand.",
      en: "Small amounts saved regularly add up to reach a bigger goal.",
    },
  },

  // Strategiste - 11 ans
  {
    id: "strat-1",
    tier: "strategiste",
    prompt: {
      fr: "Quelle est la difference entre un revenu et une depense ?",
      en: "What is the difference between income and an expense?",
    },
    options: [
      { fr: "Le revenu est de l'argent qui arrive, la depense est de l'argent qui part", en: "Income is money coming in, an expense is money going out" },
      { fr: "Il n'y a aucune difference", en: "There is no difference" },
      { fr: "Le revenu est toujours plus petit que la depense", en: "Income is always smaller than the expense" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Un revenu (argent de poche, cadeau) fait grossir ta tirelire ; une depense la fait diminuer.",
      en: "Income (pocket money, gifts) grows your piggy bank; an expense shrinks it.",
    },
  },
  {
    id: "strat-2",
    tier: "strategiste",
    prompt: {
      fr: "Quand on garde de l'argent longtemps a la banque, elle peut parfois donner un petit interet en plus. Ca veut dire quoi ?",
      en: "When money stays in a bank a long time, the bank sometimes adds a bit of interest. What does that mean?",
    },
    options: [
      { fr: "La banque ajoute un peu d'argent en recompense de l'epargne", en: "The bank adds a bit of extra money as a reward for saving" },
      { fr: "La banque retire de l'argent chaque annee", en: "The bank removes money every year" },
      { fr: "Rien ne se passe jamais", en: "Nothing ever happens" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "L'interet est une petite somme en plus que la banque donne pour recompenser une epargne de longue duree.",
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
      { fr: "Comparer ce qui rentre et ce qui sort pour savoir combien on peut epargner", en: "Comparing what comes in and goes out to know how much you can save" },
      { fr: "Depenser sans jamais compter", en: "Spending without ever counting" },
      { fr: "Un jeu sans rapport avec l'argent", en: "A game unrelated to money" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Un budget compare revenus et depenses sur un mois pour degager ce qu'on peut mettre de cote.",
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
      { fr: "Comparer les prix et reflechir si c'est vraiment utile", en: "Compare prices and think about whether it's really useful" },
      { fr: "Acheter le premier objet vu", en: "Buy the first item you see" },
      { fr: "Ne jamais reflechir avant d'acheter", en: "Never think before buying" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Comparer et reflechir evite les depenses inutiles et les regrets.",
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
      { fr: "Ca ne concerne jamais personne", en: "It never involves anyone" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Emprunter, c'est recevoir de l'argent qu'il faudra rembourser, parfois avec des interets en plus.",
      en: "Borrowing means receiving money that must be repaid, sometimes with extra interest.",
    },
  },
  {
    id: "strat-6",
    tier: "strategiste",
    prompt: {
      fr: "Tu as 20 SouSous. Tu dois acheter des fournitures scolaires (15 SouSous) et tu veux un jeu (20 SouSous). Que fais-tu en priorite ?",
      en: "You have 20 SouSous. You need school supplies (15) and want a game (20). What should you prioritize?",
    },
    options: [
      { fr: "Acheter d'abord les fournitures, le besoin avant l'envie", en: "Buy the supplies first, the need before the want" },
      { fr: "Acheter le jeu et oublier les fournitures", en: "Buy the game and forget the supplies" },
      { fr: "Ne rien acheter du tout", en: "Buy nothing at all" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Les besoins essentiels passent avant les envies, meme quand l'envie est tentante.",
      en: "Essential needs come before wants, even when the want is tempting.",
    },
  },
  {
    id: "strat-7",
    tier: "strategiste",
    prompt: {
      fr: "Pourquoi se fixer un objectif d'epargne a long terme (comme un velo) est utile ?",
      en: "Why is setting a long-term savings goal (like a bike) useful?",
    },
    options: [
      { fr: "Ca aide a economiser regulierement au lieu de tout depenser tout de suite", en: "It helps you save regularly instead of spending everything right away" },
      { fr: "Ca n'a aucun effet", en: "It has no effect" },
      { fr: "Ca oblige a emprunter de l'argent", en: "It forces you to borrow money" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Avoir un objectif clair motive a mettre de l'argent de cote chaque semaine ou chaque mois.",
      en: "Having a clear goal motivates you to set money aside every week or month.",
    },
  },
  {
    id: "strat-8",
    tier: "strategiste",
    prompt: {
      fr: "Pourquoi garder un peu d'argent de cote pour les imprevus ?",
      en: "Why keep a bit of money aside for unexpected surprises?",
    },
    options: [
      { fr: "Parce qu'une depense surprise peut arriver a tout moment", en: "Because a surprise expense can happen at any time" },
      { fr: "Les imprevus n'existent pas", en: "Surprises never happen" },
      { fr: "Il faut toujours tout depenser d'avance", en: "You should always spend everything in advance" },
    ],
    correctIndex: 0,
    explanation: {
      fr: "Garder une petite reserve permet de faire face a une depense inattendue sans stress.",
      en: "Keeping a small reserve lets you handle an unexpected expense without stress.",
    },
  },
];

export function getQuestionsForTier(tier: Tier): Question[] {
  return QUESTIONS.filter((question) => question.tier === tier);
}
