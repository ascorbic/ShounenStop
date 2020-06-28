import React from 'react'
import { css } from '@emotion/core'
import { Container } from 'react-bootstrap'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import ProductPageContainer from '../Products/ProductPageContainer'
import ContextConsumer from '../LayoutItems/CartContext'

const OtherProductPageContainer = ({
  imgData,
  asin,
  series,
  name,
  description,
  productType,
  price,
  shippingFrom,
  ebayLink,
  url,
}) => {
  const ebayImageData = useStaticQuery(query).ebayImage.childImageSharp.fixed

  return (
    <ContextConsumer>
      {context => {
        return (
          <Container css={productPageContainer} fluid>
            <ProductPageContainer selectedProductCategory="Other">
              <div css={productPageWrapper}>
                <div className="row" css={productContentContainer}>
                  <div
                    css={productImageContainer}
                    className="col-xl-6 col-lg-5 col-md-6 col-sm-12 col-12"
                  >
                    <a href={ebayLink} target="_blank" css={ebayImgWrapper}>
                      <Img css={ebayImgStyles} fixed={ebayImageData} />
                    </a>
                    <div className="img-zoom" css={imgContainer}>
                      <Img css={imgStyles} fluid={imgData} />
                    </div>
                  </div>
                  <div
                    css={productInformationWrapper}
                    className="col-xl-6 col-lg-3 col-md-4 col-sm-12 col-12"
                  >
                    <div css={productInformationContainer}>
                      <div css={productTypeText}>{'Single ' + productType}</div>
                      <div css={productTypeContainer}>{name}</div>
                      <div css={seriesContainer}>{series}</div>
                      <div css={priceText}>{'$' + price}</div>
                      <div
                        onClick={() => {
                          context.addQuantityToCart(
                            asin,
                            name,
                            productType,
                            imgData,
                            1,
                            1
                          )
                        }}
                        className="addToCartButton"
                        css={addToCartButton}
                      >
                        ADD TO CART
                      </div>
                      <div css={productInfoContainer}>
                        <div css={productInfoHeader}>Product Information</div>
                        <div css={infoRow}>
                          <div css={infoLeft}>Ships From</div>
                          <div css={infoRight}>{shippingFrom}</div>
                        </div>
                        <div css={infoRow}>
                          <div css={infoLeft}>Also Listed On</div>
                          <a
                            href={ebayLink}
                            target="_blank"
                            css={infoRightLink}
                          >
                            Ebay
                          </a>
                        </div>
                        {description !== null ? (
                          <div css={infoRow}>
                            <div css={infoLeft}>Description</div>
                            <div css={infoRight}>{description}</div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ProductPageContainer>
          </Container>
        )
      }}
    </ContextConsumer>
  )
}

export default OtherProductPageContainer

const infoRow = css`
  clear: both;
`

const infoLeft = css`
  float: left;
  font-weight: 700;
  color: #444;
`

const infoRightLink = css`
  float: right;
  color: #0f346c;
`

const infoRight = css`
  float: right;
`

const productInfoContainer = css`
  font-family: varela round;

  width: 100%;
`

const productPageWrapper = css`
  width: 100%;
  display: flex;
  justify-content: center;
`

const seriesContainer = css`
  font-size: 18px;
`

const productInformationContainer = css``

const productInformationWrapper = css`
  margin-top: 40px;
  max-width: 400px;
`

const productImageContainer = css`
  display: flex;
  align-self: flex-start;
  justify-content: center;
  margin-top: 40px;
  position: relative;

  position: sticky;
  top: 80px;
  @media (max-width: 768px) {
    position: relative;
    top: 0;
  }
`

const imgStyles = css``

const ebayImgWrapper = css`
  position: absolute;
  width: 60px;
  height: 60px;
  top: 0px;
  left: 0;
  z-index: 1;
  &:hover {
    transform: scale(1.03);
  }
`

const ebayImgStyles = css``

const productContentContainer = css`
  width: 100%;
  margin-top: 35px;
  padding-bottom: 50px;
  margin-left: 25px;
  margin-right: 25px;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  justify-content: center;
  max-width: 1140px;
  box-shadow: 0px 2px 8px 0px rgba(31, 32, 68, 0.16);
  background-color: #fff;
  border-radius: 12px;
`
const productPageContainer = css`
  margin-top: 20px;
  margin-bottom: 0px;
  padding-right: 0;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const imgContainer = css`
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1), cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-duration: 300ms, 300ms, 300ms, 300ms;
  width: 100%;
  cursor: pointer;
  max-width: 500px;
  padding: 0;
  background-color: #fff;
  border-radius: 8px;
  &:hover {
    transform: scale(1.03);
  }
`

const productTypeText = css`
  font-family: varela round;
  font-size: 20px;
  color: #0f346c;
  padding-top: 10px;
`

const productTypeContainer = css`
  font-family: varela round;
  font-size: 30px;
  color: #151515;
`

const addToCartButton = css`
  -webkit-transition: all 0.2s;
  -o-transition: all 0.2s;
  transition: all 0.2s;
  cursor: pointer;
  margin-top: 20px;
  border: solid 1px #0f346c;
  background-color: #0f346c;
  color: rgba(255, 255, 255, 0.75);
  font-family: varela round;
  font-weight: 400;
  line-height: 45px;
  font-size: 16px;
  height: 45px;
  width: 100%;
  border-radius: 3px;
  user-select: none;
  text-align: center;
  letter-spacing: 1.5px;
  &:hover {
    color: rgba(255, 255, 255, 1);
    letter-spacing: 2px;
  }

  &:active {
    color: #0f346c;
  }
`

const priceText = css`
  font-family: varela round;
  font-size: 30px;
  color: #0f346c;
  height: 70px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`

const productInfoHeader = css`
  padding-top: 30px;
  font-family: varela round;
  color: #0f346c;
  font-size: 25px;
  width: 100%;
  font-weight: 700;
`

export const query = graphql`
  query {
    ebayImage: file(relativePath: { eq: "ebayLogo.png" }) {
      childImageSharp {
        fixed(width: 60, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
