import React from 'react'
import { graphql } from 'gatsby'

import { css } from '@emotion/core'

import WeissProductPageContainer from '../components/Weiss/WeissProductPageContainer'

const WeissProductPage = ({ data }) => {
  const {
    name,
    displayName,
    asin,
    producttype,
    series,
    color,
    image,
    weight,
    pricings,
    preorder,
    release,
  } = data.markdownRemark.frontmatter

  return (
    <>
      <WeissProductPageContainer
        name={name}
        displayName={displayName}
        asin={asin}
        series={series + ' 🇯🇵'}
        productType={producttype}
        preorderDate={preorder}
        releaseDate={release}
        pricings={pricings}
        price={pricings.find(x => x.quantity === 1).price}
        color={color}
        imgData={image.childImageSharp.fluid}
      />
    </>
  )
}

export default WeissProductPage

export const WeissProductTemplateQuery = graphql`
  query WeissProductPageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        displayName
        name
        asin
        producttype
        series
        color
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
        preorder(formatString: "MMM DD")
        release(formatString: "MMM DD")
      }
    }
  }
`
