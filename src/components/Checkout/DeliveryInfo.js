import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { css } from '@emotion/core'

import { Container } from 'react-bootstrap'

const DeliveryInfo = ({ }) => {
  return (
    <>
      <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 col-xs-12">
        <div css={header}>Delivery</div>
        <div css={cartDivider}></div>
        <div css={userInfoContainer}></div>
      </div>
    </>
  )
}

const userInfoContainer = css`
padding: 10px;
background-color: #fff;
margin-top: 10px;
margin-bottom: 10px;
border-radius: 9px;

box-shadow: rgba(31, 32, 68, 0.16) 0px 2px 8px 0px;

display: inline-flex;
justify-content: space-between;
flex-wrap: nowrap;
width:100%;
transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1),
cubic-bezier(0.645, 0.045, 0.355, 1), cubic-bezier(0.645, 0.045, 0.355, 1),
cubic-bezier(0.645, 0.045, 0.355, 1);
transition-duration: 300ms, 300ms, 300ms, 300ms;
&:hover{
  box-shadow:0px 8px 32px 0px rgba(31,32,68,0.16);
}
`

const header = css`
  color: #0f346c;
  font-size: 26px;
  width: 100%;
  font-family: varela round;
`
const cartDivider = css`
  height: 1px;
  width: 100%;
  margin-bottom: 10px;
  background-color: #a1bce6;
`

export default DeliveryInfo
