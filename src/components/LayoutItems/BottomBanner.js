import React, { useState, useLayoutEffect,useMemo, useEffect, useCallback } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import iconInfo from '../../images/infoIcon.svg'

import { css } from '@emotion/core'

const bannerDismissedKey = 'bannerDismissed'

function getBannerDismissed() {
  if (sessionStorage.getItem(bannerDismissedKey) === null) {
    sessionStorage.setItem(bannerDismissedKey, JSON.stringify(false))
    return false
  }
  return JSON.parse(sessionStorage.getItem(bannerDismissedKey))
}

function dismissBanner() {
  sessionStorage.setItem(bannerDismissedKey, true)
}

const BottomBanner = () => {
  const data = useStaticQuery(query)
  const [bannerDismissed, setBannerDismissed] = useState(false)

  useLayoutEffect(()=>{
    setBannerDismissed(getBannerDismissed())
  })

  const Banner = useCallback(() => (
    (
      !bannerDismissed && <div css={bottomBannerContainer}>
        <div css={bannerTextStyles}>
          <img css={infoIconStyles} src={iconInfo}></img>
          {data.bottomBannerText.frontmatter.bannerText}
        </div>
        <div
          css={dismissButton}
          onClick={() => {
            setBannerDismissed(true)
            dismissBanner()
          }}
        >
          Dismiss
        </div>
      </div>
  )))

  return(<div className="bannerFade"><Banner/></div>)
}

const infoIconStyles = css`
  height: 20px;
  width: 20px;
  // vertical-align: middle;
  position: relative;
  top:-2px;
  padding-right:5px;
  `

const dismissButton = css`
  cursor: pointer;

  position: absolute;
  right: 15px;
  bottom: calc(50% - 10px);
  font-size: 15px;
  color: rgba(255, 255, 255, 0.8);

  transition: color ease-in-out 0.25s;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`

const bannerTextStyles = css`
  padding-right: 80px;
`

const bottomBannerContainer = css`
  position: fixed;
  z-index: 9999;
  bottom: 0;
  left: 0;
  // right: 0;
  // top: 0;
  width: 100%;
  color: #dcecff;
  font-size: 16px;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;

  font-family: montserrat;
  background-image: linear-gradient(to right, #13346c, #4c91a9);
  // display: flex;
  // flex-wrap: wrap;
`

export default BottomBanner

export const query = graphql`
  query BottomBannerQuery {
    bottomBannerText: markdownRemark(
      fields: { slug: { eq: "/bottomBanner/" } }
    ) {
      frontmatter {
        bannerText
      }
    }
  }
`
