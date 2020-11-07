const AppDataFolio = []

var even = false;
function add(data) {
    data.team = data.team || ''
    data.tech = data.tech || ''
    data.even = even;
    even = !even;
    if (data.picture.indexOf('.') === -1) {
        data.picture += '.jpg';
    }
    AppDataFolio.push(data)
}

add({
    title: 'Rocket Jumper',
    type: 'Game Jam',
    date: 'Janvier 2019',
    picture: 'folio-kajam6.png',
    url: 'https://alakajam.com/6th-kajam/543/rocket-jumper/',
    description: 'Jeu d\'arcade pour mobile réalisé pour la 6ème Kajam. Le thème était "Hypercasual".',
    tech: 'C#'
});

add({
    title: 'Sacrifice Now!',
    type: 'Game Jam',
    date: 'December 2018',
    picture: 'folio-ld43.png',
    url: 'https://ldjam.com/events/ludum-dare/43/sacrifice-now',
    description: 'Jeu de survie/stratégie réalisé en 72h pour la Ludum Dare 43. Le thème était "Sacrifices must be made". Classé 689e sur 1748.',
    tech: 'C#',
    team: 'Thrainsa'
});

add({
    title: 'Temple of Ares',
    type: 'Game Jam',
    date: 'Octobre 2018',
    picture: 'folio-akj4.png',
    url: 'https://alakajam.com/4th-alakajam/418/temple-of-ares/',
    description: 'Jeu d\'action/stratégie réalisé en 48h pour la 4ème Alakajam. Le thème était "Falling". Classé 7e sur 24.',
    tech: 'C#'
});

add({
    title: 'A.G. Hope',
    type: 'Game Jam',
    date: 'Juin 2018',
    picture: 'folio-akj3.gif',
    url: 'https://alakajam.com/3rd-alakajam/337/ag-hope/',
    description: 'Jeu de survie spatiale réalisé en 48h pour la 3ème Alakajam. Le thème était "Always Growing". Classé 1er sur 15.',
    tech: 'C#',
    team: 'Thrainsa'
});

add({
    title: 'Uncanny Ballet',
    type: 'Game Jam',
    date: 'Avril 2018',
    picture: 'folio-kajam4',
    url: 'https://alakajam.com/4th-kajam/266/uncanny-ballet/',
    description: 'Jeu de plateforme réalisé pour la 4ème Kajam. Le sujet était "Intelligence Artificielle".',
    tech: 'JavaScript'
});

add({
    title: 'Sword of Sight',
    type: 'Game Jam',
    date: 'Février 2018',
    picture: 'folio-akj2.gif',
    url: 'https://alakajam.com/2nd-alakajam/126/sword-of-sight/',
    description: 'Jeu d\'énigmes réalisé en 48h pour la 2ème Alakajam. Le thème était "You can\'t see everything". Classé 3ème sur 20.',
    tech: 'C#',
    team: 'Thrainsa'
});

add({
    title: 'Unknown Sender',
    type: 'Game Jam',
    date: 'Janvier 2018',
    picture: 'folio-kajam3',
    url: 'https://alakajam.com/3rd-kajam/108/unknown-sender/',
    description: 'Histoire interactive réalisée pour la 3ème Kajam. Le sujet était "Story".',
    tech: 'JavaScript'
});

add({
    title: 'Kommander RNLF',
    type: 'Game Jam',
    date: 'Décembre 2017',
    picture: 'folio-kajam2',
    url: 'https://alakajam.com/2nd-kajam/103/kommandant-rnlf/',
    description: 'Jeu de platformes réalisé pour la 2ème Kajam. Le sujet était "Sound Effects".',
    tech: 'Unity (C#)',
    team: 'Toasty, Tijn, RNLF'
});

add({
    title: 'Rat Park',
    type: 'Game Jam',
    date: 'Novembre 2017',
    picture: 'folio-kajam1',
    url: 'https://alakajam.com/1st-kajam/98/rat-park/',
    description: 'Jeu de tir en 2D réalisé pour la 1ère Kajam. Le sujet était "Game Juice".',
    tech: 'Unity (C#)',
    team: 'Tim'
});

add({
    title: 'Philosopher\'s Strike',
    type: 'Game Jam',
    date: 'Septembre 2017',
    picture: 'folio-akj1',
    url: 'https://alakajam.com/1st-alakajam/50/philosophers-strike/',
    description: 'Jeu de type shoot\'em up réalisé en 48h pour la 1ère Alakajam. Le thème était "Alchimie". Classé 4ème sur 16.',
    tech: 'Unity (C#)',
    team: 'Manu, Ihnaut'
});

