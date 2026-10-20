export interface CookieCopy {
  title: string;
  intro: string;
  privacy: string;
  always: string;
  show: string;
  hide: string;
  accept: string;
  reject: string;
  save: string;
  categories: { key: "necessary" | "analytics" | "marketing" | "social"; name: string; desc: string }[];
}

export interface PrivacyCopy {
  title: string;
  description: string;
  document: string;
  updated: string;
  intro: string;
  sections: {
    id: "controller" | "data" | "basis" | "cookies" | "recipients" | "transfers" | "retention" | "rights" | "changes" | "contact";
    title: string;
    paragraphs: string[];
    items?: string[];
  }[];
  tableCaption: string;
  tableHeaders: [string, string, string];
  tableRows: { name: string; purpose: string; basis: string }[];
  settings: string;
  cloudflare: string;
  cloudflareCookies: string;
  cloudflareDpa: string;
  authority: string;
}
