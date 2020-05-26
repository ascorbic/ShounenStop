import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import { css } from '@emotion/core'

const WeissBackground = () =>
{
  const { Weiss } = useStaticQuery(graphql`
    query {
      Weiss: file(relativePath: { eq: "weiss-background.png" }) {
        childImageSharp {
          fluid(maxWidth:913, quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return(
    <Img
      css={imgStyles}
      fluid={Weiss.childImageSharp.fluid} 
      />
  );
}


const imgStyles = css `
  // width:100%;
  // height:200px;
  position:absolute;
  bottom:-10px;;
  left:0;
  z-index:2000;
`;

export default WeissBackground;