add({
    title: 'Alakajam!',
    type: 'Site web',
    date: '2017',
    picture: 'folio-akj',
    url: 'https://alakajam.com',
    description: 'Site dédié à l\'organisation de game jams et autres événements autour du développement de jeux vidéo.',
    tech: 'NodeJS',
    team: 'Divers contributeurs'
});

add({
    title: 'King of Mithril',
    type: 'Game Jam',
    date: 'Juillet 2017',
    picture: 'folio-ld39',
    url: 'https://ldjam.com/events/ludum-dare/39/king-of-mithril',
    description: 'Jeu d\'action/infiltration réalisé en 72h pour le 39e <a href="http://ludumdare.com/compo">Ludum Dare</a>. Le thème était "Running out of Power".',
    tech: 'Unity (C#)',
    team: 'Manu, Ihnaut'
});

add({
    title: 'The One Room Club',
    type: 'Game Jam',
    date: 'Décembre 2016',
    picture: 'folio-ld37',
    url: 'http://eguillot.fr/ludum-dare/ld37/',
    description: 'Jeu de cartes musical réalisé en 72h pour le 37e <a href="http://ludumdare.com/compo">Ludum Dare</a>. Le thème était "One Room".',
    tech: 'Unity (C#)',
    team: 'Manu, Prohibé, Karl'
});

add({
    title: 'Squircle',
    type: 'Jeu Vidéo',
    date: 'November 2016',
    picture: 'folio-squircle',
    url: 'https://www.youtube.com/watch?v=zGeBIwIpg6c',
    description: 'Jeu de plateforme en licence exclusive pour le portail TV <a href="http://gofresh.de/">Couchplay</a>. Il est adaptaté d\'un prototype fait la même année, avec plus de contenus et des performances optimisées pour Smart TVs.',
    tech: 'PhaserJS (HTML5)'
});

add({
    title: 'Red Spade &spades;',
    type: 'Game Jam',
    date: 'Août 2016',
    picture: 'folio-ld36',
    url: 'http://marwane.kalam-alami.net/ld/36/',
    description: 'Histoire interactive (bilingue français/anglais) réalisée en 72h pour le 36e <a href="http://ludumdare.com/compo">Ludum Dare</a>. Le thème était "Ancient Technology".',
    tech: 'HTML5'
});

add({
    title: 'Cthulhu\'s Cannibal King',
    type: 'Game Jam',
    date: 'Juin 2016',
    picture: 'folio-gdp10',
    url: 'https://jimeowan.itch.io/cthulhus-cannibal-king',
    description: 'Jeu de survie réalisé en un week-end pour la 10e <a href="http://www.gamedevparty.fr">Game Dev Party</a>. Le titre du jeu a été fourni par un générateur aléatoire.',
    tech: 'Unity (C#)',
    team: 'Alya, Kévin, Manu, Robin'
});

add({
    title: 'Squircle (prototype)',
    type: 'Game Jam',
    date: 'Avril 2016',
    picture: 'folio-ld35',
    url: 'http://marwane.kalam-alami.net/ld35',
    description: 'Jeu de plateforme réalisé en 48h pour le 35e <a href="http://ludumdare.com/compo">Ludum Dare</a>. Le thème était "Shapeshift". Classé 8e sur 1118.',
    tech: 'PhaserJS (HTML5)'
});

add({
    title: 'Squ',
    type: 'Game Jam',
    date: 'Décembre 2015',
    picture: 'folio-ld34',
    url: 'http://marwane.kalam-alami.net/ld34',
    team: 'Manu',
    description: 'Jeu de plateforme réalisé en 72h pour le 34e <a href="http://ludumdare.com/compo">Ludum Dare</a>. Le mini-jeu d\'intro fait référence aux thèmes ("Growing" + "Two button controls"), autrement peu respectés. Classé 572e sur 1638.',
    tech: 'PhaserJS (HTML5)'
});

add({
    title: 'Minotaur',
    type: 'Game Jam',
    date: 'Avril 2015',
    picture: 'folio-ld32',
    url: 'http://marwane.kalam-alami.net/ld32',
    team: 'Manu, Jack',
    description: 'Jeu de plateforme réalisé en 72h, à l\'occasion du 32e <a href="http://ludumdare.com/compo">Ludum Dare</a>. Le thème était "An Unconventional Weapon". Classé 131e sur 1468.',
    tech: 'PhaserJS (HTML5)'
});

add({
    title: 'Corponnected Ltd.',
    type: 'Game Jam',
    date: 'Août 2014',
    picture: 'folio-ld30',
    url: 'http://marwane.kalam-alami.net/ld30',
    team: 'Manu, Guillaume',
    description: 'Jeu de gestion/puzzle réalisé en 72h, à l\'occasion du 30e <a href="http://ludumdare.com/compo">Ludum Dare</a>. Le thème était "Connected Worlds". Classé 14e sur 1045.',
    tech: 'PhaserJS (HTML5)'
});

