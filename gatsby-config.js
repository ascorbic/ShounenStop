require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      createProxyMiddleware({
        target: "http://localhost:9000",
        pathRewrite: {
          "/.netlify/functions/": "",
        },
      })
    )
  },
  siteMetadata: {
    title: `Shounen Stop`,
    description: `Website for sales of Japanese/Anime goods.`,
    author: `Jonathan Wu`,
  },
  plugins: [
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ['/layout.css', 'bulma'],
      },
    }, // must be after other CSS plugins
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    'gatsby-plugin-netlify-cms',
    // {
    //   resolve: `gatsby-plugin-netlify-cms`,
    //   options: {
    //     /**
    //      * One convention is to place your Netlify CMS customization code in a
    //      * `src/cms` directory.
    //      */
    //     modulePath: `${__dirname}/src/cms/cms.js`,
    //   },
    // },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
