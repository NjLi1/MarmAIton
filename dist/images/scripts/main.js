const jsonString = `{
  "title": "EcoChef",
  "tagline": "Transforme vos restes en créations culinaires",
  "description": "Avec nous, réduisez le gaspillage alimentaire tout en concoctant des plats de chef, pour une cuisine délicieuse et éco-responsable.",
  "cta": "S'inscrire",
  "features": [
    {
      "title": "Réduction du gaspillage alimentaire",
      "description": "Apprends à utiliser chaque ingrédient de manière optimale avec des recettes astucieuses qui transforment tes restes en plats savoureux."
    },
    {
      "title": "Communauté engagée",
      "description": "Rejoins une communauté de cuisiniers passionnés partageant des astuces et des conseils pour une cuisine plus verte."
    }
  ],
  "testimonials": [
    {
      "name": "Marc",
      "rating": 5,
      "content": "EcoChef est parfait pour ma vie de célibataire occupé. Trouver des recettes avec ce que j'ai dans le frigo est super pratique. J'ai réduit mon gaspillage alimentaire. Top !"
    },
    {
      "name": "Alice",
      "rating": 5,
      "content": "EcoChef a révolutionné notre cuisine ! Les recettes sont adaptées aux goûts de mes enfants et je peux utiliser les restes. Site intuitif et éducatif. Bravo!"
    }
  ],
  "callToAction": {
    "title": "A toi de jouer !",
    "description": "Hey toi! Fais un geste pour l'écologie en cuisinant des plats délicieux avec EcoChef. Utilise tes restes, réduis le gaspillage alimentaire et savoure des recettes écoresponsables. Ensemble, prenons soin de la planète, une recette à la fois. Rejoins-nous et régale-toi!",
    "cta": "S'inscrire"
  },
  "recipes": [
    {
      "category": "Recettes",
      "links": [
        "Index recettes",
        "Noël",
        "Pâques",
        "Chandeleur"
      ]
    },
    {
      "category": "Recette par thématique",
      "links": [
        "Automne",
        "Printemps",
        "Hiver",
        "Été"
      ]
    },
    {
      "category": "",
      "links": [
        "Afrique",
        "Asie",
        "Espagne",
        "Italie"
      ]
    },
    {
      "category": "",
      "links": [
        "Facile et rapide",
        "Je débute",
        "Bébé",
        "Cuisine pour les enfants"
      ]
    },
    {
      "category": "",
      "links": [
        "Moins cher",
        "Mince alors!",
        "Petit déjeuner",
        "Végétarien"
      ]
    },
    {
      "category": "",
      "links": [
        "Apéro dînatoire",
        "Pâte à crêpes",
        "Gâteau",
        "Pâte sablée"
      ]
    },
    {
      "category": "Apéro dînatoire",
      "links": [
        "Apéro dînatoire",
        "Pâte à crêpes",
        "Gâteau",
        "Pâte sablée"
      ]
    },
    {
      "category": "Forum",
      "links": [
        "Questions/ réponses"
      ]
    }
  ]
}`;

const jsonData = JSON.parse(jsonString);
