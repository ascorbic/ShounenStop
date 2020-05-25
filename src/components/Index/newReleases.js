import React from 'react'
import { css } from '@emotion/core'
import NewReleasesList from './NewReleasesList'


import Card from '../Products/Card'

const NewReleases = () => {
  return (
    <div css={releasesContainer}>
      <div css={releasesContent}>
        <div css={header}>
          <div css={headerLeft}></div>
          <div css={releasesHeader}>New Releases</div>
          <div css={headerRight}></div>
        </div>
        <NewReleasesList>
        </NewReleasesList>
      </div>
    </div>
  )
}

const releasesContainer = css`
  background-color: #f4f7f9;
`;

const releasesContent = css`
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
  background-color: #303235;
  border-radius:2px;
`

const headerRight = css`
  height: 3px;
  flex-grow: 1;
  background-color: #303235;
  border-radius:2px;
`

const releasesHeader = css`
  flex-grow:fill;
  font-size: 30px;
  font-family: 'varela round';
  margin:0px 20px;
  color: #303235;
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
