import React from 'react'
import { css } from '@emotion/core'
import NewReleasesList from './NewReleasesList'

const NewReleases = ({ releaseList }) => {

  return (
    <div css={releasesContainer}>
      <div css={releasesContent}>
        <div css={header}>
          <div css={headerBarLeft}></div>
          <div css={releasesHeader}>New Releases</div>
          <div css={headerBarRight}></div>
        </div>
        <NewReleasesList
          release1={releaseList.release1}
          release2={releaseList.release2}
          release3={releaseList.release3}
        />
      </div>
      <div css={viewAllWeissButton}></div>
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
  padding-bottom: 25px;
`

const header = css`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`

const headerBarLeft = css`
  height: 1.5px;
  flex-grow: 1;
  background-color: #13346c;
`

const headerBarRight = css`
  height: 1.5px;
  flex-grow: 1;
  background-color: #4c91a9;
`

const viewAllWeissButton = css`
  
`

const releasesHeader = css`
  flex-grow: fill;
  font-size: 30px;
  font-family: 'lato';
  margin: 0px 20px;
  background: linear-gradient(to right, #13346c, #4c91a9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export default NewReleases
