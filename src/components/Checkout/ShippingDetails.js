import React from 'react'
import { Link, navigate } from 'gatsby'
import { css } from '@emotion/core'

const getProduct = flatProduct => {
  return flatProduct.split('-')
}

const ShippingDetails = ({ shippingData, userInfo }) => {
  console.log(shippingData, userInfo)
  return (
    <div css={shippingContainer}>
      <div css={header}>Shipping Details</div>
      <div css={shippingDetailsContainer}>
        <div css={shippingMethodContainer}>
          <div css={shippingMethodHeader}>Shipping Method</div>
          <div css={shippingMethodText}>
            <span css={shippingLine}>{shippingData.standardShipping.name}</span>
            <span css={shippingLine}>
              {shippingData.standardShipping.speed}
            </span>
            <span css={shippingLine}>
              {'$' + shippingData.standardShipping.price}
            </span>
          </div>
        </div>

        {/* Shipping Method: */}
        <div css={shippingAddressContainer}>
          <div css={shippingAddressHeader}>Shipping Address</div>
          <div css={shippingAddressText}>
            <span css={addressLine}>
              {userInfo.firstName + ' ' + userInfo.lastName}
            </span>
            <span css={addressLine}>
              {userInfo.address + ' ' + userInfo.apt}
            </span>
            <span css={addressLine}>
              {userInfo.city +
                ', ' +
                userInfo.state +
                ', ' +
                userInfo.zip +
                ', USA'}
            </span>
            <span css={addressLine}>{userInfo.email}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const shippingMethodHeader = css`
  font-weight: 700;
`

const shippingMethodContainer = css`
  font-family: lato;
  margin-top: 10px;
  width: 100%;
  font-size: 18px;
`

const shippingMethodText = css`
  font-size: 15px;
`

const shippingLine = css`
  margin-top: 3px;
  display: block;
`

const addressLine = css`
  margin-top: 3px;
  display: block;
`

const shippingAddressHeader = css`
  font-weight: 700;
`

const shippingAddressContainer = css`
  font-family: lato;
  margin-top: 10px;
  width: 100%;
  font-size: 18px;
`

const shippingAddressText = css`
  font-size: 15px;
`

const shippingContainer = css`
  box-shadow: rgba(31, 32, 68, 0.16) 0px 2px 8px 0px;
  // height: 500px;
  padding-left: 12px;
  padding-right: 10px;
  padding-bottom: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 12px;
  font-size: 15px;
  background-color: #fff;
`
const shippingDetailsContainer = css`
  position: relative;
  width: 100%;
`

const header = css`
  font-family: varela round;
  font-weight: 700;
  color: #0f346c;
  padding-top: 5px;
  font-size: 24px;
`

export default ShippingDetails
