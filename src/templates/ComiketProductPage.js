import React from 'react'
import Layout from '../components/LayoutItems/Layout'

import { useStaticQuery, graphql } from 'gatsby'

import { css } from '@emotion/core'
import { Container } from 'react-bootstrap'
import ComiketProductPageContainer from '../components/Comiket/ComiketProductPageContainer'

const ComiketProductPage = ({ data }) => {
  const {
    image,
    asin,
    eventName,
    producttype,
    pricings,
  } = data.markdownRemark.frontmatter
  const price = pricings[0].price

  return (
    <>
      <ComiketProductPageContainer
        imgData={image.childImageSharp.fluid}
        asin={asin}
        eventName={eventName}
        productType={producttype}
        price={price}
      />
    </>
  )
}

export default ComiketProductPage

export const ComiketProductTemplateQuery = graphql`
  query ComiketProductPageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
        pricings {
          quantity
          price
        }
        weight
      }
    }
  }
`
