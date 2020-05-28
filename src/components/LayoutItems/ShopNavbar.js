import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import Img from 'gatsby-image'

import { Navbar, Nav } from 'react-bootstrap'

const ShopNavbar = ({ pageInfo, CartSize, title }) => {
  const {
    cartImage,
    cardImage,
    merchandiseImage,
    playmatImage,
    contactImage,
  } = useStaticQuery(graphql`
    query {
      cartImage: file(relativePath: { eq: "shopping-cart.png" }) {
        childImageSharp {
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      cardImage: file(relativePath: { eq: "card.png" }) {
        childImageSharp {
          fixed(width: 27, height: 27) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      merchandiseImage: file(relativePath: { eq: "merchandise.png" }) {
        childImageSharp {
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      playmatImage: file(relativePath: { eq: "playmat.png" }) {
        childImageSharp {
          fixed(width: 24, height: 24) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      contactImage: file(relativePath: { eq: "contact.png" }) {
        childImageSharp {
          fixed(width: 27, height: 27) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Navbar
      fixed="top"
      className="py-0"
      css={[navbar, navbarBurger]}
      expand="lg"
      id="site-navbar"
    >
      <Navbar.Toggle
        className="navbar-toggle mr-auto"
        aria-controls="basic-navbar-nav"
      >
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar top-bar"></span>
        <span className="icon-bar middle-bar"></span>
        <span className="icon-bar bottom-bar"></span>
      </Navbar.Toggle>
      <Link to="/" className="link-no-style">
        <Navbar.Brand as="span" css={navbarBrand}>
          SHOUNEN STOP
        </Navbar.Brand>
      </Link>
      <Link to="/cart" className="order-lg-last ml-auto">
        <Nav css={navbarCart}>
          <Img fixed={cartImage.childImageSharp.fixed} />
          <span css={cartSizeStyles}>{CartSize}</span>
        </Nav>
      </Link>
      <Navbar.Collapse id="basic-navbar-nav" className="">
        <Nav
          className=""
          css={navbarCollapse}
          activeKey={pageInfo && pageInfo.pageName}
        >
          <Link to="/products" className="link-no-style">
            <div
              className="navWrapper"
              style={{
                marginLeft: '-2px',
              }}
            >
              <Img fixed={merchandiseImage.childImageSharp.fixed} />
              <Nav.Link as="span" eventKey="PRODUCTS">
                PRODUCTS
              </Nav.Link>
            </div>
          </Link>
          <Link to="/products/weiss" className="link-no-style">
            <div className="navWrapper">
              <Img fixed={cardImage.childImageSharp.fixed} />
              <Nav.Link as="span" eventKey="WEISS">
                WEISS
              </Nav.Link>
            </div>
          </Link>
          <Link to="/products/comiket" className="link-no-style">
            <div
              className="navWrapper"
              style={{
                marginLeft: '2px',
              }}
            >
              <Img fixed={playmatImage.childImageSharp.fixed} />
              <Nav.Link as="span" eventKey="COMIKET">
                COMIKET
              </Nav.Link>
            </div>
          </Link>
          <Link to="/contact" className="link-no-style">
            <div className="navWrapper">
              <Img fixed={contactImage.childImageSharp.fixed} />
              <Nav.Link as="span" eventKey="CONTACT">
                CONTACT
              </Nav.Link>
            </div>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}


const navbar = css`
  background-color: #fff;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.14);
`

const navbarBrand = css`
  letter-spacing: 2px;
  color: #5e727d !important;

  &:hover {
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    color: #0f346c !important;
  }
`

const navbarBurger = css`
  .navbar-toggle:hover > .icon-bar {
    background-color: #0f346c;
  }

  .navbar-toggle {
    border: none;
    background: transparent !important;

    &:hover {
      background: transparent !important;
    }

    .icon-bar {
      background-color: #5e727d;
      width: 22px;
      -webkit-transition: all 0.3s;
      -o-transition: all 0.3s;
      transition: all 0.3s;
    }

    &:hover > .icon-bar {
      color: #0f346c;
    }

    .top-bar {
      transform: rotate(45deg);
      transform-origin: 10% 10%;
    }
    .middle-bar {
      opacity: 0;
    }
    .bottom-bar {
      transform: rotate(-45deg);
      transform-origin: 10% 90%;
    }
  }

  .icon-bar {
    display: block;
    width: 22px;
    height: 2px;
    border-radius: 1px;
    background-color: #0f346c;
  }

  .icon-bar + .icon-bar {
    margin-top: 4px;
  }

  .navbar-toggle.collapsed {
    .top-bar {
      transform: rotate(0);
    }
    .middle-bar {
      opacity: 1;
    }
    .bottom-bar {
      transform: rotate(0);
    }
  }
`

const cartSizeStyles = css`
  position: absolute;
  background-color: #0f346c;
  color: #fff;
  height: 18px;
  width: 18px;
  font-size: 12px;
  line-height: 18px;
  border-radius: 50%;
  padding: 0 3px 0 4px;
  right: -5px;
  top: -2px;


  align-items: center;
  justify-content: center;
  text-align: center;
`

const navbarCart = css`
  color: #5e727d;
  position: absolute;
  right: 16px;
  top: 5px;
  &:hover span{
    cursor: pointer;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    transform: scale(1.10);
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
  }
`

const navbarCollapse = css`
  border-top: solid 1px #f0f0f0;
  justify-content: left;
  span.nav-link.active {
    font-weight: bold;
    color: #0f346c !important;
  }
`

export default ShopNavbar
