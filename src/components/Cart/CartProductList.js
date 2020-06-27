import React from 'react'
import { css } from '@emotion/core'
import { navigate } from 'gatsby'
import CartProduct from './CartProduct'
import CheckoutHeader from '../Checkout/CheckoutHeader'

const getProduct = flatProduct => {
  return flatProduct.split('|')
}

const CartProductList = ({ productData, updateCartQuantity }) => {
  return (
    <>
      <div
        css={productListContainer}
        className="col-xl-8 col-lg-7 col-md-12 col-sm-12 col-xs-12"
      >
        <CheckoutHeader
          header="Your Cart"
          headerNavigate={() => navigate('/')}
        />
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
            asin.toLowerCase() 
            +
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
              updateCartQuantity={updateCartQuantity}
            />
          )
        })}
      </div>
    </>
  )
}

const productListContainer = css`
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom:10px;
`

export default CartProductList
