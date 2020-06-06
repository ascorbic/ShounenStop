import React from 'react'
import { Link, navigate } from 'gatsby'
import { css } from '@emotion/core'
import CartProduct from '../Cart/CartProduct'

const getProduct = flatProduct => {
  return flatProduct.split('-')
}

const OrderDetails = ({
  productData
}) => {

  return (

      <div css={orderContainer}>
        <div css={cartHeader}>Order Details</div>
        <div css={orderDetailsContainer}>
        {Object.keys(productData).map(key => (
          <CartProduct
            key={key}
            pricingQuantity={getProduct(key)[1]}
            cartProductData={productData[key]}
          />
        ))}
        </div>
      </div>
  )
}

const orderContainer = css`
  box-shadow: rgba(31, 32, 68, 0.16) 0px 2px 8px 0px;
  // height: 500px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  margin-top:20px;
  margin-bottom:20px;
  border-radius: 12px;
  font-size: 15px;
  background-color: #fff;
`
const orderDetailsContainer = css`
  position: relative;
  width: 100%;
`

const cartHeader = css`
  font-family: varela round;
  font-weight: 700;
  color: #0f346c;
  padding-top: 5px;
  font-size: 24px;
`

export default OrderDetails
