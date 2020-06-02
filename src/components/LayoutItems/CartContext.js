import React from 'react'
import { toast } from 'react-toastify'
import Img from 'gatsby-image'
import { css } from '@emotion/core'

const productsKey = 'products'

const defaultContextValue = {
  updateCartQuantity: () => {},
  addQuantityToCart: () => {},
}

const getFlatProduct = (product, pricingQuantity) => {
  return product + '-' + pricingQuantity
}

const { Provider, Consumer } = React.createContext(defaultContextValue)

class CartContext extends React.Component {
  constructor() {
    super()

    this.updateCartQuantity = this.updateCartQuantity.bind(this)
    this.addQuantityToCart = this.addQuantityToCart.bind(this)
    this.notifyCartUpdate = this.notifyCartUpdate.bind(this)

    this.state = {
      ...defaultContextValue,
      updateCartQuantity: this.updateCartQuantity,
      addQuantityToCart: this.addQuantityToCart,
    }
  }

  componentDidMount() {
    this.setupCart()
    // this.updateCartQuantity('ASIN1', Math.floor(Math.random() * 10) + 1, 2)
  }

  setupCart() {
    if (localStorage.getItem(productsKey) === null) {
      const memProducts = {} //{ 'ASIN1-1': 1, 'ASIN1-2': 2, 'ASIN1-3': 0 }
      this.setState(memProducts, () => this.saveCart(this.state))
    } else {
      const memProducts = JSON.parse(localStorage.getItem(productsKey))
      this.setState(memProducts)
    }
  }

  addQuantityToCart(
    productAsin,
    productName,
    productType,
    imgData,
    pricingQuantity,
    cartQuantity
  ) {
    const flatProduct = getFlatProduct(productAsin, pricingQuantity)

    this.setState(
      prevState => {
        this.notifyCartUpdate(
          productName,
          productType,
          pricingQuantity,
          imgData
        )
        if (!prevState[flatProduct]) {
          return {
            [flatProduct]: cartQuantity,
          }
        }
        return {
          [flatProduct]: prevState[flatProduct] + cartQuantity,
        }
      },
      () => {
        this.saveCart(this.state)
      }
    )
  }

  updateCartQuantity(
    productAsin,
    productName,
    imgData,
    pricingQuantity,
    cartQuantity
  ) {
    const flatProduct = getFlatProduct(productAsin, pricingQuantity)
    this.setState(
      prevState => {
        return {
          [flatProduct]: cartQuantity,
        }
      },
      () => {
        this.saveCart(this.state)
      }
    )
  }

  saveCart(memProducts) {
    localStorage.setItem(productsKey, JSON.stringify(memProducts))
  }

  notifyCartUpdate = (productName, productType, pricingQuantity, imgData) => {
    toast(
      <div css={toastStyles}>
        <div css={imgContainer}>
          <Img css={imgStyles} fluid={imgData} />
        </div>
        <div css={toastText}>
          <div>Added to Cart</div>
          <div css={nameText}>{productName}</div>
          <div css={productTypeText}>
            {pricingQuantity > 1
              ? pricingQuantity.toString() + ' Pack of ' + productType +"(s)"
              : pricingQuantity.toString() + ' Pack of ' + productType}
          </div>
        </div>
      </div>,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
      }
    )
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>
  }
}

const toastStyles = css`
  padding-left: 15px;
  padding-right: 0px;
  position: relative;
  // width:100%;
`
const imgContainer = css`
  float: left;
  width: 100%;
  max-width: 80px;
  height: 100%;
`
const imgStyles = css`
  // height: 100%;
  // width:100%;
`
const toastText = css`
  text-align: center;
  margin-left: 10px;
  float: left;
  width: calc(100% - 90px);
  position: relative;
  font-size: 16px;
  font-weight: 600;
`
const nameText = css`
  // color: #b4b9c4;
  font-size: 14px;
  font-weight: 400;
`

const productTypeText = css`
  direction: ltr;
  // color: #b4b9c4;
  font-size: 14px;
  font-weight: 400;
`

export { Consumer as default, CartContext }
