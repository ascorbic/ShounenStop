import React from 'react'
import { css } from '@emotion/core'

import WeissLandingProductCard from '../Weiss/WeissLandingProductCard'
import { Container } from 'react-bootstrap'

const cardClassName="col-xl-4 col-lg-6 col-md-6 col-sm-11 col-12"

const NewReleasesList = ({ release1, release2, release3 }) => {
  const lowestPrice = pricings => {
    return Math.min.apply(
      Math,
      pricings.map(function(pricing) {
        return pricing.price / pricing.quantity
      })
    )
  }

  return (
    <Container css={productsContainer}>
    {
      release1 !== undefined ?
      <WeissLandingProductCard
        cardClassName={cardClassName}
        asin={release1.frontmatter.asin}
        series={release1.frontmatter.series}
        displayName={release1.frontmatter.displayName + ' 🇯🇵'}
        productType={release1.frontmatter.producttype}
        preorderDate={release1.frontmatter.preorder}
        releaseDate={release1.frontmatter.release}
        pricings={release1.frontmatter.pricings}
        price={release1.frontmatter.pricings.find(x => x.quantity === 1).price}
        lowPrice={lowestPrice(release1.frontmatter.pricings)}
        color={release1.frontmatter.color}
        imgData={release1.frontmatter.image.childImageSharp.fluid}
        url={'/products'+release1.fields.slug}
      /> : null
    }
    {
      release2 !== undefined ?
      <WeissLandingProductCard
        cardClassName={cardClassName}
        asin={release2.frontmatter.asin}
        series={release2.frontmatter.series}
        displayName={release2.frontmatter.displayName + ' 🇯🇵'}
        productType={release2.frontmatter.producttype}
        preorderDate={release2.frontmatter.preorder}
        releaseDate={release2.frontmatter.release}
        pricings={release2.frontmatter.pricings}
        price={release2.frontmatter.pricings.find(x => x.quantity === 1).price}
        lowPrice={lowestPrice(release2.frontmatter.pricings)}
        color={release2.frontmatter.color}
        imgData={release2.frontmatter.image.childImageSharp.fluid}
        url={'/products'+release2.fields.slug}
      /> : null
    }
        {
      release3 !== undefined ?
      <WeissLandingProductCard
        cardClassName={cardClassName}
        asin={release3.frontmatter.asin}
        series={release3.frontmatter.series}
        displayName={release3.frontmatter.displayName + ' 🇯🇵'}
        productType={release3.frontmatter.producttype}
        preorderDate={release3.frontmatter.preorder}
        releaseDate={release3.frontmatter.release}
        pricings={release3.frontmatter.pricings}
        price={release3.frontmatter.pricings.find(x => x.quantity === 1).price}
        lowPrice={lowestPrice(release3.frontmatter.pricings)}
        color={release3.frontmatter.color}
        imgData={release3.frontmatter.image.childImageSharp.fluid}
        url={'/products'+release3.fields.slug}
      /> : null
    }
    </Container>
  )
}

const productsContainer = css`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
`

export default NewReleasesList
