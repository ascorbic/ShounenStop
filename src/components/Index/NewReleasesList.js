import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { css } from '@emotion/core'

import WeissProductCard from '../Products/WeissProductCard'
import { Container } from 'react-bootstrap'

const NewReleasesList = ({ release1, release2, release3 }) => {
  const lowestPrice = pricings => {
    return Math.min.apply(
      Math,
      pricings.map(function(pricing) {
        return pricing.price / pricing.quantity
      })
    )
  }

  console.log()
  return (
    <Container css={productsContainer}>
      <WeissProductCard
        cardClassName="col-xl-4 col-lg-6 col-md-6 col-sm-11 col-12"
        series={release1.frontmatter.series}
        displayName={release1.frontmatter.displayName + ' 🇯🇵'}
        productType={release1.frontmatter.producttype}
        preorderDate={release1.frontmatter.preorder}
        releaseDate={release1.frontmatter.release}
        price={release1.frontmatter.pricings.find(x => x.quantity === 1).price}
        lowPrice={lowestPrice(release1.frontmatter.pricings)}
        color={release1.frontmatter.color}
        imgData={release1.frontmatter.image.childImageSharp.fluid}
        url={release1.fields.slug}
      />
      <WeissProductCard
        cardClassName="col-xl-4 col-lg-6 col-md-6 col-sm-11 col-12"
        series={release2.frontmatter.series}
        displayName={release2.frontmatter.displayName + ' 🇯🇵'}
        productType={release2.frontmatter.producttype}
        preorderDate={release2.frontmatter.preorder}
        releaseDate={release2.frontmatter.release}
        price={release2.frontmatter.pricings.find(x => x.quantity === 1).price}
        lowPrice={lowestPrice(release2.frontmatter.pricings)}
        color={release2.frontmatter.color}
        imgData={release2.frontmatter.image.childImageSharp.fluid}
        url={release2.fields.slug}
      />
      <WeissProductCard
        cardClassName="col-xl-4 col-lg-6 col-md-6 col-sm-11 col-12"
        series={release3.frontmatter.series}
        displayName={release3.frontmatter.displayName + ' 🇯🇵'}
        productType={release3.frontmatter.producttype}
        preorderDate={release3.frontmatter.preorder}
        releaseDate={release3.frontmatter.release}
        price={release3.frontmatter.pricings.find(x => x.quantity === 1).price}
        lowPrice={lowestPrice(release3.frontmatter.pricings)}
        color={release3.frontmatter.color}
        imgData={release3.frontmatter.image.childImageSharp.fluid}
        url={release3.fields.slug}
      />
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
