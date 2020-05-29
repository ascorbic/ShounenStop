import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/LayoutItems/Layout'
import SEO from '../../components/Common/seo'

const Weiss = () => (
  <Layout pageInfo={{pageName:"WEISS"}}>
    <SEO title="Shop" />
    <h1>Sucess!</h1>
    <Link to="/">Shop again</Link>
  </Layout>
)

export default Weiss
