import React, { useState } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'

const CartProduct = ({
  pricingQuantity,
  imgData,
  asin,
  productName,
  productType,
  primaryColor,
  price,
  url,
  releaseDate,
  initialCartQuantity,
  updateCartQuantity,
}) => {
  console.log(url)
  const [cartQuantity, setCartQuantity] = useState(initialCartQuantity)

  const productItemStyle = css`
    padding: 10px;
    background-color: #fff;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 9px;
    // border:solid 1px ${primaryColor};
    box-shadow: rgba(31, 32, 68, 0.16) 0px 2px 8px 0px;
    // border-left: solid 1px ${primaryColor};
    display: inline-flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    width:100%;
    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1), cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1);
    transition-duration: 300ms, 300ms, 300ms, 300ms;
    &:hover{
      box-shadow:0px 8px 32px 0px rgba(31,32,68,0.16);
    }
  `

  const productNameStyles = css`
    color: ${primaryColor};
    font-size: 20px;
    width: 100%;
    @media only screen and (max-width: 400px) {
      font-size: 16px !important;
    }
  `

  const imgStyles = css`
    max-height: 100%;
  `

  return (
    <div css={productItemWrapper}>
      <div css={releaseStatus}>{releaseDate}</div>

      <div
        css={productItemStyle}
        className={
          updateCartQuantity === undefined
            ? 'productListItem productItemContained'
            : 'productListItem'
        }
      >
        <Link to={url} css={linkContainer}>
          <div css={imgContainer}>
            <Img
              css={imgStyles}
              imgStyle={{ objectFit: 'contain' }}
              fluid={imgData}
            />
          </div>
        </Link>
        <div css={productContainer}>
          <div css={productNameStyles}>{productName}</div>
          <div css={productTypeText}>{productType}</div>
          <div css={pricingQuantityText}>
            {pricingQuantity > 1
              ? 'Set of ' + pricingQuantity.toString() + ' - $' + price
              : 'Single - $' + price}
          </div>
        </div>
        {updateCartQuantity !== undefined ? (
          <div css={quantityChangerContainer}>
            <div
              onClick={e => {
                var newCartQuantity = Number(cartQuantity) + 1
                if (newCartQuantity < 10) {
                  updateCartQuantity(asin, pricingQuantity, newCartQuantity)
                  setCartQuantity(Number(newCartQuantity))
                }
              }}
              css={changeQuantity}
            >
              <svg viewBox="-50 -100 200 200">
                <path
                  id="arrow-line"
                  strokeWidth="4"
                  fill="none"
                  stroke="#6a6d75"
                  d="M0,0 L20,-20 C40,-40 40,-40 60,-20 L80,0"
                />
              </svg>
            </div>
            <input
              type="text"
              css={inputQuantity}
              maxLength="1"
              onChange={_ => {}}
              onInput={e => {
                const value = e.target.value.replace(/[^0-9]/g, '')
                if (typeof Number(value) === 'number') {
                  // updateCartQuantity(asin, pricingQuantity, value)
                  setCartQuantity(value)
                }
              }}
              onBlur={() => {
                updateCartQuantity(asin, pricingQuantity, cartQuantity)
                setCartQuantity(Number(cartQuantity))
              }}
              value={cartQuantity}
            ></input>
            <div
              onClick={e => {
                var newCartQuantity = Number(cartQuantity) - 1
                if (newCartQuantity >= 0) {
                  updateCartQuantity(asin, pricingQuantity, newCartQuantity)
                  setCartQuantity(Number(newCartQuantity))
                }
              }}
              css={changeQuantity}
            >
              <svg viewBox="-50 -100 200 200">
                <path
                  id="arrow-line"
                  strokeWidth="4"
                  fill="none"
                  stroke="#6a6d75"
                  d="M0,0 L20,20 C40,40 40,40 60,20 L80,0"
                />
              </svg>
            </div>
          </div>
        ) : (
          <div css={orderQuantityContainer}>
            <div css={orderQuantity}>{cartQuantity}</div>
          </div>
        )}
        <div css={subtotalContainer}>
          {updateCartQuantity !== undefined && (
            <div
              onClick={e => {
                updateCartQuantity(asin, pricingQuantity, 0)
              }}
              css={removeItem}
            >
              x
            </div>
          )}
          <div css={subtotalStyles}>{'$' + (price * cartQuantity).toFixed(2)}</div>
        </div>
      </div>
    </div>
  )
}

const productItemWrapper = css`
  position: relative;
`

const releaseStatus = css`
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 3px;
  left: 0;
  font-size: 15px;
  letter-spacing: 1.5px;
  line-height: 35px;
  padding-left: 5px;
  padding-right: 5px;
  font-weight: 300;
  background-color: #0f346c;
  z-index: 1;
  color: #fff;
`

const productContainer = css`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  color: #151515;
  max-width: 250px;
`

const pricingQuantityText = css`
  color: #6a6d75;
  width: 100%;
  @media only screen and (max-width: 400px) {
    font-size: 14px !important;
  }
`

const productTypeText = css`
  color: #6a6d75;
  width: 100% @media only screen and (max-width: 400px) {
    font-size: 14px !important;
  }
`

const removeItem = css`
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1), cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-duration: 300ms, 300ms, 300ms, 300ms;
  cursor: pointer;
  color: #800000;
  margin-top: -2px;
  align-self: center;
  font-size: 20px;
  user-select: none;
  &:active {
    transition: none;
    background-color: #efefef;
  }

  @media only screen and (max-width: 350px) {
    font-size: 15px;
    position: absolute;
    top: 16px;
    right: 8px;
  }

  &:hover {
    transform: scale(1.3);
  }
`

const subtotalStyles = css`
  margin-top:-1px;
  color: #151515;
  align-self: center;
  font-weight: 700;
  font-size: 18px;
  @media only screen and (max-width: 350px) {
    font-size: 14px;
    margin-left:5px;
    margin-right: -15px;
  }
`

const orderQuantity = css`
  font-size: 20px;
  @media only screen and (max-width: 350px) {
    font-size: 14px !important;
  }
`

const orderQuantityContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const inputQuantity = css`
  border: none;
  outline: none;
  user-select: none;
  text-align: center;
  width: 100%;
  font-size: 20px;
  @media only screen and (max-width: 350px) {
    font-size: 14px !important;
  }

  &:focus {
    user-select: all;
  }
`

const changeQuantity = css`
  width: 100%;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1), cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-duration: 300ms, 300ms, 300ms, 300ms;
  cursor: pointer;

  & svg {
    width: 30px;
  }

  &:active {
    transition: none;
    background-color: #efefef;
  }

  @media only screen and (max-width: 350px) {
    transform: scale(1.5);
  }
`

const subtotalContainer = css`
  flex-direction: row-reverse;
  font-family: varela round;
  justify-content: space-around;
  flex-wrap: wrap;
  display: flex;
  width: 90%;
  max-width: 120px;

  text-align: right;
  @media only screen and (max-width: 350px) {
    flex-direction: column;
    width: 41px;
    justify-content: space-around;
    align-items: flex-start;
  }
`

const quantityChangerContainer = css`
  font-family: varela round;
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  width: 50px;
  color: #0f346c;
  padding-left: 5px;
  // margin-right: 10px;

  background-color: #fefefe;
  @media only screen and (max-width: 350px) {
    width: 30px;
    margin-right: 3px;
  }
`

const imgContainer = css`
  width: 100px;

  @media only screen and (max-width: 350px) {
    width: 80px;
  }
`

const linkContainer = css`
  display: flex;
  align-self: flex-end;
`

export default CartProduct
