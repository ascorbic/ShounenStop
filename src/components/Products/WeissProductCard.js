import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'



const WeissProductCard = ({imgData, content}) =>
{
  return(
    <div css={cardPadding} className="col-lg-4 col-md-4 col-sm-6">
      <div css={cardContainer}>
        <div css={imgContainer}>
          <Img 
            css={imgStyles}
            fluid={{...imgData, aspectRatio:1}} 
          />
        </div>
        <div className="cardBottom" css={cardBottom}>{content}</div>
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
  background-color:#fff;
  box-shadow: 0 5px 30px -15px rgba(0,0,0,.2);
  -webkit-transition: all .3s;
  -o-transition: all .3s;
  transition: all .3s;
  border-radius:3px;
  
  position:relative;
  &:hover{
    // box-shadow: 0 2px 5px 0 rgba(0,0,0,0.4);
  }

  // &:hover .cardBottom{
  //     height:20px;
  //     opacity:0;
  // }
`;

const imgContainer = css`
  // filter:brightness(80%);
  // filter: grayscale(60%) blur(5px);
  -webkit-transition: all .5s;
  -o-transition: all .5s;
  transition: all .5s;
// height:100%;
  padding-top:10px;
  padding-left:20px;
  padding-right:20px;
  &:hover{
    // filter: grayscale(0%) blur(0px);
  }
`;

const imgStyles = css`
border-radius:3px;

padding-bottom:20%;

// padding-left:10px;
// padding-right:10px;
// margin-bottom:50px;
  // filter: grayscale(60%) blur(5px);
`;

const cardBottom = css`
  -webkit-transition: all .3s;
  -o-transition: all .3s;
  transition: all .3s;
  border-bottom-left-radius:3px;
  border-bottom-right-radius:3px;
  // height:calc(10% + 50px);
  width:100%;
  background-color:#fff;
  position:absolute;
  bottom:0;
  left:0;
  // border-top: solid #f0f0f0 1px;
  opacity:.8
  
`;

export default WeissProductCard;