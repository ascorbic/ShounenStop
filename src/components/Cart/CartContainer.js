import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { css } from '@emotion/core'

import { Container } from 'react-bootstrap'
import ContextConsumer from '../LayoutItems/CartContext'

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

  console.log(edges)
  return (
    <ContextConsumer>
      {context => {
        var productData = {}

        Object.keys(context).map(key => {
          if (key !== 'updateCartQuantity' && key !== 'addQuantityToCart') {
            const cartQuantity = context[key]
            const pricingQuantity = Number(getProduct(key)[1])

            const asin = getProduct(key)[0]
            if (productData[asin] === undefined) {
              productData[asin] = {
                metadata: edges.find(x => x.node.frontmatter.asin === asin).node
                  .frontmatter,
                cartQuantities: {},
              }
            }
            productData[asin].cartQuantities[pricingQuantity] = cartQuantity

            // console.log(asin, pricingQuantity, cartQuantity)
          }
        })
        console.log(productData)
        return <Container></Container>
      }}
    </ContextConsumer>
  )
}

export default CartContainer

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
