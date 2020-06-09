import React from 'react'
import { css } from '@emotion/core'
import QACard from './QACard'

const QACardList = ({}) => {
  return (
    <div css={QACardListContainer}>
      <QACard question="" answer="" /> <QACard question="" answer="" />
    </div>
  )
}

const QACardListContainer = css`
  display:flex;
  flex-wrap:wrap;
`

export default QACardList

// export const query = graphql`
//   query QACardQuery {
//     products: allMarkdownRemark(
//       filter: { frontmatter: { merchandise: { ne: null } } }
//     ) {
//       edges {
//         node {
//           frontmatter {
//             asin
//             name
//             displayName
//             producttype
//             series
//             color
//             image {
//               childImageSharp {
//                 fluid(maxWidth: 1000, quality: 100) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//             pricings {
//               quantity
//               price
//             }
//             weight
//             preorder(formatString: "MMM DD")
//             release(formatString: "MMM DD")
//             merchandise
//           }
//         }
//       }
//     }
//   }
// `
