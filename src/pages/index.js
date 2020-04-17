import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import Checkout from '../components/checkout'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Checkout />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/* <Image /> */}
      <form action="/.netlify/functions/test" method="POST">
        <p>
          <label>What’s your name?
            <input type="text" name="name">
              </input>
              </label>
        </p>
        <p><button type="submit">Say hello!</button></p>
      </form>
    </div>
    <Link to="/advanced/"></Link>
  </Layout>
)

export default IndexPage
