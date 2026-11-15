// City guides. Hyderabad is live; the others are honest "coming soon" pages that collect interest
// (the website's Count me in form) and say exactly what prsnn will offer there.

const city = ({ slug, name, alt, areas, places, keywords, live = false, women = false, faq = [] }) => {
  const where = alt ? `${name} (${alt})` : name;
  const status = live
    ? `prsnn is live in ${name}. You can book a verified companion in the app today, from ₹399 for an hour.`
    : `prsnn isn’t in ${name} yet: we’ve launched in Hyderabad and are opening city by city. Leave your number on our home page and we’ll message you on WhatsApp the day ${name} opens, for booking or for becoming a companion.`;
  return {
    slug,
    city: name,
    live,
    title: live ? `Rent a friend in ${where}: book a verified platonic companion` : `Rent a friend in ${where}: platonic companions, coming soon`,
    short: `Rent a friend in ${name}`,
    description: live
      ? `Book a verified platonic companion in ${name}: café company, walks, study buddies, event plus-ones and visits for parents. Public places, from ₹399 an hour.`
      : `prsnn’s verified platonic companions are coming to ${name}. What you’ll be able to book, how safety works, and how to get told first.`,
    keywords,
    minutes: 4,
    intro: [status, `This page is for anyone searching for ${keywords.map((k) => `“${k}”`).join(', ')}: what prsnn offers in ${name}, how safety works, and how to book or join.`],
    sections: [
      {
        h: live ? `How do I rent a friend in ${name}?` : `Can I rent a friend in ${name}?`,
        answer: live
          ? `Download prsnn, choose a kind of company, a length from one to twelve hours, a time and a public place in ${name}, and pay in the app. An approved, ID-checked companion accepts and chat opens. Popular areas include ${areas}. Prices start at ₹399 for an hour, with no booking fee.`
          : `Not yet. prsnn, the platonic companion app, is live in Hyderabad and is coming to ${name}. When it opens you’ll book verified companions by the hour for cafés, walks, study, events and visits to parents, in public places, from ₹399. Leave your number on our home page to hear first.`,
      },
      {
        h: `What can I book a companion for in ${name}?`,
        answer: `Everyday plans that are better with company: ${places}. Every meeting is in a public place named in the booking, except a visit a family books for a loved one at home. Companions are platonic company only: no dating, no therapy, no errands.`,
      },
      {
        h: women ? `Are there safe female-only meetups in ${name}?` : `Is it safe to meet a companion in ${name}?`,
        answer: women
          ? `On prsnn you can choose to meet women only, so you only see and book women companions. Every companion is approved by our team and ID-checked, meetups are in public places, numbers are hidden in chat, and a panic button alerts our team at once. Either of you can leave at any time.`
          : `prsnn is built around safety: manually verified companions and public meetups only, women-only matching if you choose it, numbers hidden in chat, and a panic button that alerts our team at once and every five minutes until you’re safe. Either person can end a meeting at any time.`,
      },
      {
        h: `Can I become a companion in ${name}?`,
        answer: live
          ? `Yes. Download prsnn, choose Become a companion and send a short profile. Our team reviews it and checks your ID before your first booking. You choose your days and hours and keep 80% of every booking: ₹1,039 for four hours.`
          : `Soon. Leave your number on our home page and choose “Become a companion” or “Both”. We’ll message you the sign-up steps when ${name} opens. Companions choose their own days and hours and keep 80% of every booking.`,
      },
    ],
    faq,
    related: ['what-is-a-platonic-companion-app', 'is-renting-a-friend-safe-for-women', 'how-much-does-a-companion-cost-in-india'],
    cta: live ? 'member' : 'waitlist',
  };
};

export const CITY_GUIDES = [
  city({
    slug: 'rent-a-friend-hyderabad',
    name: 'Hyderabad',
    live: true,
    areas: 'Gachibowli, HITEC City, Madhapur, Jubilee Hills, Banjara Hills, Kondapur and Secunderabad',
    places: 'a café in Jubilee Hills, a walk around Durgam Cheruvu or Necklace Road, a heritage walk at Golconda or the Charminar lanes, a concert, studying at a library, or an afternoon with a parent',
    keywords: ['rent a friend in Hyderabad', 'social companion service Hyderabad', 'platonic companion Hyderabad', 'hangout buddy Hyderabad', 'cafe companion near me Hyderabad'],
  }),
  city({
    slug: 'rent-a-friend-bangalore',
    name: 'Bengaluru',
    alt: 'Bangalore',
    women: true,
    areas: 'Koramangala, Indiranagar, HSR Layout, Whitefield and Jayanagar',
    places: 'a café in Indiranagar, a Cubbon Park or Lalbagh walk, a gig, a study session, a weekend market, or company for a parent',
    keywords: ['rent a friend in Bangalore', 'platonic companion Bengaluru', 'safe female-only meetups in Bangalore', 'cafe companion Bangalore', 'walking buddy Bangalore'],
    faq: [['What are safe apps for women to find a female walking or cafe buddy in Bengaluru?', 'Look for apps that verify every person, keep meetings public and let you choose women only. prsnn will do all three when it opens in Bengaluru: women-only matching, ID-checked companions, public meetups and a panic button. Until then, women-only walking groups and hobby clubs are good options.']],
  }),
  city({
    slug: 'rent-a-friend-mumbai',
    name: 'Mumbai',
    women: true,
    areas: 'Bandra, Andheri, Powai, Lower Parel and Colaba',
    places: 'a café in Bandra, a Marine Drive walk, a show or concert, a study session, a museum afternoon, or company for a parent',
    keywords: ['hire a companion in Mumbai', 'hangout buddy Mumbai', 'safe female-only meetups in Mumbai', 'event plus-one Mumbai', 'rent a friend Mumbai'],
  }),
  city({
    slug: 'rent-a-friend-delhi-ncr',
    name: 'Delhi NCR',
    areas: 'South Delhi, Gurugram, Noida, Connaught Place and Hauz Khas',
    places: 'a café in Hauz Khas, a Lodhi Garden walk, a heritage walk, a concert, a study session, or company for a parent',
    keywords: ['find a friend to hang out with in Delhi NCR', 'rent a friend Delhi', 'platonic companion Gurugram', 'hangout buddy Noida'],
  }),
  city({
    slug: 'rent-a-friend-chennai',
    name: 'Chennai',
    areas: 'Adyar, T. Nagar, Anna Nagar, Velachery and OMR',
    places: 'a filter-coffee café, a Besant Nagar beach walk, a kutcheri or concert, a study session, or company for a parent',
    keywords: ['social companion service Chennai', 'rent a friend Chennai', 'platonic companion Chennai'],
  }),
  city({
    slug: 'rent-a-friend-pune',
    name: 'Pune',
    areas: 'Koregaon Park, Baner, Kothrud, Viman Nagar and Hinjewadi',
    places: 'a café in Koregaon Park, a hill walk, a gig, a study session, or company for a parent',
    keywords: ['social companion service Pune', 'rent a friend Pune', 'platonic companion Pune', 'study buddy Pune'],
  }),
];
