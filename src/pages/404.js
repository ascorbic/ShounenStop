import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

import SEO from '../components/Common/seo'

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <div css={notFoundContainer}>
      <div css={notFoundText}>You just hit a route that doesn&#39;t exist</div>
      <Link to="/">RETURN HOME</Link>
    </div>
  </>
)

const notFoundContainer = css`
  display: flex;
  flex-wrap:wrap;
  height:400px;
  font-size:30px;
  align-items: center;
  justify-content:center;
  text-align: center;
`

const notFoundText = css`
  width:100%;
`

export default NotFoundPage
