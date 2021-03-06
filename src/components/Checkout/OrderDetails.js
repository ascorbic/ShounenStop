import React from 'react'
import { css } from '@emotion/core'
import CartProduct from '../Cart/CartProduct'

const getProduct = flatProduct => {
  return flatProduct.split('|')
}

const OrderDetails = ({ productData }) => {
  return (
    <div css={orderContainer}>
      <div css={cartHeader}>Details</div>
      <div css={orderDetailsContainer}>
        {Object.keys(productData).map(key => {
          const cartProductData = productData[key]
          const imgData = cartProductData.metadata.image.childImageSharp.fluid
          const asin = cartProductData.metadata.asin
          var productName = ''
          if (cartProductData.metadata.merchandise === 'weiss') {
            productName = cartProductData.metadata.displayName
          } else if (cartProductData.metadata.merchandise === 'comiket') {
            productName =
              cartProductData.metadata.eventName +
              ' ' +
              cartProductData.metadata.producttype
          } else if (cartProductData.metadata.merchandise === 'other') {
            productName = cartProductData.metadata.name
          }
          const productType = cartProductData.metadata.producttype
          const primaryColor = cartProductData.metadata.color
          const price = cartProductData.price
          const url =
            '/products/' +
            cartProductData.metadata.merchandise +
            '/' +
            asin.toLowerCase() +
            '/'
          const releaseDate =
            cartProductData.metadata.release !== 'Invalid date'
              ? cartProductData.metadata.release
              : ''
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
