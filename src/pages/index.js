import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/LayoutItems/Layout'
import LandingImage from '../components/Index/landingImage'
import ComiketBanner from '../components/Index/ComiketBanner'
import NewReleases from '../components/Index/newReleases'
import SEO from '../components/Common/seo'

import Checkout from '../components/checkout'

const IndexPage = () => {
  const data = useStaticQuery(query)

  const {
    landingText,
    landingSubtitle,
    landingImage,
    release1,
    release2,
    release3,
  } = data.landingPageInfo.frontmatter
  const newReleaseData = {
    release1: data.weissProducts.edges.find(
      x => x.node.frontmatter.asin === release1
    ).node.frontmatter,
    release2: data.weissProducts.edges.find(
      x => x.node.frontmatter.asin === release2
    ).node.frontmatter,
    release3: data.weissProducts.edges.find(
      x => x.node.frontmatter.asin === release3
    ).node.frontmatter,
  }
  const typeSizes = {
    "undefined": () => 0,
    "boolean": () => 4,
    "number": () => 8,
    "string": item => 2 * item.length,
    "object": item => !item ? 0 : Object
      .keys(item)
      .reduce((total, key) => sizeOf(key) + sizeOf(item[key]) + total, 0)
  };
  
  const sizeOf = value => typeSizes[typeof value](value);
  console.log(sizeOf(data));
  console.log(sizeOf(data.landingPageInfo.frontmatter));
  console.log(sizeOf(data.weissProducts));


  return (
    <Layout pageInfo={{ pageName: 'index' }}>
      <SEO title="Home" keywords={[`Shounen`, `Stop`, `Weiss`]} />
      {/* <Checkout /> */}
      <LandingImage
        landingImageData={landingImage}
        landingText={landingText}
        landingSubtitle={landingSubtitle}
      />
      <NewReleases releaseList={newReleaseData} />
      <ComiketBanner />
    </Layout>
  )
}
export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    landingPageInfo: markdownRemark(fields: { slug: { eq: "/landingPage/" } }) {
      frontmatter {
        landingText
        landingSubtitle
        producttype
        landingImage {
          childImageSharp {
            fluid(maxWidth: 3000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        release1
        release2
        release3
      }
    }
    weissProducts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/weiss/" } }
    ) {
      edges {
        node {
          frontmatter {
            asin
            name
            producttype
            series
            color
            image {
              childImageSharp{
                fluid(maxWidth: 500, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            pricings {
              quantity
              price
            }
            weight
            preorder(formatString: "MMM DD")
            release(formatString: "MMM DD")
            merchandise
          }
        }
      }
    }
  }
`
