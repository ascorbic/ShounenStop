import React from 'react'
import { css } from '@emotion/core'

const OrderSummary = ({
  checkoutNavigate,
  totalItems,
  subTotal,
  shippingInfo,
  fees,
  navigateMessage,
  disableButton,
  children,
}) => {
  const shippingPrice = shippingInfo.shippingMethod.price
  const totalPrice = subTotal + shippingPrice + fees

  return (
    <div
      className="col-xl-4 col-lg-5 col-md-12 col-sm-12 col-xs-12"
      css={pricingContainer}
    >
      <div css={pricesContainer}>
        <div css={cartHeader}>Summary</div>
        <div css={orderSummary}>
          <div css={subTotalContainer}>
            <div css={subTotalText}>
              {'Subtotal (' + totalItems + ' items)'}
            </div>
            <div css={subTotalAmount}>{'$' + subTotal.toFixed(2)}</div>
          </div>
          <div css={shippingTotalContainer}>
            <div css={shippingTotalText}>
              {shippingInfo.shippingMethod.name}
            </div>
            <div css={shippingTotalAmount}>
              {'$' + shippingPrice.toFixed(2)}
            </div>
          </div>
          <div css={feesTotalContainer}>
            <div css={feesTotalText}>Goods and Services fees</div>
            <div css={feesTotalAmount}>{'$' + fees.toFixed(2)}</div>
          </div>
          <div css={totalBar}></div>
          <div css={orderTotalContainer}>
            <div css={orderTotalText}>Total</div>
            <div css={orderTotalAmount}>{'$' + totalPrice.toFixed(2)}</div>
          </div>
        </div>
        {checkoutNavigate ? (
          <div
            onKeyDown={!disableButton ? checkoutNavigate : null}
            onClick={!disableButton ? checkoutNavigate : null}
            className={disableButton ? 'buttonDisabled' : ''}
            css={checkoutButton}
          >
            {navigateMessage}
          </div>
        ) : (
          <div css={totalPadding}></div>
        )}
      </div>
      {children}
    </div>
  )
}

const feesTotalText = css`
  float: left;
`

const feesTotalAmount = css`
  color: #151515;
  font-weight: 700;
  float: right;
`

const feesTotalContainer = css`
  clear: both;
  position: relative;
  padding-top: 20px;
  font-family: Lato;
  width: 100%;
`

const totalPadding = css`
  position: relative;
  height: 35px;
`

const pricingContainer = css`
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 20px;

`

const pricesContainer = css`
  box-shadow: rgba(31, 32, 68, 0.16) 0px 2px 8px 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;

  border-radius: 12px;
  font-size: 15px;
  background-color: #fff;
`
const orderSummary = css`
  position: relative;
  width: 100%;
`

const subTotalText = css`
  float: left;
`

const subTotalAmount = css`
  color: #151515;
  font-weight: 700;
  float: right;
`

const subTotalContainer = css`
  padding-top: 20px;
  font-family: Lato;
  width: 100%;
`

const shippingTotalText = css`
  float: left;
`

const shippingTotalAmount = css`
  color: #151515;
  font-weight: 700;
  float: right;
`

const shippingTotalContainer = css`
  clear: both;
  position: relative;
  padding-top: 20px;
  font-family: Lato;
  width: 100%;
`

const totalBar = css`
  background-color: #e6e6ea;
  margin-top: 45px;
  height: 1px;
  clear: both;
  position: relative;
`

const orderTotalText = css`
  // color: #b4b9c4;
  font-size: 20px;
  font-weight: 700;
  float: left;
`

const orderTotalAmount = css`
  color: #151515;
  font-size: 20px;

  font-weight: 700;
  float: right;
`

const orderTotalContainer = css`
  clear: both;
  position: relative;
  padding-top: 20px;
  color: #151515;
  font-family: lato;
  width: 100%;
`

const cartHeader = css`
  font-family: varela round;
  font-weight: 700;
  color: #0f346c;
  padding-top: 5px;
  font-size: 24px;
`

const checkoutButton = css`
  margin-top: 45px;
  transition: all 0.2s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 45px;
  width: 100%;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  font-family: varela round;
  color: #fff;
  letter-spacing: 2px;

  &:hover {
    font-size: 16px;
    letter-spacing: 1.5px;
    color: #a1bce6;
  }
  background-color: #0f346c;

  clear: both;
`

export default OrderSummary

// const formatPrice = (amount, currency) => {
//   let price = (amount / 100).toFixed(2)
//   let numberFormat = new Intl.NumberFormat(['en-US'], {
//     style: 'currency',
//     currency: currency,
//     currencyDisplay: 'symbol',
//   })
//   return numberFormat.format(price)
// }