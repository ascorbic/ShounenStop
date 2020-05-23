const { createFilePath } = require("gatsby-source-filesystem");
exports.onCreateNode = ({ node, getNode, actions }) => {
  let parentNode = getNode(node.parent)
  if (node.internal.type === "MarkdownRemark") {
    if (parentNode.sourceInstanceName === "blogs") {
    let slug = createFilePath({ node, getNode })
    slug = slug.replace(/\//g, '');
    actions.createNodeField({ node, name: "slug", value: slug })
    }
  }
}