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
      <WeissProductCard 
        className="col-xl-4 col-lg-6 col-md-6 col-sm-11 col-12"
        series="DATE A LIVE 🇯🇵"
        productType="TRIAL DECK+"
        imgData={data.DateALiveDeck.childImageSharp.fluid}
        />
      <WeissProductCard
        className="col-xl-4 col-lg-6 col-md-6 col-sm-11 col-12"
        series="RE:ZERO 🇯🇵"
        productType="EXTRA BOOSTER"
        imgData={data.ReZero.childImageSharp.fluid}
        />
      <WeissProductCard
        className="col-xl-4 col-lg-6 col-md-6 col-sm-11 col-12"
        series="DATE A LIVE 🇯🇵"
        productType=""
        imgData={data.DateALiveCarton.childImageSharp.fluid}
        />
    </Container>
  )
}


const productsContainer = css`
  width:100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding:0;
`

export const query = graphql`
  query {
    DateALiveDeck: file(relativePath: { eq: "DateALive-deck.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality:100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    DateALiveCarton: file(relativePath: { eq: "DateALive-carton.png" }) {
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
    Madoka: file(relativePath: { eq: "Madoka.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality:100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default NewReleasesList;