module.exports = {
  siteMetadata: {
    title: "Kai Paynter Advisory",
    author: "Boipelo Mawasha",
    description: "Kai Paynter Advisory"
  },
  //pathPrefix: `/staging`,
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/logo2.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Oxygen`        ],
        display: 'swap'
      }
    }
  ],
}
