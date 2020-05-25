import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Image = (imgFile) => (
  <StaticQuery
    query={graphql`
      query {
        Anime: file(relativePath: { eq: "DateALive.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.Anime.childImageSharp.fluid} />}
  />
)
export default Image