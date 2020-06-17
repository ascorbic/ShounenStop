import React from 'react'
import { css } from '@emotion/core'
import { navigate } from 'gatsby'
import CartProduct from './CartProduct'
import CheckoutHeader from '../Checkout/CheckoutHeader'

const getProduct = flatProduct => {
  return flatProduct.split('_')
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
        {/* TODO: make no items in cart thing */}
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

const productListContainer = css`
  padding-left: 10px;
  padding-right: 10px;
`

export default CartProductList
