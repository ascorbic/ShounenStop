import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import CartProduct from './CartProduct'

const CartProductList = ({ productData }) => {
  // console.log(productData)

  // const

  return (
    <>
      <div css={omg} className="col-xl-9 col-lg-8 col-md-8 col-sm-7 col-xs-12">
      <div css={cartHeader}>Your Cart</div>
        {Object.keys(productData).map(key => (
          <CartProduct key={key} cartProductData={productData[key]} />
        ))}
      </div>
    </>
  )
}

const cartHeader = css`
  font-size: 26px;
  font-family:varela round;
`

const omg = css`
  height: 500px;
`

export default CartProductList
