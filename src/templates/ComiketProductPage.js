import React from 'react'
import Layout from '../components/LayoutItems/Layout'

import { useStaticQuery, graphql } from 'gatsby'

import { css } from '@emotion/core'
import ComiketProductPageContainer from '../components/Comiket/ComiketProductPageContainer'

const ComiketProductPage = ({ data }) => {
  const {
    image,
    asin,
    eventName,
    producttype,
    pricings,
    onsale,
  } = data.comiketProduct.frontmatter
  const eventInfo = data.comiketEventInfo.edges.find(
    x => x.node.frontmatter.eventName === eventName
  ).node.frontmatter

  const price = pricings[0].price

  return (
    <>
      <ComiketProductPageContainer
        imgData={image.childImageSharp.fluid}
        asin={asin}
        eventInfo={eventInfo}
        eventName={eventName}
        productType={producttype}
        price={price}
        onsale={onsale}
      />
    </>
  )
}

export default ComiketProductPage

export const ComiketProductTemplateQuery = graphql`
  query ComiketProductPageQuery($slug: String!) {
    comiketProduct: markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        asin
        producttype
        eventName
        image {
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        onsale
        pricings {
          quantity
          price
        }
        weight
      }
    }
    comiketEventInfo: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/comiketEvents/" } }
    ) {
      edges {
        node {
          frontmatter {
            eventName
            eventDesc
            currentEvent
            preorder(formatString: "MMM DD")
            release(formatString: "MMM DD")
          }
        }
      }
    }
  }
`
