// One source for everything the website says about prsnn. Pages, structured data, the sitemap
// and llms.txt all read from here, so the facts stay identical everywhere (seo/README.md §1).

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, '');
/** Set NEXT_PUBLIC_SUPPORT_EMAIL where the site is deployed (kept out of the repo). */
export const SUPPORT_EMAIL = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || '';
export const APP_STORE_URL = process.env.NEXT_PUBLIC_APP_STORE_URL || '';
export const PLAY_STORE_URL = process.env.NEXT_PUBLIC_PLAY_STORE_URL || '';
export const FOUNDER = 'Mukarram Jah';
export const CITY = 'Hyderabad';

export const SUMMARY =
  'prsnn is an app for booking a verified companion for platonic company in public places (or a home visit for a loved one): someone to go to an event with, show you around a new city, study beside you, or spend time with a parent who’s alone.';

/** Fixed price list (₹), the same as the app and the database (private.price_for). */
export const PRICES = { 1: 399, 2: 699, 3: 999, 4: 1299, 5: 1599, 6: 1899, 7: 2199, 8: 2499, 9: 2799, 10: 3099, 11: 3349, 12: 3599 };
export const HOURS = Object.keys(PRICES).map(Number);
export const inr = (n) => '₹' + Number(n).toLocaleString('en-IN');
export const hoursLabel = (h) => `${h} ${h === 1 ? 'hour' : 'hours'}`;
export const companionShare = (price) => Math.floor(price * 0.8);
export const savingFor = (h) => Math.max(0, PRICES[1] * h - PRICES[h]);

