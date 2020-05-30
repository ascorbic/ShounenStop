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
    ).node,
    release2: data.weissProducts.edges.find(
      x => x.node.frontmatter.asin === release2
    ).node,
    release3: data.weissProducts.edges.find(
      x => x.node.frontmatter.asin === release3
    ).node,
  }

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


//get slug
export const query = graphql`
  query IndexPageQuery {
    landingPageInfo: markdownRemark(fields: { slug: { eq: "/landingPage/" } }) {
      frontmatter {
        landingText
        landingSubtitle
        producttype
        landingImage {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
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
            displayName
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
          fields{
            slug
          }
        }
      }
    }
  }
`
