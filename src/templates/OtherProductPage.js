import React from 'react'
import Layout from '../components/LayoutItems/Layout'

import { useStaticQuery, graphql } from 'gatsby'

import { css } from '@emotion/core'
import OtherProductPageContainer from '../components/Other/OtherProductPageContainer'

const OtherProductPage = ({ data }) => {
  const {
    name,
    asin,
    producttype,
    series,
    description,
    shippingFrom,
    image,
    weight,
    pricings,
    ebayLink,
  } = data.otherProduct.frontmatter

  const price = pricings[0].price

  return (
    <>
      <OtherProductPageContainer
        name={name}
        series ={series}
        shippingFrom = {shippingFrom}
        description = {description}
        imgData={image.childImageSharp.fluid}
        asin={asin}
        productType={producttype}
        price={price}
        ebayLink={ebayLink}
      />
    </>
  )
}

export default OtherProductPage

export const OtherProductTemplateQuery = graphql`
  query OtherProductPageQuery($slug: String!) {
    otherProduct: markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        asin
        producttype
        name
        series
        description
        shippingFrom
        ebayLink
        image {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pricings {
          quantity
          price
        }
        weight
        merchandise
      }
    }
  }
`
