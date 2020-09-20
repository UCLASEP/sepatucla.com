import {
  EVERIPEDIA,
  GOGUARDIAN,
  TASTE,
  BOXCAMP,
  STARTUPFAIR,
  DAPPERNETWORK,
  ELLIOTHAVOK,
  FYZZED,
  GRADSTREET,
  LAHACKS,
  MINAMI,
  PLUTO,
  VIBEZ,
  ASSETCAMP,
  AUTOPREME,
  AVAANT,
  BEATMATCHES,
  COLOSSI,
  GOALOPEDIA,
  HANGSTER,
  HEADFIRST,
  MEMOIRE,
  PHOENIX,
  PRIME,
  QCIGARETTES,
  ROOMCRUNCH,
  RYDE,
  SIKE,
  REFINELA,
  OFFBEAT,
  LOGOS,
  TECHFOLK,
  GIFTOFGRUB,
  PEARL,
  GOGYFT,
  FINDINGFOUNDERS,
  SLINGSHOT,
  ETERNALIST,
  FREEMONEYFORFOUNDERS,
  ECSTATIC,
  BRUINMEET,
  NEXTBEST,
  BRUINTANK,
  FAROUTPRESENTS,
} from './venture';

const FEATURED = [
  {
    ...BRUINTANK,
    title: 'Sigma Eta Pi',
    desc:
      'Bruin Tank is a Shark Tank themed startup pitch competition, where selected UCLA student-founders pitch their businesses to a panel of high-profile investors and entrepreneurs for a chance to win grant funding, gain exposure and receive resources and feedback.',
  },
  {
    ...SIKE,
    title: 'Sid Pandiya (pi class) Andrew Zhou (rho class)',
    desc:
      'Sike Insights is a tech-stars backed company based in Los Angeles. Sike Insights aims to solve ineffective remote communication to solve the biggest problems in remote work.',
  },
  {
    ...REFINELA,
    title:
      'Mandy Santoso (pi class) Sonam Beckham (pi class) Minh Mai (pi class)',
    desc:
      'RefineLA is a social organization at UCLA bringing together those interested in sustainability, fashion, and social impact. RefineLA gives your clothing a second life by hosting their own pop-up thrift shops, stocked by the students themselves!',
  },
  {
    ...OFFBEAT,
    title: 'Anu Shivakumar (tau class) Emily Noronha (tau class)',
    desc:
      'Offbeat Advising facilitates peer mentorship by connecting high school students to current college students who have recently been through the college application and decision process. College students provide direct, genuine insight that websites and statistics cannot.',
  },
  {
    ...NEXTBEST,
    title: 'MINH MAI (PI CLASS)',
    desc:
      'NextBest is the easiest way for college students to buy and sell hand fashion. With no shipping costs and a 0% commission fee, NextBest is tackling the 16 million tons of textile waste one item at a time.',
  },
  {
    ...FAROUTPRESENTS,
    title: 'Tim Connors (Lambda Class) James Barton (Pi Class)',
    desc:
      "Westwood's Far Out Fest is a music and art festival showcasing local up-and-coming artists. Far Out Fest is a celebration of the incredible talent we host right here in our community.",
  },
];
const ACTIVE = [
  {
    ...EVERIPEDIA,
    title: 'Sam kazemian (zeta class)',
    desc:
      'Everipedia offers a space for you to dive into anything you find interesting, connect with people who share your interests, and contribute your own perspective.',
  },
  {
    ...GOGUARDIAN,
    title: 'Aza Steel (beta class)',
    desc:
      'GoGuardian provides Chromebook management software that protects students online and gives educators better control over how their technology is used.',
  },
  {
    ...TASTE,
    title: 'kevin longa (alpha class)',
    desc:
      'TASTE With Kevin Longa: a documentary series telling the stories of international food entrepreneurs. Real food. True entrepreneurs. Raw stories.',
  },
  {
    ...BOXCAMP,
    title: 'Keith Yoder (Eta class)',
    desc:
      'BoxCamp is the preferred storage service for UCLA and UC Berkeley. BoxCamp provides free boxes and flat rates all summer and is the only approved storage vendor to help students at UCLA.',
  },
  {
    ...STARTUPFAIR,
    title: 'Sigma Eta Pi',
    desc:
      'Startup Fair LA aims to connect UCLA’s best and brightest students to premier rising startups in the Los Angeles area to find full-time positions and internships in a close-knit startup environment.',
  },
  {
    ...DAPPERNETWORK,
    title: 'Eric Chung (kappa class)',
    desc:
      "DApperNetwork's mission is to encourage the mainstream adoption of decentralized applications by growing a strong, global community of DApp developers.",
  },
  {
    ...ELLIOTHAVOK,
    title: 'Steven Ng (zeta class)',
    desc:
      "Fair Prices, Premium Quality, Luxury Men's Watches. Elliot Havok is a design co., with the goal of bringing products that merge practicality and minimalism.",
  },
  {
    ...FYZZED,
    title: 'Deanna Nguyen (zeta class)',
    desc:
      'FYZZED is a small online business located in southern California that designs and sells kpop-inspired apparel & accessories.',
  },
  {
    ...GRADSTREET,
    title: 'Tim Connors (Lambda Class)',
    desc:
      'Gradstreet provides graduation caps and gowns for a lower price than what universities sell them for, offering a much cheaper alternative for the same product.',
  },
  {
    ...LAHACKS,
    title: 'Sigma Eta Pi',
    desc:
      "LA Hacks is an annual student-led hackathon hosted at the University of California, Los Angeles (UCLA)'s Pauley Pavilion and is Southern California's largest annual hackathon.",
  },
  {
    ...MINAMI,
    title: 'Heidi Nam (Pi class)',
    desc:
      'Minami Sesame Dressing is a delicious, sweet, and tangy sesame based dressing. The sauce is Minami Sushi’s famous salad dressing. It goes great with salads, chips, or even as a dip!',
  },
  {
    ...PLUTO,
    title: 'Tim Yu (Epsilon class)',
    desc:
      'Pluto is the free app for college students to manage finances & save money. Do challenges, save for goals, and compare finances anonymously.',
  },
  {
    ...VIBEZ,
    title: 'Andrew Kwan (Kappa class)',
    desc:
      'Vibez Management is home to the management roster of emerging household artists (HOAX and The Millennial Club), with in-house agency offering creative PR + marketing solutions and consultancy for artists.',
  },
  {
    ...TECHFOLK,
    title: 'Dmitri Brereton (pi class)',
    desc:
      'Tech Folks is a collection of stories from underrepresented people in tech. The focus for Tech Folks is on inspiration, intersectionality and allyship.',
  },
  {
    ...GIFTOFGRUB,
    title: 'Aza steel (beta class)',
    desc:
      'Gift of Grub is spreading love through food SOUPscriptions and Take-Out delivery by serving Los Osos.',
  },
  {
    ...PEARL,
    title: 'Tim Connors (Lambda Class)',
    desc:
      'Pearl is an automation tool for recruiting teams to automatically re-engage with previous applicants, identifying relevant candidates for new roles, and actively encouraging them to apply.',
  },
  {
    ...GOGYFT,
    title: 'Sigma Eta Pi',
    desc:
      'GoGyft is a personal website that grows as family and friends add messages that is your own corner of the internet that lasts forever filled with a surprise message from someone new every day.',
  },
  {
    ...FINDINGFOUNDERS,
    title: 'Sam Donner (Lambda class)',
    desc:
      'Finding Founders is a podcast showcasing the vibrant entrepreneurial spirit of Los Angeles and their journey is to find the founders responsible',
  },
  {
    ...SLINGSHOT,
    title: 'Nilay Modi (Iota Class), Jorge Fuentes (Pi class)',
    desc:
      'Create an engaged and connected community with networking, breakout rooms, presentations, and more with Slingshow!',
  },
];

