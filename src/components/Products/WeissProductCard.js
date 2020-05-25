import React from 'react'
import { Link } from 'gatsby'
import Image from '../Common/Image'
import { css } from '@emotion/core'



const WeissProductCard = () =>
{
  return(
    <div css={cardPadding} className="col-sm-4">
      <div css={imageStyles}>
        <Image  imgFile="DateALive.jpg"></Image>
      </div>
    </div>
  )
};

const cardPadding = css`
  flex: 0 0 auto
  // margin: 20px auto;
  // max-width:350px;
  // width:100%;
`

const imageStyles = css`
// padding-left:10px;
// padding-right:10px;

  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.14);
`;

export default WeissProductCard;