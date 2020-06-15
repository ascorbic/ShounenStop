import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import BackgroundImage from 'gatsby-background-image'

const LandingImage = ({ landingImageData, landingText, landingSubtitle }) => {
  const imageData = landingImageData.childImageSharp.fluid
  return (
    <BackgroundImage
      css={landingStyles}
      fluid={imageData}
      backgroundColor={`#fefefe`}
    >
      <div css={landingSection}>
        <div css={landingTextStyles}>
          {landingText}
          <div css={lineBreakSm}></div>
          <span css={shippingText}>{landingSubtitle}</span>
        </div>
        <div css={lineBreakLg}></div>
        <Link to="/products">
          <div css={shopNow}>
            <span>SHOP NOW</span>
          </div>
        </Link>
      </div>
    </BackgroundImage>
  )
}

const landingStyles = css`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  opacity: 1 !important;
  height: 500px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.2), 0 1px 0 0 rgba(0, 0, 0, 0.2);
`

const landingTextStyles = css`
  width: 85%;
  font-size: 25px;
  color: #fff;
`

const shippingText = css`
  width: 80%;
  font-size: 20px;
  color: #f0f0f0;
`

const shopNow = css`
  font-size: 22px;
  letter-spacing: 2px;
  width: 180px;
  height: 80px;
  border: solid 1px #fff;
  display: flex;
  color: #fff;
  text-align: center;
  align-items: center;
  justify-content: center;

  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1), cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-duration: 300ms, 300ms, 300ms, 300ms;

  &:hover, &:active{
    font-size: 24px;
    background-color: #fff;
    color: #000;
    width: 190px;
    height: 90px;
  }
`

const landingSection = css`
  margin-top: 120px;
  max-width: 800px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
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

export default LandingImage
