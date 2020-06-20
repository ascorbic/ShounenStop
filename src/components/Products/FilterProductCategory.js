import React from 'react'
import { useStaticQuery, graphql, navigate } from 'gatsby'
import { css } from '@emotion/core'
import { Collapse } from 'react-bootstrap'

class FilterProductCategory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this))
    this.resize()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }

  resize() {
    if (window.innerWidth <= 992) {
      this.setState({
        open: false,
      })
    } else {
      this.setState({
        open: true,
      })
    }
  }

  render() {
    return (
      <div css={filterContainer}>
        <div
          onClick={() =>
            this.setState(prevState => {
              console.log(prevState.open)
              return { open: !prevState.open }
            })
          }
          aria-controls="example-collapse-text"
          aria-expanded={this.state.open}
        >
          <div css={filterHeader}>
            <span>{this.props.filterName}</span>
            <div css={openSymbolContainer}>
              <div
                className={
                  this.state.open ? 'expandedProductCategoryFilterLeft' : ''
                }
                css={leftLine}
              ></div>
              <div
                className={
                  this.state.open ? 'expandedProductCategoryFilterRight' : ''
                }
                css={rightLine}
              ></div>
            </div>
          </div>
        </div>
        <Collapse css={filterOptionContainer} in={this.state.open}>
          <div css={filterListContainer}>
            {this.props.children}
            <div css={paddingBottomList}></div>
          </div>
        </Collapse>
      </div>
    )
  }
}

export default FilterProductCategory

const paddingBottomList = css`
  height: 10px;
  width: 100%;
`

const filterListContainer = css``

const openSymbolContainer = css`
  position: relative;
  height:30px;
  width 30px;
`

const leftLine = css`
  transition: all 0.2s ease-in-out;
  height: 14px;
  border-radius: 4px;
  transform: rotate(135deg);
  width: 2px;
  left: 9px;
  top: 8px;
  background-color: #0f346c;
  position: absolute;
`

const rightLine = css`
  transition: all 0.2s ease-in-out;
  height: 2px;
  border-radius: 34x;
  transform: rotate(-45deg);

  width: 14px;
  background-color: #0f346c;
  right: 3px;
  top: 14px;
  position: absolute;
`

const productContentContainer = css`
  margin-top: 10px;
`

const filterHeader = css`
  display: flex;
  padding-left: 5px;
  padding-right: 0px;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  font-size: 20px;
  font-family: varela round;
  color: #0f346c;
  cursor: pointer;
  // border-bottom:solid 1px #0f346c;

  &:active {
    // color: #151515;
  }
`

const filterOptionContainer = css``

const filterContainer = css`
  margin-top: 20px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: 18px;
  margin-right: 18px;
  background-color: #fff;
  box-shadow: 0px 2px 8px 0px rgba(31, 32, 68, 0.16);
  border-radius: 12px;
`

const productPageContainer = css`
  padding-left: 0;
  padding-right: 0;
`
