// City guides: prsnn works across India. Companions sign up in their own city, and a booking is offered
// to suitable companions in the member's city; if nobody accepts, the member gets a full refund. These
// pages say exactly that, without promising how many companions any one city has.

const city = ({ slug, name, alt, areas, places, keywords, women = false, faq = [] }) => {
  const where = alt ? `${name} (${alt})` : name;
  return {
    slug,
    city: name,
    title: `Rent a friend in ${where}: book a verified platonic companion`,
    short: `Rent a friend in ${name}`,
    description: `Book a verified platonic companion in ${name}: café company, walks, study buddies, event plus-ones and visits for parents. Public places, from ₹399 an hour.`,
    keywords,
    minutes: 4,
    intro: [
      `prsnn works across India, including ${name}. Companions sign up in their own city, and when you book, your booking is offered to suitable companions in ${name}. If nobody can take it, you get a full refund.`,
      `This page is for anyone searching for ${keywords.map((k) => `“${k}”`).join(', ')}: what you can book in ${name}, how safety works, and how to book or become a companion.`,
    ],
    sections: [
      {
        h: `How do I rent a friend in ${name}?`,
        answer: `Download prsnn, choose a kind of company, a length from one to twelve hours, a time and a public place in ${name}, and pay in the app. An approved, ID-checked companion accepts and chat opens. People meet across the city, from ${areas}. Prices start at ₹399 an hour, with no booking fee.`,
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
        answer: `Yes. Download prsnn, choose Become a companion and send a short profile with your area in ${name}. Our team reviews it and checks your ID before your first booking. You choose your days, hours and booking lengths, and keep 80% of every booking: ₹1,039 for four hours.`,
      },
    ],
    faq,
    related: ['what-is-a-platonic-companion-app', 'is-renting-a-friend-safe-for-women', 'how-much-does-a-companion-cost-in-india'],
    cta: 'member',
  };
};

