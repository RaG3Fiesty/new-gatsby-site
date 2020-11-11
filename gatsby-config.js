/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "A Productive Nerd",
    description:
      "The place where we discuss about tech, producivity, coding, philosophy, science and tools for thought",
    author: "Mr.Sikand",
    twitterHandle: "@SikandMr",
    email: "hi@aproductivenerd.com",
    url: "https://www.aproductivenerd.com",
    social: {
      twitter: "mr.sikand",
    },
    siteUrl: `https://www.aproductivenerd.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-twitter`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lato`,
            variants: [
              `300`,
              `300i`,
              `400`,
              `400i`,
              `700`,
              `700i`,
              `900`,
              `900i`,
            ],
          },
          {
            family: `Roboto`,
            variants: [
              `300`,
              `300i`,
              `400`,
              `400i`,
              `500`,
              `500i`,
              `700`,
              `700i`,
              `900`,
              `900i`,
            ],
          },
          {
            family: `PT Serif`,
            variants: [`400`, `400i`, `700`, `700i`],
          },
          {
            family: `PT Sans`,
            variants: [`400`, `400i`, `700`, `700i`],
          },
          {
            family: `Open Sans`,
            variants: [
              `400`,
              `400i`,
              `600`,
              `600i`,
              `700`,
              `700i`,
              `800`,
              `800i`,
            ],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/pages/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/pages/content/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: `gatsby-remark-image-attributes`,
            options: {
              // ?Array<String> | Boolean
              //   Any names declared here are added
              //   to the default set of attributes
              //   which the plugin will use to style
              //   the image.
              //   If this is set to true, all CSS
              //   property names will be recognized
              //   as styleAttribute.
              styleAttributes: true,

              // ?Boolean
              //   If true, all attributes that
              //   aren't styleAttributes, will be
              //   added as data-* attributes to the
              //   image.
              dataAttributes: true,
            },
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`,
            },
          },
        ],
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve(`${__dirname}/src/components/layout.js`),
        },
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
