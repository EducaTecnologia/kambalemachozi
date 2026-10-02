import { ProjectItem, TeamMember, NewsItem, ImpactStat } from '../../types';

export interface TranslationSchema {
  brandTagline: string;
  nav: {
    home: string;
    about: string;
    programs: string;
    projects: string;
    locations: string;
    team: string;
    supporters: string;
    news: string;
    otherWaysToDonate: string;
    contact: string;
    donate: string;
  };
  preloader: {
    skip: string;
    loading: string;
    slides: { title: string; location: string; tag: string }[];
  };
  hero: {
    kicker: string;
    slide1Title: string;
    slide1Sub: string;
    slide1Cta1: string;
    slide1Cta2: string;
    slide2Title: string;
    slide2Sub: string;
    slide2Cta: string;
    slide3Title: string;
    slide3Sub: string;
    slide3Cta: string;
  };
  mission: {
    sectionKicker: string;
    title: string;
    manifestoQuote: string;
    badgeRdc: string;
    oathDesc: string;
    ngoLegalCert: string;
    p1: string;
    p2: string;
    p3: string;
    valuesTitle: string;
    values: { title: string; desc: string }[];
  };
  impactStats: {
    sectionKicker: string;
    title: string;
    sub: string;
    items: { id: string; value: number; suffix: string; label: string; description: string }[];
  };
  pillars: {
    sectionKicker: string;
    title: string;
    sub: string;
    donateToPillar: string;
    items: {
      id: string;
      title: string;
      desc: string;
      tag: string;
      keyPoints: string[];
    }[];
  };
  humaneImpact: {
    kicker: string;
    word1: string;
    word2: string;
    word3: string;
    body: string;
    cta: string;
  };
  projects: {
    sectionKicker: string;
    title: string;
    sub: string;
    benefitLabel: string;
    supervisedBy: string;
    supportBtn: string;
    items: ProjectItem[];
  };
  map: {
    sectionKicker: string;
    title: string;
    sub: string;
    activeCountPill: string;
    locations: {
      id: string;
      name: string;
      zone: string;
      title: string;
      desc: string;
      stats: string;
      activeInitiatives: string[];
    }[];
  };
  team: {
    sectionKicker: string;
    title: string;
    sub: string;
    presidentCardBadge: string;
    activeMandate: string;
    strategicVisionSubtitle: string;
    directorsHeader: string;
    members: TeamMember[];
  };
  partners: {
    sectionKicker: string;
    title: string;
    sub: string;
    becomePartnerBtn: string;
  };
  aerialSupport: {
    title: string;
    subtitle: string;
    donateBtn: string;
    otherWaysBtn: string;
  };
  action: {
    sectionKicker: string;
    title: string;
    sub: string;
    way1Title: string;
    way1Desc: string;
    way1Btn: string;
    way2Title: string;
    way2Desc: string;
    way2Btn: string;
    way3Title: string;
    way3Desc: string;
    way3Btn: string;
  };
  news: {
    sectionKicker: string;
    title: string;
    sub: string;
    readArticle: string;
    items: NewsItem[];
  };
  newsDetail: {
    backToNews: string;
    share: string;
    linkCopied: string;
    readTimeLabel: string;
    relatedTitle: string;
    supportTitle: string;
    supportDesc: string;
    donateCta: string;
  };
  otherWaysToDonate: {
    backHome: string;
    badge: string;
    title: string;
    sub: string;
    simBtn: string;
    exploreBtn: string;
    simTitle: string;
    simSub: string;
    monthly: string;
    once: string;
    impactLabel: string;
    donateNowBtn: string;
    secureNote: string;
    waysTitle: string;
    waysSub: string;
    mobileMoneyTitle: string;
    mobileMoneyDesc: string;
    bankTransferTitle: string;
    bankTransferDesc: string;
    copyLabel: string;
    copiedLabel: string;
    cardsTitle: string;
    cardsDesc: string;
    inKindTitle: string;
    inKindDesc: string;
    inKindBtn: string;
    taxReceiptTitle: string;
    taxReceiptDesc: string;
  };
  volunteerModal: {
    title: string;
    sub: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    phoneLabel: string;
    countryLabel: string;
    areaLabel: string;
    areaOptions: string[];
    availLabel: string;
    availOptions: string[];
    submitBtn: string;
    successTitle: string;
    successDesc: string;
    closeBtn: string;
  };
  partnerModal: {
    title: string;
    sub: string;
    orgLabel: string;
    orgPlaceholder: string;
    repLabel: string;
    repPlaceholder: string;
    emailLabel: string;
    typeLabel: string;
    typeOptions: string[];
    msgLabel: string;
    msgPlaceholder: string;
    submitBtn: string;
    successTitle: string;
    successDesc: string;
    closeBtn: string;
  };
  contact: {
    sectionKicker: string;
    title: string;
    sub: string;
    hqDrcTitle: string;
    hqDrcOrg: string;
    hqDrcLoc: string;
    intlUsaTitle: string;
    intlUsaOrg: string;
    intlUsaLoc: string;
    formTitle: string;
    formSub: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    subjectLabel: string;
    subjectOptions: string[];
    msgLabel: string;
    msgPlaceholder: string;
    sendBtn: string;
    sentSuccessTitle: string;
    sentSuccessDesc: string;
  };
  footer: {
    desc: string;
    certText: string;
    followUs: string;
    quickLinksTitle: string;
    programsTitle: string;
    donateBoxTitle: string;
    donateBoxDesc: string;
    donateBoxBtn: string;
    copyright: string;
    allRightsReserved: string;
    backToTop: string;
  };
}
