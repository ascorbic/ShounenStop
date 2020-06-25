import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'

import BackgroundImage from 'gatsby-background-image'

const ComiketBanner = () => {
  const { landingImage } = useStaticQuery(graphql`
    query {
      landingImage: file(relativePath: { eq: "comiket.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const imageData = landingImage.childImageSharp.fluid
  return (
    <BackgroundImage
      css={landingStyles}
      fluid={imageData}
      backgroundColor={`#fefefe`}
    >
      <div css={landingSection}>
        <div css={landingText}>
          COMIKET MERCHANDISE 
          <div css={lineBreakSm}></div>
          <span css={shippingText}>COMING SOON</span>
        </div>
      </div>
    </BackgroundImage>
  )
}

const landingStyles = css`
  margin-top:50px;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  opacity: 1 !important;
  height: 500px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 10px 0 rgba(0,0,0,0.2),0 1px 0 0 rgba(0,0,0,0.2);
  margin-bottom:50px;
`

const landingText = css`
  width: 100%;
  font-size: 25px;
  color: #fff;
`

const shippingText = css`
  width: 80%;
  font-size: 20px;
  color: #f0f0f0;
`

const landingSection = css`
  max-width: 800px;
  display: flex;
  justify-content: center;
`

const lineBreakLg = css`
  height: 50px;
  width: 100%;
`

const lineBreakSm = css`
  height: 10px;
  width: 100%;
`


export default ComiketBanner
