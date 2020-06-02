import React from 'react'
import { css } from '@emotion/core'
import NewReleasesList from './NewReleasesList'

const NewReleases = ({ releaseList }) => {

  return (
    <div css={releasesContainer}>
      <div css={releasesContent}>
        <div css={header}>
          <div css={headerLeft}></div>
          <div css={releasesHeader}>New Releases</div>
          <div css={headerRight}></div>
        </div>
        <NewReleasesList
          release1={releaseList.release1}
          release2={releaseList.release2}
          release3={releaseList.release3}
        />
      </div>
    </div>
  )
}

const releasesContainer = css`
  background-color: #f4f7f9;
`

const releasesContent = css`
  display: flex;
  flex-wrap: nowrap;
  max-width: 1400px;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  padding-top: 25px;
  padding-left: 8%;
  padding-right: 8%;
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
  height: 1.5px;
  flex-grow: 1;
  background-color: #303235;
`

const headerRight = css`
  height: 1.5px;
  flex-grow: 1;
  background-color: #303235;
`

const releasesHeader = css`
  flex-grow: fill;
  font-size: 30px;
  font-family: 'montserrat';
  margin: 0px 20px;
  color: #303235;
`

export default NewReleases
