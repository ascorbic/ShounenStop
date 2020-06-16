import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { css } from '@emotion/core'
import BackgroundImage from 'gatsby-background-image'

const ProductCategoryHeader = ({ selectedProductCategory }) => {
  const productCategories = useStaticQuery(
    query
  ).productCategories.edges.sort((a, b) =>
    a.node.frontmatter.order < b.node.frontmatter.order ? -1 : 1
  )
  return (
    <div css={productCategoryHeaderContainer}>
      {productCategories.map(edge => (
        <div
          css={productCategoryContainer}
          className={
            selectedProductCategory === edge.node.frontmatter.productCategory
              ? 'selectedProductCategoryCard col-sm col-12'
              : 'col-sm col-12'
          }
          key={edge.node.frontmatter.productCategory}
        >
          <Link
            to={
              '/products/' + edge.node.frontmatter.productCategory.toLowerCase()
            }
          >
            <BackgroundImage
              css={imgStyles}
              className={
                selectedProductCategory ===
                edge.node.frontmatter.productCategory
                  ? 'selectedProductCategory'
                  : ''
              }
              fluid={edge.node.frontmatter.image.childImageSharp.fluid}
              backgroundColor={`#fefefe`}
            >
              {edge.node.frontmatter.productCategory}
            </BackgroundImage>
          </Link>
        </div>
      ))}
    </div>
  )
}

const productCategoryContainer = css`
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 0 0 rgba(0, 0, 0, 0.2);
  padding: 0;
  border-radius: 30px;
`

const productCategoryHeaderContainer = css`
  display: flex;
  flex-wrap: wrap;
`

const imgStyles = css`
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1), cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-duration: 300ms, 300ms, 300ms, 300ms;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  opacity: 1 !important;
  height: 200px;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  color: #bbb;

  &:hover,
  &:active {
    color: #fff;

    box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.3), 0 1px 0 0 rgba(0, 0, 0, 0.3);
    background-color: rgba(0, 0, 0, 0.3) !important;
  }

  @media only screen and (max-width: 992px) {
    height: 150px;
  }

  @media only screen and (max-width: 768px) {
    height: 120px;
  }

  @media only screen and (max-width: 576px) {
    height: 80px;
  }

  @media only screen and (max-width: 350px) {
    height: 50px;
  }
`

const ProductCategoryText = css``

export default ProductCategoryHeader

export const query = graphql`
  query ProductCategoryHeaderQuery {
    productCategories: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/productCategories/" } }
    ) {
      edges {
        node {
          frontmatter {
            order
            productCategory
            image {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
