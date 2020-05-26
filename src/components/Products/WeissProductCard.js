import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'

import WeissBackground from './WeissBackground'

//preorder date, release date, price
const WeissProductCard = ({ imgData, className, series, productType }) => {
  return (
    <div css={cardPadding} className={className}>
      <div css={cardStatus}>PREORDER</div>
      <div css={cardContainer}>
        <div css={imgContainer}>
          <Img css={imgStyles} fluid={{ ...imgData, aspectRatio: 1 }} />
        </div>
        <div className="cardBottom" css={cardBottom}>
          <div css={seriesText}>{series}</div>
          <div css={productTypeText}>{productType}</div>
        </div>
        <WeissBackground />
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

  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  border-radius: 12px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  position: relative;
  &:hover {
    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1),
      cubic-bezier(0.645, 0.045, 0.355, 1), cubic-bezier(0.645, 0.045, 0.355, 1),
      cubic-bezier(0.645, 0.045, 0.355, 1);
    transition-duration: 450ms, 450ms, 450ms, 450ms;
    transform: scale(1.04);
    box-shadow: 0px 8px 32px 0px rgba(31, 32, 68, 0.16);
    opacity: 0.85;
  }

  &:hover .cardBottom {
    // height:20px;
    // opacity:.9;
  }
`

const imgContainer = css`
  -webkit-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  &:hover {
    // padding-top:20px;
    // padding-left:40px;
    // padding-right:40px;
    // filter: grayscale(0%) blur(0px);
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
  padding-bottom: 120px;
`

const productTypeText = css`
  position: relative;
  float: right;
  font-weight: 400;
`

const seriesText = css`
  position: relative;
  float: left;
  font-weight: 700;
`

const cardBottom = css`
  color: #0f346c;
  border-top: solid 3px #0f346c;

  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  border-radius: 2px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);

  height: calc(10% + 80px);
  width: calc(100% - 20px);
  // filter: brightness(60%);

  background-color: #fff;
  position: absolute;
  bottom: 10px;
  left: 10px;

  padding-top: 5px;
  padding-left: 10px;
  padding-right: 10px;

  opacity: 0.95;
`

export default WeissProductCard
