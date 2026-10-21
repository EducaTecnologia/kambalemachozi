import { TranslationSchema } from './types';
import kmHeroRoadsImg from '../../assets/images/km_hero_roads_construction_1790912438335.jpg';
import kmFuelFleetImg from '../../assets/images/km_fuel_logistics_fleet_1790912449357.jpg';
import kmMiningLualabaImg from '../../assets/images/km_mining_lualaba_operations_1790912459813.jpg';
import kmCoffeeCocoaImg from '../../assets/images/km_coffee_cocoa_export_1790912469517.jpg';
import kmBertrandCeoImg from '../../assets/images/km_bertrand_ceo_portrait_1790912489891.jpg';
import placideBaundjaImg from '../../assets/images/placide_baundja_portrait.jpg';
import doudouNzangaImg from '../../assets/images/doudou_nzanga_executive_1790216344257.jpg';
import felixTshimangaImg from '../../assets/images/felix_tshimanga_portrait_1790214209611.jpg';

export const esTranslations: TranslationSchema = {
  brandTagline: 'Construir el Futuro — Socio multisectorial estratégico en la RDC',
  nav: {
    home: 'Inicio',
    about: 'La Empresa',
    programs: 'Nuestros 5 Sectores',
    projects: 'Operaciones',
    locations: 'Presencia en RDC',
    team: 'Dirección',
    supporters: 'Licencias y Socios',
    news: 'Noticias',
    otherWaysToDonate: 'Cotizaciones y Cumplimiento',
    contact: 'Contacto',
    donate: 'Solicitar cotización'
  },
  preloader: {
    skip: 'Entrar al sitio',
    loading: 'Cargando perfil corporativo KAMBALE MACHOZI...',
    slides: [
      {
        title: 'Sector 1 : Construcción y rehabilitación de carreteras (ITPR)',
        location: 'Kinshasa, Lualaba, Haut-Katanga, Nord-Kivu, Kasaï',
        tag: 'Carreteras y Obras Públicas'
      },
      {
        title: 'Sector 2 : Proveedor de combustible certificado SGS (+150.000L)',
        location: 'Corredor Dar es Salaam y Beira → Kolwezi / Kisanfu',
        tag: 'Distribución de Combustible'
      },
      {
        title: 'Sector 3 : Proveedor oficial de raciones militares a las FARDC',
        location: 'Ministerio de Defensa Nacional — Todos los Frentes RDC',
        tag: 'Logística y Defensa'
      },
      {
        title: 'Sector 4 : Exportador internacional de Café y Cacao congoleño',
        location: 'Nord-Kivu, Ituri, Kasaï → Europa, Dubái, Turquía, EE.UU.',
        tag: 'Agroindustria Internacional'
      },
      {
        title: 'Sector 5 : Explotación minera y subcontratación (ARSP)',
        location: 'Lualaba, Haut-Katanga y Nord-Kivu',
        tag: 'Minería y Subcontratación'
      }
    ]
  },
  hero: {
    kicker: 'ETS KAMBALE MACHOZI (KM) • RCCM: 14-A-01204',
    slide1Title: 'CONSTRUIR EL FUTURO.',
    slide1Sub: 'Socio multisectorial estratégico para el desarrollo y las infraestructuras de la República Democrática del Congo.',
    slide1Cta1: 'Descubrir nuestros 5 sectores',
    slide1Cta2: 'Solicitar cotización',
    slide2Title: 'Proveedor estratégico de combustible y logística minera.',
    slide2Sub: 'Diésel AGO/DDO, Gasolina PMS, Lubricantes y Jet A1 certificados por SGS. Stock de +150.000 litros y entrega en 24/48h en Kolwezi y Kisanfu.',
    slide2Cta: 'Ver capacidad logística',
    slide3Title: 'Obras Viales ITPR, Suministros FARDC, Minería y Agroexportación.',
    slide3Sub: 'Empresa 100% congoleña con 5 licencias oficiales y cumplimiento fiscal, comercial y ARSP total en la RDC.',
    slide3Cta: 'Explorar operaciones'
  },
  mission: {
    sectionKicker: 'LIDERAZGO Y VISIÓN EMPRESARIAL',
    title: 'Excelencia en gestión multisectorial y cumplimiento total en la RDC.',
    manifestoQuote: '« Esperamos contribuir de manera significativa al desarrollo de nuestro país, gracias a un compromiso con la excelencia y la tecnología. »',
    badgeRdc: '🇨🇩 Sede : Cité du Fleuve, Kinshasa',
    oathDesc: 'Dirección General : Sr. Bertrand KAMBALE MACHOZI • Sociedad 100% de derecho congoleño • Sucursales en Kolwezi (Lualaba) y Beni / Goma (Nord-Kivu).',
    ngoLegalCert: 'RCCM : 14-A-01204 • ID.NAT : 3-93-N55476A • N° Impôt : A0816671x • ARSP : ARSP/CD/0000018850',
    p1: 'El establecimiento KAMBALE MACHOZI (KM) es una sociedad congoleña con sede en Kinshasa (Cité du Fleuve, Comuna de Limete), comprometida con las normas más exigentes de gobernanza, cumplimiento y ejecución operativa.',
    p2: 'Visión institucional : Ser el socio de referencia del Estado congoleño y de las multinacionales privadas en el sector de las infraestructuras y los servicios esenciales de nuestro país. Intervenimos en cinco ejes estratégicos que impulsan el desarrollo socioeconómico de la RDC.',
    p3: 'Cada área de acción genera valor directo para el pueblo congoleño, promoviendo la integración territorial, la seguridad energética y alimentaria, la creación de empleo y la proyección internacional de nuestra economía.',
    valuesTitle: 'Nuestras Ventajas Competitivas y Garantías',
    values: [
      {
        title: 'Cumplimiento Legal y ARSP Total',
        desc: 'Sociedad 100% congoleña en total conformidad fiscal, comercial y social (RCCM: 14-A-01204, ID.NAT: 3-93-N55476A, N° Impôt: A0816671x, ARSP/CD/0000018850).'
      },
      {
        title: '5 Licencias Oficiales de Estado',
        desc: 'Autorizaciones oficiales del Ministerio de ITPR (Obras Públicas), Ministerio de Defensa Nacional (FARDC), Comercio Exterior, Hidrocarburos y ARSP.'
      },
      {
        title: 'Maquinaria y Stock Propios',
        desc: 'Flota propia de maquinaria pesada de ingeniería civil, stock estratégico de +150.000 litros de combustible y camiones cisterna de acero inoxidable (30.000 a 40.000L) con GPS y ADR.'
      },
      {
        title: 'Calidad SGS y Entrega 24/48h',
        desc: 'Equipo congoleño experimentado, combustible certificado SGS sin mezcla, precios competitivos y entrega puntual en Kinshasa, Kolwezi y Goma.'
      }
    ]
  },
  impactStats: {
    sectionKicker: 'CAPACIDAD OPERATIVA',
    title: 'El músculo logístico e industrial de KAMBALE MACHOZI',
    sub: 'Infraestructura propia, licencias estatales verificables y presencia nacional en los corredores estratégicos de la RDC.',
    items: [
      {
        id: 'stock-carburant',
        value: 150000,
        suffix: '+ L',
        label: 'Stock estratégico de combustible',
        description: 'Capacidad permanente de almacenamiento de Diésel AGO/DDO, Gasolina PMS y Jet A1 certificado por SGS.'
      },
      {
        id: 'licences-etat',
        value: 5,
        suffix: ' Licencias',
        label: 'Acreditaciones oficiales en RDC',
        description: 'ITPR (Obras públicas), Defensa Nacional (FARDC), ARSP, Hidrocarburos y Comercio Internacional.'
      },
      {
        id: 'flotte-citernes',
        value: 40000,
        suffix: ' L',
        label: 'Capacidad por camión cisterna',
        description: 'Flota de cisternas en acero inoxidable (30.000 a 40.000L) con rastreo GPS y norma ADR.'
      },
      {
        id: 'delai-livraison',
        value: 48,
        suffix: 'h Máx',
        label: 'Entrega en sitios mineros',
        description: 'Suministro en 24 a 48 horas para las operaciones mineras de Lualaba (Kisanfu, Kolwezi).'
      }
    ]
  },
  pillars: {
    sectionKicker: 'SECTORES Y ACCIONES ESTRATÉGICAS',
    title: 'Cinco ejes estratégicos para la soberanía y el desarrollo de la RDC.',
    sub: 'Cada sector de ETS KAMBALE MACHOZI fortalece la integración territorial, la seguridad energética y alimentaria, y la proyección mundial de la economía congoleña.',
    donateToPillar: 'Solicitar cotización',
    items: [
      {
        id: 'secteur-routes',
        title: '1. Construcción y Rehabilitación de Carreteras',
        desc: 'Con autorización del Ministerio de ITPR (Infraestructuras y Obras Públicas), realizamos la construcción, rehabilitación y mantenimiento de carreteras, puentes, alcantarillas y canales en toda la RDC.',
        tag: 'Autorización Ministerio ITPR',
        keyPoints: [
          'Movimiento de tierras, relleno, compactación y pavimentación en tierra y asfalto',
          'Obras de ingeniería civil, puentes, alcantarillas y drenaje pluvial',
          'Suministro de maquinaria pesada: tractores de orugas, motoniveladoras, compactadoras y camiones volquete (Kinshasa, Lualaba, Haut-Katanga, Nord-Kivu, Kasaï)'
        ]
      },
      {
        id: 'secteur-carburant',
        title: '2. Proveedor de Combustible y Lubricantes',
        desc: 'Suministro de combustible de calidad superior y gran volumen: Diésel AGO/DDO, Gasolina PMS, Lubricantes y Jet A1 (bajo pedido especial), importados directamente de Tanzania (Dar es Salaam) y Mozambique (Beira).',
        tag: 'Certificado SGS y Norma ADR',
        keyPoints: [
          'Combustible certificado SGS, analizado (densidad, agua, azufre), garantizado sin mezcla',
          'Stock estratégico superior a 150.000 litros y flota de cisternas de acero inoxidable (30.000 a 40.000L) con GPS',
          'Entrega en 24/48 horas en las minas de Lualaba (Kisanfu, Kolwezi) para mineras, constructoras, ONG y transportistas'
        ]
      },
      {
        id: 'secteur-fardc',
        title: '3. Proveedor de Raciones Militares (FARDC)',
        desc: 'Proveedor oficial autorizado por el Ministerio de Defensa Nacional para el abastecimiento estratégico de alimentos y raciones de combate a las Fuerzas Armadas de la RDC (FARDC).',
        tag: 'Autorización Defensa Nacional',
        keyPoints: [
          'Productos: arroz, frijoles, maíz, harina de yuca, aceite, sal, azúcar, conservas, agua, galletas energéticas y raciones de combate',
          'Abastecimiento a gran escala para todos los frentes y zonas operativas',
          'Estricto respeto de la cadena de frío, normas de higiene y almacenamiento seguro'
        ]
      },
      {
        id: 'secteur-agro',
        title: '4. Exportador Internacional de Café y Cacao',
        desc: 'Cadena agroindustrial de exportación: Café Arábica (Nord-Kivu, Ituri), Café Robusta (Kasaï, Équateur) y granos de cacao Forastero y Trinitario certificados orgánicos bajo pedido.',
        tag: 'Exportación a Europa, Dubái, Turquía y EE.UU.',
        keyPoints: [
          'Recolección en colaboración con las cooperativas agrícolas congoleñas',
          'Control de calidad (humedad, grado) y envasado en sacos de yute de 60 kg',
          'Exportación por contenedor vía Kinshasa, Matadi y Dar es Salaam hacia Europa (Róterdam, Amberes), Dubái, Turquía y EE.UU.'
        ]
      },
      {
        id: 'secteur-mines',
        title: '5. Explotación Minera y Subcontratación en RDC',
        desc: 'Operaciones en el sector minero de Lualaba, Haut-Katanga y Nord-Kivu (ARSP/CD/0000018850), como socio confiable de grandes compañías mineras como Kisanfu Mining, Mutanda y Kamoto.',
        tag: 'Lualaba • Haut-Katanga • Nord-Kivu',
        keyPoints: [
          'Suministro y logística minera (combustible, equipos, repuestos)',
          'Subcontratación minera (carreteras mineras, preparación de sitios)',
          'Comercio de cobre y cobalto en asociación y apoyo a la agricultura local'
        ]
      }
    ]
  },
  humaneImpact: {
    kicker: 'SOBERANÍA Y EJECUCIÓN OPERATIVA',
    word1: 'CONSTRUIR.',
    word2: 'PROVEER.',
    word3: 'Desarrollar.',
    body: '« Esperamos contribuir de manera significativa al desarrollo de nuestro país, gracias a un compromiso con la excelencia y la tecnología. » Desde Kinshasa hasta Kolwezi y Goma, ETS KAMBALE MACHOZI moviliza sus flotas e ingenieros al servicio de la RDC.',
    cta: 'Enviar licitación / cotización'
  },
  projects: {
    sectionKicker: 'OPERACIONES Y CAPACIDAD DE CAMPO',
    title: 'Infraestructuras y cadenas logísticas al servicio de la RDC',
    sub: 'Conozca nuestros despliegues operativos en ingeniería civil, logística petrolera, defensa nacional, subcontratación minera y agroexportación.',
    benefitLabel: 'Garantía operativa y valor añadido',
    supervisedBy: 'Dirección General — ETS KAMBALE MACHOZI',
    supportBtn: 'Solicitar oferta técnica',
    items: [
      {
        id: 'corridor-carburant-lualaba',
        title: 'Logística Petrolera y Depósito Lualaba',
        subtitle: 'Importación directa Dar es Salaam y Beira • Certificado SGS',
        location: 'Kolwezi y Kisanfu, Provincia de Lualaba',
        image: kmFuelFleetImg,
        category: 'assainissement',
        description: 'Suministro continuo de Diésel AGO/DDO, Gasolina PMS, Lubricantes y Jet A1 para empresas mineras, constructoras, ONG y transportistas en el cinturón cuprífero.',
        stats: [
          { label: 'Stock Estratégico', value: '150.000+ L' },
          { label: 'Cisternas Inox ADR', value: '30–40.000 L' },
          { label: 'Plazo Entrega', value: '24 / 48h' }
        ],
        impactDetail: 'Combustible certificado por SGS (densidad, agua, azufre), sin mezcla, entregado por nuestra flota con seguimiento GPS.'
      },
      {
        id: 'chantiers-routes-itpr',
        title: 'Ingeniería Civil, Carreteras y Puentes ITPR',
        subtitle: 'Movimiento de tierras, asfalto y maquinaria pesada',
        location: 'Kinshasa, Lualaba, Haut-Katanga, Nord-Kivu, Kasaï',
        image: kmHeroRoadsImg,
        category: 'social',
        description: 'Construcción, rehabilitación y mantenimiento de carreteras, puentes, alcantarillas y drenajes con flota propia de tractores de orugas, motoniveladoras, compactadoras y volquetes.',
        stats: [
          { label: 'Cobertura', value: '5 Polos RDC' },
          { label: 'Licencia Estatal', value: 'ITPR Oficial' },
          { label: 'Maquinaria', value: '100% Propia' }
        ],
        impactDetail: 'Integración territorial de las cuencas económicas y mineras con pavimentos duraderos y obras de drenaje.'
      },
      {
        id: 'exploitation-sous-traitance-miniere',
        title: 'Subcontratación Minera y Cobre-Cobalto',
        subtitle: 'Registro ARSP/CD/0000018850 • Lualaba y Haut-Katanga',
        location: 'Kolwezi, Kisanfu, Mutanda y Kamoto',
        image: kmMiningLualabaImg,
        category: 'sante',
        description: 'Servicios integrados de subcontratación minera: carreteras mineras, preparación de sitios, suministro de repuestos y equipos, y comercio de cobre y cobalto.',
        stats: [
          { label: 'Registro ARSP', value: '0000018850' },
          { label: 'Cuenca Minera', value: 'Lualaba / Katanga' },
          { label: 'Operación', value: '24h / 7d' }
        ],
        impactDetail: 'Socio 100% congoleño en total conformidad fiscal y reglamentaria para las grandes operadoras mineras.'
      },
      {
        id: 'export-cafe-cacao-fardc',
        title: 'Exportación de Café/Cacao y Suministros FARDC',
        subtitle: 'Cooperativas agrícolas y seguridad alimentaria de defensa',
        location: 'Nord-Kivu, Ituri, Kasaï, Kinshasa y Matadi',
        image: kmCoffeeCocoaImg,
        category: 'agriculture',
        description: 'Exportación por contenedor de Café Arábica/Robusta y Cacao Forastero/Trinitario (sacos de yute de 60 kg) hacia Europa, Dubái, Turquía y EE.UU., y provisión oficial de raciones a las FARDC.',
        stats: [
          { label: 'Envase Export', value: 'Sacos 60 kg' },
          { label: 'Puertos', value: 'Matadi y Dar' },
          { label: 'Defensa', value: 'FARDC Oficial' }
        ],
        impactDetail: 'Impulso directo a las cooperativas agrícolas congoleñas y soberanía alimentaria para la Defensa Nacional.'
      }
    ]
  },
  map: {
    sectionKicker: 'PRESENCIA NACIONAL Y CORREDORES',
    title: 'Nuestros polos operativos en la República Democrática del Congo',
    sub: 'Desde la sede central en Cité du Fleuve (Kinshasa) hasta las bases mineras de Kolwezi y las zonas agroexportadoras de Goma y Beni.',
    activeCountPill: 'Sede Kinshasa + Sucursales Nacionales',
    locations: [
      {
        id: 'boma',
        name: 'Kinshasa (Sede Social)',
        zone: 'Cité du Fleuve, Comuna de Limete',
        title: 'Dirección General, Obras Públicas ITPR y Central FARDC',
        desc: 'Sede administrativa y operativa de ETS KAMBALE MACHOZI (KM). Coordinación de obras viales, almacenamiento seguro de raciones FARDC y gestión de exportaciones.',
        stats: 'RCCM: 14-A-01204 • ID.NAT: 3-93-N55476A • Impôt: A0816671x',
        activeInitiatives: [
          'Dirección General presidida por el Sr. Bertrand Kambale Machozi',
          'Almacenes seguros con respeto de la cadena de frío (FARDC)',
          'Parque de maquinaria pesada de ingeniería civil'
        ]
      },
      {
        id: 'matadi',
        name: 'Kolwezi y Kisanfu (Lualaba)',
        zone: 'Sucursal Minera — Lualaba y Haut-Katanga',
        title: 'Depósito Estratégico (+150.000L) y Subcontratación Minera ARSP',
        desc: 'Base logística para grandes operadoras mineras (Kisanfu Mining, Mutanda, Kamoto). Entrega en 24/48h de combustible certificado SGS y obras mineras.',
        stats: 'ARSP/CD/0000018850 • Cisternas Inox 30.000 a 40.000L ADR/GPS',
        activeInitiatives: [
          'Distribución de Diésel AGO/DDO, Gasolina PMS, Lubricantes y Jet A1',
          'Preparación de sitios mineros, vías de acceso y repuestos',
          'Comercio de cobre y cobalto en asociación'
        ]
      },
      {
        id: 'kabondo',
        name: 'Goma y Beni (Nord-Kivu / Ituri)',
        zone: 'Sucursal Este — Agroindustria e Infraestructura',
        title: 'Polo de Café Arábica, Cacao Orgánico y Obras Viales',
        desc: 'Centro de recolección con cooperativas agrícolas, control de humedad y envasado en sacos de yute de 60 kg, además de obras viales regionales.',
        stats: 'Café Arábica y Cacao Forastero / Trinitario • Corredor Dar es Salaam',
        activeInitiatives: [
          'Recolección en colaboración con cooperativas agrícolas congoleñas',
          'Control de calidad estricto previo al embarque en contenedor',
          'Rehabilitación de carreteras y puentes'
        ]
      },
      {
        id: 'bas-fleuve',
        name: 'Matadi y Kasaï (Corredores Export)',
        zone: 'Puerto Marítimo Internacional y Cuenca Robusta',
        title: 'Terminal de Exportación por Contenedor y Red Vial',
        desc: 'Plataforma portuaria para la exportación de Café Robusta (Kasaï, Équateur) y Cacao hacia Róterdam, Amberes, Dubái, Turquía y EE.UU.',
        stats: 'Mercados : Europa (Róterdam, Amberes) • Dubái • Turquía • EE.UU.',
        activeInitiatives: [
          'Exportación por contenedor vía Kinshasa, Matadi y Dar es Salaam',
          'Valorización del Café Robusta de Kasaï y Équateur',
          'Mantenimiento de carreteras, puentes y drenajes'
        ]
      }
    ]
  },
  team: {
    sectionKicker: 'GOBERNANZA Y DIRECCIÓN GENERAL',
    title: 'Liderazgo congoleño de excelencia y cumplimiento',
    sub: 'Bajo la dirección del Sr. Bertrand Kambale Machozi, ETS KAMBALE MACHOZI cuenta con un equipo congoleño experimentado enfocado en calidad garantizada y entrega puntual.',
    presidentCardBadge: 'Dirección General',
    activeMandate: 'Cumplimiento Total RDC',
    strategicVisionSubtitle: 'ETS KAMBALE MACHOZI (KM) — Gobernanza y Visión Estratégica',
    directorsHeader: 'Direcciones Operativas y Divisiones Sectoriales',
    members: [
      {
        name: 'Sr. Bertrand Kambale Machozi',
        role: 'Director General / CEO',
        location: 'Sede Social : Cité du Fleuve, Limete, Kinshasa – RDC',
        image: kmBertrandCeoImg,
        bio: 'Empresario y directivo congoleño al frente de ETS KAMBALE MACHOZI (KM). Comprometido con los más altos estándares de gobernanza y conformidad fiscal, comercial y social, dirige el despliegue estratégico de la empresa en sus cinco sectores: carreteras (ITPR), combustible certificado SGS, raciones militares FARDC, exportación de café/cacao y subcontratación minera en Lualaba.',
        quote: 'Esperamos contribuir de manera significativa al desarrollo de nuestro país, gracias a un compromiso con la excelencia y la tecnología.'
      },
      {
        name: 'Dirección de Hidrocarburos y Minería',
        role: 'División de Energía y Subcontratación ARSP',
        location: 'Sucursal Kolwezi — Lualaba y Haut-Katanga',
        image: placideBaundjaImg,
        bio: 'Supervisa la importación directa de combustibles desde Dar es Salaam y Beira, el stock estratégico de +150.000L certificado SGS, la flota de cisternas inox ADR con GPS y la subcontratación minera (ARSP/CD/0000018850) junto a Kisanfu, Mutanda y Kamoto.',
        quote: 'Garantizar a las mineras de Lualaba combustible puro certificado SGS y entrega en 24 a 48 horas.'
      },
      {
        name: 'Dirección de Ingeniería Civil y Obras Públicas',
        role: 'División de Infraestructura ITPR y Maquinaria Pesada',
        location: 'Kinshasa, Lualaba, Haut-Katanga, Nord-Kivu y Kasaï',
        image: doudouNzangaImg,
        bio: 'Dirige la construcción, rehabilitación y mantenimiento de carreteras, puentes y canales bajo licencia del Ministerio de ITPR, administrando la flota propia de tractores de orugas, motoniveladoras, compactadoras y volquetes.',
        quote: 'Construir infraestructuras viales duraderas que conecten nuestras provincias e impulsen la economía nacional.'
      },
      {
        name: 'Dirección de Agroexportación y Logística FARDC',
        role: 'División Café/Cacao y Suministro de Defensa',
        location: 'Kinshasa, Beni (Nord-Kivu), Ituri y Puerto de Matadi',
        image: felixTshimangaImg,
        bio: 'Coordina el suministro oficial de raciones militares a las FARDC respetando la cadena de frío, así como la recolección con cooperativas, control de calidad y exportación de Café Arábica/Robusta y Cacao hacia Europa, Dubái, Turquía y EE.UU.',
        quote: 'Unir la seguridad alimentaria de nuestra Defensa Nacional con el prestigio mundial del café y cacao congoleño.'
      }
    ]
  },
  partners: {
    sectionKicker: 'LICENCIAS, CERTIFICACIONES Y ECOSISTEMA',
    title: 'Licencias Oficiales y Socios Estratégicos',
    sub: 'ETS KAMBALE MACHOZI opera con 5 licencias oficiales en la República Democrática del Congo junto a instituciones públicas, grandes mineras de Lualaba y compradores internacionales.',
    becomePartnerBtn: 'Iniciar asociación o contrato'
  },
  aerialSupport: {
    title: 'SOCIO ESTRATÉGICO DE SUS OPERACIONES',
    subtitle: 'Combustible certificado SGS en 24/48h, Ingeniería Civil ITPR, Subcontratación Minera ARSP, Suministros FARDC y Exportación de Café y Cacao.',
    donateBtn: 'Solicitar cotización',
    otherWaysBtn: 'Credenciales legales'
  },
  action: {
    sectionKicker: 'COLABORAR CON KM',
    title: 'Tres vías de contratación corporativa e institucional.',
    sub: 'Capacidad de respuesta inmediata respaldada por stock propio, maquinaria pesada y 5 licencias oficiales.',
    way1Title: 'Suministro de Combustible y Logística',
    way1Desc: 'Entrega en 24/48h de Diésel AGO/DDO, Gasolina PMS, Lubricantes y Jet A1 certificados SGS en sitios mineros y obras.',
    way1Btn: 'Cotizar combustible',
    way2Title: 'Obras Viales ITPR y Subcontratación ARSP',
    way2Desc: 'Construcción de carreteras, puentes, movimiento de tierras, alquiler de maquinaria pesada y subcontratación minera.',
    way2Btn: 'Enviar pliego técnico',
    way3Title: 'Exportación de Café/Cacao y Suministros',
    way3Desc: 'Pedidos por contenedor de Café Arábica/Robusta y Cacao orgánico (sacos 60 kg) o contratos de abastecimiento alimentario.',
    way3Btn: 'Contactar Dirección General'
  },
  news: {
    sectionKicker: 'NOTICIAS Y OPERACIONES KM',
    title: 'Actualidad operativa de KAMBALE MACHOZI en la RDC',
    sub: 'Siga nuestras operaciones en infraestructura vial, logística de combustibles, minería y agroexportación.',
    readArticle: 'Leer informe completo',
    items: [
      {
        id: 'news-1',
        title: 'Sector Hidrocarburos: KAMBALE MACHOZI refuerza su stock estratégico de +150.000 litros certificado SGS para Lualaba',
        date: 'Marzo de 2026',
        category: 'Combustible y Logística',
        readTime: '3 min',
        excerpt: 'Con importación directa desde Dar es Salaam y Beira, KM garantiza entregas en 24/48 horas en las minas de Kolwezi y Kisanfu.',
        content: [
          'Para responder a la demanda de las empresas mineras, constructoras, ONG y transportistas en Lualaba, ETS KAMBALE MACHOZI (KM) ha ampliado su capacidad logística petrolera.',
          'Todos nuestros productos — Diésel AGO/DDO, Gasolina PMS, Lubricantes y Jet A1 — cuentan con certificación SGS y análisis de densidad, agua y azufre, garantizando combustible puro sin mezcla.',
          'Nuestra flota de camiones cisterna de acero inoxidable (30.000 a 40.000 litros) con GPS y conformidad ADR asegura entregas en 24 a 48 horas en Kisanfu y Kolwezi.'
        ],
        image: kmFuelFleetImg
      },
      {
        id: 'news-2',
        title: 'Infraestructura ITPR y Subcontratación Minera ARSP: despliegue de maquinaria pesada en los corredores de la RDC',
        date: 'Febrero de 2026',
        category: 'Carreteras y Minería',
        readTime: '4 min',
        excerpt: 'Con licencia del Ministerio de ITPR y registro ARSP/CD/0000018850, KM acelera obras de pavimentación y carreteras mineras.',
        content: [
          'Bajo autorización del Ministerio de ITPR, ETS KAMBALE MACHOZI ejecuta la construcción, rehabilitación y mantenimiento de carreteras, puentes y drenajes en Kinshasa, Lualaba, Haut-Katanga, Nord-Kivu y Kasaï.',
          'La empresa moviliza su propio parque de tractores de orugas, motoniveladoras, compactadoras y camiones volquete.',
          'Asimismo, bajo el certificado ARSP/CD/0000018850, KM amplía su subcontratación minera y comercio de cobre y cobalto en Lualaba.'
        ],
        image: kmHeroRoadsImg
      },
      {
        id: 'news-3',
        title: 'Agroindustria Internacional: exportación de Café y Cacao congoleño hacia Europa, Dubái, Turquía y EE.UU.',
        date: 'Enero de 2026',
        category: 'Agroexportación y FARDC',
        readTime: '3 min',
        excerpt: 'En alianza con cooperativas agrícolas de Nord-Kivu, Ituri, Kasaï y Équateur, KM exporta cosechas premium congoleñas.',
        content: [
          'Exportamos Café Arábica (Nord-Kivu, Ituri), Café Robusta (Kasaï, Équateur) y granos de cacao Forastero y Trinitario certificados orgánicos bajo pedido.',
          'Cada lote pasa por control de humedad y grado, se envasa en sacos de yute de 60 kg y se exporta por contenedor vía Kinshasa, Matadi y Dar es Salaam hacia Róterdam, Amberes, Dubái, Turquía y EE.UU.',
          'Al mismo tiempo, bajo autorización del Ministerio de Defensa Nacional, KM es proveedor oficial de raciones militares para las FARDC.'
        ],
        image: kmCoffeeCocoaImg
      }
    ]
  },
  newsDetail: {
    backToNews: 'Volver a noticias KM',
    share: 'Compartir',
    linkCopied: '¡Enlace copiado!',
    readTimeLabel: 'de lectura',
    relatedTitle: 'Otros informes operativos',
    supportTitle: '¿Busca un socio estratégico en la RDC?',
    supportDesc: 'Contacte con la Dirección General de ETS KAMBALE MACHOZI para cotizaciones de combustible SGS, obras ITPR, minería ARSP o agroexportación.',
    donateCta: 'Solicitar cotización'
  },
  otherWaysToDonate: {
    backHome: 'Volver al inicio',
    badge: 'Portal Corporativo, Cumplimiento Legal y Cotizaciones B2B',
    title: 'Conformidad legal total y capacidad contractual en la RDC.',
    sub: 'Consulte los registros oficiales de ETS KAMBALE MACHOZI (RCCM, ID.NAT, N° Impôt, ARSP), simule sus requerimientos operativos y contacte a nuestra Dirección General en Kinshasa, Kolwezi o Beni.',
    simBtn: 'Simular pedido / contrato',
    exploreBtn: 'Ver registros legales',
    simTitle: 'Simulador de Capacidad y Suministro por Sector',
    simSub: 'Seleccione un nivel operativo para visualizar nuestras garantías de entrega:',
    monthly: 'Contrato Marco Regular',
    once: 'Pedido Puntual / Licitación',
    impactLabel: 'Capacidad operativa garantizada:',
    donateNowBtn: 'Solicitar oferta formal',
    secureNote: 'Facturación fiscal completa • Certificado SGS • Conformidad ARSP/CD/0000018850.',
    waysTitle: 'Registros Oficiales y Canales de Contratación',
    waysSub: 'Verifique y copie con un clic nuestras credenciales legales en la República Democrática del Congo.',
    mobileMoneyTitle: 'Identificación Legal y Licencias Estatales (RDC)',
    mobileMoneyDesc: 'Establecimiento de derecho congoleño en plena conformidad fiscal, comercial, social y ARSP.',
    bankTransferTitle: 'Sede Social y Sucursales Operativas',
    bankTransferDesc: 'Presencia nacional en Kinshasa, Lualaba y Nord-Kivu.',
    copyLabel: 'Copiar',
    copiedLabel: '¡Copiado!',
    cardsTitle: 'Departamento Comercial y Licitaciones',
    cardsDesc: 'Recepción directa de solicitudes de cotización (RFQ) para Diésel/Jet A1, obras públicas ITPR, subcontratación minera o contenedores de Café/Cacao.',
    inKindTitle: 'Alquiler de Maquinaria Pesada y Subcontratación ITPR / ARSP',
    inKindDesc: 'Disponibilidad inmediata de tractores de orugas, motoniveladoras, compactadoras, volquetes y camiones cisterna inox ADR (30.000 a 40.000L).',
    inKindBtn: 'Solicitar ficha técnica',
    taxReceiptTitle: 'Certificación de Calidad SGS y Normas de Exportación',
    taxReceiptDesc: 'Todos los combustibles incluyen certificado SGS (densidad, agua, azufre) y todos los lotes de café/cacao cuentan con control de humedad.'
  },
  volunteerModal: {
    title: 'Solicitar Cotización / Licitación',
    sub: 'Obras viales ITPR, combustible certificado SGS (24/48h), raciones FARDC, exportación de café/cacao o subcontratación minera ARSP.',
    nameLabel: 'Nombre completo / Cargo *',
    namePlaceholder: 'Su nombre completo',
    emailLabel: 'Correo electrónico corporativo *',
    phoneLabel: 'Teléfono / WhatsApp *',
    countryLabel: 'Ciudad / Provincia o País',
    areaLabel: 'Sector solicitado',
    areaOptions: [
      'Sector 1 : Construcción y Rehabilitación de Carreteras (ITPR)',
      'Sector 2 : Suministro de Combustible SGS (Diésel, PMS, Jet A1)',
      'Sector 3 : Raciones Militares y Alimentos (FARDC / Instituciones)',
      'Sector 4 : Exportación Internacional de Café y Cacao (Sacos 60kg)',
      'Sector 5 : Explotación y Subcontratación Minera (Lualaba / Katanga)'
    ],
    availLabel: 'Plazo requerido',
    availOptions: [
      'Urgencia operativa (Entrega 24h / 48h)',
      'Corto plazo (1 a 4 semanas)',
      'Contrato marco plurianual / Licitación'
    ],
    submitBtn: 'Enviar solicitud de cotización',
    successTitle: '¡Solicitud registrada con éxito!',
    successDesc: 'La Dirección General de ETS KAMBALE MACHOZI responderá en menos de 24 horas con una oferta técnica y comercial.',
    closeBtn: 'Cerrar'
  },
  partnerModal: {
    title: 'Asociación Estratégica y Subcontratación',
    sub: 'Empresas mineras (Lualaba/Katanga), instituciones públicas de la RDC, importadores internacionales y multinacionales.',
    orgLabel: 'Nombre de la empresa o institución *',
    orgPlaceholder: 'Ej: Minera, Ministerio, Importador de Café/Cacao...',
    repLabel: 'Representante / Cargo *',
    repPlaceholder: 'Nombre completo y cargo oficial',
    emailLabel: 'Correo corporativo *',
    typeLabel: 'Tipo de alianza',
    typeOptions: [
      'Subcontratación minera y logística (ARSP/CD/0000018850)',
      'Suministro continuo de combustible certificado SGS',
      'Obras de infraestructura vial y maquinaria pesada (ITPR)',
      'Importación internacional de Café Arábica/Robusta y Cacao',
      'Suministro institucional y Defensa Nacional'
    ],
    msgLabel: 'Alcance y volúmenes estimados *',
    msgPlaceholder: 'Describa sus necesidades técnicas, sitios de entrega o volúmenes...',
    submitBtn: 'Enviar propuesta a la Dirección General',
    successTitle: '¡Propuesta enviada a la Dirección General!',
    successDesc: 'El gabinete del Sr. Bertrand Kambale Machozi evaluará su propuesta con prioridad.',
    closeBtn: 'Cerrar'
  },
  contact: {
    sectionKicker: 'CONTACTOS Y SEDES',
    title: 'Contacte con la Dirección General',
    sub: 'ETS KAMBALE MACHOZI (KM) está a su disposición en Kinshasa, Kolwezi y Beni/Goma para sus proyectos de infraestructura, combustible, minería y agroexportación.',
    hqDrcTitle: 'Sede Social — Kinshasa, RDC',
    hqDrcOrg: 'ETS KAMBALE MACHOZI (KM) — Dirección General',
    hqDrcLoc: 'Av. Colonel Ebeya n°1746/A, C/Gombe, Kinshasa – RDC | Polos : Kolwezi (Lualaba) – Goma (Nord-Kivu) – Matadi',
    intlUsaTitle: 'Identificadores Legales Oficiales',
    intlUsaOrg: 'RCCM : CD/KNG/RCCM/20-A-01815 • ID.NAT : 01-F4300-N63029P',
    intlUsaLoc: 'N° Impôt : A2161439L • ARSP : 3914908074',
    formTitle: 'Enviar un mensaje al Sr. Bertrand Kambale Machozi',
    formSub: 'Complete el formulario para contactar directamente con la Dirección General vía WhatsApp (+55 91 996156672 / directeur@kambalemachozi.com).',
    nameLabel: 'Nombre completo / Empresa *',
    namePlaceholder: 'Su nombre y empresa',
    emailLabel: 'Correo electrónico *',
    subjectLabel: 'Sector de actividad',
    subjectOptions: [
      '1. Carreteras, Obras Públicas y Maquinaria Pesada (ITPR)',
      '2. Pedido de Combustible SGS (Diésel, PMS, Jet A1)',
      '3. Suministros y Raciones Militares (FARDC)',
      '4. Exportación Internacional de Café y Cacao',
      '5. Minería y Subcontratación Minera (Lualaba/Katanga)',
      'Otra consulta institucional'
    ],
    msgLabel: 'Su mensaje o especificaciones *',
    msgPlaceholder: 'Describa su proyecto, cantidades requeridas o sitio de operación...',
    sendBtn: 'Enviar a WhatsApp (+55 91 996156672)',
    sentSuccessTitle: '¡Mensaje transmitido a WhatsApp!',
    sentSuccessDesc: 'Su información ha sido preparada para su envío inmediato a la Dirección General por WhatsApp.'
  },
  footer: {
    desc: 'Establecimiento de derecho congoleño con sede en Kinshasa (Gombe), socio multisectorial estratégico en infraestructura vial (ITPR), distribución de combustible (12.000 m³/mes), suministros FARDC, exportación de café/cacao y subcontratación minera (ARSP).',
    certText: 'RCCM: CD/KNG/RCCM/20-A-01815 • ID.NAT: 01-F4300-N63029P • N° Impôt: A2161439L • ARSP: 3914908074',
    followUs: 'Canales oficiales de comunicación corporativa',
    quickLinksTitle: 'Navegación',
    programsTitle: 'Nuestros 5 Sectores',
    donateBoxTitle: 'Cotizaciones y Contratos',
    donateBoxDesc: 'WhatsApp : +55 91 996156672 • Email : directeur@kambalemachozi.com • Sede : Gombe, Kinshasa.',
    donateBoxBtn: 'Solicitar cotización',
    copyright: '© 2026 ETS KAMBALE MACHOZI (KM). Todos los derechos reservados.',
    allRightsReserved: 'Construir el Futuro en la República Democrática del Congo.',
    backToTop: 'Volver arriba'
  }
};
