import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/LayoutItems/Layout'
import LandingImage from '../components/Index/landingImage'
import ComiketBanner from '../components/Index/ComiketBanner'
import NewReleases from '../components/Index/newReleases'
import SEO from '../components/Common/seo'

import Checkout from '../components/checkout'

const IndexPage = ({data}) => {
  console.log(data);
  
  return(
    <Layout pageInfo={{ pageName: "index" }}>
      <SEO title="Home" keywords={[`Shounen`, `Stop`, `Weiss`]} />
      {/* <Checkout /> */}
      <div>
        <LandingImage />
        <NewReleases />
        <ComiketBanner/>
      </div>
    </Layout>
  )
}
export default IndexPage

// export const IndexQuery = graphql`
// query IndexPageQuery($slug: String!) {
//   markdownRemark(fields: { slug: { eq: $slug } }) {
//     frontmatter {
//       name,
//       asin,
//       producttype,
//       series,
//       color,
//       image {
//         childImageSharp {
//           fluid(maxWidth: 500, quality:100) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       },
//       weight,
//       preorder(formatString:"MMM DD"),
//       release(formatString:"MMM DD"),
//     }
//   }
// }
// `;