add({
    title: 'Jàngileen',
    type: 'Site web',
    date: '2014',
    picture: 'folio-jang',
    url: 'http://jangileen.kalam-alami.net/',
    description: 'Site dédié à l\'apprentissage du wolof. Contient essentiellement un dictionnaire français-wolof.',
    tech: 'NodeJS'
});

add({
    title: 'Inventory Tweaks',
    type: 'Mod de jeu vidéo',
    date: '2011-2013',
    picture: 'folio-it',
    url: 'https://inventory-tweaks.readthedocs.org',
    team: 'Kobata, autres',
    description: 'Mod open source (traduit dans plus de 20 langues !) pour le jeu <a href="https://minecraft.net/">Minecraft</a>, permettant de mieux organiser son inventaire. Fondé en 2011, puis transmis en 2013 à d\'autres membres de la communauté.',
    tech: 'Java'
});

add({
    title: 'L\'Hypnose',
    type: 'Game Jam',
    date: 'Avril 2013',
    picture: 'folio-ld26',
    url: 'http://marwane.kalam-alami.net/ld26',
    team: 'Alya',
    description: 'Jeu style point-and-click, réalisé en une douzaine d\'heures lors du 26e <a href="http://ludumdare.com/compo">Ludum Dare</a>. Le thème était "Minimalism". Classé 152e sur 736.',
    tech: 'CraftyJS'
});

add({
    title: 'Sisyphus & The Cursed Diamonds',
    type: 'Game Jam',
    date: 'Décembre 2012',
    picture: 'folio-ld25',
    url: 'http://marwane.kalam-alami.net/ld/25re',
    team: 'Manu',
    description: 'Jeu de plateforme un peu spécial, réalisé en 72h lors du 25e <a href="http://ludumdare.com/compo">Ludum Dare</a>. Le thème était "You are the Villain". Classé 46e sur 425.',
    tech: 'CraftyJS'
});

add({
    title: 'The Voynich Experiment',
    type: 'Game Jam',
    date: 'Août 2012',
    picture: 'folio-ld24',
    url: 'http://marwane.kalam-alami.net/ld24',
    description: 'Jeu de plateforme réalisé en 48h lors du 24e <a href="http://ludumdare.com/compo">Ludum Dare</a>, le thème étant "Evolution". Classé 2e sur 1006.',
    tech: 'CraftyJS (HTML5)'
});

add({
    title: 'Tellura Factory',
    type: 'Game Jam',
    date: 'Mars 2012',
    picture: 'folio-gdp2',
    url: 'http://sdrdis.github.com/Metal-Party/',
    team: '5 personnes',
    description: 'Jeu de plateforme inachevé, développé en un week-end à l\'occasion de la 2e <a href="http://gamedevparty.fr">Game Dev Party</a>.',
    tech: 'LimeJS + Box2D'
});

add({
    title: 'The Little Scientist',
    type: 'Game Jam',
    date: 'Janvier 2012',
    picture: 'folio-tls',
    url: 'http://www.java4k.com/index.php?action=games&method=view&gid=383',
    description: 'Jeu de gestion conçu pour tenir sur 4ko, dans le cadre du concours <a href="http://java4k.com/">Java4K</a> 2012. Classé 1er (jury) et 4e (votes de la communauté) sur 51. <span style="font-style: italic; font-size: 11px">(Note : réalisé en Java, le jeu peut nécessiter de <a href="https://www.java.com/en/download/exception_sitelist.jsp" target="_blank">mettre des exceptions</a> dans sa configuration Java pour marcher)</span>',
    tech: 'Java'
});

add({
    title: 'Ivaly.com',
    type: 'Site web',
    date: '2004-2008',
    picture: 'folio-ivaly',
    url: 'http://ivaly.is.free.fr',
    team: 'Antoine F. et env. 10 membres',
    description: 'Site d\'actualité et encyclopédie, principalement dédié à la saga de jeux vidéo "Final Fantasy". Laissé à l\'abandon depuis 2008.',
    tech: 'PHP + MySQL'
});

add({
    title: 'Silex Wan',
    type: 'Musique',
    date: 'En pointillés depuis 2009',
    picture: '<iframe width="100%" height="300" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/39415934&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>',
    url: 'https://soundcloud.com/silexwan',
    description: 'Silex Wan est un petit projet musical orienté électro.',
    tech: 'Propellerhead Reason',
    noTitle: true
});

export default AppDataFolio;
