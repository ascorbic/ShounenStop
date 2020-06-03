import React from 'react'
import { useStaticQuery, graphql, navigate } from 'gatsby'
import { css } from '@emotion/core'
import { Container, Row } from 'react-bootstrap'
import ContextConsumer from '../LayoutItems/CartContext'

import OrderSummary from './OrderSummary'
import CartProductList from './CartProductList'
import CheckoutProgress from '../Checkout/CheckoutProgress'

// asin,
//     name,
//     displayName,
//     producttype,
//     series,
//     color,
//     image,
//     pricings,
//     weight,
//     preorder,
//     release,
//     merchandise,

const getProduct = flatProduct => {
  return flatProduct.split('-')
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
          if (key !== 'updateCartQuantity' && key !== 'addQuantityToCart') {
            const cartQuantity = context[key]
            const pricingQuantity = Number(getProduct(key)[1])

            const asin = getProduct(key)[0]
            var productMetadata = {}
            productMetadata = edges.find(x => x.node.frontmatter.asin === asin)
              .node.frontmatter
            if (productData[asin] === undefined) {
              productData[asin] = {
                metadata: productMetadata,
                cartQuantities: {},
              }
            }
            const productPrice = productMetadata['pricings'].find(
              x => x.quantity === pricingQuantity
            ).price
            const subtotal = productPrice * cartQuantity
            totalPrice += subtotal
            totalItems += 1

            productData[asin].cartQuantities[pricingQuantity] = {
              quantity: cartQuantity,
              price: productPrice,
              subtotal: subtotal,
            }
          }
        })

        //make variable later
        const shippingData = {
          standardShipping: {
            name: 'Standard Shipping',
            price: 5,
            speed: '2-4 Weeks',
          },
        }

        const orderContext = {
          productData: { productData },
          totalItems: totalItems,
          subTotal: totalPrice,
          shippingInfo: { shippingData },
        }

        return (
          <Container fluid css={containerStyles}>
            <Row>
              <CheckoutProgress orderContext={orderContext} phase={1} />
            </Row>
            <Row>
              <CartProductList productData={productData} />
              {/* {pass subtotal and total price} */}
              <OrderSummary
                checkoutNavigate={() =>
                  navigate('/checkout', {
                    state: { orderContext },
                  })
                }
                orderContext={orderContext}
                subTotal={orderContext.subTotal}
                totalItems={orderContext.totalItems}
                shippingInfo={shippingData}
              />
            </Row>
          </Container>
        )
      }}
    </ContextConsumer>
  )
}

export default CartContainer

const containerStyles = css``

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
