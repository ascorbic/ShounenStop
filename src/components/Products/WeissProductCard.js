import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'

import WeissBackground from './WeissBackground'

// price, primary color
const WeissProductCard = ({
  imgData,
  className,
  series,
  productType,
  preorderDate,
  releaseDate,
  price,
  color,
}) => {
  const cardBottom = css`
    color: #0f346c;
    border-top: solid 3px ${color};

    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    border-radius: 2px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;

    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);

    height: calc(10% + 120px);
    width: calc(100% - 20px);

    background-color: #fff;
    position: absolute;
    bottom: 10px;
    left: 10px;

    padding-top: 5px;
    padding-left: 10px;
    padding-right: 10px;

    opacity: 0.95;
  `

  const seriesText = css`
    padding-top: 5px;

    color: ${color};
    position: relative;
    float: left;
    font-weight: 700;
    font-size: 20px;
    max-width: 60%;
    text-align: left;
    line-height: 20px;
  `

  const addToCartButton = css`
    -webkit-transition: all 0.2s;
    -o-transition: all 0.2s;
    transition: all 0.2s;
    cursor: pointer;
    position: absolute;
    background-color: ${color};
    color: #fff;
    font-family: varela round;
    font-weight: 400;
    line-height: 35px;
    font-size: 18px;
    height: 35px;
    width: 95%;
    left: 2.5%;
    bottom: 10px;
    border-radius: 3px;
    text-align: center;
    letter-spacing: 1.5px;
    &:hover {
      border: solid 1px ${color};
      background-color: #fff;
      color: ${color};
    }
  `

  const priceText = css`
    // text-decoration: line-through;
    color: ${color};
    padding-top: 5px;
    position: relative;
    float: right;
    font-weight: 700;
    font-size: 23px;
    max-width: 40%;
    text-align: right;
    line-height: 20px;
  `

  return (
    <div css={cardPadding} className={className}>
      <div css={cardStatus}>PREORDER</div>
      <div css={cardContainer}>
        <div css={imgContainer}>
          <Img css={imgStyles} fluid={{ ...imgData, aspectRatio: 1 }} />
        </div>
        <div className="cardBottom" css={cardBottom}>
          <div css={seriesText}>{series}</div>
          <div css={priceText}>{price}</div>
          <div css={productTypeText}>{productType}</div>
          <div css={preorderText}>PREORDER</div>
          <div css={preorderDateText}>{preorderDate}</div>
          <div css={releaseText}>RELEASE</div>
          <div css={releaseDateText}>{releaseDate}</div>
          <div className="addToCartButton" css={addToCartButton}>
            ADD TO CART
          </div>
        </div>
        {/* <WeissBackground /> */}
      </div>
    </div>
  )
}

const cardPadding = css`
  // flex: 0 0 auto;
  margin-top: 20px;
  position: relative;
`

const cardContainer = css`
  cursor: pointer;
  // border: solid 1px #e5e5e5;
  background-color: #fff;
  box-shadow: 0px 2px 8px 0px rgba(31, 32, 68, 0.16);

  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1), cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-duration: 300ms, 300ms, 300ms, 300ms;
  border-radius: 12px;
  position: relative;
  &:hover {
    // transform: scale(1.02);
    box-shadow: 0px 8px 32px 0px rgba(31, 32, 68, 0.16);
    // opacity: 0.85;
  }

  &:hover .cardBottom {
  }
`

const imgContainer = css`
  -webkit-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 130px;
  &:hover {
    transform: scale(1.05);
    // padding-bottom: 150px;
  }
`

const cardStatus = css`
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 15px;
  left: 0;
  letter-spacing: 1.5px;
  line-height: 40px;
  padding-left: 5px;
  padding-right: 5px;
  font-weight: 300;
  background-color: #0f346c;
  z-index: 1;
  color: #fff;
`

const imgStyles = css`
  padding-bottom: 60px;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1), cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-duration: 300ms, 300ms, 300ms, 300ms;

  &:hover {
    // transform:scale(1.1);
  }
`

const productTypeText = css`
  line-height:20px;
  font-size: 14px;

  max-width: 60%;
  text-align: left;
  position: relative;
  clear both;
  float: left;
  font-weight: 400;
  border-radius:5px;
  color: #9EABB9;
`

const preorderText = css`
  font-size: 15px;
  padding-top: 5px;
  clear: both;
  position: relative;
  float: left;
  font-weight: 400;
  max-width: 50%;
  text-align: left;
  line-height: 30px;

  color: #898b92;
`
const releaseText = css`
  font-size: 15px;
  clear: both;
  position: relative;
  float: left;
  font-weight: 400;
  max-width: 50%;
  text-align: left;
  line-height: 30px;

  color: #898b92;
`

const preorderDateText = css`
  padding-top: 5px;
  line-height: 30px;
  font-size: 18px;
  clear: right;
  position: relative;
  float: right;
  font-weight: 700;
  max-width: 50%;
  text-align: right;

  color: #303235;
`

const releaseDateText = css`
  clear: right;
  text-align: right;
  line-height: 30px;

  max-width: 50%;
  font-size: 18px;
  position: relative;
  float: right;
  font-weight: 700;
  color: #303235;
`

export default WeissProductCard
