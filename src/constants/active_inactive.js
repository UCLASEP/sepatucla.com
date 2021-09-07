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
  BEATMATCHES,
  GOALOPEDIA,
  MEMOIRE,
  PHOENIX,
  PRIME,
  SIKE,
  REFINELA,
  OFFBEAT,
  LOGOS,
  TECHFOLK,
  GIFTOFGRUB,
  PEARL,
  GOGYFT,
  FINDINGFOUNDERS,
  SLINGSHOW,
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
    ...SLINGSHOW,
    title: 'Nilay Modi (Iota), Jorge Fuentes (Pi)',
    desc:
      'Slingshow (YC 20W) is an event-hosting platform that builds community and drives revenue all year round. Slingshow allows anyone to create highly interactive and engaging micro-events in just five minutes.',
  },
  {
    ...BRUINTANK,
    title: 'Sigma Eta Pi',
    desc:
      'Bruin Tank is a Shark Tank themed startup pitch competition, where selected UCLA student-founders pitch their businesses to a panel of high-profile investors and entrepreneurs for a chance to win grant funding, gain exposure and receive resources and feedback.',
  },
  {
    ...SIKE,
    title: 'Sid Pandiya (pi), Andrew Zhou (rho)',
    desc:
      'Sike Insights is a tech-stars backed company based in Los Angeles. Sike Insights aims to solve ineffective remote communication to solve the biggest problems in remote work.',
  },
  {
    ...REFINELA,
    title: 'Mandy Santoso (pi), Sonam Beckham (pi), Minh Mai (pi)',
    desc:
      'RefineLA is a social organization at UCLA bringing together those interested in sustainability, fashion, and social impact. RefineLA gives your clothing a second life by hosting their own pop-up thrift shops, stocked by the students themselves!',
  },
  {
    ...OFFBEAT,
    title: 'Anu Shivakumar (tau), Emily Noronha (tau)',
    desc:
      'Offbeat Advising facilitates peer mentorship by connecting high school students to current college students who have recently been through the college application and decision process. College students provide direct, genuine insight that websites and statistics cannot.',
  },
  {
    ...NEXTBEST,
    title: 'MINH MAI (PI)',
    desc:
      'NextBest is the easiest way for college students to buy and sell hand fashion. With no shipping costs and a 0% commission fee, NextBest is tackling the 16 million tons of textile waste one item at a time.',
  },
  {
    ...FAROUTPRESENTS,
    title: 'Tim Connors (Lambda), James Barton (Pi)',
    desc:
      "Westwood's Far Out Fest is a music and art festival showcasing local up-and-coming artists. Far Out Fest is a celebration of the incredible talent we host right here in our community.",
  },
];
const ACTIVE = [
  {
    ...EVERIPEDIA,
    title: 'Sam kazemian (zeta)',
    desc:
      'Everipedia offers a space for you to dive into anything you find interesting, connect with people who share your interests, and contribute your own perspective.',
  },
  {
    ...GOGUARDIAN,
    title: 'Aza Steel (beta)',
    desc:
      'GoGuardian provides Chromebook management software that protects students online and gives educators better control over how their technology is used.',
  },
  {
    ...TASTE,
    title: 'kevin longa (alpha)',
    desc:
      'TASTE With Kevin Longa: a documentary series telling the stories of international food entrepreneurs. Real food. True entrepreneurs. Raw stories.',
  },
  {
    ...BOXCAMP,
    title: 'Keith Yoder (Eta)',
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
    title: 'Eric Chung (kappa)',
    desc:
      "DApperNetwork's mission is to encourage the mainstream adoption of decentralized applications by growing a strong, global community of DApp developers.",
  },
  {
    ...ELLIOTHAVOK,
    title: 'Steven Ng (zeta)',
    desc:
      "Fair Prices, Premium Quality, Luxury Men's Watches. Elliot Havok is a design co., with the goal of bringing products that merge practicality and minimalism.",
  },
  {
    ...FYZZED,
    title: 'Deanna Nguyen (zeta)',
    desc:
      'FYZZED is a small online business located in southern California that designs and sells kpop-inspired apparel & accessories.',
  },
  {
    ...GRADSTREET,
    title: 'Tim Connors (Lambda)',
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
    title: 'Heidi Nam (Pi)',
    desc:
      'Minami Sesame Dressing is a delicious, sweet, and tangy sesame based dressing. The sauce is Minami Sushi’s famous salad dressing. It goes great with salads, chips, or even as a dip!',
  },
  {
    ...PLUTO,
    title: 'Tim Yu (Epsilon)',
    desc:
      'Pluto is the free app for college students to manage finances & save money. Do challenges, save for goals, and compare finances anonymously.',
  },
  {
    ...VIBEZ,
    title: 'Andrew Kwan (Kappa)',
    desc:
      'Vibez Management is home to the management roster of emerging household artists (HOAX and The Millennial Club), with in-house agency offering creative PR + marketing solutions and consultancy for artists.',
  },
  {
    ...TECHFOLK,
    title: 'Dmitri Brereton (pi)',
    desc:
      'Tech Folks is a collection of stories from underrepresented people in tech. The focus for Tech Folks is on inspiration, intersectionality and allyship.',
  },
  {
    ...GIFTOFGRUB,
    title: 'Aza steel (beta)',
    desc:
      'Gift of Grub is spreading love through food SOUPscriptions and Take-Out delivery by serving Los Osos.',
  },
  {
    ...PEARL,
    title: 'Tim Connors (Lambda)',
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
    title: 'Sam Donner (Lambda)',
    desc:
      'Finding Founders is a podcast showcasing the vibrant entrepreneurial spirit of Los Angeles and their journey is to find the founders responsible',
  },
];

