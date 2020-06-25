import React, { useState } from 'react'
import { graphql } from 'gatsby'

import { css } from '@emotion/core'
import { Container } from 'react-bootstrap'
import ProductPageContainer from '../../components/Products/ProductPageContainer'
import ComiketProductCard from '../../components/Comiket/ComiketProductCard'
import FilterProductCategory from '../../components/Products/FilterProductCategory'

const Comiket = ({ data, location }) => {
  const comiketProductData = data.comiketProducts.edges
  const comiketEventInfo = data.comiketEventInfo.edges
    .sort((a, b) => (a.node.frontmatter.currentEvent === true ? -1 : 1))
    .slice()

  var currentEventKey = ''
  var currentPreorder = ''
  var currentReceive = ''
  var eventFilterList = Object.keys(comiketEventInfo).map(function(edge) {
    const comiketEventInfoEdge = comiketEventInfo[edge].node.frontmatter
    if (comiketEventInfoEdge.currentEvent) {
      currentEventKey = comiketEventInfoEdge.eventName
      currentPreorder = comiketEventInfoEdge.preorder
      currentReceive = comiketEventInfoEdge.receive
    }
    return comiketEventInfoEdge.eventName
  })

  const productTypeFilterList = ['All', 'Playmat', 'Sleeves']
  const [productTypeFilterItem, setProductTypeFilterItem] = useState('All')
  const [currentEventFilterListItem, setCurrentEventFilterListItem] = useState(
    currentEventKey
  )
  return (
    <Container css={productPageContainer} fluid>
      <ProductPageContainer selectedProductCategory="Comiket">
        <div
          css={containerNoPadding}
          className={'col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12'}
        >
          <div css={filterContainer} className="stickyFilter">
            <FilterProductCategory filterName="Product Type" currentFilter={productTypeFilterItem}>
              {productTypeFilterList.map(filterItem => (
                <div
                  key={filterItem}
                  className={
                    filterItem === productTypeFilterItem
                      ? 'productCategoryFilterSelected'
                      : ''
                  }
                  css={filterListItem}
                  onClick={() => {
                    setProductTypeFilterItem(filterItem)
                  }}
                >
                  {filterItem}
                </div>
              ))}
            </FilterProductCategory>
            <FilterProductCategory filterName="Event" currentFilter={currentEventFilterListItem}>
              {eventFilterList.map(filterItem => (
                <div
                  key={filterItem}
                  className={
                    filterItem === currentEventFilterListItem
                      ? 'productCategoryFilterSelected'
                      : ''
                  }
                  css={filterListItem}
                  onClick={() => {
                    setCurrentEventFilterListItem(filterItem)
                  }}
                >
                  {filterItem}
                </div>
              ))}
            </FilterProductCategory>
          </div>
        </div>
        <div
          css={productContainer}
          className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12"
        >
          <div css={productCategoryHeaderContainer}>
            <div css={productCategoryHeader}>{currentEventFilterListItem}</div>
            {currentEventKey === currentEventFilterListItem ? (
              <div css={eventDateText}>
                <div css={dateTextContainer}>
                  <div css={dateField}>Preorder By</div>
                  <div css={dateValue}>{currentPreorder}</div>
                </div>
                <div css={dateTextContainer}>
                  <div css={dateField}>Estimated Arrival</div>
                  <div css={dateValue}>{currentReceive}</div>
                </div>
              </div>
            ) : null}
            <div css={productHeaderSubtitleText}>
              {currentEventKey === currentEventFilterListItem
                ? "If we can't purchase the item at the event, we will refund you after the event is over"
                : ''}
            </div>
          </div>
          <div className="row" css={productContentWrapper}>
            {comiketProductData
              .filter(edge => {
                return productTypeFilterItem !== 'All'
                  ? edge.node.frontmatter.producttype === productTypeFilterItem
                  : true
              })
              .filter(edge => {
                return currentEventFilterListItem !== ''
                  ? edge.node.frontmatter.eventName ===
                      currentEventFilterListItem
                  : true
              })
              .map(edge => (
                <ComiketProductCard
                  key={edge.node.frontmatter.asin}
                  asin={edge.node.frontmatter.asin}
                  imgData={edge.node.frontmatter.image.childImageSharp.fluid}
                  price={edge.node.frontmatter.pricings[0].price}
                  productType={edge.node.frontmatter.producttype}
                  eventName={edge.node.frontmatter.eventName}
                  url={'/products' + edge.node.fields.slug}
                />
              ))}
          </div>
        </div>
      </ProductPageContainer>
    </Container>
  )
}

export default Comiket

const eventDateText = css`
  width: 50%;
  float: right;
  padding-top: 10px;
`

const dateValue = css`
  color: #444;
`

const dateField = css`
  color: #0f346c;
  font-size: 18px;
  font-weight: 700;
`
const dateTextContainer = css`
  font-family: varela round;
  font-size: 15px;
  text-align: right;
`

const filterContainer = css``

const filterListItem = css`
  border-radius: 6px;
  font-family: lato;
  height: 40px;
  line-height: 40px;
  padding-left: 15px;
  color: #444;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-overflow: ellipsis;
  white-space: nowrap; 
  overflow:hidden;
  &:hover,
  active {
    background-color: #f0f7ff;
  }
`

const containerNoPadding = css`
  padding-right: 0;
  padding-left: 0;
  padding-top: 5px;
`

const productCategoryHeader = css`
  float: left;
  width: 50%;
  color: #0f346c;
  font-size: 30px;
  font-family: varela round;
`

const productHeaderSubtitleText = css`
  width: 50%;
  clear: left;
  color: #444;
  font-size: 15px;
  font-family: varela round;
`

const productCategoryHeaderContainer = css`
  position: relative;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
`

const productPageContainer = css`
  margin-top: 20px;
  margin-bottom: 0px;
  padding-right: 0;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const productContentWrapper = css`
  margin-top: 0;
  margin-left: 0;
  margin-right: 0;
  padding-left: 0;
  padding-right: 0;
  width: 100%;
`

const productContainer = css`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 20px;
`

export const ComiketProductCategoryQuery = graphql`
  query ComiketProductCategoryQuery {
    comiketProducts: allMarkdownRemark(
      filter: { frontmatter: { merchandise: { eq: "comiket" } } }
    ) {
      edges {
        node {
          frontmatter {
            asin
            producttype
            eventName
            image {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            pricings {
              quantity
              price
            }
            weight
            merchandise
          }
          fields {
            slug
          }
        }
      }
    }
    comiketEventInfo: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/comiketEvents/" } }
    ) {
      edges {
        node {
          frontmatter {
            eventName
            eventDesc
            currentEvent
            preorder(formatString: "MMM DD")
            receive(formatString: "MMM DD")
          }
        }
      }
    }
  }
`
