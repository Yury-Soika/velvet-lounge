import rawContent from "../data/content.json";

export type NavLink = {
  label: string;
  href: string;
};

export type SiteInfo = {
  name: string;
  city: string;
  country: string;
  tagline: string;
  description: string;
};

export type HeroContent = {
  badge: string;
  title: string;
  headline: string;
  highlight: string;
  subheadline: string;
  primaryCta: string;
  secondaryCta: string;
  scrollCta: string;
};

export type AboutHighlight = {
  label: string;
  value: string;
};

export type AboutStat = {
  label: string;
  value: string;
};

export type EventItem = {
  date: string;
  name: string;
  artist: string;
  tag: string;
  description: string;
  ctaLabel: string;
};

export type VipPackage = {
  name: string;
  minSpend: string;
  guests: string;
  description: string;
  includes: string[];
  highlighted: boolean;
};

export type SignatureCocktail = {
  name: string;
  description: string;
  price: string;
};

export type BottleCategory = {
  category: string;
  from: string;
};

export type GalleryItem = {
  label: string;
  tag: string;
  imageSrc?: string;
};

export type OpeningHour = {
  day: string;
  time: string;
};

export type LocationContacts = {
  phone: string;
  whatsapp: string;
  email: string;
  instagram: string;
  tiktok: string;
  facebook: string;
};

export type ReservationFormLabels = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  occasion: string;
  message: string;
  submit: string;
};

export type ReservationExpectations = {
  title: string;
  items: string[];
};

export type FooterLinksGroup = {
  label: string;
  href: string;
};

export type VelvetContent = {
  site: SiteInfo;
  navigation: {
    links: NavLink[];
    cta: string;
  };
  hero: HeroContent;
  about: {
    title: string;
    highlight: string;
    description: string;
    highlights: AboutHighlight[];
    stats: AboutStat[];
  };
  events: {
    title: string;
    highlight: string;
    subtitle: string;
    items: EventItem[];
  };
  vip: {
    title: string;
    highlight: string;
    subtitle: string;
    description: string;
    perks: string[];
    packages: VipPackage[];
    note: string;
  };
  menu: {
    title: string;
    highlight: string;
    subtitle: string;
    signatureCocktails: SignatureCocktail[];
    bottles: BottleCategory[];
    ctaLabel: string;
  };
  gallery: {
    title: string;
    highlight: string;
    subtitle: string;
    items: GalleryItem[];
  };
  location: {
    title: string;
    highlight: string;
    subtitle: string;
    address: string;
    mapLabel: string;
    hours: OpeningHour[];
    contacts: LocationContacts;
  };
  reservation: {
    title: string;
    highlight: string;
    subtitle: string;
    form: ReservationFormLabels;
    expectations: ReservationExpectations;
  };
  footer: {
    disclaimer: string;
    links: {
      primary: FooterLinksGroup[];
      legal: FooterLinksGroup[];
      social?: FooterLinksGroup[];
    };
    copyright: string;
    builtBy?: { label: string; href: string };
  };
};

const contentData = rawContent as VelvetContent;

export const getContent = () => contentData;
export const getSite = () => contentData.site;
export const getNavigation = () => contentData.navigation;
export const getHero = () => contentData.hero;
export const getAbout = () => contentData.about;
export const getEvents = () => contentData.events;
export const getVip = () => contentData.vip;
export const getMenu = () => contentData.menu;
export const getGallery = () => contentData.gallery;
export const getLocation = () => contentData.location;
export const getReservation = () => contentData.reservation;
export const getFooter = () => contentData.footer;

