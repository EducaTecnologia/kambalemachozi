import { TranslationSchema } from './types';
import kmHeroRoadsImg from '../../assets/images/km_hero_roads_construction_1790912438335.jpg';
import kmFuelFleetImg from '../../assets/images/km_fuel_logistics_fleet_1790912449357.jpg';
import kmMiningLualabaImg from '../../assets/images/km_mining_lualaba_operations_1790912459813.jpg';
import kmCoffeeCocoaImg from '../../assets/images/km_coffee_cocoa_export_1790912469517.jpg';
import kmFardcRationsImg from '../../assets/images/km_fardc_rations_warehouse_1790912480385.jpg';
import kmBertrandCeoImg from '../../assets/images/km_bertrand_ceo_portrait_1790912489891.jpg';
import placideBaundjaImg from '../../assets/images/placide_baundja_portrait.jpg';
import doudouNzangaImg from '../../assets/images/doudou_nzanga_executive_1790216344257.jpg';
import felixTshimangaImg from '../../assets/images/felix_tshimanga_portrait_1790214209611.jpg';

export const frTranslations: TranslationSchema = {
  brandTagline: 'Construire l’Avenir — Partenaire multisectoriel stratégique en RDC',
  nav: {
    home: 'Accueil',
    about: 'Entreprise',
    programs: 'Nos 6 Secteurs',
    projects: 'Opérations',
    locations: 'Présence en RDC',
    team: 'Direction',
    supporters: 'Partenaires & Agréments',
    news: 'Actualités',
    otherWaysToDonate: 'Cotations & Conformité',
    contact: 'Contact',
    donate: 'Demander un devis'
  },
  preloader: {
    skip: 'Accéder au site',
    loading: 'Chargement du profil institutionnel KM...',
    slides: [
      {
        title: 'Secteur 1 : Construction & réhabilitation des routes (ITPR)',
        location: 'Kinshasa, Lualaba, Haut-Katanga, Nord-Kivu, Kasaï',
        tag: 'Routes & Travaux Publics'
      },
      {
        title: 'Secteur 2 : Fournisseur de carburant (30 ans d’expérience, import, stockage, distribution)',
        location: 'Corridor Dar es Salaam & Beira → Kolwezi / Kisanfu',
        tag: 'Distribution d’Hydrocarbures'
      },
      {
        title: 'Secteur 3 : Fournisseur officiel de denrées alimentaires et rations aux FARDC',
        location: 'Ministère de la Défense Nationale — Tous Fronts RDC',
        tag: 'Logistique & Défense'
      },
      {
        title: 'Secteur 4 : Agro-industrie, fabrication de savons & export café/cacao',
        location: 'Nord-Kivu, Ituri, Kasaï → Europe, Dubaï, Turquie, USA',
        tag: 'Agro-Industrie & Savons'
      },
      {
        title: 'Secteur 5 : Exploitation minière & sous-traitance (ARSP)',
        location: 'Lualaba, Haut-Katanga & Nord-Kivu',
        tag: 'Mines & Sous-Traitance'
      },
      {
        title: 'Secteur 6 : Agence en douane — Rwenzori Transit Agency',
        location: 'Frontières RDC, Kinshasa, Lualaba & Grands Lacs',
        tag: 'Rwenzori Transit Agency'
      }
    ]
  },
  hero: {
    kicker: 'ETS KAMBALE MACHOZI (KM) • RCCM: 14-A-01204',
    slide1Title: 'CONSTRUIRE L’AVENIR.',
    slide1Sub: 'Partenaire multisectoriel stratégique pour le développement et les infrastructures de la République Démocratique du Congo.',
    slide1Cta1: 'Découvrir nos 5 secteurs',
    slide1Cta2: 'Demander une cotation',
    slide2Title: 'Fournisseur stratégique de carburant et logistique minière.',
    slide2Sub: 'Diesel AGO/DDO, Essence PMS, Lubrifiants et Jet A1 certifiés SGS. Stock de +150 000 litres et livraison sous 24/48h à Kolwezi et Kisanfu.',
    slide2Cta: 'Voir nos capacités logistiques',
    slide3Title: 'Routes ITPR, Fournitures FARDC, Mines & Agro-Exportation.',
    slide3Sub: 'Société 100% congolaise détentrice de 5 licences officielles, en conformité fiscale, commerciale et ARSP totale en RDC.',
    slide3Cta: 'Consulter nos réalisations'
  },
  mission: {
    sectionKicker: 'LEADERSHIP ET VISION D’ENTREPRISE',
    title: 'Excellence en gestion multisectorielle et conformité totale en RDC.',
    manifestoQuote: '« Nous espérons contribuer de manière significative au développement de notre pays, grâce à un engagement envers l’excellence et la technologie. »',
    badgeRdc: '🇨🇩 Siège : Cité du Fleuve, Kinshasa',
    oathDesc: 'Direction Générale : M. Bertrand KAMBALE MACHOZI • Société 100% de droit congolais • Antennes opérationnelles à Kolwezi (Lualaba) et Beni / Goma (Nord-Kivu).',
    ngoLegalCert: 'RCCM : 14-A-01204 • ID.NAT : 3-93-N55476A • N° Impôt : A0816671x • ARSP : ARSP/CD/0000018850',
    p1: 'L’établissement KAMBALE MACHOZI (KM) est une société congolaise basée à Kinshasa (Cité du Fleuve, Commune de Limete), attachée aux normes les plus élevées en matière de gouvernance, de conformité et d’exécution opérationnelle.',
    p2: 'Vision institutionnelle : Être le partenaire de référence de l’État congolais et des multinationales privées dans le secteur des infrastructures et des services essentiels de notre pays. Nous intervenons selon cinq axes stratégiques qui soutiennent le développement socio-économique de la RDC et renforcent la souveraineté nationale.',
    p3: 'Chaque domaine d’action a été conçu pour générer une valeur directe pour le peuple congolais, en favorisant l’intégration territoriale, la sécurité énergétique et alimentaire, la création d’emplois et le rayonnement international de notre économie.',
    valuesTitle: 'Nos Atouts Stratégiques & Garanties Institutionnelles',
    values: [
      {
        title: 'Conformité Légale & ARSP Totale',
        desc: 'Société 100% congolaise en conformité fiscale, commerciale et sociale totale (RCCM: 14-A-01204, ID.NAT: 3-93-N55476A, N° Impôt: A0816671x, ARSP/CD/0000018850).'
      },
      {
        title: '5 Licences Officielles d’État',
        desc: 'Autorisations officielles délivrées par le Ministère de l’ITPR (Travaux Publics), le Ministère de la Défense nationale (FARDC), le Commerce extérieur, les Hydrocarbures et l’ARSP.'
      },
      {
        title: 'Équipements & Stocks Propres',
        desc: 'Parc propre d’engins lourds de génie civil, stock stratégique de plus de 150 000 litres de carburant et flotte de camions-citernes en acier inoxydable (30 000 à 40 000L) avec GPS et norme ADR.'
      },
      {
        title: 'Qualité SGS & Livraison 24/48h',
        desc: 'Équipe congolaise expérimentée, carburant testé et certifié SGS sans mélange, prix compétitifs et livraison garantie dans les délais à Kinshasa, Kolwezi et Goma.'
      }
    ]
  },
  impactStats: {
    sectionKicker: 'CAPACITÉS OPÉRATIONNELLES',
    title: 'La puissance logistique et industrielle de KAMBALE MACHOZI',
    sub: 'Des infrastructures propres, des licences d’État vérifiables et une présence nationale sur les corridors stratégiques de la RDC.',
    items: [
      {
        id: 'stock-carburant',
        value: 150000,
        suffix: '+ L',
        label: 'Stock stratégique de carburant',
        description: 'Capacité permanente de stockage de Diesel AGO/DDO, Essence PMS et Jet A1 certifié SGS.'
      },
      {
        id: 'licences-etat',
        value: 5,
        suffix: ' Licences',
        label: 'Agréments officiels en RDC',
        description: 'ITPR (Travaux publics), Défense nationale (FARDC), ARSP, Hydrocarbures et Commerce international.'
      },
      {
        id: 'flotte-citernes',
        value: 40000,
        suffix: ' L',
        label: 'Capacité par camion-citerne',
        description: 'Flotte de citernes en acier inoxydable (30 000 à 40 000L) équipées GPS et conformes aux normes ADR.'
      },
      {
        id: 'delai-livraison',
        value: 48,
        suffix: 'h Max',
        label: 'Livraison sur sites miniers',
        description: 'Approvisionnement sécurisé sous 24 à 48 heures sur les sites miniers du Lualaba (Kisanfu, Kolwezi).'
      }
    ]
  },
  pillars: {
    sectionKicker: 'SECTEURS & ACTIONS STRATÉGIQUES',
    title: 'Six axes stratégiques pour la souveraineté et le développement de la RDC.',
    sub: 'Chaque secteur d’intervention d’ETS KAMBALE MACHOZI soutient l’intégration territoriale, la sécurité énergétique et alimentaire, et le rayonnement international de l’économie congolaise.',
    donateToPillar: 'Demander une cotation',
    items: [
      {
        id: 'secteur-routes',
        title: '1. Construction et Réhabilitation des Routes',
        desc: 'Ingénierie civile et construction de routes : sous autorisation officielle du Ministère de l’ITPR, nous réalisons la construction, la réhabilitation et l’entretien des routes, des ponts, des ponceaux et des caniveaux sur toute l’étendue de la RDC.',
        tag: 'Génie civil — Construction de routes',
        keyPoints: [
          'Terrassement, remblayage, compactage et pavage sur terre et asphalte',
          'Construction d’ouvrages d’art, ponts, ponceaux et collecteurs de drainage',
          'Fourniture d’engins lourds : tracteurs à chenilles, niveleuses, compacteurs, camions-bennes'
        ]
      },
      {
        id: 'secteur-carburant',
        title: '2. Fournisseur de Carburant & Lubrifiants',
        desc: 'Plus de 30 ans d’expérience en importation, stockage et distribution de carburant de qualité supérieure : Diesel AGO/DDO, Essence PMS, Lubrifiants et Jet A1 certifié SGS.',
        tag: '30 ans d’expérience • Import, Stockage, Distribution',
        keyPoints: [
          'Carburant certifié SGS, testé en laboratoire (densité, eau, soufre), garanti sans mélange',
          'Stock stratégique de plus de 150 000 litres et flotte de camions-citernes inox ADR avec suivi GPS',
          'Livraison sous 24/48 heures sur les sites miniers du Lualaba (Kisanfu, Kolwezi)'
        ]
      },
      {
        id: 'secteur-fardc',
        title: '3. Fournisseur de Denrées Alimentaires & Rations (FARDC)',
        desc: 'Partenaire des FARDC (Forces Armées de la RDC) en tant que fournisseur officiel de gêneros alimentícios, denrées et rations de combat pour la souveraineté nationale.',
        tag: 'Fournisseur Officiel FARDC',
        keyPoints: [
          'Approvisionnement en denrées alimentaires, vivres frais et secs pour les forces armées',
          'Riz, haricots, maïs, farine, huile, sel, sucre, conserves et rations de combat',
          'Respect rigoureux de la chaîne du froid et entreposage hautement sécurisé'
        ]
      },
      {
        id: 'secteur-agro',
        title: '4. Agro-industrie, Fabrication de Savons & Export Café/Cacao',
        desc: 'Agronegócio : fabrication de savons et agriculture, combinée à l’exportation internationale de Café Arabica, Robusta et fèves de cacao congolaises de premier choix.',
        tag: 'Fabrication de Savons — Agriculture & Export',
        keyPoints: [
          'Fabrication locale de savons et initiatives agricoles durables',
          'Collecte et valorisation des productions agricoles des coopératives congolaises',
          'Exportation par conteneur vers l’Europe, Dubaï, la Turquie et les USA'
        ]
      },
      {
        id: 'secteur-mines',
        title: '5. L’Exploitation Minière et Sous-Traitance en RDC',
        desc: 'Opérations minières et sous-traitance industrielle au Lualaba, dans le Haut-Katanga et au Nord-Kivu (ARSP/CD/0000018850), partenaire de confiance pour les grands opérateurs.',
        tag: 'Lualaba • Haut-Katanga • ARSP',
        keyPoints: [
          'Logistique minière intégrée (carburant SGS, équipements lourds, pièces détachées)',
          'Sous-traitance de génie civil : ouverture et entretien de routes minières',
          'Commerce du cuivre et du cobalt en partenariat et soutien à l’économie locale'
        ]
      },
      {
        id: 'secteur-douane',
        title: '6. Agence en Douane — Rwenzori Transit Agency',
        desc: 'Agência aduaneira : Rwenzori Transit Agency, spécialisée dans le transit, le dédouanement et la logistique aux frontières de la RDC pour sécuriser et accélérer tous vos flux d’import-export.',
        tag: 'Rwenzori Transit Agency',
        keyPoints: [
          'Dédouanement rapide et conformité douanière aux frontières terrestres et portuaires',
          'Gestion experte des formalités d’importation de carburant, engins et marchandises',
          'Sécurisation de la chaîne logistique internationale et transit transfrontalier'
        ]
      }
    ]
  },
  humaneImpact: {
    kicker: 'SOUVERAINETÉ & EXÉCUTION OPÉRATIONNELLE',
    word1: 'BÂTIR.',
    word2: 'FOURNIR.',
    word3: 'Développer.',
    body: '« Nous espérons contribuer de manière significative au développement de notre pays, grâce à un engagement envers l’excellence et la technologie. » De Kinshasa à Kolwezi et Goma, ETS KAMBALE MACHOZI mobilise ses flottes, ses ingénieurs et ses stocks stratégiques au service de l’État congolais et des multinationales.',
    cta: 'Soumettre un appel d’offres'
  },
  projects: {
    sectionKicker: 'OPÉRATIONS & CAPACITÉS DE TERRAIN',
    title: 'Des infrastructures et chaînes logistiques au service de la RDC',
    sub: 'Découvrez nos déploiements opérationnels majeurs en génie civil, approvisionnement pétrolier, logistique de défense, sous-traitance minière et agro-exportation.',
    benefitLabel: 'Valeur ajoutée & garantie opérationnelle',
    supervisedBy: 'Direction Générale — ETS KAMBALE MACHOZI',
    supportBtn: 'Demander une offre technique',
    items: [
      {
        id: 'corridor-carburant-lualaba',
        title: 'Logistique Pétrolière & Stock Stratégique Lualaba',
        subtitle: 'Importation directe Dar es Salaam & Beira • Certifié SGS',
        location: 'Kolwezi & Kisanfu, Province du Lualaba',
        image: kmFuelFleetImg,
        category: 'assainissement',
        description: 'Chaîne d’approvisionnement continu en Diesel AGO/DDO, Essence PMS, Lubrifiants et Jet A1 pour les sociétés minières, entreprises de BTP, ONG et transporteurs opérant dans la ceinture cuprifère.',
        stats: [
          { label: 'Stock Stratégique', value: '150 000+ L' },
          { label: 'Citernes Inox ADR', value: '30–40 000 L' },
          { label: 'Délai Livraison', value: '24 / 48h' }
        ],
        impactDetail: 'Carburant testé et certifié SGS (densité, eau, soufre) garanti sans mélange, acheminé par notre flotte propre équipée de suivi GPS en temps réel.'
      },
      {
        id: 'chantiers-routes-itpr',
        title: 'Génie Civil, Routes & Ouvrages d’Art ITPR',
        subtitle: 'Terrassement, pavage asphalte & location d’engins lourds',
        location: 'Kinshasa, Lualaba, Haut-Katanga, Nord-Kivu, Kasaï',
        image: kmHeroRoadsImg,
        category: 'social',
        description: 'Exécution de marchés publics et privés de construction et réhabilitation de routes, ponts, ponceaux et caniveaux, appuyée par notre propre parc de tracteurs à chenilles, niveleuses, compacteurs et camions-bennes.',
        stats: [
          { label: 'Zones Couvertes', value: '5 Pôles RDC' },
          { label: 'Agrément d’État', value: 'Licence ITPR' },
          { label: 'Parc Engins BTP', value: '100% Propre' }
        ],
        impactDetail: 'Désenclavement des bassins économiques et miniers grâce à des chaussées durables et des ouvrages de drainage dimensionnés pour le climat tropical.'
      },
      {
        id: 'exploitation-sous-traitance-miniere',
        title: 'Sous-Traitance Minière & Cuivre-Cobalt',
        subtitle: 'Agrément ARSP/CD/0000018850 • Lualaba & Haut-Katanga',
        location: 'Kolwezi, Kisanfu, Mutanda & Kamoto',
        image: kmMiningLualabaImg,
        category: 'sante',
        description: 'Prestations intégrées de sous-traitance minière : préparation de sites, pistes et routes minières, fourniture d’équipements et de pièces détachées, et commerce de cuivre et cobalt en partenariat.',
        stats: [
          { label: 'Conformité ARSP', value: '0000018850' },
          { label: 'Bassin Minier', value: 'Lualaba / Katanga' },
          { label: 'Disponibilité', value: '24h / 7j' }
        ],
        impactDetail: 'Un interlocuteur unique 100% congolais en totale conformité fiscale et réglementaire pour les géants miniers internationaux en RDC.'
      },
      {
        id: 'export-cafe-cacao-fardc',
        title: 'Agro-Exportation Café/Cacao & Approvisionnement FARDC',
        subtitle: 'Coopératives agricoles & sécurité alimentaire stratégique',
        location: 'Nord-Kivu, Ituri, Kasaï, Kinshasa & Matadi',
        image: kmCoffeeCocoaImg,
        category: 'agriculture',
        description: 'Double compétence agro-industrielle : exportation par conteneur de Café Arabica/Robusta et Cacao Forastero/Trinitario (sacs de jute 60 kg) vers l’Europe, Dubaï, la Turquie et les USA, et fourniture officielle de rations aux FARDC.',
        stats: [
          { label: 'Conditionnement', value: 'Sacs 60 kg' },
          { label: 'Ports d’Export', value: 'Matadi & Dar' },
          { label: 'Licence Défense', value: 'FARDC Officiel' }
        ],
        impactDetail: 'Soutien direct aux coopératives paysannes congolaises, rayonnement international de nos terroirs et souveraineté alimentaire pour la Défense nationale.'
      }
    ]
  },
  map: {
    sectionKicker: 'PRÉSENCE NATIONALE & CORRIDORS',
    title: 'Nos pôles opérationnels en République Démocratique du Congo',
    sub: 'Du siège social de la Cité du Fleuve à Kinshasa jusqu’aux antennes minières de Kolwezi et aux bassins agro-exportateurs de Goma et Beni.',
    activeCountPill: 'Siège Kinshasa + Antennes Nationales',
    locations: [
      {
        id: 'boma',
        name: 'Kinshasa (Siège Social)',
        zone: 'Cité du Fleuve, Commune de Limete',
        title: 'Direction Générale, Travaux Publics ITPR & Centrale FARDC',
        desc: 'Siège administratif et opérationnel de l’établissement KAMBALE MACHOZI (KM). Coordination des marchés d’infrastructures routières, stockage sécurisé des rations FARDC et pilotage des exportations.',
        stats: 'RCCM: 14-A-01204 • ID.NAT: 3-93-N55476A • Impôt: A0816671x',
        activeInitiatives: [
          'Direction Générale présidée par M. Bertrand Kambale Machozi',
          'Entrepôts centraux sécurisés & respect de la chaîne du froid (FARDC)',
          'Parc d’engins lourds de génie civil (niveleuses, compacteurs, bennes)'
        ]
      },
      {
        id: 'matadi',
        name: 'Kolwezi & Kisanfu (Lualaba)',
        zone: 'Antenne Minière — Lualaba & Haut-Katanga',
        title: 'Dépôt Pétrolier Stratégique (+150 000L) & Sous-Traitance Minière',
        desc: 'Base logistique dédiée aux grands opérateurs miniers (Kisanfu Mining, Mutanda, Kamoto). Livraison sous 24/48h de carburant certifié SGS et travaux de génie civil minier.',
        stats: 'ARSP/CD/0000018850 • Citernes Inox 30 000 à 40 000L ADR/GPS',
        activeInitiatives: [
          'Distribution de Diesel AGO/DDO, Essence PMS, Lubrifiants & Jet A1',
          'Préparation de sites miniers, routes d’accès et fourniture de pièces',
          'Commerce du cuivre et du cobalt en partenariat'
        ]
      },
      {
        id: 'kabondo',
        name: 'Goma & Beni (Nord-Kivu / Ituri)',
        zone: 'Antenne Est — Grands Lacs & Agro-Industrie',
        title: 'Filière Café Arabica, Cacao Biologique & Génie Civil',
        desc: 'Pôle de collecte, contrôle d’humidité et conditionnement en sacs de jute de 60 kg en partenariat avec les coopératives agricoles du Nord-Kivu et de l’Ituri, ainsi que chantiers routiers régionaux.',
        stats: 'Café Arabica & Cacao Forastero / Trinitario • Corridor Dar es Salaam',
        activeInitiatives: [
          'Collecte solidaire auprès des coopératives agricoles congolaises',
          'Contrôle qualité strict (humidité, degré) avant expédition conteneur',
          'Réhabilitation d’axes routiers et ouvrages de franchissement'
        ]
      },
      {
        id: 'bas-fleuve',
        name: 'Matadi & Kasaï (Corridors Export)',
        zone: 'Port Maritime International & Bassin Robusta',
        title: 'Hub d’Exportation Maritime & Réseaux Routiers Nationaux',
        desc: 'Interface portuaire stratégique pour l’exportation par conteneur de notre Café Robusta (Kasaï, Équateur) et Cacao vers Rotterdam, Anvers, Dubaï, la Turquie et les États-Unis.',
        stats: 'Marchés : Europe (Rotterdam, Anvers) • Dubaï • Turquie • USA',
        activeInitiatives: [
          'Logistique conteneurisée via Kinshasa, Matadi et Dar es Salaam',
          'Valorisation du Café Robusta du Kasaï et de l’Équateur',
          'Entretien de routes, ponts et ponceaux d’intérêt national'
        ]
      }
    ]
  },
  team: {
    sectionKicker: 'GOUVERNANCE & DIRECTION GÉNÉRALE',
    title: 'Un leadership congolais d’excellence et de conformité',
    sub: 'Sous l’impulsion de M. Bertrand Kambale Machozi, ETS KAMBALE MACHOZI s’appuie sur une équipe congolaise expérimentée, intègre et tournée vers la performance industrielle.',
    presidentCardBadge: 'Direction Générale',
    activeMandate: 'Conformité Totale RDC',
    strategicVisionSubtitle: 'ETS KAMBALE MACHOZI (KM) — Gouvernance & Vision Stratégique',
    directorsHeader: 'Directions Opérationnelles & Pôles Sectoriels',
    members: [
      {
        name: 'M. Bertrand Kambale Machozi',
        role: 'Directeur Général / CEO',
        location: 'Siège Social : Cité du Fleuve, Limete, Kinshasa – RDC',
        image: kmBertrandCeoImg,
        bio: 'Dirigeant d’entreprise congolais à la tête de l’établissement KAMBALE MACHOZI (KM). Ayant exercé plus de 5 ans comme Président de la Fédération des Entreprises du Congo (F.E.C.), il conjugue plus de 30 ans d’expérience dans les hydrocarbures (importation, stockage, distribution), l’ingénierie civile (construction de routes), l’agro-industrie (fabrication de savons, agriculture) et l’approvisionnement des FARDC en denrées alimentaires. Il pilote le développement stratégique de KM à travers ses 6 secteurs clés.',
        quote: 'Nous espérons contribuer de manière significative au développement de notre pays, grâce à un engagement envers l’excellence et la technologie.'
      },
      {
        name: 'Direction Hydrocarbures & Mines',
        role: 'Pôle Énergie & Sous-Traitance ARSP',
        location: 'Antenne de Kolwezi — Lualaba & Haut-Katanga',
        image: placideBaundjaImg,
        bio: 'Supervise les importations directes de produits pétroliers depuis Dar es Salaam et Beira, la gestion du stock stratégique de +150 000 litres certifié SGS, la flotte de camions-citernes inox ADR avec GPS et les opérations de sous-traitance minière (ARSP/CD/0000018850) auprès des sites de Kisanfu, Mutanda et Kamoto.',
        quote: 'Garantir aux opérateurs miniers du Lualaba un carburant pur certifié SGS et une livraison infaillible en 24 à 48 heures.'
      },
      {
        name: 'Direction Génie Civil & Travaux Publics',
        role: 'Pôle Infrastructures ITPR & Engins Lourds',
        location: 'Kinshasa, Lualaba, Haut-Katanga, Nord-Kivu & Kasaï',
        image: doudouNzangaImg,
        bio: 'Pilote les chantiers de construction, réhabilitation et entretien des routes, ponts, ponceaux et caniveaux sous licence officielle du Ministère de l’ITPR. Gère le parc propre d’engins lourds : tracteurs à chenilles, niveleuses, compacteurs et camions-bennes.',
        quote: 'Bâtir des infrastructures routières pérennes qui relient nos provinces et soutiennent la croissance économique nationale.'
      },
      {
        name: 'Direction Agro-Export & Logistique FARDC',
        role: 'Pôle Café/Cacao & Approvisionnement Défense',
        location: 'Kinshasa, Beni (Nord-Kivu), Ituri & Port de Matadi',
        image: felixTshimangaImg,
        bio: 'Coordonne d’une part l’approvisionnement officiel en rations militaires et vivres pour les FARDC dans le strict respect de la chaîne du froid, et d’autre part la collecte auprès des coopératives, le contrôle qualité et l’exportation de Café Arabica/Robusta et Cacao vers l’Europe (Rotterdam, Anvers), Dubaï, la Turquie et les USA.',
        quote: 'Allier la sécurité alimentaire de notre Défense nationale au rayonnement mondial du café et du cacao congolais.'
      }
    ]
  },
  partners: {
    sectionKicker: 'AGRÉMENTS, CERTIFICATIONS & ÉCOSYSTÈME',
    title: 'Licences Officielles & Partenaires Stratégiques',
    sub: 'ETS KAMBALE MACHOZI opère avec 5 licences officielles en République Démocratique du Congo et accompagne les institutions étatiques, les grands groupes miniers du Lualaba et les acheteurs internationaux.',
    becomePartnerBtn: 'Initier un partenariat ou contrat'
  },
  aerialSupport: {
    title: 'PARTENAIRE STRATÉGIQUE DE VOS OPÉRATIONS',
    subtitle: 'Carburant certifié SGS livré en 24/48h, Génie Civil ITPR, Sous-traitance minière ARSP, Fournitures FARDC et Export Café & Cacao.',
    donateBtn: 'Demander une cotation',
    otherWaysBtn: 'Fiche légale & identifiants'
  },
  action: {
    sectionKicker: 'COLLABORER AVEC KM',
    title: 'Trois modalités d’engagement B2B et institutionnel.',
    sub: 'Une réactivité opérationnelle immédiate appuyée par nos stocks propres et nos 5 licences officielles.',
    way1Title: 'Commande de Carburant & Logistique',
    way1Desc: 'Livraison sous 24/48h de Diesel AGO/DDO, Essence PMS, Lubrifiants et Jet A1 certifiés SGS sur vos sites miniers et chantiers.',
    way1Btn: 'Demander une cotation carburant',
    way2Title: 'Marchés de Génie Civil & Sous-Traitance',
    way2Desc: 'Construction de routes, ponts, terrassement, location d’engins lourds (ITPR) et sous-traitance minière agréée ARSP.',
    way2Btn: 'Soumettre un cahier des charges',
    way3Title: 'Contrats Export Café/Cacao & Approvisionnement',
    way3Desc: 'Commandes par conteneur de Café Arabica/Robusta et Cacao bio (sacs 60 kg) ou contrats d’approvisionnement en vivres.',
    way3Btn: 'Contacter la Direction Générale'
  },
  news: {
    sectionKicker: 'ACTUALITÉS & OPÉRATIONS KM',
    title: 'Nos réalisations et déploiements à travers la RDC',
    sub: 'Suivez l’actualité industrielle, minière, logistique et agro-exportatrice de l’établissement KAMBALE MACHOZI.',
    readArticle: 'Lire le dossier complet',
    items: [
      {
        id: 'news-1',
        title: 'Secteur Hydrocarbures : KAMBALE MACHOZI renforce son stock stratégique de +150 000 litres certifié SGS pour le Lualaba',
        date: 'Mars 2026',
        category: 'Carburant & Logistique',
        readTime: '3 min',
        excerpt: 'Grâce à l’importation directe depuis Dar es Salaam (Tanzanie) et Beira (Mozambique), KM garantit aux sites miniers de Kolwezi et Kisanfu une livraison en 24/48 heures.',
        content: [
          'Pour répondre à la demande croissante des sociétés minières, des entreprises de construction, des ONG et des transporteurs dans la province du Lualaba, l’établissement KAMBALE MACHOZI (KM) a consolidé ses capacités logistiques pétrolières.',
          'Tous nos produits — Diesel AGO/DDO, Essence PMS, Lubrifiants et Jet A1 sur commande spéciale — sont rigoureusement certifiés SGS et testés sur la densité, la teneur en eau et le soufre, garantissant un carburant pur sans aucun mélange.',
          'Notre flotte propre de camions-citernes en acier inoxydable (d’une capacité de 30 000 à 40 000 litres), équipée de systèmes GPS et conforme aux normes ADR, assure des livraisons sécurisées sous 24 à 48 heures directement sur les sites de Kisanfu et Kolwezi.'
        ],
        image: kmFuelFleetImg
      },
      {
        id: 'news-2',
        title: 'Infrastructures ITPR & Sous-traitance Minière ARSP : déploiement de notre flotte d’engins lourds sur les grands axes',
        date: 'Février 2026',
        category: 'Routes & Mines',
        readTime: '4 min',
        excerpt: 'Détenteur de l’autorisation du Ministère de l’ITPR et du certificat ARSP/CD/0000018850, KM accélère ses travaux de terrassement, pavage et routes minières.',
        content: [
          'L’intégration territoriale et l’efficacité des opérations minières reposent sur des infrastructures routières fiables. Sous autorisation du Ministère de l’ITPR, ETS KAMBALE MACHOZI réalise la construction, la réhabilitation et l’entretien des routes, ponts, ponceaux et caniveaux à Kinshasa, au Lualaba, dans le Haut-Katanga, au Nord-Kivu et au Kasaï.',
          'L’entreprise met à disposition son propre parc d’engins lourds comprenant tracteurs à chenilles, niveleuses, compacteurs et camions-bennes pour les travaux de terrassement, remblayage, compactage et pavage sur terre et asphalte.',
          'En parallèle, dans le cadre de son agrément ARSP (ARSP/CD/0000018850), KM développe ses activités de sous-traitance minière et de commerce du cuivre et du cobalt en partenariat avec les grands acteurs de Kolwezi.'
        ],
        image: kmHeroRoadsImg
      },
      {
        id: 'news-3',
        title: 'Agro-Industrie & Souveraineté : exportation de Café et Cacao congolais vers l’Europe, Dubaï, la Turquie et les USA',
        date: 'Janvier 2026',
        category: 'Agro-Export & FARDC',
        readTime: '3 min',
        excerpt: 'En partenariat avec les coopératives agricoles du Nord-Kivu, de l’Ituri, du Kasaï et de l’Équateur, KM valorise les terroirs congolais sur les marchés mondiaux.',
        content: [
          'Le quatrième pilier stratégique de KAMBALE MACHOZI porte haut les couleurs de l’agriculture congolaise à l’international. Nous collectons et exportons du Café Arabica (Nord-Kivu, Ituri), du Café Robusta (Kasaï, Équateur) ainsi que des fèves de cacao Forastero et Trinitario certifiées biologiques sur demande.',
          'Chaque lot fait l’objet d’un contrôle de qualité strict (taux d’humidité, degré) avant d’être conditionné en sacs de jute de 60 kg et expédié par conteneur via Kinshasa, Matadi et Dar es Salaam à destination de Rotterdam, Anvers, Dubaï, la Turquie et les États-Unis.',
          'Parallèlement, fort de l’autorisation du Ministère de la Défense nationale, KM assure avec honneur et rigueur la fourniture officielle de rations militaires et vivres stratégiques aux FARDC sur tous les fronts.'
        ],
        image: kmCoffeeCocoaImg
      }
    ]
  },
  newsDetail: {
    backToNews: 'Retour aux actualités KM',
    share: 'Partager',
    linkCopied: 'Lien copié !',
    readTimeLabel: 'de lecture',
    relatedTitle: 'Autres dossiers opérationnels',
    supportTitle: 'Besoin d’un partenaire stratégique en RDC ?',
    supportDesc: 'Contactez la Direction Générale d’ETS KAMBALE MACHOZI pour vos appels d’offres en génie civil, carburant SGS, sous-traitance minière ou agro-exportation.',
    donateCta: 'Demander une cotation'
  },
  otherWaysToDonate: {
    backHome: 'Retour à l’accueil',
    badge: 'Portail Client, Conformité & Cotations B2B',
    title: 'Conformité légale totale et capacités contractuelles en RDC.',
    sub: 'Retrouvez l’ensemble des identifiants officiels d’ETS KAMBALE MACHOZI (RCCM, ID.NAT, N° Impôt, ARSP), simulez vos besoins opérationnels et contactez directement notre Direction Générale à Kinshasa, Kolwezi ou Beni.',
    simBtn: 'Simuler une commande / contrat',
    exploreBtn: 'Voir nos identifiants légaux',
    simTitle: 'Simulateur de Capacités & Cotations par Secteur',
    simSub: 'Sélectionnez un volume ou palier opérationnel pour visualiser nos standards de livraison :',
    monthly: 'Contrat Cadre Régulier',
    once: 'Commande Ponctuelle / Spot',
    impactLabel: 'Capacité opérationnelle garantie :',
    donateNowBtn: 'Demander une offre officielle',
    secureNote: 'Facturation normalisée DGI • Certificat SGS • Conformité ARSP/CD/0000018850.',
    waysTitle: 'Identifiants Officiels & Coordonnées Directes',
    waysSub: 'Vérifiez et copiez en un clic nos numéros d’enregistrement légaux en République Démocratique du Congo.',
    mobileMoneyTitle: 'Identifiants Légaux & Licences d’État (RDC)',
    mobileMoneyDesc: 'Établissement de droit congolais en conformité fiscale, commerciale, sociale et ARSP totale.',
    bankTransferTitle: 'Siège Social & Antennes Opérationnelles',
    bankTransferDesc: 'Présence nationale assurant la réactivité de nos équipes à Kinshasa, dans le Lualaba et au Nord-Kivu.',
    copyLabel: 'Copier',
    copiedLabel: 'Copié !',
    cardsTitle: 'Service Commercial & Appels d’Offres',
    cardsDesc: 'Transmission directe de vos cahiers des charges, demandes de cotation (RFQ) Diesel/Jet A1, BTP, sous-traitance minière ou commandes export Café/Cacao.',
    inKindTitle: 'Location d’Engins Lourds & Sous-Traitance ITPR / ARSP',
    inKindDesc: 'Disponibilité immédiate de tracteurs à chenilles, niveleuses, compacteurs, camions-bennes et camions-citernes inox ADR (30 000 à 40 000L).',
    inKindBtn: 'Solliciter une fiche technique',
    taxReceiptTitle: 'Certifications Qualité SGS & Normes Internationales',
    taxReceiptDesc: 'Tous nos carburants sont accompagnés de certificats d’analyse SGS (densité, eau, soufre) et nos lots de café/cacao sont contrôlés avant embarquement.'
  },
  volunteerModal: {
    title: 'Soumettre un Appel d’Offres / Devis',
    sub: 'Génie civil ITPR, carburant certifié SGS (24/48h), rations FARDC, export café/cacao ou sous-traitance minière ARSP.',
    nameLabel: 'Nom complet / Responsable *',
    namePlaceholder: 'Votre nom et prénom',
    emailLabel: 'Adresse e-mail professionnelle *',
    phoneLabel: 'Téléphone / WhatsApp *',
    countryLabel: 'Ville / Province ou Pays',
    areaLabel: 'Secteur concerné par votre demande',
    areaOptions: [
      'Secteur 1 : Construction & Réhabilitation des Routes (ITPR)',
      'Secteur 2 : Fourniture de Carburant SGS (Diesel, PMS, Jet A1)',
      'Secteur 3 : Approvisionnement & Rations Alimentaires (FARDC / Institutions)',
      'Secteur 4 : Exportation Internationale de Café & Cacao (Sacs 60kg)',
      'Secteur 5 : Exploitation & Sous-Traitance Minière (Lualaba / Katanga)'
    ],
    availLabel: 'Délai d’exécution souhaité',
    availOptions: [
      'Urgence opérationnelle (Livraison 24h / 48h)',
      'Court terme (Sous 1 à 4 semaines)',
      'Contrat-cadre pluriannuel / Appel d’offres'
    ],
    submitBtn: 'Transmettre la demande de cotation',
    successTitle: 'Demande enregistrée avec succès !',
    successDesc: 'La Direction Générale d’ETS KAMBALE MACHOZI vous répondra sous 24 heures avec une proposition technique et commerciale détaillée.',
    closeBtn: 'Fermer'
  },
  partnerModal: {
    title: 'Partenariat Stratégique & Sous-Traitance',
    sub: 'Sociétés minières (Lualaba/Katanga), institutions publiques de la RDC, acheteurs internationaux de matières premières et multinationales.',
    orgLabel: 'Nom de la société ou de l’institution *',
    orgPlaceholder: 'Ex: Société Minière, Ministère, Importateur Café/Cacao...',
    repLabel: 'Représentant(e) / Fonction *',
    repPlaceholder: 'Nom complet et titre officiel',
    emailLabel: 'E-mail professionnel *',
    typeLabel: 'Nature du partenariat',
    typeOptions: [
      'Sous-traitance minière & logistique (ARSP/CD/0000018850)',
      'Approvisionnement régulier en carburant certifié SGS',
      'Marché d’infrastructures routières & location d’engins (ITPR)',
      'Importation internationale de Café Arabica/Robusta & Cacao',
      'Fourniture institutionnelle & Défense nationale'
    ],
    msgLabel: 'Objet et volumes estimés du partenariat *',
    msgPlaceholder: 'Précisez vos besoins techniques, sites de livraison ou volumes souhaités...',
    submitBtn: 'Envoyer la proposition à la Direction Générale',
    successTitle: 'Proposition transmise à la Direction Générale !',
    successDesc: 'Le cabinet de M. Bertrand Kambale Machozi étudiera votre dossier en priorité.',
    closeBtn: 'Fermer'
  },
  contact: {
    sectionKicker: 'NOS CONTACTS & COORDONNÉES',
    title: 'Contactez la Direction Générale',
    sub: 'L’établissement KAMBALE MACHOZI (KM) est à votre écoute à Kinshasa, Kolwezi et Beni/Goma pour répondre à vos besoins en infrastructures, carburant, mines et agro-exportation.',
    hqDrcTitle: 'Siège Social — Kinshasa, RDC',
    hqDrcOrg: 'ETS KAMBALE MACHOZI (KM) — Direction Générale',
    hqDrcLoc: 'Av. Colonel Ebeya n°1746/A, C/Gombe, Kinshasa – RDC | Hubs : Kolwezi (Lualaba) – Goma (Nord-Kivu) – Matadi',
    intlUsaTitle: 'Identifiants Légaux Officiels',
    intlUsaOrg: 'RCCM : CD/KNG/RCCM/20-A-01815 • ID.NAT : 01-F4300-N63029P',
    intlUsaLoc: 'N° Impôt : A2161439L • ARSP : 3914908074',
    formTitle: 'Envoyer un message à M. Bertrand Kambale Machozi',
    formSub: 'Remplissez le formulaire ci-dessous pour joindre la Direction Générale via WhatsApp (+55 91 996156672 / directeur@kambalemachozi.com).',
    nameLabel: 'Nom complet / Société *',
    namePlaceholder: 'Votre nom et organisation',
    emailLabel: 'Adresse e-mail *',
    subjectLabel: 'Secteur d’activité concerné',
    subjectOptions: [
      '1. Routes, Travaux Publics & Engins Lourds (ITPR)',
      '2. Commande de Carburant SGS (Diesel, PMS, Jet A1)',
      '3. Fournitures & Rations Militaires (FARDC)',
      '4. Exportation Internationale de Café & Cacao',
      '5. Exploitation & Sous-Traitance Minière (Lualaba/Katanga)',
      'Autre demande institutionnelle'
    ],
    msgLabel: 'Votre message ou cahier des charges *',
    msgPlaceholder: 'Décrivez votre projet, les quantités souhaitées ou le site d’intervention...',
    sendBtn: 'Envoyer vers WhatsApp (+55 91 996156672)',
    sentSuccessTitle: 'Message transmis vers WhatsApp !',
    sentSuccessDesc: 'Votre message a été préparé pour transmission immédiate à notre Direction Générale sur WhatsApp.'
  },
  footer: {
    desc: 'Établissement de droit congolais basé à Kinshasa (Gombe), partenaire multisectoriel stratégique pour les infrastructures routières (ITPR), la distribution de carburant (12 000 m³/mois), les fournitures FARDC, l’exportation de café/cacao et la sous-traitance minière (ARSP).',
    certText: 'RCCM: CD/KNG/RCCM/20-A-01815 • ID.NAT: 01-F4300-N63029P • N° Impôt: A2161439L • ARSP: 3914908074',
    followUs: 'Canaux de communication & réseaux officiels',
    quickLinksTitle: 'Navigation',
    programsTitle: 'Nos 5 Secteurs',
    donateBoxTitle: 'Cotation & Contrats',
    donateBoxDesc: 'WhatsApp : +55 91 996156672 • Email : directeur@kambalemachozi.com • Siège : Gombe, Kinshasa.',
    donateBoxBtn: 'Demander un devis',
    copyright: '© 2026 ETS KAMBALE MACHOZI (KM). Tous droits réservés.',
    allRightsReserved: 'Construire l’Avenir en République Démocratique du Congo.',
    backToTop: 'Haut de page'
  }
};
