import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'

import WeissBackground from './WeissBackground'

const WeissProductCard = ({imgData, title, className}) =>
{
  return(
    <div css={cardPadding} className={className}>
        <div css={cardTop}>
          PREORDER
        </div>
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
        <WeissBackground />
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
  border-radius:10px;
  
  position:relative;
  &:hover{
    // box-shadow: 0 2px 5px 0 rgba(0,0,0,0.4);
    // background-color: rgba(0,0,0,.1);
    // opacity:.8;
  }

  &:hover .cardBottom{
      // height:20px;
      // opacity:.9;
  }
`;

const imgContainer = css`
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
  position:absolute;
  top:15px;
  left:0;
  letter-spacing:1.5px;
  line-height:40px;
  padding-left:5px;
  padding-right:5px;
  font-weight:300;
  background-color:#0f346c;
  z-index:1;
  color:#fff;
`;

const imgStyles = css`
  border-radius:10px;
  padding-bottom:120px;
  // filter: grayscale(60%) blur(5px);
`;

const cardBottom = css`
  font-family:varela round;
  color:#0f346c;
  border-top: solid 3px #0f346c;

  -webkit-transition: all .3s;
  -o-transition: all .3s;
  transition: all .3s;
  border-radius:4px;
  // border-bottom-left-radius:4px;
  // border-bottom-right-radius:4px;
  height:calc(10% + 80px);
  width:calc(100% - 20px);
  // filter: brightness(60%);

  background-color:#fff;
  position:absolute;
  bottom:10px;
  left:10px;

  padding-top:5px;
  padding-left:20px;
  padding-right:20px;

  // border-top: solid #f0f0f0 1px;
  opacity:.95;
`;

export default WeissProductCard;