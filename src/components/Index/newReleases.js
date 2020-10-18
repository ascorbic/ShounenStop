import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
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
        <div css={viewAllRow}>
          <Link to="/products/weiss">
            <button css={viewAllWeissButton}>
              <span css={innerText}>VIEW ALL WEISS</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

const viewAllRow = css`
  display: flex;
  justify-content: center;
`

const releasesContainer = css`
  margin-bottom: 40px;
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
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1), cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-duration: 300ms, 300ms, 300ms, 300ms;
  margin-top: 20px;
  border: 2.5px solid;
  height: 80px;
  width: 250px;
  margin-bottom: 20px;
  border-image-slice: 1;
  border-width: 2.5px;
  background-color: #f4f7f9;
  border-image-source: linear-gradient(to right, #13346c, #4c91a9);
  font-size: 22px;

  &:hover {
    transform: translateY(-4px);
    background: linear-gradient(to right, #13346c, #4c91a9);
    & > span {
      -webkit-text-fill-color: unset;
      color: #fff;
      font-size: 24px;
    }
    margin-bottom: 10px;

    height: 90px;
    width: 270px;
  }
`

const innerText = css`
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1), cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-duration: 300ms, 300ms, 300ms, 300ms;
  background: linear-gradient(to right, #13346c, #4c91a9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