export const CATEGORIES = [
  {
    slug: 'new-in-town',
    title: 'New in Town',
    line: 'Make your first days less lonely',
    img: '/site/cat/new-in-town.jpg',
    pain: 'New city. No one to call yet.',
    promise: 'Find a local to help you settle in.',
    icon: 'pin',
    hours: 4,
    suggest: '4 hours · ₹1,299',
    seoTitle: 'New in Town · A local companion for your first days | prsnn',
    seoDescription: 'Just moved? Book a verified local to show you the neighbourhood, cafés and weekend spots. Public places, by the hour, from ₹399.',
    intro: 'Moving to a new city is exciting for a week and lonely for months. Book a verified local who can show you the neighbourhood, the good cafés and the weekend spots, so the city stops feeling like a stranger.',
    uses: [
      'A first walk around your new neighbourhood: where to eat, shop and get coffee',
      'Finding cafés, gyms, parks and weekend spots that suit you',
      'Help with the practical bits: markets, a SIM card, where to buy what',
      'A Sunday out so the weekend doesn’t feel empty',
      'Company for your first visits to the city’s famous places',
    ],
    faq: [
      ['Is this a way to make friends?', 'It’s company for your plans, booked by the hour. Many people use it to find their feet in a new city; what happens after is up to you both.'],
      ['Can the companion show me around different areas?', 'Yes. Pick a public meeting place and plan the route together in the chat once the booking is confirmed.'],
    ],
  },
  {
    slug: 'dont-go-alone',
    title: 'Don’t Go Alone',
    line: 'Good plans deserve good company',
    img: '/site/cat/dont-go-alone.jpg',
    pain: 'Two tickets. One you.',
    promise: 'A trusted companion by your side.',
    icon: 'ticket',
    dark: true,
    hours: 4,
    suggest: '4 hours · ₹1,299',
    seoTitle: 'Don’t Go Alone · Someone to go with, not a date | prsnn',
    seoDescription: 'Concert, wedding, movie or dinner and no plus-one? Book a verified companion to go with you. Platonic, public places, from ₹399.',
    intro: 'You have the tickets. Everyone is “so sorry, can’t”. Don’t skip the plan: book a verified companion who’d genuinely enjoy it. Someone to go with, never a date.',
    uses: [
      'Concerts, stand-up and live music when your friends can’t make it',
      'A wedding, reception or party where you’d rather not walk in alone',
      'Movies, plays and dinners out',
      'Festivals, exhibitions and weekend outings',
      'Sports matches and screenings with someone who enjoys them too',
    ],
    faq: [
      ['Who pays for the ticket?', 'The price covers the companion’s time. Tickets, food and travel on the day are agreed between you; prsnn doesn’t add anything on top.'],
      ['Is this a date?', 'No. prsnn is strictly platonic company. Romantic or sexual requests break our rules and lead to a ban.'],
    ],
  },
  {
    slug: 'explore-and-discover',
    title: 'Explore & Discover',
    line: 'See more of your city with a local',
    img: '/site/cat/explore.jpg',
    pain: 'You live here. You’ve seen none of it.',
    promise: 'Go further with someone who knows the way.',
    icon: 'compass',
    hours: 4,
    suggest: '4–6 hours · ₹1,299–₹1,899',
    seoTitle: 'Explore & Discover · See your city with a local | prsnn',
    seoDescription: 'Heritage walks, food trails, markets and museums with a verified local companion. Book by the hour in the prsnn app.',
    intro: 'Every city has the version on the postcards and the version locals know. Spend a few hours with someone who knows the old streets, the food lanes and the places nobody lists.',
    uses: [
      'Heritage walks: forts, old streets and the stories behind them',
      'Food trails through markets and street-food lanes',
      'Shopping streets and hidden local favourites',
      'Museums, galleries and city tours at your pace',
      'Trying something new: a lake walk, a sunrise trek, a pottery class',
    ],
    faq: [
      ['Are companions professional guides?', 'No. They’re locals who enjoy showing people around. For licensed guiding, book a registered guide.'],
      ['How long should I book?', 'Four to six hours suits most walks and food trails. Longer bookings cost less per hour.'],
    ],
  },
  {
    slug: 'companion-for-a-loved-one',
    title: 'Companion for a Loved One',
    line: 'Because you can’t always be there',
    img: '/site/cat/loved-one.jpg',
    pain: 'Mom’s alone today.',
    promise: 'Warm company for parents and grandparents.',
    icon: 'heart',
    hours: 2,
    suggest: '2 hours · ₹699',
    seoTitle: 'Companion for elderly parents · Visits you can trust | prsnn',
    seoDescription: 'Can’t be there for mum or dad? Book a verified, ID-checked companion to visit, walk and spend time with them. Pay from anywhere, even abroad.',
    intro: 'Work, distance or life means you can’t always be with your parents or grandparents. Book a verified, ID-checked companion to spend time with them, at their home if you ask for it, and pay from anywhere.',
    uses: [
      'A warm visit at home, if you ask for one: tea, talk and a little time together',
      'A walk in the park or to their place of worship, at their pace',
      'Company on errands, a shopping trip or a day out',
      'Someone to go with them to a family function or event',
      'Visits while you’re away for work or living abroad',
      'Booked and paid by you from anywhere; they just enjoy the company',
    ],
    faq: [
      ['Can the companion visit my parent at home?', 'Yes. For this kind of booking you can ask for a visit at their home instead of a public place. All other safety protections, including the panic button, still apply.'],
      ['Is this nursing or medical care?', 'No. Companions offer company and a helping hand with everyday things, not medical, nursing or personal care.'],
      ['Can I book from abroad?', 'Yes. Add your loved one’s name and number in the app and pay from anywhere. The companion never sees their number.'],
    ],
  },
  {
    slug: 'work-and-study-together',
    title: 'Work & Study Together',
    line: 'Make working alone feel less alone',
    img: '/site/cat/work-study.jpg',
    pain: 'Day four of working alone.',
    promise: 'Get more done, together.',
    icon: 'book',
    hours: 2,
    suggest: '2 hours · ₹699',
    seoTitle: 'Study buddy & co-working partner · prsnn',
    seoDescription: 'Make working alone feel less alone. Book a verified companion for café co-working, study sessions and exam prep. From ₹399.',
    intro: 'Working or studying alone at home gets heavy. A companion beside you at a café or library makes it easier to start, focus and keep going.',
    uses: [
      'Co-working at a café so the day doesn’t feel isolating',
      'Focused study sessions at a library or quiet café',
      'Exam prep with someone keeping you on track',
      'Practising a language or a presentation out loud',
      'A steady weekly session to build the habit',
    ],
    faq: [
      ['Will the companion tutor me?', 'Companions keep you company and on track. They aren’t tutors, though many will happily listen to you practise.'],
      ['How long is a good session?', 'Two hours is a good start; you can book up to twelve.'],
    ],
  },
];
/** The group photo for "Real people. Real connections." (app and website). */
export const COMMUNITY_IMG = '/site/cat/community.jpg';

