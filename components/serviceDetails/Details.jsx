import Image from "next/image";
import photoTr from "/public/img/detaisl/trempblement3.jpg";
import photoTs from "/public/img/detaisl/tsunami.jpg";
import photoCy from "/public/img/detaisl/cyclone.jpg";
import photoVo from "/public/img/detaisl/volcano.jpg";
import photoMe from "/public/img/detaisl/megafeux.jpg";
import photoAv from "/public/img/detaisl/avalanche.jpeg";
import photoIn from "/public/img/detaisl/high_water.jpg";
import photoTo from "/public/img/detaisl/tornado.jpg";
import { useRouter } from 'next/router'

const Details = () => {
  const CardData = [
    {
      id: 1,
      slug : "un-seisme",
      title: "Un Séisme",
      details: "Un tremblement de terre, ou séisme, est un phénomène naturel résultant de la libération soudaine d'énergie accumulée dans la croûte terrestre. Cette libération crée des ondes sismiques qui font vibrer le sol. Ces secousses sont souvent causées par le mouvement des plaques tectoniques, mais peuvent aussi résulter d'activités volcaniques ou d'événements induits par l'homme, comme les exploitations minières ou les essais nucléaires. La force et la durée d'un séisme peuvent varier, allant de secousses à peine perceptibles à de puissantes secousses destructrices.",
      photo: photoTr,
      clss: "",
      behavior : ["Préparez un kit d'urgence : Assurez-vous d'avoir un sac avec de l'eau, de la nourriture non périssable (comme des barres énergétiques), une lampe de poche, des piles, des médicaments essentiels, une trousse de premiers soins, des vêtements chauds, et des copies de vos documents importants.",
      "Sécurisez votre maison : Fixez les meubles lourds au mur, comme les bibliothèques et les armoires, pour éviter qu'ils ne tombent pendant le séisme. Placez les objets lourds ou cassants sur les étagères du bas. Fermez le gaz, l'eau et l'électricité si possible.",
      "Choisissez un lieu sûr dans votre maison : Identifiez des endroits sûrs loin des fenêtres, des miroirs, des cadres photo, et de tout autre objet qui pourrait se briser ou tomber. L'idéal est de se trouver sous une table solide ou dans un coin interne de la maison. Informez tous les membres de votre famille de ces lieux sûrs et pratiquez des exercices de mise à l'abri.",
      "Enfin, restez informé en écoutant la radio, la télévision ou en consultant les sites internet officiels pour obtenir des informations et des instructions en temps réel."
      ]
    },
    {
      id: 2,
      slug : "un-tsunami",
      title: "Un Tsunami",
      details: "Un tsunami est une série de vagues de grande énergie et de haute altitude, souvent provoquées par des perturbations sous-marines telles que des tremblements de terre, des éruptions volcaniques ou des glissements de terrain. Lorsque le plancher océanique se déplace brusquement, il déplace une grande quantité d'eau, générant des vagues qui se propagent à grande vitesse. En approchant des côtes, ces vagues augmentent en hauteur et peuvent causer d'importants dégâts et inondations.",
      photo: photoTs,
      clss: "",
      behavior: ["Évacuez vers un lieu élevé : Dirigez-vous immédiatement vers un terrain plus élevé ou à l'intérieur des terres, loin de la côte. Si possible, visez une altitude d'au moins 30 mètres au-dessus du niveau de la mer. Suivez les panneaux d'évacuation s'ils sont disponibles.",
      "Préparez un kit d'urgence : Si vous avez le temps, emportez un sac contenant de l'eau potable, de la nourriture non périssable, des médicaments essentiels, une lampe de poche avec des piles supplémentaires, une trousse de premiers soins, et des vêtements chauds. Assurez-vous également d'avoir des copies de vos documents importants.",
      "Restez informé : Écoutez la radio, la télévision ou consultez les sites internet officiels pour obtenir des informations en temps réel sur la situation. Ne retournez pas dans la zone côtière tant que les autorités n'ont pas donné le feu vert, car il peut y avoir des vagues successives.",
      "Il est crucial de ne pas attendre si vous ressentez un tremblement de terre ou si vous voyez une baisse soudaine et inhabituelle du niveau de la mer. Ces signes peuvent indiquer l'arrivée imminente d'un tsunami. Dans de telles situations, chaque minute compte."
      ]
    },
    {
      id: 3,
      slug : "un-cyclone-ou-ouragan",
      title: "Un cyclone, typhon ou ouragan",
      details: "Un cyclone, typhon ou ouragan (différents noms selon la région) est une puissante tempête tropicale caractérisée par des vents forts en spirale autour d'un centre calme appelé 'œil'. Formés au-dessus des eaux chaudes des océans, ces phénomènes peuvent causer de lourds dégâts lorsqu'ils atteignent les terres, avec des vents violents, de fortes pluies et des inondations. La distinction entre eux se base sur leur localisation : cyclone dans l'océan Indien et le sud de l'océan Pacifique, typhon dans le nord-ouest de l'océan Pacifique, et ouragan dans l'Atlantique et le nord-est de l'océan Pacifique.",
      photo: photoCy,
      clss: "",
      behavior: ["Mettez-vous à l'abri : Trouvez un lieu sûr dans votre maison, loin des fenêtres et des portes. Si vous vivez dans une zone inondable ou dans une structure qui n'est pas solide (comme une cabane ou une maison mobile), envisagez d'évacuer vers un abri communautaire ou une zone plus sûre. Évitez les zones basses qui pourraient être inondées.",
      "Préparez un kit d'urgence : Assurez-vous d'avoir un sac avec des éléments essentiels tels que de l'eau potable, de la nourriture non périssable, une lampe de poche avec des piles supplémentaires, des médicaments, une trousse de premiers soins, des vêtements chauds et des copies de vos documents importants. Chargez également vos appareils électroniques et assurez-vous d'avoir une radio alimentée par batterie pour rester informé.",
      "Sécurisez votre maison : Fermez et barricadez toutes les fenêtres et les portes avec des contreplaqués ou des volets. Rangez ou attachez solidement les objets extérieurs qui pourraient être emportés par le vent, comme les meubles de jardin, les poubelles et les décorations. Vérifiez que votre système de drainage fonctionne correctement pour éviter les inondations. Éteignez et débranchez les appareils électriques, et fermez les vannes de gaz.",
      "Il est crucial de rester informé en écoutant les bulletins météorologiques et les directives des autorités locales. La préparation à l'avance et la prise de précautions peuvent faire une grande différence en matière de sécurité pendant ces événements météorologiques extrêmes."
      ]
    },
    {
      id: 4,
      slug : "une-eruption-volcanique",
      title: "Une éruption volcanique",
      details: "Une éruption volcanique est l'expulsion soudaine et parfois violente de lave, cendres, roches et gaz d'un volcan. Ces émissions peuvent prendre diverses formes, allant de coulées de lave lentes à des explosions cataclysmiques. Les nuages de cendres projetés dans l'atmosphère peuvent perturber les vols aériens et avoir des effets sur le climat. De plus, la lave et les cendres chaudes peuvent détruire la végétation, les habitations et les infrastructures, rendant les zones avoisinantes dangereuses pour les personnes qui y vivent. Il est donc crucial de surveiller l'activité volcanique et de respecter les recommandations des autorités en cas de menace d'éruption.",
      photo: photoVo,
      clss: "",
      behavior: ["Évacuez la zone à risque : Si les autorités recommandent une évacuation, faites-le immédiatement. Les zones proches du volcan sont les plus susceptibles d'être touchées par la lave, les cendres, les gaz toxiques et les projections pyroclastiques. Empruntez les routes d'évacuation préétablies et évitez de vous approcher du volcan.",
      "Préparez un kit d'urgence : Assurez-vous d'avoir un sac avec des éléments essentiels tels que de l'eau potable, de la nourriture non périssable, une lampe de poche avec des piles supplémentaires, des médicaments, une trousse de premiers soins, des masques pour vous protéger des cendres et des copies de vos documents importants. Si vous restez chez vous, fermez les fenêtres et les portes pour empêcher les cendres d'entrer.",
      "Protégez-vous des cendres et des gaz : Si vous êtes à l'extérieur pendant une chute de cendres, portez un masque, des lunettes de protection et des vêtements à manches longues. Les cendres peuvent irriter la peau, les yeux et les voies respiratoires. Évitez également les zones basses où les gaz toxiques, plus lourds que l'air, peuvent s'accumuler.",
      "Il est essentiel de rester informé en écoutant les bulletins météorologiques et les directives des autorités locales. Les éruptions volcaniques peuvent être imprévisibles, il est donc crucial de suivre les recommandations des experts et d'agir rapidement pour assurer votre sécurité."
      ]
    },
    {
      id: 5,
      slug : "megafeux",
      title: "Le Megafeux",
      details: "Plusieurs facteurs peuvent contribuer à l'émergence d'un mégafeu, notamment des conditions météorologiques extrêmes, comme des sécheresses prolongées, des températures élevées et des vents forts. L'intervention humaine, telle que la déforestation, l'urbanisation et les pratiques d'aménagement du territoire, peut également augmenter le risque de mégafeux. De plus, la suppression systématique des petits incendies au fil des années peut entraîner une accumulation de matières combustibles, rendant les forêts plus vulnérables à des incendies de plus grande envergure.",
      photo: photoMe,
      clss: "",
      behavior: ["Évacuez immédiatement : Si les autorités recommandent ou ordonnent une évacuation, faites-le sans hésitation. Emportez avec vous les membres de votre famille, les animaux domestiques et dirigez-vous vers un lieu sûr, loin de la trajectoire prévue du feu. Utilisez les routes d'évacuation indiquées et évitez de prendre des raccourcis qui pourraient vous mettre en danger.",
      "Préparez un kit d'urgence : Assurez-vous d'avoir un sac contenant des éléments essentiels tels que de l'eau potable, de la nourriture non périssable, des médicaments, une lampe de poche avec des piles supplémentaires, une trousse de premiers soins, et des copies de vos documents importants. Incluez également des masques pour vous protéger de la fumée et des cendres.",
      "Protégez votre maison : Si vous avez le temps, humidifiez les alentours de votre maison avec de l'eau pour réduire le risque d'incendie. Fermez toutes les fenêtres, les portes et les volets pour empêcher les étincelles et les cendres d'entrer. Débranchez le gaz et éteignez tous les appareils électriques. Éloignez les meubles de jardin, les tuyaux d'arrosage et tout autre objet combustible de la maison.",
      "Il est crucial de rester informé en écoutant les bulletins d'information et les directives des autorités locales. Les mégafeux sont extrêmement imprévisibles et peuvent changer de direction rapidement en fonction des conditions météorologiques. Il est donc essentiel de suivre les recommandations des experts et d'agir rapidement pour garantir votre sécurité."
      ]
    },
    {
      id: 6,
      slug : "une-avalanche",
      title: "Une avalanche",
      details: "Une avalanche est une masse rapide de neige qui descend d'une montagne, souvent déclenchée par des perturbations telles que des chutes de neige récentes, des variations de température, des activités humaines ou des vibrations. Cette déferlante peut également entraîner avec elle de la glace, de l'air, de l'eau, des roches et des débris forestiers. La force et la vitesse de l'avalanche peuvent varier en fonction de la pente, de la quantité de neige et des conditions atmosphériques. Les avalanches peuvent causer d'importants dégâts matériels, notamment en ensevelissant des infrastructures, des routes et des habitations.",
      photo: photoAv,
      clss: "",
      behavior: ["Évacuez les zones à risque : Si vous vous trouvez dans une zone susceptible d'être touchée par une avalanche, éloignez-vous le plus rapidement possible des pentes raides et des zones d'accumulation de neige. Dirigez-vous vers un terrain stable, à l'abri des couloirs d'avalanche et des zones de dépôt.",
      "Préparez un kit d'urgence : Emportez avec vous des éléments essentiels tels que de l'eau, de la nourriture, des vêtements chauds, une lampe de poche, une trousse de premiers soins et un sifflet. Les équipements spécifiques à la montagne, comme un détecteur de victimes d'avalanche (DVA), une pelle et une sonde, peuvent être vitaux en cas d'ensevelissement.",
      "Informez-vous et restez en groupe : Consultez les bulletins d'avalanche locaux pour connaître le niveau de risque. Si vous êtes en montagne pour des activités récréatives, restez toujours en groupe. Évitez de vous disperser et gardez une distance raisonnable entre chaque personne pour réduire le risque que tout le groupe soit pris dans l'avalanche.",
      "Il est essentiel de se rappeler que même avec toutes les précautions, le risque zéro n'existe pas en montagne. La meilleure manière de se protéger est d'éviter les zones à risque lorsque les conditions sont défavorables et de toujours rester informé des conditions météorologiques et des niveaux de danger d'avalanche."
      ]
    },
    {
      id: 7,
      slug : "une-inondation",
      title: "Une inondation",
      details: "Une inondation est l'envahissement d'une zone par de l'eau, souvent dû à des pluies fortes, à la montée d'un cours d'eau, à la fonte rapide de la neige ou à des ruptures de barrages. Ces submersions peuvent être temporaires ou persistantes, selon la durée et l'intensité des facteurs déclenchants. Les sols saturés d'eau ne parvenant plus à absorber l'excès d'eau, des zones résidentielles, agricoles et industrielles peuvent se retrouver submergées. Les inondations peuvent également provoquer des coupures d'électricité, contaminer les sources d'eau potable et perturber les transports.",
      photo: photoIn,
      clss: "",
      behavior: ["Évacuez si nécessaire : Si les autorités recommandent ou ordonnent une évacuation, suivez les directives immédiatement. Emportez avec vous les membres de votre famille et les animaux domestiques, et dirigez-vous vers un lieu sûr, idéalement en hauteur et loin des zones inondables. Utilisez les routes d'évacuation indiquées et évitez de traverser des zones déjà inondées.",
      "Préparez un kit d'urgence : Assurez-vous d'avoir un sac contenant des éléments essentiels tels que de l'eau potable, de la nourriture non périssable, des médicaments, une lampe de poche avec des piles supplémentaires, une trousse de premiers soins, et des copies de vos documents importants. Si vous avez le temps, déplacez les objets de valeur et les documents importants à un étage supérieur ou sur des étagères hautes pour les protéger de l'eau.",
      "Sécurisez votre maison : Fermez les principales alimentations en eau, gaz et électricité. Bloquez les entrées d'eau en plaçant des sacs de sable ou des barrages gonflables si vous en avez. Si possible, déplacez les meubles et autres biens précieux à un étage supérieur. Éloignez les produits toxiques ou dangereux qui pourraient se déverser ou se mélanger à l'eau d'inondation.",
      "Toujours rester informé en écoutant les bulletins d'information et en suivant les directives des autorités locales. Évitez de conduire ou de marcher dans les eaux d'inondation, car même une faible profondeur d'eau en mouvement peut être dangereuse."
      ]
    },
    {
      id: 8,
      slug : "tornades",
      title: "Une tornande",
      details: "Une tornade est une colonne d'air en rotation rapide qui est en contact à la fois avec la surface de la Terre et avec une base de nuage cumulonimbus ou, dans de rares cas, la base d'un nuage cumulus. Elle se caractérise par sa forme typiquement conique et sa couleur, qui varie du blanc-gris au noir, en fonction de l'environnement et de la quantité de débris qu'elle soulève. Les tornades peuvent se déplacer à des vitesses variées et changer de direction sans préavis. Leurs effets dévastateurs sont causés par des vents violents pouvant atteindre ou dépasser 300 km/h. Ces phénomènes météorologiques peuvent causer d'importants dégâts matériels, détruisant des bâtiments, renversant des véhicules et déracinant des arbres.",
      photo: photoTo,
      clss: "",
      behavior: ["Trouvez un abri : Identifiez l'endroit le plus sûr de votre maison ou de votre lieu de travail. Cela devrait être une pièce au niveau le plus bas, loin des fenêtres et des portes, idéalement une cave, un sous-sol ou une salle de bain intérieure. Si vous êtes à l'extérieur ou dans une voiture et que vous ne pouvez pas atteindre un bâtiment solide, trouvez un fossé ou une autre dépression du terrain où vous pourrez vous allonger et protégez votre tête.",
      "Préparez un kit d'urgence : Rassemblez des éléments essentiels tels que de l'eau potable, de la nourriture non périssable, une lampe de poche avec des piles supplémentaires, une trousse de premiers soins, des vêtements chauds, un sifflet, et des copies de vos documents importants. Si possible, ayez également à portée de main un casque ou quelque chose pour protéger votre tête des débris volants.",
      "Restez informé : Écoutez la radio, la télévision ou une application météorologique sur votre téléphone pour suivre les alertes et les mises à jour concernant la tornade. Les systèmes d'alerte météorologique peuvent fournir des informations précieuses sur la localisation, la direction et l'intensité de la tornade.",
      "Il est essentiel de prendre au sérieux toutes les alertes et avertissements de tornade. Si une alerte est émise, cela signifie qu'une tornade a été repérée ou que les conditions sont propices à sa formation. Dans tous les cas, il est préférable d'agir avec prudence et de prioriser la sécurité."
      ]
    },
];
const param = useRouter().query.name;
  
    const data = CardData.find(c => c.slug === param);

  return (
    <>
      <div className="details__thumb">
        <Image src={data?.photo} alt="details" className="img-fluid" />
      </div>
      <div className="content">
        <h2 className="title1">{data?.title}</h2>
        <p className="text1">
          {data?.details}
        </p>
        <h3>Comportement à avoir</h3>
        <ul className="machine__listing">          
          <li>
            <span>1. </span>
            <span>
             {data?.behavior[0]}
            </span>
          </li>
          <li>
            <span>2.</span>
            <span>
            {data?.behavior[1]}
            </span>
          </li>
          <li>
            <span>3.</span>
            <span>
            {data?.behavior[2]}
            </span>
          </li>
        </ul>
        <p>
          {data?.behavior[3]}
        </p>
      </div>
    </>
  );
};

export default Details;
