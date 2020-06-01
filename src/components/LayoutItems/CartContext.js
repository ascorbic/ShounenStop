import React from 'react'

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

  addQuantityToCart(product, pricingQuantity, cartQuantity) {
    const flatProduct = getFlatProduct(product, pricingQuantity)
    console.log(flatProduct)

    this.setState(
      prevState => {
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

  updateCartQuantity(product, pricingQuantity, cartQuantity) {
    const flatProduct = getFlatProduct(product, pricingQuantity)
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
    console.log(memProducts)
    localStorage.setItem(productsKey, JSON.stringify(memProducts))
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>
  }
}

export { Consumer as default, CartContext }
