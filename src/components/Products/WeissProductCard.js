import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'

// price, primary color
const WeissProductCard = ({
  imgData,
  cardClassName,
  series,
  displayName,
  productType,
  preorderDate,
  releaseDate,
  price,
  lowPrice,
  color,
  url,
}) => {
  const cardBottom = css`
    color: #0f346c;
    font-family: varela round;
    border-top: solid 3px ${color};

    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    border-radius: 2px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;

    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);

    height: calc(10% + 155px);
    width: calc(100% - 20px);

    background-color: #fff;
    position: absolute;
    bottom: 10px;
    left: 10px;

    padding-top: 5px;
    padding-left: 10px;
    padding-right: 10px;

    opacity: 0.95;
  `

  const displayNameText = css`
    padding-top: 5px;

    color: ${color};
    position: relative;
    float: left;
    font-weight: 700;
    font-size: 19px;
    max-width: calc(75% - 31px);
    text-align: left;
    line-height: 20px;
    overflow: hidden;
    max-height: 65px;

    @media only screen and (max-width: 450px) {
      font-size: 17px;
    }
  `

  const addToCartButton = css`
    -webkit-transition: all 0.2s;
    -o-transition: all 0.2s;
    transition: all 0.2s;
    cursor: pointer;
    position: absolute;
    background-color: ${color};
    color: #fff;
    font-family: varela round;
    font-weight: 400;
    line-height: 35px;
    font-size: 18px;
    height: 35px;
    width: 95%;
    left: 2.5%;
    bottom: 10px;
    border-radius: 3px;
    border-top: solid 1px #e6e6ea;

    text-align: center;
    letter-spacing: 1.5px;
    &:hover {
      border: solid 1px ${color};
      background-color: #fff;
      color: ${color};
    }
  `

  const priceText = css`
    color: ${color};
    padding-top: 5px;
    position: relative;
    float: right;
    font-weight: 700;
    font-size: 23px;
    max-width: calc(25% + 31px);
    text-align: right;
    line-height: 16px;
    @media only screen and (max-width: 450px) {
      font-size: 20px;
    }
  `

  const lowPriceText = css`
    clear: right;
    float:right;
    color: #b4b9c4;
    font-size: 12px;
    font-weight: 400;
  `

  return (
    <div css={cardPadding} className={cardClassName}>
      <div css={cardStatus}>PREORDER</div>
      <Link to={url} className="link-no-style">
        <div css={cardContainer}>
          <div css={imgContainer}>
            <Img css={imgStyles} fluid={{ ...imgData, aspectRatio: 1 }} />
          </div>
          <div className="cardBottom" css={cardBottom}>
            <div css={displayNameText}>{displayName}</div>
            <div css={priceText}>{"US$ "+price}</div>
            {lowPrice && lowPrice.toFixed(0) != price && <div css={lowPriceText}>{"as low as $"+lowPrice.toFixed(0)}</div> }
            <div css={productTypeText}>{productType}</div>
            <div css={dateContainer}>
              <div css={preorderContainer}>
                <div css={preorderText}>PREORDER</div>
                <div css={preorderDateText}>{preorderDate}</div>
              </div>
              <div css={releaseContainer}>
                <div css={releaseText}>RELEASE</div>
                <div css={releaseDateText}>{releaseDate}</div>
              </div>
            </div>
            <div className="addToCartButton" css={addToCartButton}>
              ADD TO CART
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

const cardPadding = css`
  // flex: 0 0 auto;
  margin-top: 20px;
  position: relative;
`

const cardContainer = css`
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0px 2px 8px 0px rgba(31, 32, 68, 0.16);

  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1), cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-duration: 300ms, 300ms, 300ms, 300ms;
  border-radius: 12px;
  position: relative;
  &:hover {
    // transform: scale(1.02);
    box-shadow: 0px 8px 32px 0px rgba(31, 32, 68, 0.16);
    // opacity: 0.85;
  }

  &:hover .cardBottom {
  }
`

const imgContainer = css`
  -webkit-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 160px;
  &:hover {
    transform: scale(1.05);
    // padding-bottom: 150px;
  }
`

const cardStatus = css`
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 15px;
  left: 0;
  letter-spacing: 1.5px;
  line-height: 40px;
  padding-left: 5px;
  padding-right: 5px;
  font-weight: 300;
  background-color: #0f346c;
  z-index: 1;
  color: #fff;
`

const imgStyles = css`
  padding-bottom: 60px;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1), cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-duration: 300ms, 300ms, 300ms, 300ms;

  &:hover {
    // transform:scale(1.1);
  }
`

const productTypeText = css`
  line-height: 20px;
  font-size: 14px;

  max-width: 60%;
  text-align: left;
  position: relative;
  float: left;
  clear: left;
  font-weight: 400;
  border-radius: 5px;
  color: #b4b9c4;
`

const dateContainer = css`
  // border-top: solid 1px #e6e6ea;
  // padding-bottom:15px;
  margin-top: 15px;
  position: relative;
  width: 100%;
  display: inline-block;
`

const preorderContainer = css`
  text-align: center;

  float: left;
  width: 50%;
`

const preorderText = css`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;

  color: #b4b9c4;
`

const preorderDateText = css`
  line-height: 30px;
  font-size: 18px;
  font-weight: 700;

  color: #303235;
`

const releaseContainer = css`
  border-left: solid 1px #e6e6ea;
  text-align: center;

  float: right;
  width: 50%;
`

const releaseText = css`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;

  color: #b4bac5;
`

const releaseDateText = css`
  line-height: 30px;
  font-size: 18px;
  position: relative;
  font-weight: 700;
  color: #303235;
`

// holographic effect
// background-image: linear-gradient(
//   to right,
//   rgb(194, 255, 182),
//   rgb(255, 163, 182),
//   rgb(221, 169, 255),
//   rgb(162, 209, 255)
// );
// background-size: 200%;

export default WeissProductCard