const INACTIVE = [
  {
    ...ASSETCAMP,
    title: 'Bryan Tran (Iota)',
    desc:
      'AssetCamp is a community where 3D Creators can showcase and sell their assets in a “Pay What You Want” marketplace using a technology stack consisting of Python, Django, Postgres, and Nginx.',
  },
  {
    ...BEATMATCHES,
    title: 'Ritesh Gupta (Alpha)',
    desc:
      'A musical collabaration between an incredible producer from Germany named Robot Koch that ended up in an lively musical collobaration in the form of a track called "Dreams".',
  },
  {
    ...GOALOPEDIA,
    title: 'Andrew Howard (delta)',
    desc:
      "Goalopedia's mission is to document every goal caught on tape, help make Goalopedia the best resource for goals possible!",
  },
  {
    ...MEMOIRE,
    title: 'Daniel lin (zeta)',
    desc:
      'Memoire is a short form daily journal app created to help individuals reflect upon themselves and spread postivity and connection.',
  },
  {
    ...PHOENIX,
    title: 'Dillon Liang (Mu)',
    desc:
      'Phoenix & Powell is a UCLA student-run, non-profit strategy consultancy targeted towards high-growth startups in LA.',
  },
  {
    ...PRIME,
    title: 'Kris Quan (Mu)',
    desc:
      "Prime boxers are a line of men's underwear made from Bamboo aimed at improving social equity within inner cities by promoting and helping launch other youth social enterprises.",
  },
  {
    ...LOGOS,
    title: 'Sid Pandiya (pi)',
    desc:
      'Logos is a news platform for the new age of digital content consumption that participated in the StartupUCLA Summer Accelerator Program.',
  },
  {
    ...ETERNALIST,
    title: 'Aaron Yih (iota)',
    desc:
      'Eternalist is a web app that pulls in data from all these apps that you already use and turns it into a timeline of your life that makes it easy for you to find, explore, and remember your greatest memories.',
  },
  {
    ...FREEMONEYFORFOUNDERS,
    title: 'Aza Steel (beta)',
    desc:
      'Free Money for Founders provides cash and mentorship to student startups without taking an ownership stake, unlike other venture capital groups.',
  },
  {
    ...ECSTATIC,
    title: 'Nilay Modi (Iota)',
    desc:
      'Proactively Prevent School Crises with Ecstatic by using data and insights to avoid student crises and save time, money & headaches.',
  },
  {
    ...BRUINMEET,
    title: 'Dmitri Brereton (pi)',
    desc:
      'Bruinmeet is a UCLA-exclusive dating app to help you and set up in-person meeetings with other students on campus and go on dates.',
  },
];

export default {
  FEATURED,
  ACTIVE,
  INACTIVE,
};
