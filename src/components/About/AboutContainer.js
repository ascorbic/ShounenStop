import React from 'react'
import { css } from '@emotion/core'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

import { Container, Row } from 'react-bootstrap'
const AboutContainer = () => {
  const data = useStaticQuery(query)

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
            <p>
              For Shounen Stop, it’s all about value & ease. We are a small
              group of enthusiasts based in Hong Kong that aims to deliver goods
              to customers at an affordable price and conveniently through
              efficient payment and shipping methods.
            </p>
            <p css={whoWeAreHeader}>Who we are</p>
            <div css={personDescription} className="row">
              <div
                css={userImageStyles}
                className="col-xl-3 col-lg-4 col-md-4 col-sm-4 col-12"
              >
                <div css={userImageInner}>
                  <Img
                    // css={credibilityImgStyles}
                    fluid={data.leonImage.childImageSharp.fluid}
                  />
                </div>
              </div>
              <div className="col-xl-9 col-lg-8 col-md-8 col-sm-8 col-12">
                <h3 css={personTitleStyles}>Leon Shum</h3>
                <span css={titleHeader}>FOUNDER</span>{' '}
                <div css={personBorder}></div>
                <p>
                  A Weiss Schwarz player from New Jersey that relocated to Hong
                  Kong for work. He runs the main operations of the store. Feel
                  free to contact him with any inquiries related to Shounen
                  Stop.
                </p>
              </div>
            </div>
            <div css={personDescription} className="row">
              <div
                css={userImageStyles}
                className="col-xl-3 col-lg-4 col-md-4 col-sm-4 col-12"
              >
                <div css={userImageInner}>
                  <Img
                    // css={credibilityImgStyles}
                    fluid={data.jonImage.childImageSharp.fluid}
                  />
                </div>
              </div>
              <div className="col-xl-9 col-lg-8 col-md-8 col-sm-8 col-12">
                <h3 css={personTitleStyles}>Jonathan Wu</h3>
                <span css={titleHeader}>DEVELOPER</span>
                <div css={personBorder}></div>
                <p>
                  A Weiss Schwarz player from New Jersey that relocated to Hong
                  Kong for work. He runs the main operations of the store. Feel
                  free to contact him with any inquiries related to Shounen
                  Stop.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  )
}

const userImageStyles = css`
  display: flex;
  justify-content: center;
`

const userImageInner = css`
  width: 100%;
  transition: all 0.2s ease-in-out;
  max-width: 350px;
  & > div {
    border-radius: 12px;
  }

  @media only screen and (max-width: 592px) {
    margin-bottom: 30px;
  }
`

const personTitleStyles = css`
  color: #4c91a9;
  margin-bottom: 10px;
`

const personBorder = css`
  background-color: #b4c3ca;
  width: 30px;
  height: 1px;
  margin-top: 20px;
  margin-bottom: 25px;
`

const personDescription = css`
  padding-top: 15px;
  padding-bottom: 35px;
`

const titleHeader = css`
  font-weight: 300;
  font-size: 18px;
  color: #8091a5;
`

const whoWeAreHeader = css`
  color: #0f346c;
  font-size: 35px;
  font-weight: 600;
  padding-top: 10px;
  text-align: left;
  @media only screen and (max-width: 592px) {
    text-align: center;
  }
`

const shounenStyles = css`
  background: linear-gradient(to right, #13346c, #4c91a9);
  -webkit-box-decoration-break: clone;
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
  padding-left: 20px;
  padding-right: 20px;
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

export const query = graphql`
  query AboutContainerQuery {
    leonImage: file(relativePath: { eq: "lPhoto.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jonImage: file(relativePath: { eq: "jPhoto.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
