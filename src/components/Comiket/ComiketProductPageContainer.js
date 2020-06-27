import React from 'react'
import { css } from '@emotion/core'
import { Container } from 'react-bootstrap'
import Img from 'gatsby-image'
import ProductPageContainer from '../Products/ProductPageContainer'
import ContextConsumer from '../LayoutItems/CartContext'

const ComiketProductPageContainer = ({
  imgData,
  asin,
  eventName,
  productType,
  price,
  eventInfo,
}) => {
  const { preorder, receive } = eventInfo
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
                    <div className="img-zoom" css={imgContainer}>
                      <Img css={imgStyles} fluid={imgData} />
                    </div>
                  </div>
                  <div
                    css={productInformationWrapper}
                    className="col-xl-6 col-lg-3 col-md-4 col-sm-12 col-12"
                  >
                    <div css={productInformationContainer}>
                      <div css={productTypeText}>{'Single ' + productType}</div>
                      <div css={productTypeContainer}>
                        {eventName + ' ' + productType}
                      </div>
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
                      <div css={productInfoContainer}>
                          <div css={productInfoHeader}>Product Information</div>
                          <div css={infoRow}>
                            <div css={infoLeft}>Preorder By</div>
                            <div css={infoRight}>{preorder}</div>
                          </div>
                          <div css={infoRow}>
                            <div css={infoLeft}>Estimated Arrival</div>
                            <div css={infoRight}>{receive}</div>
                          </div>
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



const productInfoHeader = css`
  padding-top: 30px;
  font-family: varela round;
  color: #0f346c;
  font-size: 25px;
  width: 100%;
  font-weight: 700;
`

const infoRow = css`
  clear: both;
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

const productTypeText = css`
  font-family: varela round;
  font-size: 20px;
  color: #0f346c;
  padding-top: 10px;
`

const productTypeContainer = css`
  font-family: varela round;
  font-size: 30px;
  color: #151515;
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

const priceText = css`
  font-family: varela round;
  font-size: 30px;
  color: #0f346c;
  height: 100px;
  display: flex;
  align-items: center;
`

const productInformationWrapper = css`
  margin-top: 40px;
`

const productImageContainer = css`
  display: flex;
  align-self: flex-start;
  justify-content: center;
  margin-top: 40px;
  position: sticky;
  top: 80px;
  @media (max-width: 768px) {
    position: relative;
    top: 0;
  }
`

const imgContainer = css`
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
  box-shadow: 0px 20px 30px 10px rgba(31, 32, 68, 0.3);
  &:hover {
    transform: scale(1.03);
  }
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

const addToCartButton = css`
  -webkit-transition: all 0.2s;
  -o-transition: all 0.2s;
  transition: all 0.2s;
  cursor: pointer;
  margin-top: 20px;
  border: solid 1px #0f346c;
  background-color: #0f346c;
  color: rgba(255, 255, 255, 0.75);
  font-family: varela round;
  font-weight: 400;
  line-height: 45px;
  font-size: 16px;
  height: 45px;
  width: 100%;
  border-radius: 3px;
  user-select: none;
  text-align: center;
  letter-spacing: 1.5px;
  &:hover {
    color: rgba(255, 255, 255, 1);
    letter-spacing: 2px;
  }

  &:active {
    color: #0f346c;
  }
`
