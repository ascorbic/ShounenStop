import React, { useState } from 'react'
import { css } from '@emotion/core'
import { Container } from 'react-bootstrap'
import Img from 'gatsby-image'
import ProductPageContainer from '../Products/ProductPageContainer'
import ContextConsumer from '../LayoutItems/CartContext'

const ComiketProductPageContainer = ({
  imgData,
  preorder,
  receieve,
  asin,
  eventName,
  productType,
  price,
  url,
}) => {
  return (
    <ContextConsumer>
      {context => {
        return (
          <Container css={productPageContainer} fluid>
            <ProductPageContainer selectedProductCategory="Comiket">
              <div css={productPageWrapper}>
                <div className="row" css={productContentContainer}>
                  <div
                    css={productImageContainer}
                    className="col-xl-6 col-lg-5 col-md-6 col-sm-12 col-12"
                  >
                    <div css={imgContainer}>
                      <Img css={imgStyles} fluid={imgData} />
                    </div>
                  </div>
                  <div
                    css={productInformationWrapper}
                    className="col-xl-6 col-lg-3 col-md-4 col-sm-12 col-12"
                  >
                    <div css={productInformationContainer}>
                      <div css={productTypeContainer}>
                        {eventName + ' ' + productType}
                      </div>
                      <div css={productTypeText}>{'Single ' + productType}</div>
                      <div css={priceText}>{'$' + price}</div>
                      <div
                        onClick={() => {
                          context.addQuantityToCart(
                            asin,
                            eventName + ' ' + productType,
                            productType,
                            imgData,
                            1,
                            1
                          )
                        }}
                        className="addToCartButton"
                        css={addToCartButton}
                      >
                        ADD TO CART
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ProductPageContainer>
          </Container>
        )
      }}
    </ContextConsumer>
  )
}

export default ComiketProductPageContainer

const productPageWrapper = css`
  width: 100%;
  display: flex;
  justify-content: center;
`

const productTypeText = css`
  font-family: varela round;
  font-size: 25px;
  color: #666;
  padding-top: 10px;
`

const productTypeContainer = css`
  font-family: varela round;
  font-size: 30px;
  color: #0f346c;
  font-weight: 700;
`

const productInformationContainer = css``

const priceText = css`
  font-family: varela round;
  font-size: 30px;
  color: #151515;
  height: 100px;
  display: flex;
  align-items: center;
`

const productInformationWrapper = css`
  margin-top: 40px;

`

const productImageContainer = css`
  display: flex;
  justify-content: center;
  margin-top: 40px;
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

  box-shadow: 0px 20px 30px 10px rgba(31, 32, 68, 0.30);
`

const productContentContainer = css`
  width: 100%;
  margin-left: 0;
  margin-right: 0;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  justify-content: center;
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

const addToCartButton = css`
  -webkit-transition: all 0.2s;
  -o-transition: all 0.2s;
  transition: all 0.2s;
  cursor: pointer;
  border:solid 1px #0f346c;
  background-color: #0f346c;
  color: #a1bce6;
  font-family: varela round;
  font-weight: 400;
  line-height: 45px;
  font-size: 16px;
  height: 45px;
  width: 100%;
  border-radius: 3px;
  border-top: solid 1px #e6e6ea;
  user-select: none;
  text-align: center;
  letter-spacing: 1.5px;
  &:hover {
    color:#0f346c;
    background-color: #fff;
    border:solid 1px #0f346c;
  }

  &:active {
    background-color: #cfcfcf;
  }
`
