import React from "react"
import Layout from "../components/LayoutItems/Layout"

import { useStaticQuery, graphql } from "gatsby"

import { css } from '@emotion/core'

import WeissProductCard from '../Components/Products/WeissProductCard'
import { Container } from 'react-bootstrap'

const ProductPage = ({ data }) => {
  const {
    name,
    asin,
    producttype,
    series,
    color,
    image,
    weight,
    preorder,
    release,
  } = data.markdownRemark.frontmatter;
  console.log(image);


  return (
    // <div>dsAdjasdjasojdisaojdsaj</div>

    <Layout pageInfo={{ pageName: "" }}>
      <WeissProductCard 
        className="col-xl-4 col-lg-6 col-md-6 col-sm-11 col-12"
        series="{DATE A LIVE} 🇯🇵"
        productType="TRIAL DECK+"
        preorderDate="Jun 5"
        releaseDate="Jul 10"
        price="$15"
        color="#000"
        imgData={image.childImageSharp.fluid}
        />
    </Layout>
  )
}

export default ProductPage;

export const ProductTemplateQuery = graphql`
query ProductPageQuery($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    frontmatter {
      name,
      asin,
      producttype,
      series,
      color,
      image {
        childImageSharp {
          fluid(maxWidth: 500, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      weight,
      preorder,
      release
    }
    html
  }
}
`;
