import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

const LayoutFooter = () => {
  return (
    <footer>
      <div css={footerContainer}>
        <Link to="/" css={siteLink}>
          Shounen Stop
        </Link>
        <span css={footerDivider}>·</span>
        <a css={footerLinkedin} href="https://www.linkedin.com/in/jonmwu">
          Developed by Jonathan Wu
        </a>
        <Link to="/contact" css={logoContainerLeft}>
          <svg class="svgIcon" viewBox="0 0 20 20">
            <path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path>
          </svg>
        </Link>
        <div css={logoContainer}>
          <a
            target="_blank"
            href="https://www.facebook.com/Shounen-Stop-112480440503469"
          >
            <svg class="svgIcon" viewBox="0 0 20 20">
              <path
                fill="none"
                d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

const logoContainerLeft = css`
  margin-left: auto;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-radius: 50%;
  border: solid 1px #a1bce6;
  padding: 5px;
  margin-right: 10px;
  &:hover {
    background-color: rgb(213, 224, 244, 0.3);
  }
`

const logoContainer = css`
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease-in-out;
  border-radius: 50%;
  border: solid 1px #a1bce6;
  padding: 5px;
  &:hover {
    background-color: rgb(213, 224, 244, 0.3);
  }
`

const footerContainer = css`
  position: relative;
  width: 100%;
  bottom: 0;
  height: 80px;
  text-align: center;
  display: flex;
  align-items: center;
  border-top: solid 1px #e0e0e0;
  background-color: #0f346c;
  color: #a1bce6;
  padding-right: 20px;
  padding-left: 20px;
  @media (max-width: 450px) {
    height: 160px;
  }
`

const siteLink = css`
  color: #a1bce6;
`

const footerDivider = css`
  padding-left: 5px;
  padding-right: 5px;
`

const footerLinkedin = css`
  text-align: center;
  color: #a1bce6;
`

export default LayoutFooter
