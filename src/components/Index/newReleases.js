import React from 'react'
import { css } from '@emotion/core'
import NewReleasesList from './NewReleasesList'

const NewReleases = ({ releaseList }) => {

  return (
    <div css={releasesContainer}>
      <div css={releasesContent}>
        <div css={header}>
          <div css={headerBar}></div>
          <div css={releasesHeader}>New Releases</div>
          <div css={headerBar}></div>
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

const header = css`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`

const headerBar = css`
  height: 1.5px;
  flex-grow: 1;
  background-color: #0f346c;
`

const releasesHeader = css`
  flex-grow: fill;
  font-size: 30px;
  font-family: 'lato';
  margin: 0px 20px;
  color: #0f346c;
`

export default NewReleases
