// Single source of truth for legal + contact details.
// Used by the imprint page and the structured-data (JSON-LD) include.
// Registry data: DreamBit s.r.o. (Transparex / ORSR).
module.exports = {
  legalName: "DreamBit s.r.o.",
  brandName: "DreamBit",

  // Registered seat (sídlo)
  street: "Karpatská 1916/28A",
  city: "Stupava",
  postalCode: "900 31",
  countryCode: "SK",
  country: "Slovensko",

  // Identifiers
  ico: "56 124 635",
  dic: "2122212213",
  icDph: "SK2122212213",

  // Commercial register entry (Obchodný register)
  // TODO: fill in the exact vložka number from the ORSR extract / registration docs.
  registerCourt: "Mestský súd Bratislava III",
  registerEntry: "oddiel Sro, vložka č. XXXXX/B",

  // People
  executives: ["Jarmila Munro", "Jamie Robert Munro"],

  // Contact
  email: "jarka@dreambit.sk",
  foundingDate: "2024-03-14",

  // Local reach (used for areaServed in JSON-LD + local SEO copy)
  areaServed: ["Stupava", "Malacky", "Bratislava"],

  // Public social profiles (added to schema.org sameAs). Add the Facebook page URL here.
  socialProfiles: [],

  // Course offerings advertised on the site
  offerings: [
    {
      name: "Bežná angličtina",
      description: "Angličtina pre každodenný život – nakupovanie, cestovanie, sebavedomá komunikácia."
    },
    {
      name: "Pracovná angličtina",
      description: "Angličtina pre prácu – životopis, príprava na pohovor, komunikácia s kolegami a klientmi."
    }
  ]
};
