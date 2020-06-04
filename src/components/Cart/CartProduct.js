import React, { useState } from 'react'
import Img from 'gatsby-image'
import { css } from '@emotion/core'

const CartProduct = ({
  pricingQuantity,
  cartProductData,
  updateCartQuantity,
}) => {
  const imgData = cartProductData.metadata.image.childImageSharp.fluid
  const asin = cartProductData.metadata.asin
  const productName = cartProductData.metadata.displayName + ' 🇯🇵'
  const productType = cartProductData.metadata.producttype
  const primaryColor = cartProductData.metadata.color
  const price = cartProductData.price

  const [cartQuantity, setCartQuantity] = useState(cartProductData.quantity)

  const productItemStyle = css`
    padding: 10px;
    background-color: #fff;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 9px;
    // border:solid 1px ${primaryColor};
    box-shadow: rgba(31, 32, 68, 0.16) 0px 2px 8px 0px;
    // border-left: solid 1px ${primaryColor};
    width: 100%;
    display: inline-flex;
    flex-wrap: nowrap;
  `

  const imgStyles = css`
    max-height: 100%;
  `

  return (
    <div css={productItemStyle} className="productListItem">
      <div css={imgContainer}>
        <Img
          css={imgStyles}
          imgStyle={{ objectFit: 'contain' }}
          fluid={imgData}
        />
      </div>
      <div css={productTypeContainer}>
        <div css={productNameStyles}>{productName}</div>
        <div>{productType}</div>
        <div>
          {pricingQuantity > 1
            ? 'Set of ' + pricingQuantity.toString() + ' - $' + price
            : 'Single - $' + price}
        </div>
      </div>
      <div css={quantityChangerContainer}>
        <div
          onClick={e => {
            var newCartQuantity = Number(cartQuantity) + 1
            if (newCartQuantity < 10) {
              updateCartQuantity(asin, pricingQuantity, newCartQuantity)
              setCartQuantity(Number(newCartQuantity))
            }
          }}
          css={addQuantity}
        >
          +
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
          css={subQuantity}
        >
          -
        </div>
      </div>
      <div></div>
      {/* {cartProductData['cartQuantities'][1]['quantity']} */}
    </div>
  )
}

const productTypeContainer = css`
  padding-left: 20px;
  color: #      <div css={quantityChangerContainer}>
  ;
  flex-grow: fill;
`

const productNameStyles = css`
  font-size: 20px;
`

const addQuantity = css`
  width: 100%;
  font-size: 20px;
  cursor: pointer;
  border-bottom:solid 1px #fefefe;
`

const inputQuantity = css`
  border: none;
  text-align: center;
  width: 100%;
  font-size: 20px;
`

const subQuantity = css`
  width: 100%;
  font-size: 20px;
  cursor: pointer;
  border-top:solid 1px #fefefe;

`

const quantityChangerContainer = css`
  font-family: varela round;
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  margin-left: auto;
  height: 100px;
  width: 50px;
  color: #0f346c;
  background-color: #fefefe;
`

const imgContainer = css`
  width: 100px;
  height: 100px;
  // max-width:150px;
`

export default CartProduct
