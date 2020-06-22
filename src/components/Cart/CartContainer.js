import React from 'react'
import { useStaticQuery, graphql, navigate } from 'gatsby'
import { css } from '@emotion/core'
import { Container, Row } from 'react-bootstrap'
import ContextConsumer from '../LayoutItems/CartContext'

import OrderSummary from './OrderSummary'
import CartProductList from './CartProductList'
import CheckoutProgress from '../Checkout/CheckoutProgress'

const getProduct = flatProduct => {
  return flatProduct.split('|')
}

const CartContainer = ({}) => {
  const edges = useStaticQuery(query).products.edges

  return (
    <ContextConsumer>
      {context => {
        var productData = {}
        var totalPrice = 0
        var totalItems = 0
        Object.keys(context).map(key => {
          const cartQuantity = context[key]
          if (key !== 'updateCartQuantity' && key !== 'addQuantityToCart' && cartQuantity!==undefined) {
            const pricingQuantity = Number(getProduct(key)[1])

            const asin = getProduct(key)[0]
            var productMetadata = {}
            productMetadata = edges.find(x => x.node.frontmatter.asin === asin)
              .node.frontmatter

            const productPrice = productMetadata['pricings'].find(
              x => x.quantity === pricingQuantity
            ).price

            productData[key] = {
              metadata: productMetadata,
              price: productPrice,
              quantity: cartQuantity,
            }

            const subtotal = productPrice * cartQuantity
            totalPrice += Number(subtotal)
            totalItems += Number(cartQuantity)
          }
        })

        //make variable later
        const shippingData = {
          standardShipping: {
            name: 'Standard Shipping',
            price: 0,
            speed: '2-4 Weeks',
          },
        }

        const orderContext = {
          productData: productData,
          totalItems: totalItems,
          subTotal: totalPrice,
          totalPrice: (totalPrice+shippingData.standardShipping.price),
          shippingInfo: shippingData,
        }
        return (
          <div css={cartStyles}>
            <Container css={containerStyles} fluid>
              <Row>
                <CheckoutProgress orderContext={orderContext} phase={1} />
              </Row>
              <Row>
                <CartProductList
                  productData={productData}
                  updateCartQuantity={context.updateCartQuantity}
                />
                {/* {pass subtotal and total price} */}
                <OrderSummary
                  checkoutNavigate={() =>
                    navigate('/checkout', {
                      state: { orderContext },
                    })
                  }
                  fees={0}
                  orderContext={orderContext}
                  subTotal={orderContext.subTotal}
                  totalItems={orderContext.totalItems}
                  shippingInfo={orderContext.shippingInfo}
                  navigateMessage="Checkout"
                  disableButton={orderContext.totalItems===0}
                />
              </Row>
            </Container>
          </div>
        )
      }}
    </ContextConsumer>
  )
}

export default CartContainer

const cartStyles = css`
  min-height: calc(100vh - 120px);
  // background-color: #fff;
`

const containerStyles = css`
  padding-bottom: 30px;
`

export const query = graphql`
  query CartPageQuery {
    products: allMarkdownRemark(
      filter: { frontmatter: { merchandise: { ne: null } } }
    ) {
      edges {
        node {
          frontmatter {
            asin
            name
            displayName
            eventName
            producttype
            series
            color
            image {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            pricings {
              quantity
              price
            }
            weight
            preorder(formatString: "MMM DD")
            release(formatString: "MMM DD")
            merchandise
          }
        }
      }
    }
  }
`
