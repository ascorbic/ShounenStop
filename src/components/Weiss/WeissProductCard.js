import React, { useState } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import ContextConsumer from '../LayoutItems/CartContext'

const WeissProductCard = ({
  imgData,
  displayName,
  asin,
  color,
  productType,
  preorder,
  lowPrice,
  url,
}) => {
  const productTypeText = css`
    padding-top: 3px;
    font-size: 14px;
    color: #b4b9c4;
    width: 65%;

    float: left;
    clear: left;
    max-height:50px;

    overflow:hidden;
    // text-overflow: ellipsis;
    @media only screen and (max-width: 450px) {
      padding-top: 2px;
      font-size: 13px;
    }
  `

  const priceText = css`
    position: relative;
    font-weight: 400;
    color: ${color};
    float: right;
    font-size: 18px;
    text-align: right;
    width: 35%;

    @media only screen and (max-width: 768px) {
      padding-top: 2px;
      font-size: 15px;
    }
    @media only screen and (max-width: 450px) {
      padding-top: 2px;
      font-size: 11px;
    }
  `

  const nameText = css`
    position: relative;
    font-size: 20px;

    font-weight: 700;
    color: ${color};
    width: 65%;
    float: left;
    text-overflow: ellipsis;
    white-space: nowrap; 
    overflow: hidden;  
    @media only screen and (max-width: 450px) {
      padding-top: 2px;
      font-size: 13px;
    }
  `

  const cardBottom = css`
    display: inline-block;
    font-family: varela round;
    position: relative;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    border: none;
    width: 100%;
    height: 100px;
    position: absolute;
    bottom: 10px;
    left: 7px;
    background-color: #fff;
    border-top: solid 3px ${color};

    width: calc(100% - 14px);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    opacity: 0.95;

    padding-top: 5px;
    padding-left: 10px;
    padding-right: 10px;
    @media only screen and (max-width: 450px) {
      height: 80px;
    }
  `

  return (
    <ContextConsumer>
      {({ addQuantityToCart }) => (
        <div css={cardPadding} className="row-card">
          <div css={cardStatus}>{preorder !== null ? preorder : ''}</div>
          <div css={cardContainer}>
            <Link to={url} className="link-no-style">
              <div css={imgContainer}>
                <Img css={imgStyles} fluid={{ ...imgData, aspectRatio: 1 }} />
              </div>
            </Link>
            <div css={cardBottom}>
              <div css={nameText}>{displayName}</div>
              <div css={priceText}>{'From $' + lowPrice.toFixed(2)}</div>
              <div css={productTypeText}>{productType}</div>
            </div>
          </div>
        </div>
      )}
    </ContextConsumer>
  )
}

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

const imgContainer = css`
  position: relative;
  width: 100%;
  cursor: pointer;
  padding-bottom: 85px;
`

const imgStyles = css`
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1), cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-duration: 300ms, 300ms, 300ms, 300ms;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;

  &:hover {
    transform: scale(1.03);
  }
  
`

const cardStatus = css`
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 15px;
  left: 0;
  font-size: 14px;
  letter-spacing: 1.5px;
  line-height: 30px;
  padding-left: 5px;
  padding-right: 5px;
  font-weight: 300;
  background-color: #0f346c;
  z-index: 1;
  color: #fff;
`

export default WeissProductCard