export const CITY_GUIDES = [
  city({
    slug: 'rent-a-friend-bangalore',
    name: 'Bengaluru',
    alt: 'Bangalore',
    women: true,
    areas: 'Koramangala and Indiranagar to HSR Layout, Whitefield and Jayanagar',
    places: 'a café in Indiranagar, a Cubbon Park or Lalbagh walk, a gig, a study session, a weekend market, or company for a parent',
    keywords: ['rent a friend in Bangalore', 'platonic companion Bengaluru', 'safe female-only meetups in Bangalore', 'cafe companion Bangalore', 'walking buddy Bangalore'],
    faq: [['What are safe apps for women to find a female walking or cafe buddy in Bengaluru?', 'Look for apps that verify every person, keep meetings public and let you choose women only. prsnn does all three: women-only matching when you choose it, ID-checked companions, public meetups and a panic button. Women-only walking groups and hobby clubs are good options too.']],
  }),
  city({
    slug: 'rent-a-friend-mumbai',
    name: 'Mumbai',
    women: true,
    areas: 'Bandra and Andheri to Powai, Lower Parel and Colaba',
    places: 'a café in Bandra, a Marine Drive walk, a show or concert, a study session, a museum afternoon, or company for a parent',
    keywords: ['hire a companion in Mumbai', 'hangout buddy Mumbai', 'safe female-only meetups in Mumbai', 'event plus-one Mumbai', 'rent a friend Mumbai'],
  }),
  city({
    slug: 'rent-a-friend-delhi-ncr',
    name: 'Delhi NCR',
    areas: 'South Delhi and Connaught Place to Hauz Khas, Gurugram and Noida',
    places: 'a café in Hauz Khas, a Lodhi Garden walk, a heritage walk, a concert, a study session, or company for a parent',
    keywords: ['find a friend to hang out with in Delhi NCR', 'rent a friend Delhi', 'platonic companion Gurugram', 'hangout buddy Noida'],
  }),
  city({
    slug: 'rent-a-friend-hyderabad',
    name: 'Hyderabad',
    areas: 'Gachibowli and HITEC City to Jubilee Hills, Banjara Hills and Secunderabad',
    places: 'a café in Jubilee Hills, a Necklace Road walk, a heritage walk at Golconda, a concert, a study session, or company for a parent',
    keywords: ['social companion service Hyderabad', 'rent a friend Hyderabad', 'platonic companion Hyderabad'],
  }),
  city({
    slug: 'rent-a-friend-chennai',
    name: 'Chennai',
    areas: 'Adyar and T. Nagar to Anna Nagar, Velachery and OMR',
    places: 'a filter-coffee café, a Besant Nagar beach walk, a concert, a study session, or company for a parent',
    keywords: ['social companion service Chennai', 'rent a friend Chennai', 'platonic companion Chennai'],
  }),
  city({
    slug: 'rent-a-friend-pune',
    name: 'Pune',
    areas: 'Koregaon Park and Baner to Kothrud, Viman Nagar and Hinjewadi',
    places: 'a café in Koregaon Park, a hill walk, a gig, a study session, or company for a parent',
    keywords: ['social companion service Pune', 'rent a friend Pune', 'platonic companion Pune', 'study buddy Pune'],
  }),
  city({
    slug: 'rent-a-friend-kolkata',
    name: 'Kolkata',
    areas: 'Park Street and Salt Lake to Ballygunge, New Town and Gariahat',
    places: 'an adda at a café on Park Street, a walk by the Hooghly, a book fair or concert, a study session, or company for a parent',
    keywords: ['rent a friend Kolkata', 'platonic companion Kolkata', 'hangout buddy Kolkata'],
  }),
  city({
    slug: 'rent-a-friend-ahmedabad',
    name: 'Ahmedabad',
    areas: 'Navrangpura and Satellite to Prahlad Nagar, Bodakdev and the Riverfront',
    places: 'a café in Navrangpura, a Sabarmati Riverfront walk, a heritage walk in the old city, a garba night, a study session, or company for a parent',
    keywords: ['rent a friend Ahmedabad', 'platonic companion Ahmedabad', 'walking buddy Ahmedabad'],
  }),
  city({
    slug: 'rent-a-friend-jaipur',
    name: 'Jaipur',
    areas: 'C-Scheme and Malviya Nagar to Vaishali Nagar and the Pink City',
    places: 'a rooftop café, a walk through the old city bazaars, a fort visit, a festival, a study session, or company for a parent',
    keywords: ['rent a friend Jaipur', 'platonic companion Jaipur', 'explore Jaipur with a local'],
  }),
  city({
    slug: 'rent-a-friend-kochi',
    name: 'Kochi',
    areas: 'Fort Kochi and Panampilly Nagar to Kakkanad and Edappally',
    places: 'a café in Fort Kochi, a Marine Drive walk, an art biennale visit, a study session, or company for a parent',
    keywords: ['rent a friend Kochi', 'platonic companion Kochi', 'hangout buddy Kochi'],
  }),
  city({
    slug: 'rent-a-friend-chandigarh',
    name: 'Chandigarh',
    areas: 'Sector 17 and Sector 35 to Mohali and Panchkula',
    places: 'a café in Sector 17, a Sukhna Lake walk, the Rock Garden, a study session, or company for a parent',
    keywords: ['rent a friend Chandigarh', 'platonic companion Chandigarh', 'walking buddy Chandigarh'],
  }),
  city({
    slug: 'rent-a-friend-lucknow',
    name: 'Lucknow',
    areas: 'Hazratganj and Gomti Nagar to Aliganj and Indira Nagar',
    places: 'a chai and kebab trail, a Hazratganj stroll, a heritage walk at the Imambaras, a study session, or company for a parent',
    keywords: ['rent a friend Lucknow', 'platonic companion Lucknow', 'explore Lucknow with a local'],
  }),
];
