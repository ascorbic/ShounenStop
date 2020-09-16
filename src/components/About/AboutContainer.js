import React from 'react'
import { css } from '@emotion/core'
import { Container, Row } from 'react-bootstrap'
const AboutContainer = () => {
  return (
    <Container css={contactWrapper} fluid>
      <Row>
        <div
          css={contactContainer}
          className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12"
        >
          <div css={contactInfoContainer}>
            <h1 css={helpHeaderText}>
              About <span css={shounenStyles}>Shounen Stop</span>
            </h1>
            <div>
              For Shounen Stop, it’s all about value & ease. We are a small
              group of enthusiasts based in Hong Kong that aims to deliver goods
              to customers at an affordable price and conveniently through
              efficient payment and shipping methods.
            </div>
            <div>
              {' '}
              We can also ship to customer’s in certain countries outside of the
              U.S., just send us an email or facebook message.
            </div>
          </div>
        </div>
      </Row>
    </Container>
  )
}

const shounenStyles = css`
  background: linear-gradient(to right, #13346c, #4c91a9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const submitButton = css`
  margin-top: 15px;
  margin-bottom: 5px;
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
  border: none;

  &:hover {
    font-size: 16px;
    letter-spacing: 1.5px;
    color: #a1bce6;
  }

  &:active {
    color: #fff;
  }
  background-color: #0f346c;
`

const contactWrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

const textAreaInput = css`
  font-size: 18px;
  min-height: 100px;

  border: none;
  border-bottom: solid 1px #dfdfdf;
  -webkit-appearance: none;
  width: 100%;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1), cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-duration: 300ms, 300ms, 300ms, 300ms;
  &:focus {
    border-bottom: solid 1px #0f346c;
  }
`

const userInfoInput = css`
  height: 25px;
  line-height: 0px;
  font-size: 18px;
  width: 100%;
  border: none;
  border-bottom: solid 1px #dfdfdf;
  -webkit-appearance: none;

  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1), cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-duration: 300ms, 300ms, 300ms, 300ms;

  &:focus {
    border-bottom: solid 1px #0f346c;
  }
`

const userInfoTop = css`
  width: 100%;
  position: relative;
  margin-bottom: 0px;
  margin-top: 15px;
`

const userInfoLabel = css`
  font-size: 16px;
  float: left;
  letter-spacing: 1.5px;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1), cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-duration: 300ms, 300ms, 300ms, 300ms;
  color: #6a6d75;
`
const userInfoError = css`
  font-size: 16px;
  float: right;
  letter-spacing: 1.1px;
  color: #d20d0d;
`

const contactContainer = css`
  margin-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 5px;
  max-width: 1000px;
`

const contactContainerHeader = css`
  padding-left: 15px;
  font-family: varela round;
  font-weight: 700;
  color: #0f346c;
  padding-top: 5px;
  font-size: 24px;
  width: 100%;
`

const userInfoContainer = css`
  padding: 10px;
  background-color: #fff;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 9px;
  font-family: Lato;
  box-shadow: rgba(31, 32, 68, 0.16) 0px 2px 8px 0px;
  display: flex;
  flex-wrap: wrap;
  position: sticky;
  top: 70px;
  width: 100%;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1), cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-duration: 300ms, 300ms, 300ms, 300ms;
  &:hover {
    box-shadow: 0px 8px 32px 0px rgba(31, 32, 68, 0.16);
  }
`

const contactInfoContainer = css`
  padding-top: 20px;
  padding-bottom: 30px;
`

const helpHeaderText = css`
  color: #0f346c;
`

export default AboutContainer
