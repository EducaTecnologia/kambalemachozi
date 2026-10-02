import { TranslationSchema } from './types';
import kmHeroRoadsImg from '../../assets/images/km_hero_roads_construction_1790912438335.jpg';
import kmFuelFleetImg from '../../assets/images/km_fuel_logistics_fleet_1790912449357.jpg';
import kmMiningLualabaImg from '../../assets/images/km_mining_lualaba_operations_1790912459813.jpg';
import kmCoffeeCocoaImg from '../../assets/images/km_coffee_cocoa_export_1790912469517.jpg';
import kmBertrandCeoImg from '../../assets/images/km_bertrand_ceo_portrait_1790912489891.jpg';
import placideBaundjaImg from '../../assets/images/placide_baundja_portrait.jpg';
import doudouNzangaImg from '../../assets/images/doudou_nzanga_executive_1790216344257.jpg';
import felixTshimangaImg from '../../assets/images/felix_tshimanga_portrait_1790214209611.jpg';

export const enTranslations: TranslationSchema = {
  brandTagline: 'Building the Future — Strategic Multi-Sector Partner in DRC',
  nav: {
    home: 'Home',
    about: 'Company',
    programs: 'Our 5 Sectors',
    projects: 'Operations',
    locations: 'DRC Presence',
    team: 'Leadership',
    supporters: 'Licenses & Partners',
    news: 'News',
    otherWaysToDonate: 'Quotes & Compliance',
    contact: 'Contact',
    donate: 'Request a Quote'
  },
  preloader: {
    skip: 'Enter website',
    loading: 'Loading KAMBALE MACHOZI corporate profile...',
    slides: [
      {
        title: 'Sector 1: Road Construction & Rehabilitation (ITPR)',
        location: 'Kinshasa, Lualaba, Haut-Katanga, Nord-Kivu, Kasaï',
        tag: 'Roads & Public Works'
      },
      {
        title: 'Sector 2: SGS-Certified Fuel Supplier (+150,000L)',
        location: 'Dar es Salaam & Beira Corridor → Kolwezi / Kisanfu',
        tag: 'Petroleum Distribution'
      },
      {
        title: 'Sector 3: Official Military Rations Supplier to FARDC',
        location: 'Ministry of National Defense — All DRC Fronts',
        tag: 'Defense Logistics'
      },
      {
        title: 'Sector 4: International Coffee & Cocoa Exporter',
        location: 'Nord-Kivu, Ituri, Kasaï → Europe, Dubai, Turkey, USA',
        tag: 'International Agribusiness'
      },
      {
        title: 'Sector 5: Mining Operations & Subcontracting (ARSP)',
        location: 'Lualaba, Haut-Katanga & Nord-Kivu',
        tag: 'Mining & Subcontracting'
      }
    ]
  },
  hero: {
    kicker: 'ETS KAMBALE MACHOZI (KM) • RCCM: 14-A-01204',
    slide1Title: 'BUILDING THE FUTURE.',
    slide1Sub: 'Strategic multi-sector partner for the development and infrastructure of the Democratic Republic of the Congo.',
    slide1Cta1: 'Explore our 5 sectors',
    slide1Cta2: 'Request a quote',
    slide2Title: 'Strategic fuel supplier and mining logistics leader.',
    slide2Sub: 'SGS-certified Diesel AGO/DDO, PMS Gasoline, Lubricants, and Jet A1. Over 150,000L strategic reserve and 24/48h delivery to Kolwezi and Kisanfu.',
    slide2Cta: 'View logistics capacity',
    slide3Title: 'ITPR Roads, FARDC Supplies, Mining & Agro-Export.',
    slide3Sub: '100% Congolese corporation holding 5 official state licenses with full tax, commercial, social, and ARSP compliance in the DRC.',
    slide3Cta: 'Explore our operations'
  },
  mission: {
    sectionKicker: 'CORPORATE LEADERSHIP & VISION',
    title: 'Multi-sector management excellence and full compliance in the DRC.',
    manifestoQuote: '"We hope to contribute significantly to the development of our country through a commitment to excellence and technology."',
    badgeRdc: '🇨🇩 HQ: Cité du Fleuve, Kinshasa',
    oathDesc: 'General Management: Mr. Bertrand KAMBALE MACHOZI • 100% Congolese-owned company • Operational branches in Kolwezi (Lualaba) and Beni / Goma (Nord-Kivu).',
    ngoLegalCert: 'RCCM: 14-A-01204 • ID.NAT: 3-93-N55476A • Tax ID: A0816671x • ARSP: ARSP/CD/0000018850',
    p1: 'ETS KAMBALE MACHOZI (KM) is a Congolese company headquartered in Kinshasa (Cité du Fleuve, Limete Municipality), committed to the highest standards of corporate governance, regulatory compliance, and operational execution.',
    p2: 'Institutional Vision: To be the partner of choice for the Congolese State and private multinationals across our nation’s infrastructure and essential services sectors. We operate across five strategic pillars that drive socio-economic growth and strengthen national sovereignty.',
    p3: 'Every business unit is engineered to deliver direct value to the Congolese people—fostering territorial connectivity, energy and food security, job creation, and the global reach of our economy.',
    valuesTitle: 'Our Key Strengths & Institutional Guarantees',
    values: [
      {
        title: 'Full Legal & ARSP Compliance',
        desc: '100% Congolese company in full tax, commercial, and social compliance (RCCM: 14-A-01204, ID.NAT: 3-93-N55476A, Tax ID: A0816671x, ARSP/CD/0000018850).'
      },
      {
        title: '5 Official State Licenses',
        desc: 'Official authorizations from the Ministry of ITPR (Public Works), Ministry of National Defense (FARDC), Foreign Trade, Hydrocarbons, and ARSP.'
      },
      {
        title: 'Owned Equipment & Reserves',
        desc: 'Proprietary heavy civil engineering fleet, +150,000L strategic fuel storage, and stainless-steel tanker trucks (30,000 to 40,000L) with GPS tracking and ADR compliance.'
      },
      {
        title: 'SGS Quality & 24/48h Delivery',
        desc: 'Experienced Congolese engineering team, unblended SGS-certified fuel, competitive pricing, and guaranteed on-time delivery across Kinshasa, Kolwezi, and Goma.'
      }
    ]
  },
  impactStats: {
    sectionKicker: 'OPERATIONAL CAPACITY',
    title: 'The industrial and logistical power of KAMBALE MACHOZI',
    sub: 'Proprietary infrastructure, verifiable state licenses, and nationwide coverage across the DRC’s key economic corridors.',
    items: [
      {
        id: 'stock-carburant',
        value: 150000,
        suffix: '+ L',
        label: 'Strategic Fuel Reserve',
        description: 'Permanent storage capacity of SGS-certified Diesel AGO/DDO, PMS Gasoline, and Jet A1.'
      },
      {
        id: 'licences-etat',
        value: 5,
        suffix: ' Licenses',
        label: 'Official State Permits',
        description: 'ITPR (Public Works), National Defense (FARDC), ARSP Subcontracting, Hydrocarbons, and Trade.'
      },
      {
        id: 'flotte-citernes',
        value: 40000,
        suffix: ' L',
        label: 'Capacity per Tanker Truck',
        description: 'Stainless-steel tanker fleet (30,000 to 40,000L) equipped with GPS tracking and ADR safety compliance.'
      },
      {
        id: 'delai-livraison',
        value: 48,
        suffix: 'h Max',
        label: 'Mining Site Delivery',
        description: 'Rapid 24 to 48-hour fuel delivery to Lualaba mining operations (Kisanfu, Kolwezi).'
      }
    ]
  },
  pillars: {
    sectionKicker: 'STRATEGIC SECTORS & ACTIONS',
    title: 'Five strategic pillars driving DRC sovereignty and infrastructure.',
    sub: 'Each division of ETS KAMBALE MACHOZI supports territorial integration, energy and food security, and the international standing of the Congolese economy.',
    donateToPillar: 'Request sector quote',
    items: [
      {
        id: 'secteur-routes',
        title: '1. Road Construction & Rehabilitation',
        desc: 'Authorized by the Ministry of ITPR (Infrastructure and Public Works), we execute the construction, rehabilitation, and maintenance of roads, bridges, culverts, and drainage canals nationwide.',
        tag: 'Ministry of ITPR License',
        keyPoints: [
          'Earthworks, backfilling, compaction, and dirt or asphalt paving',
          'Civil engineering structures, bridges, culverts, and urban drainage',
          'Heavy machinery supply: crawler tractors, motor graders, compactors, dump trucks (Kinshasa, Lualaba, Haut-Katanga, Nord-Kivu, Kasaï)'
        ]
      },
      {
        id: 'secteur-carburant',
        title: '2. Fuel & Lubricants Supplier',
        desc: 'High-volume, superior-grade petroleum supply: Diesel AGO/DDO, PMS Gasoline, Lubricants, and Jet A1 (on special order), directly imported from Tanzania (Dar es Salaam) and Mozambique (Beira).',
        tag: 'SGS Certified & ADR Compliant',
        keyPoints: [
          'SGS-certified fuel tested for density, water, and sulfur content — 100% pure and unblended',
          'Strategic stock over 150,000 liters and stainless-steel tanker fleet (30,000–40,000L) with GPS',
          '24/48-hour delivery to Lualaba mining sites (Kisanfu, Kolwezi) for mining firms, construction companies, NGOs, and transporters'
        ]
      },
      {
        id: 'secteur-fardc',
        title: '3. Military Rations Supplier (FARDC)',
        desc: 'Official supplier authorized by the Ministry of National Defense providing food staples and combat rations to the Armed Forces of the Democratic Republic of the Congo (FARDC).',
        tag: 'Ministry of Defense License',
        keyPoints: [
          'Full product line: rice, beans, maize, cassava flour, cooking oil, salt, sugar, canned goods, water, energy biscuits, combat rations',
          'Large-scale supply capacity serving all fronts and operational zones',
          'Strict cold-chain compliance, hygiene standards, and secure warehousing'
        ]
      },
      {
        id: 'secteur-agro',
        title: '4. International Coffee & Cocoa Exporter',
        desc: 'Global agro-industrial value chain exporting premium Congolese harvests: Arabica Coffee (Nord-Kivu, Ituri), Robusta Coffee (Kasaï, Équateur), and Forastero & Trinitario cocoa beans (organic certified on request).',
        tag: 'Export to Europe, Dubai, Turkey & USA',
        keyPoints: [
          'Direct sourcing in partnership with Congolese agricultural cooperatives',
          'Strict quality control (moisture content, grading) and packaging in 60 kg jute sacks',
          'Containerized export via Kinshasa, Matadi, and Dar es Salaam to Europe (Rotterdam, Antwerp), Dubai, Turkey, and the USA'
        ]
      },
      {
        id: 'secteur-mines',
        title: '5. Mining Operations & Subcontracting in DRC',
        desc: 'Active across the mining belts of Lualaba, Haut-Katanga, and Nord-Kivu (ARSP/CD/0000018850), partnering with tier-one mining operators such as Kisanfu Mining, Mutanda, and Kamoto.',
        tag: 'Lualaba • Haut-Katanga • Nord-Kivu',
        keyPoints: [
          'Mining supply chain and logistics (fuel, heavy equipment, spare parts)',
          'Mining civil subcontracting: haul roads, site preparation, and earthworks',
          'Copper and cobalt trading partnerships and support for local artisanal agriculture'
        ]
      }
    ]
  },
  humaneImpact: {
    kicker: 'SOVEREIGNTY & OPERATIONAL EXECUTION',
    word1: 'BUILD.',
    word2: 'SUPPLY.',
    word3: 'Develop.',
    body: '"We hope to contribute significantly to the development of our country through a commitment to excellence and technology." From Kinshasa to Kolwezi and Goma, ETS KAMBALE MACHOZI deploys its fleets, engineers, and strategic reserves in service of the DRC.',
    cta: 'Submit an RFQ / Tender'
  },
  projects: {
    sectionKicker: 'FIELD OPERATIONS & CAPABILITIES',
    title: 'Infrastructure and supply chains powering the DRC',
    sub: 'Explore our flagship operations across civil engineering, petroleum logistics, defense supply, mining subcontracting, and agricultural export.',
    benefitLabel: 'Operational guarantee & client value',
    supervisedBy: 'General Management — ETS KAMBALE MACHOZI',
    supportBtn: 'Request technical proposal',
    items: [
      {
        id: 'corridor-carburant-lualaba',
        title: 'Petroleum Logistics & Lualaba Strategic Depot',
        subtitle: 'Direct Import from Dar es Salaam & Beira • SGS Certified',
        location: 'Kolwezi & Kisanfu, Lualaba Province',
        image: kmFuelFleetImg,
        category: 'assainissement',
        description: 'Uninterrupted supply of Diesel AGO/DDO, PMS Gasoline, Lubricants, and Jet A1 for mining corporations, civil contractors, NGOs, and transport fleets in the Copperbelt.',
        stats: [
          { label: 'Strategic Stock', value: '150,000+ L' },
          { label: 'ADR Inox Tankers', value: '30–40,000 L' },
          { label: 'Delivery Window', value: '24 / 48h' }
        ],
        impactDetail: 'SGS-tested and certified fuel (density, water, sulfur), 100% unblended, delivered by our GPS-monitored stainless-steel tanker fleet.'
      },
      {
        id: 'chantiers-routes-itpr',
        title: 'ITPR Civil Engineering, Roads & Bridges',
        subtitle: 'Earthworks, asphalt paving & heavy equipment fleet',
        location: 'Kinshasa, Lualaba, Haut-Katanga, Nord-Kivu, Kasaï',
        image: kmHeroRoadsImg,
        category: 'social',
        description: 'Full-cycle construction, rehabilitation, and maintenance of highways, bridges, culverts, and drainage channels backed by our owned fleet of crawler tractors, graders, compactors, and dump trucks.',
        stats: [
          { label: 'National Reach', value: '5 DRC Hubs' },
          { label: 'State License', value: 'ITPR Permit' },
          { label: 'Heavy Fleet', value: '100% Owned' }
        ],
        impactDetail: 'Connecting economic and mining corridors with durable road surfaces and tropical-grade drainage engineering.'
      },
      {
        id: 'exploitation-sous-traitance-miniere',
        title: 'Mining Subcontracting & Copper-Cobalt Operations',
        subtitle: 'ARSP/CD/0000018850 License • Lualaba & Haut-Katanga',
        location: 'Kolwezi, Kisanfu, Mutanda & Kamoto',
        image: kmMiningLualabaImg,
        category: 'sante',
        description: 'Integrated mining subcontracting services: haul road construction, site preparation, heavy equipment and spare parts supply, and copper-cobalt trading partnerships.',
        stats: [
          { label: 'ARSP License', value: '0000018850' },
          { label: 'Mining Belt', value: 'Lualaba / Katanga' },
          { label: 'Operations', value: '24/7 Active' }
        ],
        impactDetail: 'A 100% Congolese partner in full tax and regulatory compliance serving major multinational mining houses in the DRC.'
      },
      {
        id: 'export-cafe-cacao-fardc',
        title: 'Coffee/Cocoa Export & FARDC Strategic Supply',
        subtitle: 'Farm cooperatives & national defense food security',
        location: 'Nord-Kivu, Ituri, Kasaï, Kinshasa & Matadi',
        image: kmCoffeeCocoaImg,
        category: 'agriculture',
        description: 'Dual agro-industrial capability: containerized export of Arabica/Robusta Coffee and Forastero/Trinitario Cocoa (60 kg jute bags) to Europe, Dubai, Turkey, and the USA, alongside official military rations for the FARDC.',
        stats: [
          { label: 'Export Packaging', value: '60 kg Sacks' },
          { label: 'Export Ports', value: 'Matadi & Dar' },
          { label: 'Defense Status', value: 'Official FARDC' }
        ],
        impactDetail: 'Empowering Congolese farming cooperatives on global commodity markets while securing food logistics for National Defense.'
      }
    ]
  },
  map: {
    sectionKicker: 'NATIONAL PRESENCE & CORRIDORS',
    title: 'Our operational hubs across the Democratic Republic of the Congo',
    sub: 'From our corporate headquarters at Cité du Fleuve in Kinshasa to our mining branches in Kolwezi and agro-export hubs in Goma and Beni.',
    activeCountPill: 'Kinshasa HQ + National Branches',
    locations: [
      {
        id: 'boma',
        name: 'Kinshasa (Corporate HQ)',
        zone: 'Cité du Fleuve, Limete Municipality',
        title: 'General Management, ITPR Public Works & FARDC Logistics Center',
        desc: 'Administrative and operational headquarters of ETS KAMBALE MACHOZI (KM). Central coordination of public road works, secure warehousing for FARDC rations, and international trade management.',
        stats: 'RCCM: 14-A-01204 • ID.NAT: 3-93-N55476A • Tax ID: A0816671x',
        activeInitiatives: [
          'Executive Headquarters led by CEO Mr. Bertrand Kambale Machozi',
          'Secure central warehouses with strict cold-chain management (FARDC)',
          'Heavy civil engineering machinery depot (graders, compactors, dump trucks)'
        ]
      },
      {
        id: 'matadi',
        name: 'Kolwezi & Kisanfu (Lualaba)',
        zone: 'Mining Branch — Lualaba & Haut-Katanga',
        title: 'Strategic Fuel Depot (+150,000L) & ARSP Mining Subcontracting',
        desc: 'Dedicated logistics hub serving major mining operators (Kisanfu Mining, Mutanda, Kamoto). 24/48-hour delivery of SGS-certified fuel and mining civil engineering works.',
        stats: 'ARSP/CD/0000018850 • 30,000–40,000L Stainless ADR/GPS Tankers',
        activeInitiatives: [
          'Supply of Diesel AGO/DDO, PMS Gasoline, Lubricants & Jet A1',
          'Mining site preparation, haul roads, and spare parts supply',
          'Copper and cobalt trading in partnership'
        ]
      },
      {
        id: 'kabondo',
        name: 'Goma & Beni (Nord-Kivu / Ituri)',
        zone: 'Eastern Branch — Agribusiness & Civil Works',
        title: 'Arabica Coffee, Organic Cocoa & Regional Infrastructure Hub',
        desc: 'Collection, moisture testing, and 60 kg jute sack packaging center in collaboration with Nord-Kivu and Ituri farm cooperatives, alongside regional road rehabilitation.',
        stats: 'Arabica Coffee & Forastero/Trinitario Cocoa • Dar es Salaam Corridor',
        activeInitiatives: [
          'Direct collection in partnership with Congolese agricultural cooperatives',
          'Quality control (moisture, grading) prior to container shipment',
          'Road rehabilitation and bridge construction'
        ]
      },
      {
        id: 'bas-fleuve',
        name: 'Matadi & Kasaï (Export Corridors)',
        zone: 'International Seaport & Robusta Basin',
        title: 'Container Export Terminal & National Road Networks',
        desc: 'Strategic port gateway for containerized exports of Robusta Coffee (Kasaï, Équateur) and Cocoa to Rotterdam, Antwerp, Dubai, Turkey, and the United States.',
        stats: 'Markets: Europe (Rotterdam, Antwerp) • Dubai • Turkey • USA',
        activeInitiatives: [
          'Container shipping via Kinshasa, Matadi, and Dar es Salaam',
          'Robusta Coffee sourcing across Kasaï and Équateur',
          'Maintenance of national roads, bridges, and drainage structures'
        ]
      }
    ]
  },
  team: {
    sectionKicker: 'GOVERNANCE & EXECUTIVE LEADERSHIP',
    title: 'Congolese leadership driven by excellence and compliance',
    sub: 'Under the direction of Mr. Bertrand Kambale Machozi, ETS KAMBALE MACHOZI brings together an experienced Congolese team committed to guaranteed quality, competitive pricing, and on-time delivery.',
    presidentCardBadge: 'General Management',
    activeMandate: '100% DRC Compliant',
    strategicVisionSubtitle: 'ETS KAMBALE MACHOZI (KM) — Corporate Governance & Strategic Vision',
    directorsHeader: 'Operational Divisions & Regional Hubs',
    members: [
      {
        name: 'Mr. Bertrand Kambale Machozi',
        role: 'Chief Executive Officer / Managing Director',
        location: 'Headquarters: Cité du Fleuve, Limete, Kinshasa – DRC',
        image: kmBertrandCeoImg,
        bio: 'Distinguished Congolese business leader at the helm of ETS KAMBALE MACHOZI (KM). Committed to the highest standards of governance, tax, commercial, and social compliance, he leads the company’s operations across five strategic sectors: road construction (ITPR), SGS-certified fuel supply, official FARDC rations, international coffee/cocoa export, and mining subcontracting in Lualaba.',
        quote: 'We hope to contribute significantly to the development of our country through a commitment to excellence and technology.'
      },
      {
        name: 'Hydrocarbons & Mining Division',
        role: 'Energy Logistics & ARSP Subcontracting',
        location: 'Kolwezi Branch — Lualaba & Haut-Katanga',
        image: placideBaundjaImg,
        bio: 'Oversees direct fuel imports from Dar es Salaam and Beira, the +150,000L SGS-certified strategic reserve, the ADR stainless-steel tanker fleet with GPS, and mining subcontracting operations (ARSP/CD/0000018850) serving Kisanfu, Mutanda, and Kamoto.',
        quote: 'Delivering pure SGS-certified fuel and reliable 24/48-hour logistics to the DRC’s premier mining operations.'
      },
      {
        name: 'Civil Engineering & Public Works Division',
        role: 'ITPR Infrastructure & Heavy Equipment Fleet',
        location: 'Kinshasa, Lualaba, Haut-Katanga, Nord-Kivu & Kasaï',
        image: doudouNzangaImg,
        bio: 'Directs road, bridge, culvert, and drainage construction and rehabilitation under official Ministry of ITPR authorization. Manages the company’s proprietary fleet of crawler tractors, motor graders, compactors, and dump trucks.',
        quote: 'Building resilient road infrastructure that connects our provinces and powers national economic sovereignty.'
      },
      {
        name: 'Agro-Export & FARDC Logistics Division',
        role: 'Coffee/Cocoa Export & Defense Supply',
        location: 'Kinshasa, Beni (Nord-Kivu), Ituri & Matadi Port',
        image: felixTshimangaImg,
        bio: 'Coordinates official military ration supplies for the FARDC under strict cold-chain and hygiene standards, as well as cooperative sourcing, quality control, and containerized exports of Arabica/Robusta Coffee and Cocoa to Europe, Dubai, Turkey, and the USA.',
        quote: 'Combining national defense food security with the global prestige of Congolese coffee and cocoa.'
      }
    ]
  },
  partners: {
    sectionKicker: 'LICENSES, CERTIFICATIONS & ECOSYSTEM',
    title: 'Official State Licenses & Strategic Partners',
    sub: 'ETS KAMBALE MACHOZI operates with 5 official licenses in the Democratic Republic of the Congo, serving state institutions, Lualaba mining leaders, and global commodity buyers.',
    becomePartnerBtn: 'Initiate a partnership or contract'
  },
  aerialSupport: {
    title: 'STRATEGIC PARTNER FOR YOUR OPERATIONS',
    subtitle: 'SGS-certified fuel delivered in 24/48h, ITPR Civil Engineering, ARSP Mining Subcontracting, FARDC Supplies, and Coffee & Cocoa Export.',
    donateBtn: 'Request a quote',
    otherWaysBtn: 'Legal credentials & IDs'
  },
  action: {
    sectionKicker: 'WORK WITH KM',
    title: 'Three B2B and institutional contracting pathways.',
    sub: 'Immediate operational readiness backed by proprietary reserves, heavy machinery, and 5 official state licenses.',
    way1Title: 'Fuel Supply & Petroleum Logistics',
    way1Desc: '24/48h delivery of SGS-certified Diesel AGO/DDO, PMS Gasoline, Lubricants, and Jet A1 to mining sites and industrial projects.',
    way1Btn: 'Request fuel quotation',
    way2Title: 'ITPR Civil Works & ARSP Subcontracting',
    way2Desc: 'Road and bridge construction, earthworks, heavy machinery rental, and ARSP-licensed mining subcontracting in Lualaba.',
    way2Btn: 'Submit tender / specs',
    way3Title: 'Coffee/Cocoa Export & Food Supply',
    way3Desc: 'Container orders of Arabica/Robusta Coffee and organic Cocoa (60 kg jute sacks) or large-scale institutional food contracts.',
    way3Btn: 'Contact General Management'
  },
  news: {
    sectionKicker: 'KM NEWS & OPERATIONS',
    title: 'Latest operational milestones across the DRC',
    sub: 'Follow KAMBALE MACHOZI’s activities in road infrastructure, fuel logistics, mining subcontracting, and agricultural exports.',
    readArticle: 'Read full report',
    items: [
      {
        id: 'news-1',
        title: 'Hydrocarbons Sector: KAMBALE MACHOZI expands its +150,000L SGS-certified strategic fuel depot for Lualaba',
        date: 'March 2026',
        category: 'Fuel & Logistics',
        readTime: '3 min read',
        excerpt: 'Through direct imports from Dar es Salaam (Tanzania) and Beira (Mozambique), KM guarantees 24/48-hour delivery to Kolwezi and Kisanfu mining sites.',
        content: [
          'To meet growing demand from mining operators, construction firms, NGOs, and transport fleets in Lualaba Province, ETS KAMBALE MACHOZI (KM) has expanded its petroleum logistics capabilities.',
          'All products — Diesel AGO/DDO, PMS Gasoline, Lubricants, and Jet A1 on special order — are SGS-certified and laboratory-tested for density, water content, and sulfur, ensuring 100% pure unblended fuel.',
          'Our proprietary fleet of stainless-steel tanker trucks (30,000 to 40,000-liter capacity), equipped with GPS tracking and full ADR compliance, delivers within 24 to 48 hours directly to Kisanfu and Kolwezi.'
        ],
        image: kmFuelFleetImg
      },
      {
        id: 'news-2',
        title: 'ITPR Infrastructure & ARSP Mining Subcontracting: heavy machinery deployment across major DRC corridors',
        date: 'February 2026',
        category: 'Roads & Mining',
        readTime: '4 min read',
        excerpt: 'Holding Ministry of ITPR authorization and ARSP certificate ARSP/CD/0000018850, KM accelerates earthworks, asphalt paving, and mining road construction.',
        content: [
          'Territorial integration and mining efficiency depend on durable road infrastructure. Authorized by the Ministry of ITPR, ETS KAMBALE MACHOZI executes the construction, rehabilitation, and maintenance of roads, bridges, culverts, and drainage systems across Kinshasa, Lualaba, Haut-Katanga, Nord-Kivu, and Kasaï.',
          'The company deploys its own heavy equipment fleet—crawler tractors, motor graders, compactors, and dump trucks—ensuring full operational autonomy and strict deadline compliance.',
          'Simultaneously, under license ARSP/CD/0000018850, KM expands its mining subcontracting and copper-cobalt trading partnerships in the Lualaba Copperbelt.'
        ],
        image: kmHeroRoadsImg
      },
      {
        id: 'news-3',
        title: 'Global Agribusiness: exporting Congolese Coffee and Cocoa to Europe, Dubai, Turkey, and the USA',
        date: 'January 2026',
        category: 'Agro-Export & FARDC',
        readTime: '3 min read',
        excerpt: 'Partnering with agricultural cooperatives in Nord-Kivu, Ituri, Kasaï, and Équateur, KM showcases premium Congolese harvests worldwide.',
        content: [
          'KAMBALE MACHOZI’s fourth strategic pillar champions Congolese agriculture on international markets. We source and export Arabica Coffee (Nord-Kivu, Ituri), Robusta Coffee (Kasaï, Équateur), and Forastero and Trinitario cocoa beans (organic certified upon request).',
          'Every batch undergoes rigorous moisture and grading quality control before packaging in 60 kg jute sacks and container shipment via Kinshasa, Matadi, and Dar es Salaam to Rotterdam, Antwerp, Dubai, Turkey, and the USA.',
          'Meanwhile, authorized by the Ministry of National Defense, KM proudly serves as an official supplier of military rations and food staples to the FARDC across all operational zones.'
        ],
        image: kmCoffeeCocoaImg
      }
    ]
  },
  newsDetail: {
    backToNews: 'Back to KM news',
    share: 'Share',
    linkCopied: 'Link copied!',
    readTimeLabel: 'read',
    relatedTitle: 'Other operational reports',
    supportTitle: 'Looking for a strategic partner in the DRC?',
    supportDesc: 'Contact ETS KAMBALE MACHOZI General Management for SGS fuel quotes, ITPR civil works, ARSP mining subcontracting, or agro-exports.',
    donateCta: 'Request a quote'
  },
  otherWaysToDonate: {
    backHome: 'Back to home',
    badge: 'Corporate Portal, Legal Compliance & B2B Quotations',
    title: 'Full legal compliance and contracting capacity in the DRC.',
    sub: 'Review all official registrations of ETS KAMBALE MACHOZI (RCCM, ID.NAT, Tax ID, ARSP), simulate your operational requirements, and contact our General Management in Kinshasa, Kolwezi, or Beni.',
    simBtn: 'Simulate order / contract',
    exploreBtn: 'View legal credentials',
    simTitle: 'Sector Capacity & Supply Simulator',
    simSub: 'Select an operational tier to view our guaranteed delivery standards:',
    monthly: 'Long-Term Framework Contract',
    once: 'Spot Order / Project Tender',
    impactLabel: 'Guaranteed operational capacity:',
    donateNowBtn: 'Request formal quotation',
    secureNote: 'Full tax compliance • SGS Certificate • ARSP/CD/0000018850.',
    waysTitle: 'Official Registrations & Direct Contracting Channels',
    waysSub: 'Verify and copy our official legal credentials in the Democratic Republic of the Congo with one click.',
    mobileMoneyTitle: 'Legal Registrations & State Licenses (DRC)',
    mobileMoneyDesc: 'Congolese corporation in full tax, commercial, social, and ARSP compliance.',
    bankTransferTitle: 'Corporate Headquarters & Regional Branches',
    bankTransferDesc: 'Nationwide presence ensuring rapid response across Kinshasa, Lualaba, and Nord-Kivu.',
    copyLabel: 'Copy',
    copiedLabel: 'Copied!',
    cardsTitle: 'Commercial Desk & Tenders (RFQ)',
    cardsDesc: 'Direct submission of specifications and RFQs for Diesel/Jet A1, ITPR civil engineering, mining subcontracting, or Coffee/Cocoa containers.',
    inKindTitle: 'Heavy Machinery Rental & ITPR / ARSP Subcontracting',
    inKindDesc: 'Immediate availability of crawler tractors, motor graders, compactors, dump trucks, and ADR stainless-steel fuel tankers (30,000–40,000L).',
    inKindBtn: 'Request fleet spec sheet',
    taxReceiptTitle: 'SGS Quality Certification & Export Standards',
    taxReceiptDesc: 'All fuel deliveries include SGS analysis certificates (density, water, sulfur) and all coffee/cocoa lots undergo strict moisture grading.'
  },
  volunteerModal: {
    title: 'Request a Quote / Submit Tender',
    sub: 'ITPR road works, SGS-certified fuel (24/48h), FARDC rations, coffee/cocoa export, or ARSP mining subcontracting.',
    nameLabel: 'Full Name / Title *',
    namePlaceholder: 'Your full name',
    emailLabel: 'Corporate Email *',
    phoneLabel: 'Phone / WhatsApp *',
    countryLabel: 'City / Province or Country',
    areaLabel: 'Target Sector',
    areaOptions: [
      'Sector 1: Road Construction & Rehabilitation (ITPR)',
      'Sector 2: SGS-Certified Fuel Supply (Diesel, PMS, Jet A1)',
      'Sector 3: Military & Institutional Food Rations (FARDC)',
      'Sector 4: International Coffee & Cocoa Export (60kg Sacks)',
      'Sector 5: Mining Operations & Subcontracting (Lualaba / Katanga)'
    ],
    availLabel: 'Required Timeline',
    availOptions: [
      'Urgent Delivery (24h / 48h)',
      'Short Term (1 to 4 weeks)',
      'Multi-year Framework Contract / Tender'
    ],
    submitBtn: 'Submit Quotation Request',
    successTitle: 'Request Registered Successfully!',
    successDesc: 'ETS KAMBALE MACHOZI General Management will respond within 24 hours with a detailed technical and commercial offer.',
    closeBtn: 'Close'
  },
  partnerModal: {
    title: 'Strategic Partnership & Subcontracting',
    sub: 'Mining companies (Lualaba/Katanga), DRC public institutions, international commodity buyers, and multinationals.',
    orgLabel: 'Company or Institution Name *',
    orgPlaceholder: 'E.g. Mining Corp, Ministry, Coffee/Cocoa Importer...',
    repLabel: 'Representative / Title *',
    repPlaceholder: 'Full name and official title',
    emailLabel: 'Corporate Email *',
    typeLabel: 'Partnership Category',
    typeOptions: [
      'Mining subcontracting & logistics (ARSP/CD/0000018850)',
      'Regular SGS-certified fuel supply contract',
      'ITPR road infrastructure & heavy machinery rental',
      'International Arabica/Robusta Coffee & Cocoa import',
      'Institutional & National Defense supply'
    ],
    msgLabel: 'Partnership Scope & Estimated Volumes *',
    msgPlaceholder: 'Describe your technical needs, delivery locations, or target volumes...',
    submitBtn: 'Send Proposal to General Management',
    successTitle: 'Proposal Sent to General Management!',
    successDesc: 'The executive office of Mr. Bertrand Kambale Machozi will review your proposal with top priority.',
    closeBtn: 'Close'
  },
  contact: {
    sectionKicker: 'CONTACTS & HEADQUARTERS',
    title: 'Contact General Management',
    sub: 'ETS KAMBALE MACHOZI (KM) is at your service in Kinshasa, Kolwezi, and Beni/Goma for all infrastructure, fuel, mining, and agro-export requirements.',
    hqDrcTitle: 'Corporate HQ — Kinshasa, DRC',
    hqDrcOrg: 'ETS KAMBALE MACHOZI (KM) — General Management',
    hqDrcLoc: 'Cité du Fleuve, Limete Municipality, Kinshasa – DRC | Branches: Kolwezi (Lualaba) – Beni / Goma (Nord-Kivu)',
    intlUsaTitle: 'Official Legal Identifiers',
    intlUsaOrg: 'RCCM: 14-A-01204 • ID.NAT: 3-93-N55476A',
    intlUsaLoc: 'Tax ID: A0816671x • ARSP: ARSP/CD/0000018850',
    formTitle: 'Send a message to Mr. Bertrand Kambale Machozi',
    formSub: 'Complete the form below to reach General Management directly (+243 819613224 / agrokoma@yahoo.fr).',
    nameLabel: 'Full Name / Company *',
    namePlaceholder: 'Your name and company',
    emailLabel: 'Email Address *',
    subjectLabel: 'Business Sector',
    subjectOptions: [
      '1. Roads, Public Works & Heavy Machinery (ITPR)',
      '2. SGS Fuel Order (Diesel, PMS, Jet A1)',
      '3. Military Rations & Food Supply (FARDC)',
      '4. International Coffee & Cocoa Export',
      '5. Mining Subcontracting (Lualaba/Katanga)',
      'Other Institutional Inquiry'
    ],
    msgLabel: 'Your message or technical specifications *',
    msgPlaceholder: 'Describe your project, required quantities, or operational site...',
    sendBtn: 'Send to General Management',
    sentSuccessTitle: 'Message sent successfully!',
    sentSuccessDesc: 'Our General Management team in Kinshasa will reply promptly.'
  },
  footer: {
    desc: 'Congolese company headquartered at Cité du Fleuve (Kinshasa), strategic multi-sector partner for road infrastructure (ITPR), SGS-certified fuel distribution, FARDC supplies, coffee/cocoa export, and mining subcontracting (ARSP).',
    certText: 'RCCM: 14-A-01204 • ID.NAT: 3-93-N55476A • Tax ID: A0816671x • ARSP/CD/0000018850',
    followUs: 'Official corporate communication channels',
    quickLinksTitle: 'Navigation',
    programsTitle: 'Our 5 Sectors',
    donateBoxTitle: 'Quotes & Contracts',
    donateBoxDesc: 'Tel: +243 819613224 • Email: agrokoma@yahoo.fr • HQ: Cité du Fleuve, Limete, Kinshasa.',
    donateBoxBtn: 'Request a quote',
    copyright: '© 2026 ETS KAMBALE MACHOZI (KM). All rights reserved.',
    allRightsReserved: 'Building the Future in the Democratic Republic of the Congo.',
    backToTop: 'Back to top'
  }
};
