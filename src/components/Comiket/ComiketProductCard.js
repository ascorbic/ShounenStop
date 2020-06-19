import React, { useState } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import ContextConsumer from '../LayoutItems/CartContext'

const ComiketProductCard = ({
  imgData,
  cardClassName,
  asin,
  eventName,
  productType,
  price,
  url,
}) => {
  return (
    <ContextConsumer>
      {({ addQuantityToCart }) => (
        <div css={cardPadding} className={cardClassName}>
          <div css={cardContainer}>
            <Link to={url} className="link-no-style">
            <div css={imgContainer}>
              <Img css={imgStyles} fluid={{ ...imgData, aspectRatio: 1 }} />
            </div>
            </Link>
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
                {/* <Img css={addToCartImgWrapper} fluid={addToCartImageData} /> */}
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
  height: 40px;
  background-color: #fff;

  padding-top: 5px;
  padding-left: 10px;
  padding-right: 10px;
  @media only screen and (max-width: 450px) {
    height: 30px;
  }
`

const cardPadding = css`
  margin-top: 25px;
  margin-bottom: 5px;
  position: relative;
  padding-left: 10px;
  padding-right: 10px;
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

const addToCartImgWrapper = css`
  width: 30px;
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
  padding-top: 3px;
  font-size: 18px;
  font-weight: 700;
  color: #151515;
  float: left;
  @media only screen and (max-width: 450px) {
    padding-top: 2px;
    font-size: 13px;
  }
`

const priceText = css`
  padding-top: 3px;
  position: relative;
  padding-right: 6px;
  font-weight: 400;
  color: #555;
  float: right;
  font-size: 18px;
  @media only screen and (max-width: 450px) {
    padding-top: 2px;
    font-size: 13px;
  }
`

const addToCartButton = css`
  -webkit-transition: all 0.2s;
  -o-transition: all 0.2s;
  transition: all 0.2s;
  margin-top: 0px;
  margin-right: -4px;
  padding-left: 2px;
  cursor: pointer;
  background-color: #0f346c;
  color: #a1bce6;
  font-family: montserrat;
  font-weight: 300;
  line-height: 35px;
  border-radius: 8px;
  height: 30px;
  width: 30px;
  font-size: 22px;
  position: relative;
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  text-align: center;
  letter-spacing: 1.5px;
  @media only screen and (max-width: 450px) {
    height: 22px;
    width: 22px;
    margin-top: -1px;
    border-radius: 6px;
    margin-right:-5px;
  }

  &:hover {
    color: #fff;
    transform:scale(1.08)
    // font-size:25px;
    // border: solid 1px #0f346c;
    // background-color: #a1bce6;
  }

  // &:active {
  //   background-color: #cfcfcf;
  // }
`

export default ComiketProductCard
