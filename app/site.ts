// Single source of truth for the public domain and business (NAP) details.
// Keep these identical to Google Business Profile, IndiaMART, JustDial, etc.

export const SITE_URL = "https://www.realwavespacks.com";
// Matches the logo, the legal name and the IndiaMART / JustDial / Instagram listings.
// Google treats "Realwaves" as one word ("Did you mean: Realwaves Packs"), so keep it.
export const SITE_NAME = "RealWaves Packs";
export const LEGAL_NAME = "Realwaves Packs (India) Private Limited";

export const BUSINESS = {
  name: SITE_NAME,
  alternateNames: ["Real Waves Packs", "RealWaves", "Realwaves Packs India Pvt Ltd"],
  telephone: "+91-9009990000",
  altTelephone: "+91-9617234355",
  email: "realwavespacks@gmail.com",
  foundingYear: "2017",
  address: {
    streetAddress: "Near SBI Bank, Nakoda Group Premises, Ward 26, Village Saddu",
    addressLocality: "Raipur",
    addressRegion: "Chhattisgarh",
    postalCode: "492014",
    addressCountry: "IN",
  },
  geo: {
    latitude: 21.27275,
    longitude: 81.693197,
  },
  sameAs: [
    "https://www.facebook.com/realwavespacksraipur",
    "https://www.instagram.com/real_wavespacks/",
  ],
};

// Shared Open Graph defaults. Child routes that set `openGraph` replace the
// parent's object entirely, so they spread this to keep the image and site name.
export const DEFAULT_OPEN_GRAPH = {
  type: "website" as const,
  siteName: SITE_NAME,
  locale: "en_IN",
  images: [
    {
      url: "/logo.png",
      width: 500,
      height: 102,
      alt: `${SITE_NAME} – Non-Woven Bag Manufacturer in Raipur`,
    },
  ],
};
