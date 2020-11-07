
const AppDataCV = [];

// CV data

function add(data) {
    data.showByDefault = ['pro', 'form'].indexOf(data.type) !== -1;
    AppDataCV.push(data)
}

description:
add({
    type: 'perso',
    role: "Fondateur du site Alakajam!",
    dateFrom: 'Juillet 2017',
    dateTo: '...',
    description: 'Site dédié à l\'organisation de game jams et autres événements autour du développement de jeux vidéo. <a href="https://alakajam.com">Page d\'accueil du site</a>',
    tags: ['JavaScript', 'NodeJS', 'PostgreSQL']
});


add({
    type: 'pro',
    role: 'Développeur indépendant',
    company: 'Auto-entrepreneur',
    location: 'Lyon, France',
    description: 'Développement de jeux vidéo et de sites web, Prestation de services informatiques.',
    dateFrom: 'Mai 2015',
    dateTo: '...',
    tags: ['Android', 'LibGDX', 'Java', 'Nuxeo', 'Alfresco', 'Gamedev', 'Adobe Photoshop']
});

add({
    type: 'pro',
    role: 'Ingénieur en développement',
    company: 'Open Wide',
    location: 'Lyon, France',
    description: 'Gestion de projet, spécification et réalisation pour des missions d\'intégration de logiciels Open Source, principalement autour de la gestion documentaire (Nuxeo, Alfresco). ',
    dateFrom: 'Décembre 2012',
    dateTo: 'Mai 2015',
    tags: ['Java', 'Nuxeo', 'Alfresco', 'JavaScript', 'Gestion de projet', 'Avant-vente']
});

add({
    type: 'pro',
    role: 'Ingénieur R&D',
    company: 'Open Wide',
    location: 'Lyon, France',
    description: 'Recherche et développement pour le projet Open Source EasySOA, visant outiller de manière innovante la mise en place, l\'exploitation et l\'évolution d\'architectures orientées service (SOA).',
    dateFrom: '<span class="date-note">CDI</span> Juin 2011',
    dateTo: 'Déc. 2012<br /><span class="date-note">Stage</span> Janv. – Juin 2011',
    tags: ['Java', 'JavaScript', 'ECM', 'SOA', 'nodejs', 'Web Design']
});

add({
    type: 'perso',
    role: "10 participations au concours Ludum Dare",
    dateFrom: 'Août 2012',
    dateTo: 'Juillet 2017',
    description: "Concours de programmation de jeu vidéo en un week-end. Classé 2e en août 2012, 14e en août 2014 (sur ~1000 participants). <a href='http://ludumdare.com/compo/author/wan'>Voir le profil Ludum Dare</a>",
    tags: ['JavaScript', 'Gamedev']
});

add({
    type: 'neutral',
    role: "Membre d'une association de soutien scolaire",
    description: "<b>Trésorier de l'association, responsable d'activité.</b> Soutien scolaire en école primaire, organisation de <i>Journées Détente et Découverte</i> annuelles (activités ludo-éducatives pour une centaine d'enfants de Lyon et alentours). <a href='http://rapp.asso.insa-lyon.fr'>Site de l'association</a>",
    dateFrom: '2009 - 2013'
});

add({
    type: 'perso',
    role: "Auteur d'un plug-in de jeu-vidéo",
    description: "Développement du mod Open Source <a href='https://github.com/mkalam-alami/inventory-tweaks'>Inventory Tweaks</a> (1000+ téléchargements par jour) pour le jeu Minecraft.",
    dateFrom: 'Mai 2011',
    dateTo: 'Février 2013',
    tags: ['Java']
});

add({
    type: 'perso',
    role: "Vainqueur du concours Java4K 2012",
    dateFrom: 'Mars 2012',
    description: "Concours de programmation de jeu vidéo sur 4 kilo-octets. 1re place au vote du jury, 4ème place au vote de la communauté. <a href='http://java4k.com/index.php?action=games&method=grades&cid=8'>Voir les résultats</a>",
    tags: ['Java']
});

add({
    type: 'form',
    role: "Diplôme d'Ingénieur INSA de Lyon, département informatique",
    company: 'Institut National des Sciences Appliquées de Lyon',
    location: 'Villeurbanne, France',
    dateFrom: '2006',
    dateTo: '2011'
});

add({
    type: 'pro',
    role: 'Intervenant en Informatique',
    company: 'ETIC INSA Technologies',
    location: 'Villeurbanne, France',
    description: "Mission autonome de conception/développement d'un module de vente aux enchères, pour le client Lettres & Covers (mission de 10 jours-homme).",
    dateFrom: 'Mars 2011',
    tags: ['Prestashop', 'PHP 5', 'JavaScript', 'MySQL']
});

add({
    type: 'pro',
    role: "Stagiaire en Recherche et Développement",
    company: "Générale d'Infographie",
    location: "Champagne-au-Mont-d'Or, France",
    description: "Prototype d'une application de cartographie en réalité augmentée pour appareils mobiles.",
    dateFrom: 'Mai 2010',
    dateTo: 'Sept. 2010',
    tags: ['.NET', 'Mobile', 'DirectShow']
});

add({
    type: 'neutral',
    role: "Membre d'une association de musique",
    description: "<b>Secrétaire de l'association.</b> Gestion de la location d'une salle de musique, organisation de concerts.",
    dateFrom: '2010',
    dateTo: '2011'
});

add({
    type: 'neutral',
    role: "Chanteur/guitariste d'un groupe de rock",
    dateFrom: '2009',
    dateTo: '2011'
});

add({
    type: 'perso',
    role: "Organisateur du concours Cod'INSA 2010",
    dateFrom: '2010',
    description: "Concours de programmation inter-INSA",
    tags: ['C++']
});

add({
    type: 'perso',
    role: "Vainqueur du concours Cod'INSA 2009",
    dateFrom: 'Avril 2009',
    description: "Concours de programmation inter-INSA",
    tags: ['Java', 'C++']
});

add({
    type: 'perso',
    role: "Fondateur du site Ivaly.com",
    description: "Webmaster d'un site francophone dédié à une saga de jeux vidéo. <a href='http://ivaly.is.free.fr/'>Version archivée</a>",
    dateFrom: '2004',
    dateTo: '2008',
    tags: ['PHP', 'Flash', 'MySQL', 'Webmastering', 'Web Design']
});

add({
    type: 'form',
    role: "Baccalauréat S Sciences de l'Ingénieur, spécialité Maths",
    company: 'Lycée les Eucalyptus',
    location: 'Nice, France',
    description: "Mention Très Bien",
    dateFrom: '2005'
});

add({
    type: 'form',
    role: 'Langues :',
    description: "<b>Français</b> - langue natale<br />"
        + "<b>Anglais</b> - capacité professionnelle complète (TOEIC 2010 : 990/990)<br />"
        + "<b>Wolof</b> - notions",
    noicon: true
});

export default AppDataCV;
