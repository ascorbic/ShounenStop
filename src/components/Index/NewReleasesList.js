import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import { css } from '@emotion/core'
import Img from 'gatsby-image'

import WeissProductCard from '../Products/WeissProductCard'
import { Container } from 'react-bootstrap'

const NewReleasesList = () => {
  const data = useStaticQuery(query);
  return (
    <Container css={productsContainer}>
      <WeissProductCard imgData={data.DateALive.childImageSharp.fluid}></WeissProductCard>
      <WeissProductCard imgData={data.ReZero.childImageSharp.fluid}></WeissProductCard>
      <WeissProductCard imgData={data.DateALive.childImageSharp.fluid}></WeissProductCard>
    </Container>
  )
}


const productsContainer = css`
  width:100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding:0;
`

export const query = graphql`
  query {
    DateALive: file(relativePath: { eq: "DateALive.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality:100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ReZero: file(relativePath: { eq: "ReZero.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality:100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default NewReleasesList;