import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { css } from '@emotion/core'
import { Container } from 'react-bootstrap'
import ProductPageContainer from '../../components/Products/ProductPageContainer'

const Figures = ({ data }) => {
  return (
    <Container css={productPageContainer} fluid>
      <ProductPageContainer selectedProductCategory="Figures">
        <div
          css={containerNoPadding}
          className={'col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'}
        >
          <div css={empty}>Nothing here yet!</div>
        </div>
      </ProductPageContainer>
    </Container>
  )
}

export default Figures

const empty = css`
  font-size: 40px;
  height: 400px;
  display: flex;

  justify-content: center;
  align-items: center;
  text-align: center;
`

const containerNoPadding = css`
  padding-right: 0;
  padding-left: 0;
  padding-top: 5px;
`

const productPageContainer = css`
  padding-left: 0;
  padding-right: 0;
`
// export const FiguresProductCategoryQuery = graphql`
//   query FiguresProductCategoryQuery {
//     figureProducts: allMarkdownRemark(
//       filter: { frontmatter: { merchandise: { eq: "figure" } } }
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
