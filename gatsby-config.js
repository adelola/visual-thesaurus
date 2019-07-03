require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Visual Thesaurus`,
    description: `A visual (optical ocular perceptible imaged viewable) way to get synonyms`,
    author: `Adelola`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `visual-thesaurus`,
        short_name: `vsaurus`,
        start_url: `/`,
        background_color: `#FF3F00`,
        theme_color: `#FF7F11`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        // Type prefix of entities from server
        typePrefix: "internal__",

        // The url, this should be the endpoint you are attempting to pull data from
        url: `https://od-api.oxforddictionaries.com/api/v2/thesaurus/en/`,

        method: "GET",

        headers: {
          "Content-Type": "application/json"
        },

        // Request body
        data: {},

        // Name of the data to be downloaded.  Will show in graphQL or be saved to a file
        // using this name. i.e. posts.json
        name: `words`,

        // Nested level of entities in response object, example: `data.posts`
        entityLevel: `data.words`,

        // Define schemaType to normalize blank values
        // example:
        // const postType = {
        //   id: 1,
        //   name: 'String',
        //   published: true,
        //   object: {a: 1, b: '2', c: false},
        //   array: [{a: 1, b: '2', c: false}]
        // }
        schemaType: postType,

        // Request parameters
        // Only available from version 2.1.0
        params: {
          per_page: 1
        },

        // Simple authentication, optional
        auth: {
          app_id: process.env.OXFORD_APP_ID,
          app_key: process.env.OXFORD_APP_KEY,
          language = "en-us",
          word_id = "example",
        },

        // Advanced authentication for Auth0
        // Only available from version 2.1.0
        // auth0Config: {
        //   method: "GET",
        //   url: "https://MyAuth0Domain/oauth/token",
        //   headers: { "content-type": "application/json" },
        //   data: {
        //     grant_type: "password",
        //     username: "myusername",
        //     password: "PassAWordHere",
        //     audience: "Auth0APIAudience",
        //     scope: "openid",
        //     client_id: "AUTH0_CLIENT_ID",
        //     client_secret: "AUTH0_SECRET"
        //   },
        //   json: true
        // },

        // Optional payload key name if your api returns your payload in a different key
        // Default will use the full response from the http request of the url
        payloadKey: `body`,

        // Optionally save the JSON data to a file locally
        // Default is false
        localSave: false,

        //  Required folder path where the data should be saved if using localSave option
        //  This folder must already exist
        path: `${__dirname}/src/data/auth/`,

        // Optionally include some output when building
        // Default is false
        verboseOutput: true, // For debugging purposes

        // Optionally skip creating nodes in graphQL.  Use this if you only want
        // The data to be saved locally
        // Default is false
        skipCreateNode: false, // skip import to graphQL, only use if localSave is all you want

        // Optionally re-source data when it changes and
        // `gatsby develop` is running.
        // Requires `ENABLE_GATSBY_REFRESH_ENDPOINT=true`.
        // See https://www.gatsbyjs.org/docs/environment-variables/#reserved-environment-variables
        // Default is false
        enableDevRefresh: true,

        // Optionally override key used to re-source data
        // when `gatsby develop` is running.
        // Requires `enableDevRefresh: true`.
        // See setting directly above this one.
        // See also https://github.com/gatsbyjs/gatsby/issues/14653
        // Default is `id`
        refreshId: `id`,

        // Pass an array containing any number of the entity configuration properties (except verbose, auth0Config),
        // any not specified are defaulted to the general properties that are specified
        // Only available from version 2.1.0
        entitiesArray: [
          {
            url: `http://yourapi.com/api/v1/posts`,
            method: "post",
            headers: {
              "Content-Type": "application/json"
            },
            name: `posts`
          }
        ]
      }
    }
    // `gatsby-plugin-offline`,
  ],
}
