import {

  CINDY_ZHENG,
  HARI_SENTHILKUMAR,
  ELEANOR_PAE,
  NEHA_BHONGIR,
  AUSTIN_PHAM,

  MELISSA_CHEN,
  BRIAN_ROYSAR,
  JESSI_HU,
  HENRY_NGUYEN,
  JENNY_YOO,
  ANNE_SHEN,
  RONAK_SHAH,
  VISHAL_NARAYAN,
  VALENTIN_NGUYEN
} from './members';

const PRESIDENTS = [
  {
    ...CINDY_ZHENG,
    title: 'President',
    desc:
      'Cindy has interests in internationalization and localization, computational linguistics, and translation. She has interned at Stripe, Asana, and Microsoft. She likes running, all kinds of pop music, reading historical fiction, and watching crime TV shows.',
  },
  {
    ...HARI_SENTHILKUMAR,
    title: 'President',
    desc:
      'Hari was an Unshackled Ventures Fellow in the past and is passionate about startups and building products. He is obsessed with the Lakers and loves to have thoughtful conversations.',
  },
  {
    ...ELEANOR_PAE,
    title: 'VP, Professional Affairs',
    desc:
      'Eleanor has interests in biotechnology, healthcare consulting, and product management. She has interned at BioMarin Pharmaceutical, Cress Health and Bluebonnet Data. She is also involved in 180 Degrees Consulting, Total Wellness magazine, and DataRes. She enjoys discovering new music, going to the beach, and playing with her dog.',
  },
  {
    ...NEHA_BHONGIR,
    title: 'VP, Professional Affairs',
    desc:
      'Neha plans to pursue healthcare consulting and has interned at Well Health and Seed Health. She loves to spend her free time cooking, reading, and listening to R&B music.'
  },
  {
    ...AUSTIN_PHAM,
    title: 'VP, Social Affairs',
    desc:
      'Through Austin\'s lifelong endeavors in music, art, and technology, he\'s found a love for the intersection between entertainment and data science. On campus, he\'s involved in Music Industry Committee and DataRes Consulting. His favorite (Jewish) intellects are Sam Harris, Michael Singer, and Naval Ravikant. As an audio engineer, he hopes to one day be a DJ!'
  }
];

const DIRECTORS = [
  {
    ...MELISSA_CHEN,
    title: 'Recruitment | Marketing',
    desc:
      'After Melissa’s experience in bioengineering, she has recently decided to transition to computer science. She is now interested in pursuing a career in product management. In her free time, Melissa enjoys curating playlists, running, and painting.'  
  },
  {
    ...BRIAN_ROYSAR,
    title: 'Recruitment',
    desc:
      ''
  },
  {
    ...JESSI_HU,
    title: 'Media',
    desc:
      'Jessi plans to pursue product management in the future and has been involved with consulting and tech clubs at UCLA. She hopes to retire early with at least two corgis.'
  },
  {
    ...HENRY_NGUYEN,
    title: 'Finance',
    desc:
      'Henry is interested in implementing technology solutions within finance and has worked with Parametric Portfolios for their fixed income team. He’s also an avid rock climber and steak lover!'
  },
  {
    ...VISHAL_NARAYAN,
    title: 'Technology',
    desc:
      'Vishal is passionate about using computers to make life more convenient. He loves playing chess, shooting hoops, and flipping omelettes.'
  },
  {
    ...VALENTIN_NGUYEN,
    title: 'Creative',
    desc: 'Valentin is interested in all things art and design, and is currently exploring UI/UX design. In her free time, she enjoys illustrating food, collecting Kermit memes, and having thoughtful conversations.',
  },
  {
    ...JENNY_YOO,
    title: 'Operations',
    desc:
      'Jenny is passionate about pursuing a career in the legal field after graduation and has interned at Tenants Law Firm and the Harriet Buhai Center for Family Law. On campus, she is involved in UCLA Cub Tours and Matriculate. In her free time, Jenny loves to cook, get brunch, and watch sitcoms.'
  },
  {
    ...ANNE_SHEN,
    title: 'Alumni Relations',
    desc:
      'Anne has experience in political campaigns, government lobbying, activism organization, and research. In her free time she enjoys shooting film photography, trying new coffee shops, and buying too many plants.'
  },
  {
    ...RONAK_SHAH,
    title: 'Alumni Relations',
    desc:
      'Ronak has interests in supply chain optimization, inventory management and business analytics. He has previously interned at companies like EY and Apeel Sciences. He spends his free time playing soccer, skateboarding, watching classic movies and exploring LA. '
  }
];

export default {
  PRESIDENTS,
  DIRECTORS,
};
