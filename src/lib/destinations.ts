const P = "https://images.pexels.com/photos";

const px = (id: number, w: number) =>
  `${P}/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export type Day = { day: string; title: string; desc: string };

export type Destination = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  hero: string;
  gallery: string[];
  highlights: string[];
  itinerary: Day[];
  bestTime: string;
  forTags: Array<"couple" | "family" | "group" | "corporate">;
  vibeTags: Array<"beach" | "mountains" | "city" | "culture">;
};

export const DESTINATIONS: Destination[] = [
  {
    slug: "kashmir",
    name: "Kashmir",
    tagline: "Valleys, lakes and snow, planned around your dates.",
    description:
      "Kashmir is our most-booked family escape: houseboats on Dal Lake, Gulmarg meadows and Pahalgam valleys with hotels, transfers and support on call from Mumbai.",
    hero: px(24513297, 2400),
    gallery: [px(32647122, 1200), px(15469407, 1200), px(12365962, 1200)],
    highlights: ["Dal Lake houseboat stay", "Gulmarg day trip", "Pahalgam valley", "Srinagar sightseeing"],
    itinerary: [
      { day: "Day 1", title: "Arrive in Srinagar", desc: "Airport pickup, Dal Lake shikara ride in the evening, overnight houseboat." },
      { day: "Day 2", title: "Srinagar sightseeing", desc: "Mughal Gardens, Shankaracharya Temple and local markets." },
      { day: "Day 3", title: "Gulmarg day trip", desc: "Meadows and Gondola views, back to Srinagar by evening." },
      { day: "Day 4", title: "Pahalgam valley", desc: "Lidder river, Betaab valley, overnight hotel stay." },
      { day: "Day 5", title: "Fly home", desc: "Transfer to Srinagar airport with assistance on call." },
    ],
    bestTime: "March to October",
    forTags: ["couple", "family", "group"],
    vibeTags: ["mountains", "culture"],
  },
  {
    slug: "maldives",
    name: "Maldives",
    tagline: "Honeymoon water villas within your budget.",
    description:
      "Maldives honeymoons done right: seaplane transfers, water villas and resort stays with everything booked end to end from Mumbai.",
    hero: px(27099922, 2400),
    gallery: [px(3293192, 1200), px(9080918, 1200), px(12446349, 1200)],
    highlights: ["Water villa stay", "Seaplane transfers", "Snorkelling trip", "Beach dinners"],
    itinerary: [
      { day: "Day 1", title: "Arrive and transfer", desc: "Seaplane or speedboat to your resort, evening at leisure." },
      { day: "Day 2", title: "Island day", desc: "Snorkelling, sandbank trip and resort activities." },
      { day: "Day 3", title: "At leisure", desc: "Spa, water sports or a private beach dinner." },
      { day: "Day 4", title: "Fly home", desc: "Transfer back to Male for your return flight." },
    ],
    bestTime: "November to April",
    forTags: ["couple"],
    vibeTags: ["beach"],
  },
  {
    slug: "bali",
    name: "Bali",
    tagline: "Temples, rice terraces and pool villas.",
    description:
      "Bali works for honeymoons and families alike: Uluwatu temples, Nusa Penida day trips and private pool villas, all transfers handled.",
    hero: px(35823226, 2400),
    gallery: [px(27375304, 1200), px(35236021, 1200), px(14923408, 1200)],
    highlights: ["Ulun Danu Temple", "Nusa Penida day trip", "Private pool villa", "Uluwatu sunset"],
    itinerary: [
      { day: "Day 1", title: "Arrive in Denpasar", desc: "Private transfer to Kuta or Seminyak hotel." },
      { day: "Day 2", title: "Uluwatu and beaches", desc: "Temple sunset, Kecak dance and beach clubs." },
      { day: "Day 3", title: "Nusa Penida", desc: "Full-day island trip with Kelingking viewpoint." },
      { day: "Day 4", title: "Ubud", desc: "Rice terraces, temples and markets." },
      { day: "Day 5", title: "Fly home", desc: "Transfer to the airport with support on call." },
    ],
    bestTime: "April to October",
    forTags: ["couple", "family"],
    vibeTags: ["beach", "culture"],
  },
  {
    slug: "thailand",
    name: "Thailand",
    tagline: "Island holidays the whole family enjoys.",
    description:
      "Thailand is the easiest family holiday: Phuket beaches, island tours and Bangkok city days, with hotels and transfers fixed before you fly.",
    hero: px(8170275, 2400),
    gallery: [px(18304882, 1200), px(12446345, 1200), px(35236021, 1200)],
    highlights: ["Phi Phi island tour", "Phuket beaches", "Bangkok city day", "Family resorts"],
    itinerary: [
      { day: "Day 1", title: "Arrive in Phuket", desc: "Transfer to beach resort, evening at leisure." },
      { day: "Day 2", title: "Phi Phi islands", desc: "Full-day boat tour with snorkelling stops." },
      { day: "Day 3", title: "Phuket", desc: "Big Buddha, old town and night markets." },
      { day: "Day 4", title: "Bangkok", desc: "Fly to Bangkok, temples and shopping." },
      { day: "Day 5", title: "Fly home", desc: "Airport transfer with assistance on call." },
    ],
    bestTime: "November to March",
    forTags: ["couple", "family", "group"],
    vibeTags: ["beach", "city"],
  },
  {
    slug: "singapore",
    name: "Singapore",
    tagline: "City breaks with zero planning stress.",
    description:
      "Singapore is perfect for short breaks and corporate offsites: Marina Bay, Sentosa and Universal Studios with hotels near transit, booked from Mumbai.",
    hero: px(18662417, 2400),
    gallery: [px(18787363, 1200), px(30554306, 1200)],
    highlights: ["Marina Bay Sands area", "Sentosa island", "Universal Studios", "Gardens by the Bay"],
    itinerary: [
      { day: "Day 1", title: "Arrive in Singapore", desc: "Check in near transit, evening at Marina Bay." },
      { day: "Day 2", title: "Sentosa", desc: "Universal Studios or beach clubs, full day." },
      { day: "Day 3", title: "City day", desc: "Gardens by the Bay, Little India and shopping." },
      { day: "Day 4", title: "Fly home", desc: "Check out and airport transfer." },
    ],
    bestTime: "Year round",
    forTags: ["couple", "family", "group", "corporate"],
    vibeTags: ["city"],
  },
  {
    slug: "europe",
    name: "Europe",
    tagline: "Paris, the Alps and the Aegean in one plan.",
    description:
      "Europe honeymoons and holidays: Paris streets, Swiss alpine days and Greek islands, with trains, stays and visas planned as one trip.",
    hero: px(15452274, 2400),
    gallery: [px(13799693, 1200), px(20397777, 1200), px(15532995, 1200)],
    highlights: ["Paris sightseeing", "Swiss alpine day", "Santorini sunsets", "Schengen visa help"],
    itinerary: [
      { day: "Day 1-2", title: "Paris", desc: "Eiffel Tower, Louvre and Seine evening cruise." },
      { day: "Day 3-4", title: "Swiss Alps", desc: "Train to Interlaken, Jungfrau day trip." },
      { day: "Day 5-6", title: "Santorini", desc: "Fly south, Oia sunsets and caldera views." },
      { day: "Day 7", title: "Fly home", desc: "Return via Athens with transfers handled." },
    ],
    bestTime: "April to June, September",
    forTags: ["couple", "family"],
    vibeTags: ["city", "culture", "mountains"],
  },
  {
    slug: "turkey",
    name: "Turkey",
    tagline: "Cappadocia skies and Istanbul bazaars.",
    description:
      "Turkey blends culture and value: Istanbul mosques and bazaars plus Cappadocia cave stays and balloon mornings, visas included.",
    hero: px(14814433, 2400),
    gallery: [px(29511479, 1200), px(23696832, 1200)],
    highlights: ["Cappadocia balloons", "Cave hotel stay", "Istanbul old city", "Bosphorus cruise"],
    itinerary: [
      { day: "Day 1", title: "Arrive in Istanbul", desc: "Old city walk and Bosphorus evening cruise." },
      { day: "Day 2", title: "Istanbul", desc: "Blue Mosque, Hagia Sophia and Grand Bazaar." },
      { day: "Day 3-4", title: "Cappadocia", desc: "Fly in, balloon morning, cave hotel, valleys." },
      { day: "Day 5", title: "Fly home", desc: "Return via Istanbul with transfers handled." },
    ],
    bestTime: "April to June, September to October",
    forTags: ["couple", "family", "group"],
    vibeTags: ["culture", "city"],
  },
  {
    slug: "bhutan",
    name: "Bhutan",
    tagline: "Monasteries and Himalayan calm.",
    description:
      "Bhutan suits slow group and family travel: Tiger's Nest hikes, Thimphu culture and Paro valleys with permits and stays arranged.",
    hero: px(39128852, 2400),
    gallery: [px(39128859, 1200), px(15469407, 1200), px(12365962, 1200)],
    highlights: ["Tiger's Nest hike", "Thimphu culture", "Paro valley", "Permits handled"],
    itinerary: [
      { day: "Day 1", title: "Arrive in Paro", desc: "Transfer to Thimphu, evening market walk." },
      { day: "Day 2", title: "Thimphu", desc: "Buddha Point, monasteries and museums." },
      { day: "Day 3", title: "Tiger's Nest", desc: "Guided hike to the cliff monastery." },
      { day: "Day 4", title: "Fly home", desc: "Transfer to Paro airport." },
    ],
    bestTime: "March to May, October to November",
    forTags: ["family", "group", "couple"],
    vibeTags: ["mountains", "culture"],
  },
  {
    slug: "vietnam",
    name: "Vietnam",
    tagline: "Bays, lantern towns and great value.",
    description:
      "Vietnam gives families and groups a lot for the budget: Ha Long Bay cruises, Hoi An lantern streets and Hanoi food walks.",
    hero: px(38116420, 2400),
    gallery: [px(38100494, 1200), px(8170275, 1200), px(14923408, 1200)],
    highlights: ["Ha Long Bay cruise", "Hoi An old town", "Hanoi food walk", "Value stays"],
    itinerary: [
      { day: "Day 1", title: "Arrive in Hanoi", desc: "Old quarter walk and food tour." },
      { day: "Day 2-3", title: "Ha Long Bay", desc: "Overnight cruise with kayaking and caves." },
      { day: "Day 4", title: "Hoi An", desc: "Fly south, lantern streets and tailors." },
      { day: "Day 5", title: "Fly home", desc: "Transfer via Da Nang with support on call." },
    ],
    bestTime: "October to April",
    forTags: ["family", "group", "couple"],
    vibeTags: ["beach", "culture", "city"],
  },
  {
    slug: "mauritius",
    name: "Mauritius",
    tagline: "Quiet lagoons for anniversaries.",
    description:
      "Mauritius is our pick for anniversaries and calm group trips: lagoon resorts, catamaran days and Creole dinners, transfers included.",
    hero: px(7449072, 2400),
    gallery: [px(18936488, 1200), px(12446345, 1200), px(12446349, 1200)],
    highlights: ["Lagoon resorts", "Catamaran day", "Ile aux Cerfs", "Beach dinners"],
    itinerary: [
      { day: "Day 1", title: "Arrive in Mauritius", desc: "Transfer to lagoon resort, evening at leisure." },
      { day: "Day 2", title: "Ile aux Cerfs", desc: "Full-day island and lagoon trip." },
      { day: "Day 3", title: "South island", desc: "Chamarel, waterfalls and rum tasting." },
      { day: "Day 4", title: "Fly home", desc: "Airport transfer with support on call." },
    ],
    bestTime: "May to December",
    forTags: ["couple", "family", "group"],
    vibeTags: ["beach"],
  },
];

export const destinationBySlug = (slug: string) =>
  DESTINATIONS.find((d) => d.slug === slug);
