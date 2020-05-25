import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout/layout'
import LandingImage from '../components/Index/landingImage'
import NewReleases from '../components/Index/newReleases'
import SEO from '../components/Common/seo'

import Checkout from '../components/checkout'

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`Shounen`, `Stop`, `Weiss`]} />
    {/* <Checkout /> */}
    <div>
      <LandingImage />
      <NewReleases />
    </div>
  </Layout>
)

      {/* <form action="/.netlify/functions/test" method="POST">
        <p>
          <label>What’s your name?
            <input type="text" name="name">
              </input>
              </label>
        </p>
        <p><button type="submit">Say hello!</button></p>
      </form> */}
export default IndexPage
