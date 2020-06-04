import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import CartProduct from './CartProduct'

const getProduct = flatProduct => {
  return flatProduct.split('-')
}

const CartProductList = ({ productData, updateCartQuantity }) => {
  // console.log(productData)

  return (
    <>
      <div
        css={productListContainer}
        className="col-xl-9 col-lg-8 col-md-12 col-sm-12 col-xs-12"
      >
        <div css={cartHeader}>Your Cart</div>
        <div css={cartDivider}></div>
        {Object.keys(productData).map(key => (
          <CartProduct
            key={key}
            pricingQuantity={getProduct(key)[1]}
            cartProductData={productData[key]}
            updateCartQuantity={updateCartQuantity}
          />
        ))}
      </div>
    </>
  )
}

const cartHeader = css`
  color: #0f346c;
  font-size: 26px;
  width: 100%;
  font-family: varela round;
`

const cartDivider = css`
  height: 1px;
  width: 100%;
  background-color: #a1bce6;
`

const productListContainer = css``

export default CartProductList
