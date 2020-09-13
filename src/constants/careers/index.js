import TECHNOLOGY_LOGOS from './tech';
import ENTERTAINMENT_LOGOS from './entertainment';
import MEDICINE_LOGOS from './medicine';
import BANKING_LOGOS from './banking';
import OTHER_LOGOS from './other';

const TECHNOLOGY = {
  name: 'Software & Hardware',
  desc: 'Software Engineering, Product Management, Product/UX Design, and more',
  logos: TECHNOLOGY_LOGOS,
};

const ENTERTAINMENT = {
  name: 'Music, Entertainment, & Gaming',
  desc:
    'Film & TV Development, Music Production and Management, Game Development, and more',
  logos: ENTERTAINMENT_LOGOS,
};

const MEDICINE = {
  name: 'Medicine & Healthcare',
  desc: 'Biotechnology, Healthcare, and more',
  logos: MEDICINE_LOGOS,
};

const BANKING_CONSULTING = {
  name: 'Banking & Consulting',
  desc: 'Consulting, Accounting, Investment Banking, and more',
  logos: BANKING_LOGOS,
};

const OTHER = {
  name: 'Other Industries',
  desc: 'Advertising, Accounting, Travel, and more',
  logos: OTHER_LOGOS,
};

export default [TECHNOLOGY, ENTERTAINMENT, MEDICINE, BANKING_CONSULTING, OTHER];
