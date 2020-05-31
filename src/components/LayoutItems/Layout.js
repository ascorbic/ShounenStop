import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import ShopNavbar from './ShopNavbar'
import LayoutFooter from './LayoutFooter'
import { CartContext } from "./CartContext"

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    // good way to use const for props const {children, pageInfo} = this.props
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <CartContext>
            <ShopNavbar
              pageInfo={this.props.pageInfo}
              CartSize={Object.keys(this.state).length}
              title={data.site.siteMetadata.title}
            />
            <div
              style={{
                marginTop: `40px`,
                marginLeft: ` auto`,
                padding: `0px`,
                paddingTop: '0px',
                fontFamily: 'Montserrat',
                fontWeight: 300,
              }}
            >
              {this.props.children}
            </div>
            <LayoutFooter />
          </CartContext>
        )}
      />
    )
  }
}

export default Layout
