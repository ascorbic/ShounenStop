import React from 'react'
import { Link } from 'gatsby'
import stripeLogo from '../images/powered_by_stripe.svg'
import { css } from "@emotion/core"


const navbar = css`
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.14)
`;


const navbarContainer = css `display:flex important; flex-direction: row; justify-content: space-between`;
const navbarMenu = css `margin-left:0`;
const navbarCart = css ``;


const navbarTitle = css ``;

const navbarBurger = css `margin-left:0`;

const BulmaNavbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: props.title,
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
        css = {navbar}
      >
        <div css={navbarContainer} className="container">
          <div css = {navbarMenu} className="navbar-brand">
              {/* Hamburger menu */}
              <div
              css={navbarBurger}
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <Link to="/" css={navbarTitle} className="navbar-item" title="Logo">
              {/* <img src={stripeLogo} alt="Kaldi" style={{ width: '88px' }} /> */}
              <b>{this.state.title}</b>
            </Link>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/products">
                Products
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link>
            </div>
          </div>   
         <div css={navbarCart}>Cart</div>
        </div>
      </nav>
    )
  }
}

export default Navbar
