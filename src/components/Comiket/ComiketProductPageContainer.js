import React, { useState } from 'react'
import { css } from '@emotion/core'
import { Container } from 'react-bootstrap'
import Img from 'gatsby-image'
import ProductPageContainer from '../Products/ProductPageContainer'
import ComiketProductCard from './ComiketProductCard'

const ComiketProductPageContainer = ({
  imgData,
  cardClassName,
  asin,
  eventName,
  productType,
  price,
  url,
}) => {
  // const comiketProductData = data.comiketProducts.edges
  // const addToCartImageData = data.addToCartImage.childImageSharp.fluid
  return (
    <Container css={productPageContainer} fluid>
      <ProductPageContainer selectedProductCategory="Comiket">
        <div css={productPageWrapper}>
          <div className="row" css={productContentContainer}>
            <div
              css={productImageContainer}
              className="col-xl-6 col-lg-5 col-md-5 col-sm-12 col-12"
            >
              <div css={imgContainer}>
                <Img css={imgStyles} fluid={imgData} />
              </div>
            </div>
            <div
              css={productInformationWrapper}
              className="col-xl-6 col-lg-3 col-md-3 col-sm-12 col-12"
            >
              <div css={productInformationContainer}>
                <div css={productTypeContainer}>
                  {eventName + ' ' + productType}
                </div>
                <div css={priceText}>{'$' + price}</div>
              </div>
            </div>
          </div>
        </div>
      </ProductPageContainer>
    </Container>
  )
}

export default ComiketProductPageContainer

const productPageWrapper = css`
  width: 100%;
  display: flex;
  justify-content: center;
`

const productTypeContainer = css`
  font-family: varela round;
  font-size: 30px;
  color: #0f346c;
`

const productInformationContainer = css``

const priceText = css`
  font-family: varela round;
  font-size: 25px;
  color: #0f346c;
`

const productInformationWrapper = css`
  margin-top: 20px;
`

const productImageContainer = css`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

const imgContainer = css`
  position: relative;
  width: 100%;
  cursor: pointer;
  max-width: 500px;
`

const imgStyles = css`
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1), cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-duration: 300ms, 300ms, 300ms, 300ms;
  border-radius: 8px;

  box-shadow: 0px 6px 8px 0px rgba(31, 32, 68, 0.16);
`

const productContentContainer = css`
  width: 100%;
  margin-left: 0;
  margin-right: 0;
  padding-left: 15px;
  padding-right: 15px;

  max-width: 1140px;
`
const productPageContainer = css`
  margin-top: 20px;
  margin-bottom: 0px;
  padding-right: 0;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const productContentWrapper = css`
  margin-top: 0;
  margin-left: 0;
  margin-right: 0;
  padding-left: 0;
  padding-right: 0;
`

const productContainer = css`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 20px;
`
