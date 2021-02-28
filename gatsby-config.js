module.exports = {
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-preload-fonts`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/assets/images/`,
      },
    },
    'gatsby-plugin-styled-components',
  ],
  pathPrefix: '/uclasep.com',
};
