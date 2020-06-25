import React from 'react'
import { navigate } from 'gatsby'
import { css } from '@emotion/core'

const CheckoutProgress = ({ phase, orderContext }) => {
  // const
  return (
    <div css={checkoutProgressContainer} className="col-12 checkoutProgress">
      <div
        css={progressContainer}
        onClick={_ => {
          navigate('/cart')
        }}
      >
        <div
          className={phase >= 1 ? 'currentProgressBall' : ''}
          css={progressBall}
        >
          1
        </div>
        <div className={phase >= 1 ? 'currentProgress' : ''} css={progressText}>
          Cart
        </div>
      </div>
      {phase < 2 && <div css={progressBar}></div>}
      <div
        css={progressContainer}
        onClick={_ => {
          phase === 3 && 
            navigate('/checkout', {
              state: { orderContext },
            })
        }}
      >
        <div
          className={phase >= 2 ? 'currentProgressBall' : ''}
          css={progressBall}
        >
          2
        </div>
        <div className={phase >= 2 ? 'currentProgress' : ''} css={progressText}>
          Delivery
        </div>
      </div>
      {phase < 3 && <div css={progressBar}></div>}
      <div css={progressContainer}>
        <div
          className={phase >= 3 ? 'currentProgressBall' : ''}
          css={progressBall}
        >
          3
        </div>
        <div className={phase >= 3 ? 'currentProgress' : ''} css={progressText}>
          Payment
        </div>
      </div>
      {phase < 4 && <div css={progressBar}></div>}
      <div css={progressContainer}>
        <div
          className={phase >= 4 ? 'currentProgressBall' : ''}
          css={progressBall}
        >
          4
        </div>
        <div className={phase >= 4 ? 'currentProgress' : ''} css={progressText}>
          Confirmation
        </div>
      </div>
    </div>
  )
}

const checkoutProgressContainer = css`
  padding-top: 5px;
  height: 70px;
  display: inline-flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: center;
  padding-left: 0px;
  padding-right: 0px;
  text-align: center;
`

const progressContainer = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  user-select: none;
  justify-content: center;
`

const progressBall = css`
  display: flex;
  font-size: 12px;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #a1bce6;
  height: 24px;
  width: 24px;

  border-radius: 50%;
`

const progressText = css`
  color: #a1bce6;
  width: 100%;
`
const progressBar = css`
  border-radius: 1px;
  height: 2px;
  background-color: #a1bce6;
  flex-grow: 1;
`

export default CheckoutProgress
