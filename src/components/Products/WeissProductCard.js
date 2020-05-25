import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'



const WeissProductCard = ({imgData}) =>
{
  return(
    <div css={cardPadding} className="col-md-4">
      <div css={cardContainer}>
        <Img 
          fluid={{...imgData, aspectRatio: .63}} 
          />
      </div>
    </div>
  )
};

const cardPadding = css`
  flex: 0 0 auto;
  margin-top:20px;
`

const cardContainer = css`
  // opacity:.5;
  background-color: rgba(0, 0, 0, 0.6);
  // box-shadow: 0 2px 5px 0 rgba(0,0,0,0.14);
`;

export default WeissProductCard;