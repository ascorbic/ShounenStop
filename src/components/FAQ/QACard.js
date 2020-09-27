import React from 'react'
import { css } from '@emotion/core'

const QACard = ({ question, answer }) => {
  return (
    <div
      css={qaCardContainer}
      className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12"
    >
      <div css={cardContainer}>
        <div css={questionContainer}>{question}</div>
        <div css={answerContainer}>
          {answer}
        </div>
      </div>
    </div>
  )
}

const qaCardContainer = css`
  padding-left: 5px;
  padding-right: 5px;
`

const cardContainer = css`
  font-family: lato;
  white-space: pre-wrap;

  box-shadow: rgba(31, 32, 68, 0.16) 0px 2px 8px 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;  
  margin-bottom: 10px;
  margin-top: 10px;
  border-radius: 12px;
  font-size: 15px;
  background-color: #fff;
`
const answerContainer = css`
  position: relative;
  width: 100%;
  margin-top: 10px;
`

const questionContainer = css`
  font-weight: 700;
  color: #151515;
  padding-top: 5px;
  font-size: 20px;
`

export default QACard
