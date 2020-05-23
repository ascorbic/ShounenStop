import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout/layout'
import SEO from '../components/Common/seo'

const Products = () => (
  <Layout>
    <SEO title="Shop" />
    <h1>Sucess!</h1>
    <Link to="/">Shop again</Link>
  </Layout>
)

export default Products
