import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import { css } from '@emotion/core'

import WeissProductCard from '../Products/WeissProductCard'
import { Container } from 'react-bootstrap'

const NewReleasesList = ({release1, release2, release3}) => {
  return (
    <Container css={productsContainer}>
      <WeissProductCard 
        cardClassName="col-xl-4 col-lg-6 col-md-6 col-sm-11 col-12"
        series={release1.series+" 🇯🇵"}
        productName={release1.name}
        productType={release1.producttype}
        preorderDate={release1.preorder}
        releaseDate={release1.release}
        price={"$"+release1.pricings.find(x => x.quantity === 1).price}
        color={release1.color}
        imgData={release1.image.childImageSharp.fluid}
        merchandise={release1.merchandise}
        />
      <WeissProductCard
        cardClassName="col-xl-4 col-lg-6 col-md-6 col-sm-11 col-12"
        series={release2.series+" 🇯🇵"}
        productName={release2.name}
        productType={release2.producttype}
        preorderDate={release2.preorder}
        releaseDate={release2.release}
        price={"$"+release2.pricings.find(x => x.quantity === 1).price}
        color={release2.color}
        imgData={release2.image.childImageSharp.fluid}
        merchandise={release2.merchandise}
        />
      <WeissProductCard
        cardClassName="col-xl-4 col-lg-6 col-md-6 col-sm-11 col-12"
        series={release3.series+" 🇯🇵"}
        productName={release3.name}
        productType={release3.producttype}
        preorderDate={release3.preorder}
        releaseDate={release3.release}
        price={"$"+release3.pricings.find(x => x.quantity === 1).price}
        color={release3.color}
        imgData={release3.image.childImageSharp.fluid}
        merchandise={release3.merchandise}
        />
    </Container>
  )
}


const productsContainer = css`
  width:100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding:0;
`

export default NewReleasesList;