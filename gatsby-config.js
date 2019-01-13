module.exports = {
  siteMetadata: {
    title: `Web dev tuts`,
    description: `Time to learn`,
    author: `Luuk Hafkamp`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    {
    	resolve: `gatsby-source-filesystem`,
    	options: {
    		path: `${__dirname}/src/tutorials`,
    		name: `tutorials`,
    	},
    },
   	`gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
}
