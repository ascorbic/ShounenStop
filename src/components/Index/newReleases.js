import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { css } from '@emotion/core'

import WeissProductCard from '../Products/WeissProductCard'
import Card from '../Products/Card'

const NewReleases = () => {
  return (
    <div className="" css={releasesContainer}>
      <div css={header}>
        <div css={headerLeft}></div>
        <div css={releasesHeader}>New Releases</div>
        <div css={headerRight}></div>
      </div>
      {/* <div css={lineBreak}></div> */}
      <div className="container" css={productsContainer}>
        <WeissProductCard />
        <WeissProductCard />
        <WeissProductCard />
      </div>

      {/* <Card title="omdsadsdag">Weiss Box 1</Card>
      <Card title="omdsadsdag">Weiss Box 1</Card>
      <Card title="omdsadsdag">Weiss Box 1</Card> */}
    </div>
  )
}

const releasesContainer = css`
  // width: 100%;
  display: flex;
  flex-wrap: nowrap;
  max-width: 1200px;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  padding-top: 25px;
  padding-left: 50px;
  padding-right: 50px;
  // background-color:#f0f0f0;
`

const productsContainer = css`
  width:100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding:0;
  // margin:none;
`

const cardStyles = css`
  // flex: 0 1 calc(25% - 1em);
  // max-width:200px !important;
`

const header = css`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`

const headerLeft = css`
  height: 3px;
  flex-grow: 1;
  background-color: #4f4f4f;
  border-radius:2px;
`

const headerRight = css`
  height: 3px;
  flex-grow: 1;
  background-color: #4f4f4f;
  border-radius:2px;
`

const releasesHeader = css`
  flex-grow:fill;
  font-size: 30px;
  font-family: 'varela round';
  margin:0px 20px;
  color: #4f4f4f;
`

const lineBreak = css`
  // flex-grow: 1;
`

export default NewReleases

// export const pageQuery = graphql`
// 	query IndexQuery {
// 		allWordpressWpMe {
// 			edges {
// 				node {
// 					name
// 					description
// 					avatar_urls {
// 						wordpress_96
// 					}
// 				}
// 			}
// 		}
// 	}`
