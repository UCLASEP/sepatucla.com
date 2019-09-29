const ROUTES = {
  members: {
    linkText: 'Members',
    slug: null,
    options: [
      {
        linkText: 'Executive Board',
        slug: 'exec',
        to: '/exec',
      },
      {
        linkText: 'Active Members',
        slug: 'actives',
        to: '/members',
      },
      {
        linkText: 'Sister Chapters',
        slug: 'sisters',
        to: '/sister-chapters',
      },
    ],
    to: null,
    index: 0,
  },
  entrepreneurship: {
    linkText: 'Entrepreneurship',
    slug: null,
    options: [
      {
        linkText: 'Ventures',
        slug: 'ventures',
        to: '/ventures',
      },
      {
        linkText: 'Careers',
        slug: 'careers',
        to: '/careers',
      },
      {
        linkText: 'Bruin Tank',
        slug: 'bruintank',
        to: '/bruintank', // TODO: update this
      },
    ],
    to: null,
    index: 1,
  },
  recruitment: {
    linkText: 'Recruitment',
    slug: 'recruitment',
    options: [],
    to: '/recruitment',
    index: 2,
  },
};

export default ROUTES;
