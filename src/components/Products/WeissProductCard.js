import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'



const WeissProductCard = ({imgData, title, className}) =>
{
  return(
    <div css={cardPadding} className={className}>
      <div css={cardContainer}>
        <div css={imgContainer}>
          <Img 
            css={imgStyles}
            fluid={{...imgData, aspectRatio:1 }} 
          />
        </div>
        <div className="cardBottom" css={cardBottom}>
          {title}
        </div>
      </div>
    </div>
  )
};

const cardPadding = css`
  // flex: 0 0 auto;
  margin-top:20px;
  position: relative;
`

const cardContainer = css`
  border:solid 1px #e5e5e5;
  background-color:#fff;
  box-shadow: 0 5px 30px -15px rgba(0,0,0,.2);
  -webkit-transition: all .3s;
  -o-transition: all .3s;
  transition: all .3s;
  border-radius:6px;
  
  position:relative;
  &:hover{
    // box-shadow: 0 2px 5px 0 rgba(0,0,0,0.4);
  }

  &:hover .cardBottom{
      // height:20px;
      // opacity:.9;
  }
`;

const imgContainer = css`
  // filter:brightness(80%);

  -webkit-transition: all .5s;
  -o-transition: all .5s;
  transition: all .5s;
  padding-top:20px;
  padding-left:20px;
  padding-right:20px;
  padding-bottom:20px;
  &:hover{
    // padding-top:20px;
    // padding-left:40px;
    // padding-right:40px;
    // filter: grayscale(0%) blur(0px);
  }
`;

const cardTop = css`
  transform: rotate(45deg);
  position:absolute;
  top:10px;
  right:0;
  border-radius:10px;
  // line-height:30px;
  background-color:#0f346c;
  z-index:1;
  color:#fff;
`;

const imgStyles = css`
  border-radius:6px;
  padding-bottom:120px;
  // filter: grayscale(60%) blur(5px);
`;

const cardBottom = css`
  font-family:varela round;
  color:#0f346c;
  -webkit-transition: all .3s;
  -o-transition: all .3s;
  transition: all .3s;
  border-bottom-left-radius:6px;
  border-bottom-right-radius:6px;
  height:calc(10% + 80px);
  width:100%;
  background-color:#f9f9f9;
  position:absolute;
  bottom:0;
  left:0;
  padding-top:5px;
  padding-left:20px;
  padding-right:20px;

  // border-top: solid #f0f0f0 1px;
  // opacity:.95;
  
`;

export default WeissProductCard;