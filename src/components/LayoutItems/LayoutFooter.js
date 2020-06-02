import React from 'react'
import { css } from '@emotion/core'

const LayoutFooter = () => {
  return (
    <footer>
      <div css={footerContainer}>
        <a css={footerContent} href="https://www.linkedin.com/in/jonmwu">
          Developed by Jonathan Wu
        </a>
      </div>
    </footer>
  )
}

const footerContainer = css`
  position: relative;
  margin-top: 50px;
  padding-top: 25px;
  text-align:center;
  border-top: solid 1px #e0e0e0;
  background-color: #0f346c;
  padding-bottom: 25px;
`

const footerContent = css`
  text-align: center;
  color: #a1bce6;
`

export default LayoutFooter
