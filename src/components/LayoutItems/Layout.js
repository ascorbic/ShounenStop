import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import ShopNavbar from './ShopNavbar'
import Checkout from '../checkout'
import LayoutFooter from './LayoutFooter'

import './Layout.css'

// console.log(localStorage.getItem("omg"));
// Have a cart icon and set price

class Layout extends React.Component {
  state = {
    CartSize: 0,
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.updateCart = this.updateCart.bind(this)
    localStorage.setItem('CartSize', JSON.stringify([1, 2, 3]))
    console.log(JSON.parse(localStorage.getItem('CartSize')).length)
    this.setState({
      CartSize: JSON.parse(localStorage.getItem('CartSize')).length,
    })
  }

  updateCart() {
    var items = JSON.parse(localStorage.getItem('CartSize')) || []
    items.push(4)
    localStorage.setItem('CartSize', JSON.stringify(items))
    this.setState({
      CartSize: items.length,
    })
    console.log(this.state.CartSize)
  }

  renderChildren() {
    return React.Children.map(this.props.children, child => {
      // console.log(child.type);
      if (child.type === Checkout) {
        return React.cloneElement(child, {
          updateCart: this.updateCart,
        })
      } else {
        return child
      }
    })
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
          <>
            <ShopNavbar
              pageInfo={this.props.pageInfo}
              CartSize={this.state.CartSize}
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
              {this.renderChildren()}
            </div>
            <LayoutFooter />
          </>
        )}
      />
    )
  }
}

export default Layout
