import React from 'react'
import { Link, navigate } from 'gatsby'
import { css } from '@emotion/core'
import CartProduct from '../Cart/CartProduct'

const getProduct = flatProduct => {
  return flatProduct.split('|')
}

const OrderDetails = ({ productData }) => {
  return (
    <div css={orderContainer}>
      <div css={cartHeader}>Order Details</div>
      <div css={orderDetailsContainer}>
        {Object.keys(productData).map(key => {
          const cartProductData = productData[key]
          console.log(cartProductData)
          const imgData = cartProductData.metadata.image.childImageSharp.fluid
          const asin = cartProductData.metadata.asin
          const productName =
            cartProductData.metadata.displayName !== null
              ? cartProductData.metadata.displayName
              : cartProductData.metadata.eventName +
                ' ' +
                cartProductData.metadata.producttype
          const productType = cartProductData.metadata.producttype
          const primaryColor = cartProductData.metadata.color
          const price = cartProductData.price
          const url =
            '/products/' +
            cartProductData.metadata.merchandise +
            '/' +
            asin.toLowerCase() +
            '/'
          const releaseDate = cartProductData.metadata.release
          const initialCartQuantity = cartProductData.quantity
          return (
            <CartProduct
              key={key}
              pricingQuantity={getProduct(key)[1]}
              imgData={imgData}
              asin={asin}
              productName={productName}
              productType={productType}
              primaryColor={primaryColor}
              price={price}
              url={url}
              releaseDate={releaseDate}
              initialCartQuantity={initialCartQuantity}
            />
          )
        })}
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
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 12px;
  font-size: 15px;
  background-color: #fff;
`
const orderDetailsContainer = css`
  position: relative;
  width: 100%;
  margin-top: 10px;
`

const cartHeader = css`
  font-family: varela round;
  font-weight: 700;
  color: #0f346c;
  padding-top: 5px;
  font-size: 24px;
`

export default OrderDetails