const INACTIVE = [
  {
    ...ASSETCAMP,
    title: 'Sam kazemian (zeta class)',
    desc:
      'Everipedia offers a space for you to dive into anything you find interesting, connect with people who share your interests, and contribute your own perspective.',
  },
  {
    ...AUTOPREME,
    title: 'Aza Steel, beta class)',
    desc:
      'GoGuardian provides Chromebook management software that protects students online and gives educators better control over how their technology is used.',
  },
  {
    ...AVAANT,
    title: 'kevin longa, alpha class)',
    desc:
      'TASTE With Kevin Longa: a documentary series telling the stories of international food entrepreneurs. Real food. True entrepreneurs. Raw stories.',
  },
  {
    ...BEATMATCHES,
    title: 'Sam kazemian (zeta class)',
    desc:
      'Everipedia offers a space for you to dive into anything you find interesting, connect with people who share your interests, and contribute your own perspective.',
  },
  {
    ...COLOSSI,
    title: 'Sam kazemian (zeta class)',
    desc:
      'Everipedia offers a space for you to dive into anything you find interesting, connect with people who share your interests, and contribute your own perspective.',
  },
  {
    ...GOALOPEDIA,
    title: 'Sam kazemian (zeta class)',
    desc:
      'Everipedia offers a space for you to dive into anything you find interesting, connect with people who share your interests, and contribute your own perspective.',
  },
  {
    ...HANGSTER,
    title: 'Sam kazemian (zeta class)',
    desc:
      'Everipedia offers a space for you to dive into anything you find interesting, connect with people who share your interests, and contribute your own perspective.',
  },
  {
    ...HEADFIRST,
    title: 'Sam kazemian (zeta class)',
    desc:
      'Everipedia offers a space for you to dive into anything you find interesting, connect with people who share your interests, and contribute your own perspective.',
  },
  {
    ...MEMOIRE,
    title: 'Sam kazemian (zeta class)',
    desc:
      'Everipedia offers a space for you to dive into anything you find interesting, connect with people who share your interests, and contribute your own perspective.',
  },
  {
    ...PHOENIX,
    title: 'Sam kazemian (zeta class)',
    desc:
      'Everipedia offers a space for you to dive into anything you find interesting, connect with people who share your interests, and contribute your own perspective.',
  },
  {
    ...PRIME,
    title: 'Sam kazemian (zeta class)',
    desc:
      'Everipedia offers a space for you to dive into anything you find interesting, connect with people who share your interests, and contribute your own perspective.',
  },
  {
    ...QCIGARETTES,
    title: 'Sam kazemian (zeta class)',
    desc:
      'Everipedia offers a space for you to dive into anything you find interesting, connect with people who share your interests, and contribute your own perspective.',
  },
  {
    ...ROOMCRUNCH,
    title: 'Sam kazemian (zeta class)',
    desc:
      'Everipedia offers a space for you to dive into anything you find interesting, connect with people who share your interests, and contribute your own perspective.',
  },
  {
    ...RYDE,
    title: 'Sam kazemian (zeta class)',
    desc:
      'Everipedia offers a space for you to dive into anything you find interesting, connect with people who share your interests, and contribute your own perspective.',
  },
  {
    ...LOGOS,
    title: 'Sam kazemian (zeta class)',
    desc:
      'Everipedia offers a space for you to dive into anything you find interesting, connect with people who share your interests, and contribute your own perspective.',
  },
  {
    ...ETERNALIST,
    title: 'Sam kazemian (zeta class)',
    desc:
      'Everipedia offers a space for you to dive into anything you find interesting, connect with people who share your interests, and contribute your own perspective.',
  },
  {
    ...FREEMONEYFORFOUNDERS,
    title: 'Sam kazemian (zeta class)',
    desc:
      'Everipedia offers a space for you to dive into anything you find interesting, connect with people who share your interests, and contribute your own perspective.',
  },
  {
    ...ECSTATIC,
    title: 'Sam kazemian (zeta class)',
    desc:
      'Everipedia offers a space for you to dive into anything you find interesting, connect with people who share your interests, and contribute your own perspective.',
  },
  {
    ...BRUINMEET,
    title: 'Sam kazemian (zeta class)',
    desc:
      'Everipedia offers a space for you to dive into anything you find interesting, connect with people who share your interests, and contribute your own perspective.',
  },
];

export default {
  FEATURED,
  ACTIVE,
  INACTIVE,
};
