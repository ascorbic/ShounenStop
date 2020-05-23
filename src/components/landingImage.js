import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { css } from '@emotion/core'
import BackgroundImage from 'gatsby-background-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const LandingImage = () => {
  const { landingImage } = useStaticQuery(graphql`
    query {
      landingImage: file(relativePath: { eq: "sao.jpg" }) {
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
      // objectFit="fit"
      backgroundColor={`#fefefe`}
    >
      <div css={landingSection}>
        <div css={landingText}>Weiss Boxes and Comiket Merchandise</div>
        <div css={lineBreak}></div>
        <Link to="/shop">
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
  opacity:1 !important;
  height: 500px;
  display: flex;
  text-align:center;
  align-items: center;
  justify-content: center;
`

const landingText = css`
  width:100%;
  font-size:25px;
  color:#fff;
`;

const shopNow = css`
  font-size:22px;
  letter-spacing:2px;
  width:180px;
  height:80px;
  border:solid 1px #fff;
  display: flex;
  color:#fff;
  text-align:center;
  align-items: center;
  justify-content: center;

  &:hover{
    background-color:#fff;
    color:#000;
    -webkit-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
  }
`;

const landingSection = css`
  margin-top: 120px;
  max-width: 800px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`

const lineBreak = css`
  height:50px;
  width:100%;
`;

export default LandingImage
