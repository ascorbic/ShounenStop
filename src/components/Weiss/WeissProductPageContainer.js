import React, { useState } from 'react'
import { css } from '@emotion/core'
import { Container } from 'react-bootstrap'
import Img from 'gatsby-image'
import ProductPageContainer from '../Products/ProductPageContainer'
import ContextConsumer from '../LayoutItems/CartContext'

const WeissProductPageContainer = ({
  imgData,
  asin,
  series,
  name,
  displayName,
  productType,
  preorderDate,
  releaseDate,
  pricings,
  description,
  price,
  color,
  url,
}) => {
  const imgContainer = css`
    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1),
      cubic-bezier(0.645, 0.045, 0.355, 1), cubic-bezier(0.645, 0.045, 0.355, 1),
      cubic-bezier(0.645, 0.045, 0.355, 1);
    transition-duration: 300ms, 300ms, 300ms, 300ms;
    width: 100%;
    cursor: pointer;
    max-width: 500px;
    padding: 5px;
    background-color: #fff;
    // border: solid 2px ${color};
    // box-shadow: 0px 20px 30px 10px rgba(31, 32, 68, 0.3);
    border-radius: 8px;
    &:hover {
      transform: scale(1.03);
    }
  `

  const productTypeText = css`
    font-family: varela round;
    font-size: 20px;
    color: ${color};
    padding-top: 10px;
  `

  const productTypeContainer = css`
    font-family: varela round;
    font-size: 30px;
    color: #151515;
    // font-weight: 700;
  `

  const addToCartButton = css`
    -webkit-transition: all 0.2s;
    -o-transition: all 0.2s;
    transition: all 0.2s;
    cursor: pointer;
    margin-top: 20px;
    border: solid 1px ${color};
    background-color: ${color};
    color: rgba(255, 255, 255, 1);
    font-family: varela round;
    font-weight: 400;
    line-height: 45px;
    font-size: 16px;
    height: 45px;
    width: 100%;
    border-radius: 3px;
    user-select: none;
    text-align: center;
    letter-spacing: 2px;
    &:hover {
      color: rgba(255, 255, 255, 0.75);
      letter-spacing: 1.5px;
    }

    &:active {
      color: #fff;
    }
  `

  const priceText = css`
    font-family: varela round;
    font-size: 28px;
    color: ${color};
    height: 70px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `

  const pricingText = css`
    font-weight: 700;
  `

  const totalText = css`
    font-weight: 400;
    padding-left: 10px;
  `

  const productInfoHeader = css`
    border-top: solid 1px #ddd;
    padding-top: 70px;
    font-family: varela round;
    color: ${color};
    font-size: 25px;
    width: 100%;
    font-weight: 700;
  `

  const [quantity, setQuantity] = useState(1)
  return (
    <ContextConsumer>
      {context => {
        return (
          <Container css={productPageContainer} fluid>
            <ProductPageContainer selectedProductCategory="Weiss">
              <div css={productPageWrapper}>
                <div className="row" css={productContentContainer}>
                  <div
                    css={productImageContainer}
                    className="col-xl-6 col-lg-5 col-md-6 col-sm-12 col-12"
                  >
                    <div className="img-zoom" css={imgContainer}>
                      <Img css={imgStyles} fluid={imgData} />
                    </div>
                  </div>
                  <div
                    css={productInformationWrapper}
                    className="col-xl-6 col-lg-3 col-md-4 col-sm-12 col-12"
                  >
                    <div css={productInformationContainer}>
                      <div css={productTypeText}>
                        {quantity > 1
                          ? 'Set of ' +
                            quantity.toString() +
                            ' ' +
                            productType +
                            '(s)'
                          : 'Single ' + productType}
                      </div>
                      <div css={productTypeContainer}>{name}</div>
                      <div css={seriesContainer}>{series}</div>
                      <div css={priceText}>
                        <span css={pricingText}>
                          {'$' +
                            pricings.find(x => x.quantity === quantity).price}
                        </span>
                        <span css={totalText}>Total</span>
                      </div>
                      <div css={pricingQuantityContainer}>
                        <div css={pricingQuantityText}>Quantity</div>
                        <div css={pricingQuantityPrice}>
                          {'$' +
                            (
                              pricings.find(x => x.quantity === quantity)
                                .price / quantity
                            ).toFixed(2) +
                            ' per item'}
                        </div>
                      </div>
                      <div css={pricingContainer}>
                        {pricings.map(item => {
                          return (
                            <div
                              onClick={() => setQuantity(item.quantity)}
                              className={
                                item.quantity === quantity
                                  ? 'quantitySelected'
                                  : ''
                              }
                              css={productPricing}
                              key={item.quantity}
                            >
                              {item.quantity}
                            </div>
                          )
                        })}
                      </div>
                      <div
                        onClick={() => {
                          context.addQuantityToCart(
                            asin,
                            displayName,
                            productType,
                            imgData,
                            quantity,
                            1
                          )
                        }}
                        className="addToCartButton"
                        css={addToCartButton}
                      >
                        ADD TO CART
                      </div>
                      <div css={productInfoContainer}>
                        <div css={productInfoHeader}>Product Information</div>
                        {preorderDate !== 'Invalid date' ? (
                          <>
                            <div css={infoRow}>
                              <div css={infoLeft}>Preorder By</div>
                              <div css={infoRight}>{preorderDate}</div>
                            </div>
                            <div css={infoRow}>
                              <div css={infoLeft}>Release Date</div>
                              <div css={infoRight}>{releaseDate}</div>
                            </div>
                          </>
                        ) : null}
                        <div css={infoRow}>
                          <div css={infoLeft}>Notes</div>
                          <div css={infoRight}>
                            Items over the weight of 4.4lbs (e.g., 5 or more
                            Weiss BP boxes) will be shipped in multiple
                            packages, each with tracking. The staff of Shounen
                            Stop will never purposely tamper with sealed
                            products to affect the fairness of distribution to
                            customers.
                          </div>
                        </div>
                        {description !== null ? (
                          <div css={infoRow}>
                            <div css={infoLeft}>Description</div>
                            <div css={infoRight}>{description}</div>
                          </div>
                        ) : null}
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

export default WeissProductPageContainer

const seriesContainer = css`
  font-size: 18px;
`

const infoRow = css`
  clear: both;
  margin-top: 10px;
  margin-bottom: 10px;
  &:after {
    display: table;
    clear: both;
    content: '';
  }
`

const infoLeft = css`
  float: left;
  font-weight: 700;
  color: #444;
`

const infoRight = css`
  float: right;
`

const productInfoContainer = css`
  font-family: varela round;

  width: 100%;
`

const productPageWrapper = css`
  width: 100%;
  display: flex;
  justify-content: center;
`

const pricingQuantityContainer = css`
  position: relative;
  line-height: 16px;
  padding-left: 6px;
  padding-bottom: 20px;
`
const pricingQuantityText = css`
  float: left;
  font-size: 18px;
  font-weight: 700;
  color: #303235;
  text-align: left;
  letter-spacing: 0px;
`
const pricingQuantityPrice = css`
  float: right;
  font-size: 16px;
  color: #666;

  @media only screen and (max-width: 400px) {
    font-size: 14px;
  }
`

const itemPriceText = css`
  font-family: varela round;
  font-size: 20px;
  color: #151515;
`

const totalPriceText = css`
  font-family: varela round;
  font-size: 20px;
  color: #151515;
`

const productPricing = css`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  // border: solid 1px #dedede;
  flex: 0 0 auto;
  margin-right: 4px;
  margin-bottom: 4px;
  color: #151515;
  width: 50px;
  height: 50px;
  background-color: #f6f6f6;
  transition: all 0.2s ease-in-out;
  user-select: none;
  cursor: pointer;

  &:hover {
    transition: none;
    border: solid 1px #d6d6d6;
  }
`

const pricingContainer = css`
  margin-top: 5px;
  padding-left: 5px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  font-family: varela round;
  position: relative;
`

const productInformationContainer = css``

const dateValue = css``

const dateField = css`
  font-weight: 700;
`
const dateTextContainer = css`
  font-family: varela round;
  font-size: 20px;
`

const productInformationWrapper = css`
  margin-top: 40px;
  max-width: 400px;
`

const productImageContainer = css`
  display: flex;
  align-self: flex-start;
  justify-content: center;
  margin-top: 40px;
  position: relative;

  position: sticky;
  top: 80px;
  @media (max-width: 768px) {
    position: relative;
    top: 0;
  }
`

const imgStyles = css`
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1), cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-duration: 300ms, 300ms, 300ms, 300ms;
`

const productContentContainer = css`
  width: 100%;
  margin-top: 35px;
  padding-bottom: 50px;
  margin-left: 25px;
  margin-right: 25px;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  justify-content: center;
  max-width: 1140px;
  box-shadow: 0px 2px 8px 0px rgba(31, 32, 68, 0.16);
  background-color: #fff;
  border-radius: 12px;
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
