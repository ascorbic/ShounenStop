import React, { useState } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import ContextConsumer from '../LayoutItems/CartContext'

const ComiketProductCard = ({
  imgData,
  cardClassName,
  asin,
  series,
  eventName,
  productType,
  preorderDate,
  releaseDate,
  pricings,
  price,
  lowPrice,
  color,
  url,
}) => {
  return (
    <ContextConsumer>
      {({ addQuantityToCart }) => (
        <div css={cardPadding} className={cardClassName}>
          <div css={cardContainer}>
            {/* <Link to={url} className="link-no-style"> */}
            <div css={imgContainer}>
              <Img css={imgStyles} fluid={{ ...imgData, aspectRatio: 1 }} />
            </div>
            {/* </Link> */}
            <div css={cardBottom}>
              <div css={productTypeText}>{productType}</div>
              <div
                onClick={() => {
                  addQuantityToCart(
                    asin,
                    eventName + ' ' + productType,
                    productType,
                    imgData,
                    1,
                    1
                  )
                }}
                css={addToCartButton}
              >
                +
              </div>
              <div css={priceText}>{'$' + price}</div>
            </div>
          </div>
        </div>
      )}
    </ContextConsumer>
  )
}

const cardBottom = css`
  font-family: varela round;
  position: relative;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border: none;
  width: 100%;
  height: 60px;
  background-color: #fff;

  padding-top: 5px;
  padding-left: 10px;
  padding-right: 10px;
  @media only screen and (max-width: 450px) {
    height: 50px;
  }
`

const cardPadding = css`
  margin-top: 25px;
  margin-bottom: 5px;
  position: relative;
  padding-left:10px;
  padding-right:10px;
  border: none;
  margin-bottom: 2px;
  border-radius: 12px;
`

const cardContainer = css`
  background-color: #fff;
  box-shadow: 0px 2px 8px 0px rgba(31, 32, 68, 0.16);

  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1), cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-duration: 300ms, 300ms, 300ms, 300ms;
  border-radius: 12px;
  position: relative;
  &:hover {
    box-shadow: 0px 8px 12px 0px rgba(31, 32, 68, 0.16);
  }

  &:hover .cardBottom {
  }
`

const imgContainer = css`
  position: relative;
  width: 100%;
  cursor: pointer;
`

const imgStyles = css`
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1), cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-duration: 300ms, 300ms, 300ms, 300ms;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
`

const productTypeText = css`
  font-size: 20px;
  font-weight: 400;
  color: #151515;
  float: left;
  @media only screen and (max-width: 450px) {
    font-size: 16px;
  }
`

const priceText = css`
  position: relative;
  font-weight: 300;
  width: auto;
  color: #99999a;
  line-height: 22px;
  clear: left;
  float: left;
  font-size: 19px;
  @media only screen and (max-width: 450px) {
    font-size: 15px;
  }
`

const addToCartButton = css`
  -webkit-transition: all 0.2s;
  -o-transition: all 0.2s;
  transition: all 0.2s;
  margin-top: 2px;
  margin-right: -1px;
  // padding-left: 3px;
  cursor: pointer;
  background-color: #0f346c;
  color: #fff;
  font-family: montserrat;
  font-weight: 300;
  line-height: 45px;
  border-radius: 12px;
  height: 45px;
  width: 45px;
  font-size: 25px;
  position: relative;
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  text-align: center;
  letter-spacing: 1.5px;
  @media only screen and (max-width: 450px) {
    height: 35px;
    width: 35px;
  }

  &:hover {
    // color: #a1bce6;
    // border: solid 1px #0f346c;
    // background-color: #a1bce6;
  }

  // &:active {
  //   background-color: #cfcfcf;
  // }
`

export default ComiketProductCard