export const categoryBySlug = (slug) => CATEGORIES.find((c) => c.slug === slug);

export const MOMENTS = [
  { title: 'Two tickets. One you.', body: 'The gig is Saturday and every friend is “so sorry, can’t”. Don’t skip it. Go with someone who’d love to.', slug: 'dont-go-alone', img: '/site/cat/dont-go-alone.jpg', tag: 'Don’t Go Alone · 4 h · ₹1,299' },
  { title: 'New city, empty weekends.', body: 'You moved for the job. The city is still a stranger. Spend a Sunday with a local who knows the best spots.', slug: 'new-in-town', img: '/site/cat/new-in-town.jpg', tag: 'New in Town · 4 h · ₹1,299' },
  { title: 'Mom’s alone today.', body: 'You can’t be there this week. Someone kind can: a walk, a cup of tea, a chat. Booked and paid from anywhere.', slug: 'companion-for-a-loved-one', img: '/site/cat/loved-one.jpg', tag: 'For a Loved One · 2 h · ₹699' },
];

export const HOME_FAQ = [
  ['What is prsnn?', 'prsnn is an app for booking a verified companion for platonic company: someone to go to a concert with, show you around a new city, study beside you, or visit a parent who’s alone. Meetings happen in public places (home visits are allowed when you book for a loved one) and are booked and paid in the app, by the hour.'],
  ['Is this dating or an escort service?', 'No. prsnn is strictly platonic company for everyday plans. Romantic or sexual requests are against our rules and lead to a permanent ban. Meetings are in a public place named in the booking; the only home visits are ones families book for a loved one.'],
  ['Who are the companions?', 'People who enjoy good company and have been approved by the prsnn team. We review every profile and photo, and check each companion’s government ID before their first booking.'],
  ['How much does it cost?', 'From ₹399 for one hour to ₹3,599 for twelve hours. Longer bookings cost less per hour, and the price is the same for every companion. There’s no booking fee.'],
  ['What if nobody accepts my booking?', 'You get a full refund, automatically.'],
  ['Can I cancel?', 'Yes, from the booking. Cancel at least 15 minutes before the start and 85% is refunded. If the companion cancels, you get everything back.'],
  ['How do you keep people safe?', 'Approved, ID-checked companions, public places only, phone numbers hidden in chat, and a panic button that alerts our team at once and every five minutes until you’re safe.'],
  ['Can I book for my mum or dad?', 'Yes. Choose “Companion for a Loved One”, add their name and number, and pick a public place or ask for a visit at their home. Pay from anywhere, even from abroad.'],
  ['How do I become a companion?', 'Download the app, choose “Become a companion”, and finish the short sign-up. Our team reviews your profile; you keep 80% of every booking.'],
  ['Where is prsnn available?', 'prsnn has launched in Hyderabad, India, with more cities to follow.'],
];

/** Every public page, for the sitemap and llms.txt. */
export const PAGES = [
  { path: '/', title: 'Home' },
  ...CATEGORIES.map((c) => ({ path: `/${c.slug}`, title: c.title })),
  { path: '/hyderabad', title: 'prsnn in Hyderabad' },
  { path: '/pricing', title: 'Prices' },
  { path: '/safety', title: 'Safety' },
  { path: '/become-a-companion', title: 'Become a companion' },
  { path: '/rent-a-friend', title: 'Rent a friend, safely' },
  { path: '/about', title: 'Why prsnn exists' },
  { path: '/terms', title: 'Terms of Service' },
  { path: '/privacy', title: 'Privacy Policy' },
  { path: '/refunds', title: 'Cancellation & Refunds' },
  { path: '/guidelines', title: 'Community Guidelines' },
  { path: '/companion-terms', title: 'Companion Terms' },
  { path: '/grievance', title: 'Grievance Redressal' },
  { path: '/child-safety', title: 'Child Safety Standards' },
  { path: '/cookies', title: 'Cookie Notice' },
  { path: '/delete-account', title: 'Delete your account' },
  { path: '/legal', title: 'All policies' },
];
