const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

const path = require(`path`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  fmImagesToRelative(node)
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

// exports.sourceNodes = ({ actions, createNodeId, getNodes, getNode }) => {
//   const { createNodeField, createNode } = actions

//   const landingNode = getNodes()
//     .filter(node => node.internal.type === `MarkdownRemark`)
//     .find(node => node.fields.slug === '/landingPage/')

//   const releaseNodes = filterReleaseAsin(landingNode)

//   Object.keys(releaseNodes).forEach(function(release) {
//     const releaseNodeData = getNodes().find(
//       node =>
//         node.internal.type === `MarkdownRemark` &&
//         node.frontmatter.asin === releaseNodes[release]
//     )
//     var releaseNode = JSON.parse(JSON.stringify(releaseNodeData))

//     // console.log(releaseNodeData);

//     releaseNode.id = createNodeId(release)
//     releaseNode.name = release
//     releaseNode.parent = landingNode.id
//     releaseNode.internal.owner = null
//     releaseNode.internal.type = 'ReleaseNodes'
//     releaseNode.internal.fieldOwners = {}

//     createNode({
//       image:releaseNode.frontmatter.image,
//       frontmatter: releaseNode.frontmatter,
//       name: releaseNode.name,
//       id: releaseNode.id,
//       parent: releaseNode.parent,
//       children: releaseNode.children,
//       internal: releaseNode.internal,
//     })

//     // id:releaseNode.id,
//     // parent:releaseNode.parent,
//     // children:releaseNode.children,
//     // internal: releaseNode.internal,
//   })
// }

// const filterReleaseAsin = node => {
//   const releaseKeys = ['release1', 'release2', 'release3']
//   return releaseKeys.reduce(
//     (obj, key) => ({ ...obj, [key]: node.frontmatter[key] }),
//     {}
//   )
// }

exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    // if (node.fields.productCategory !== null) {
    //   createPage({
    //     path: '/products/' + node.fields.productCategory.toLowerCase(),
    //     component: path.resolve(`./src/templates/ProductCategoryPage.js`),
    //     context: {
    //       slug: node.fields.slug,
    //     },
    //   })
    // }
    if (node.fields.slug.startsWith('/weiss/')) {
      createPage({
        path: '/products' + node.fields.slug,
        component: path.resolve(`./src/templates/WeissProductPage.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      })
    } else if (node.fields.slug.startsWith('/comiket/')) {
      createPage({
        path: '/products' + node.fields.slug,
        component: path.resolve(`./src/templates/ComiketProductPage.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      })
    } else if (node.fields.slug.startsWith('/other/')) {
      createPage({
        path: '/products' + node.fields.slug,
        component: path.resolve(`./src/templates/OtherProductPage.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      })
    }
  })
}

const ChildProcess = require('child_process');
exports.onPostBuild = () => {
  ChildProcess.execSync(
    "ps aux | grep jest | grep -v grep | awk '{print $2}' | xargs kill",
  );
};