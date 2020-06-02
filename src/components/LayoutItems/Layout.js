import React from 'react'
import { StaticQuery, graphql, navigate } from 'gatsby'
import { ToastContainer, Slide } from 'react-toastify'
import { CartContext } from './CartContext'
import { css } from '@emotion/core'

import ShopNavbar from './ShopNavbar'
import LayoutFooter from './LayoutFooter'
import 'react-toastify/dist/ReactToastify.min.css'

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
            <ToastContainer
              closeButton={false}
              closeOnClick
              onClick={() => {window.location.pathname !== "/cart" && navigate('/cart')}}
              transition={Slide}
              limit={3}
              css={toastStyles}
              rtl
            />
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

const toastStyles = css`
  .Toastify__progress-bar{
    border-bottom-right-radius:4px;
  }

  .Toastify__toast--rtl {
    font-family: varela round;
    border-radius:4px;
    // background-color:#0f346c;
    color:#0f346c;

    margin-bottom: 20px;

    @media only screen and (max-width: 480px) {
      // right:0;
    }
  }
`

export default Layout
