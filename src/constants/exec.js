import {

  CINDY_ZHENG,
  HARI_SENTHILKUMAR,
  ELEANOR_PAE,
  NEHA_BHONGIR,
  AUSTIN_PHAM,
  RONALD_LIU,

  RINGY_ZHANG,
  HENRY_NGUYEN,
  JENNY_YOO,
  NEERAJ_SAMTANI,
  ANNE_SHEN,
  RONAK_SHAH,
  FELIX_ZHANG,
  VISHAL_NARAYAN,
  VALENTIN_NGUYEN
} from './members';

const PRESIDENTS = [
  {
    ...CINDY_ZHENG,
    title: 'President',
    desc:
      'Cindy (4th) has interests in internationalization and localization, computational linguistics, and translation. She has interned at Stripe, Asana, and Microsoft. She likes running, all kinds of pop music, reading historical fiction, and watching crime TV shows.',
  },
  {
    ...HARI_SENTHILKUMAR,
    title: 'President',
    desc:
      'Hari (4th) was an Unshackled Ventures Fellow in the past and is passionate about startups and building products. He is obsessed with the Lakers and loves to have thoughtful conversations.',
  },
  {
    ...ELEANOR_PAE,
    title: 'VP, Professional Affairs',
    desc:
      'Eleanor (3rd) has interests in biotechnology, healthcare consulting, and product management. She has interned at BioMarin Pharmaceutical, Cress Health and Bluebonnet Data. On campus, she is also involved in 180 Degrees Consulting, Total Wellness magazine, DataRes, and research. In her free time, Eleanor enjoys discovering new music, going to the beach, and playing with her dog.',
  },
  {
    ...NEHA_BHONGIR,
    title: 'VP, Professional Affairs',
    desc:
      'Neha (3rd) plans to pursue healthcare consulting and has interned at Well Health, Seed Health, and Slingshow. She loves to spend her free time cooking, reading, and listening to R&B music.'
  },
  {
    ...AUSTIN_PHAM,
    title: 'VP, Social Affairs',
    desc:
      'I’m (3rd) an Audio Engineer. My favorite Jewish intellects are Sam Harris, Michael Singer, Yuval Noah Harari (and Naval Ravikant). I exclusively wear muscle tees, 5” shorts, and oversized hoodies. Catch me tripping in a sauna munching on an acai bowl. One day, I hope to be a professional DJ !!'
  },
  {
    ...RONALD_LIU,
    title: 'VP, Social Affairs',
    desc:
      'Ronald (4th) is interested in Japanese culture and Japan.'
  }
];

const DIRECTORS = [
  {
    ...AUSTIN_PHAM,
    title: 'Recruitment',
    desc:
      ''
  },
  {
    ...RINGY_ZHANG,
    title: 'Recruitment',
    desc:
      ''  
  },
  {
    ...HENRY_NGUYEN,
    title: 'Finance',
    desc:
      ''
  },
  {
    ...VISHAL_NARAYAN,
    title: 'Technology',
    desc:
      'Just a cool guy'
  },
  {
    ...FELIX_ZHANG,
    title: 'Marketing',
    desc:
      'Felix (4th) enjoys aesthetics and computers.'
  },
  {
    ...VALENTIN_NGUYEN,
    title: 'Creative',
    desc: 'Valentin (3rd) is interested in all things art and design, and is currently exploring UI/UX design. In her free time, she enjoys illustrating food, collecting Kermit memes, and having thoughtful conversations.',
  },
  {
    ...NEERAJ_SAMTANI,
    title: 'Media',
    desc:
      'Neeraj (4th) enjoys reading, playing basketball, and going to the gym. At UCLA, he’s also involved in The Film and Photography Society and Upsilon Pi Epsilon.'
  },
  {
    ...JENNY_YOO,
    title: 'Operations',
    desc:
      'Jenny (3rd) is passionate about pursuing a career in the legal field after graduation and has interned at Tenants Law Firm and the Harriet Buhai Center for Family Law. On campus, she is involved in UCLA Cub Tours and Matriculate. In her free time, Jenny loves to cook, get brunch, and watch sitcoms.'
  },
  {
    ...ANNE_SHEN,
    title: 'Alumni Relations',
    desc:
      'Anne (3rd) has experience in political campaigns, government lobbying, activism organization, and research. In her free time she enjoys shooting film photography, trying new coffee shops, and buying too many plants.'
  },
  {
    ...RONAK_SHAH,
    title: 'Alumni Relations',
    desc:
      ''
  }
];

export default {
  PRESIDENTS,
  DIRECTORS,
};
