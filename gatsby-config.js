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
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-remark-images`,

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
              styleAttributes: [`display`, `position`, `border`],

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
    {
      resolve: "gatsby-plugin-local-search",
      options: {
        // A unique name for the search index. This should be descriptive of
        // what the index contains. This is required.
        name: "pages",

        // Set the search engine to create the index. This is required.
        // The following engines are supported: flexsearch, lunr
        engine: "flexsearch",

        // Provide options to the engine. This is optional and only recommended
        // for advanced users.
        //
        // Note: Only the flexsearch engine supports options.
        engineOptions: "speed",

        // GraphQL query used to fetch all data for the search index. This is
        // required.
        query: `
          {
            allMdx {
              nodes {
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                }
                rawBody
              }
            }
          }
        `,

        // Field used as the reference value for each document.
        // Default: 'id'.
        ref: "id",

        // List of keys to index. The values of the keys are taken from the
        // normalizer function below.
        // Default: all fields
        index: ["title", "body"],

        // List of keys to store and make available in your UI. The values of
        // the keys are taken from the normalizer function below.
        // Default: all fields
        store: ["id", "path", "title"],

        // Function used to map the result from the GraphQL query. This should
        // return an array of items to index in the form of flat objects
        // containing properties to index. The objects must contain the `ref`
        // field above (default: 'id'). This is required.
        normalizer: ({ data }) =>
          data.allMdx.nodes.map(node => ({
            id: node.id,
            path: node.fields.slug,
            title: node.frontmatter.title,
            body: node.rawBody,
          })),
      },
    },
    // {
    //   resolve: "gatsby-plugin-flexsearch",
    //   options: {
    //     languages: ["en"],
    //     type: "allMdx",
    //     fields: [
    //       {
    //         name: "title",
    //         indexed: true,
    //         resolver: "frontmatter.title",
    //         attributes: {
    //           encode: "balance",
    //           tokenize: "strict",
    //           threshold: 6,
    //           depth: 3,
    //         },
    //         store: true,
    //       },
    //       {
    //         name: "description",
    //         indexed: true,
    //         resolver: "frontmatter.excerpt",
    //         attributes: {
    //           encode: "balance",
    //           tokenize: "strict",
    //           threshold: 6,
    //           depth: 3,
    //         },
    //         store: false,
    //       },
    //       {
    //         name: "url",
    //         indexed: false,
    //         resolver: "fields.slug",
    //         store: true,
    //       },
    //     ],
    //   },
    // },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
