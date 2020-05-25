import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import ShopNavbar from './shopNavbar'
import Checkout from '../checkout'


import './layout.css'

// console.log(localStorage.getItem("omg"));
// Have a cart icon and set price

class Layout extends React.Component {
  constructor(props){
    super(props);
    this.state = 
    {
      CartSize:0
    }
  }

  componentDidMount() {
    this.updateCart = this.updateCart.bind(this)
    localStorage.setItem("CartSize", JSON.stringify([1,2,3]));
    console.log(JSON.parse(localStorage.getItem("CartSize")).length);
    this.setState({
      CartSize: JSON.parse(localStorage.getItem("CartSize")).length
    });
  }

  updateCart(){
    var items = JSON.parse(localStorage.getItem("CartSize")) || [];
    items.push(4);
    localStorage.setItem("CartSize", JSON.stringify(items));
    this.setState({
      CartSize: items.length
    });
    console.log(this.state.CartSize);

  }

  renderChildren() 
  {
    return React.Children.map(this.props.children, child => {
      // console.log(child.type);
      if (child.type === Checkout) {
        return React.cloneElement(child, {
          updateCart: this.updateCart
        })
      } 
      else 
      {
        return child;
      }
    });
  }

  render() 
  {
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
        render = {data => (
          <>
            <ShopNavbar CartSize={this.state.CartSize} title={data.site.siteMetadata.title}/>
            <div
              style={{
                marginTop: `40px`,
                marginLeft: ` auto`,
                padding: `0px`,
                paddingTop: "0px",
                fontFamily: "Montserrat",
                fontWeight: 300
              }}
            >
              {this.renderChildren()}
              {/* <footer
              style={{
                backgroundColor:`#f4f7f9`,
              }}
              >
                feet stuff
              </footer> */}
            </div>
            </>
        )}
      />
    )
  };
};

export default Layout
