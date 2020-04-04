module.exports = {
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Fira Sans`,
          },
        ],
      },
    },
  ],
};
