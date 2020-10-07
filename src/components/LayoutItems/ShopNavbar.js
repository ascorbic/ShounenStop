import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import Img from 'gatsby-image'
import ContextConsumer from './CartContext'

import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

const ShopNavbar = ({ pageInfo, title }) => {
  const {
    siteLogo,
    cartImage,
    cardImage,
    merchandiseImage,
    playmatImage,
    contactImage,
    faqImage,
    userImage,
    comicBookImage,
  } = useStaticQuery(graphql`
    query {
      siteLogo: file(relativePath: { eq: "shounenStopLogo.png" }) {
        childImageSharp {
          fixed(width: 27, height: 27) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      cartImage: file(relativePath: { eq: "shopping-cart.png" }) {
        childImageSharp {
          fixed(width: 24, height: 24) {
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
      faqImage: file(relativePath: { eq: "qa.png" }) {
        childImageSharp {
          fixed(width: 27, height: 27) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      userImage: file(relativePath: { eq: "userIcon.png" }) {
        childImageSharp {
          fixed(width: 21, height: 21) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      comicBookImage: file(relativePath: { eq: "comicBook.png" }) {
        childImageSharp {
          fixed(width: 22, height: 22) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  // const [isOpen, updateIsOpen] = useState(true)
  return (
    <ContextConsumer>
      {context => (
        <Navbar
          fixed="top"
          className="py-0"
          css={[navbar, navbarBurger]}
          expand="lg"
          collapseOnSelect
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
          <Link to="/" activeClassName="active">
            <Navbar.Brand as="span" css={navbarBrand}>
              <Img
                fixed={siteLogo.childImageSharp.fixed}
                css={siteLogoStyles}
              />
              <div css={navbarBrandText}>HOUNEN STOP</div>
            </Navbar.Brand>
          </Link>
          <Link to="/cart" className="order-lg-last ml-auto">
            <Nav css={navbarCart}>
              <Img fixed={cartImage.childImageSharp.fixed} />
              {Object.keys(context).filter(key => context[key] !== undefined)
                .length -
                3 !==
                0 && (
                <span css={cartSizeStyles}>
                  {Object.keys(context).filter(
                    key => context[key] !== undefined
                  ).length - 3}
                </span>
              )}
            </Nav>
          </Link>
          <Navbar.Collapse id="basic-navbar-nav" className="">
            <Nav className="" css={navbarCollapse}>
              <div
                className="dropdownNavWrapper"
                style={{
                  marginLeft: '-2px',
                }}
                css={dropdownHover}
              >
                <Img fixed={merchandiseImage.childImageSharp.fixed} />
                <NavDropdown
                  disabled
                  rootCloseEvent="onClick"
                  onClick={() => {}}
                  renderMenuOnMount
                  title="PRODUCTS"
                >
                  <div
                    className="navWrapper"
                    style={{
                      marginLeft: '-4px',
                    }}
                  >
                    <Img fixed={cardImage.childImageSharp.fixed} />
                    <Link to="/products/weiss">
                      <Nav.Link as="span" href="/products/weiss">
                        WEISS
                      </Nav.Link>
                    </Link>
                  </div>
                  {/* <div
                    className="navWrapper"
                    style={{
                      marginLeft: '-1px',
                    }}
                  >
                    <Img fixed={playmatImage.childImageSharp.fixed} />
                    <Link to="/products/comiket" activeClassName="active">
                      <Nav.Link as="span" href="/products/comiket">
                        COMIKET
                      </Nav.Link>
                    </Link>
                  </div> */}
                  <div
                    className="navWrapper"
                    style={{
                      marginLeft: '0px',
                    }}
                  >
                    <Img fixed={comicBookImage.childImageSharp.fixed} />
                    <Link to="/products/other" activeClassName="active">
                      <Nav.Link as="span" href="/products/other">
                        OTHER
                      </Nav.Link>
                    </Link>
                  </div>
                </NavDropdown>
              </div>

              {/* <Link to="/products/weiss" activeClassName="active">
                <div className="navWrapper">
                  <Img fixed={cardImage.childImageSharp.fixed} />
                  <Nav.Link as="span">WEISS</Nav.Link>
                </div>
              </Link>
              <Link to="/products/comiket" activeClassName="active">
                <div
                  className="navWrapper"
                  style={{
                    marginLeft: '2px',
                  }}
                >
                  <Img fixed={playmatImage.childImageSharp.fixed} />
                  <Nav.Link as="span">COMIKET</Nav.Link>
                </div>
              </Link> */}
              <Link to="/contact" activeClassName="active">
                <div className="navWrapper">
                  <Img fixed={contactImage.childImageSharp.fixed} />
                  <Nav.Link as="span" href="/contact">
                    CONTACT
                  </Nav.Link>
                </div>
              </Link>
              <Link to="/faq" activeClassName="active">
                <div className="navWrapper">
                  <Img fixed={faqImage.childImageSharp.fixed} />
                  <Nav.Link as="span" href="/faq">
                  FAQ
                  </Nav.Link>
                </div>
              </Link>
              <Link to="/about" activeClassName="active">
                <div className="navWrapper">
                  <Img fixed={userImage.childImageSharp.fixed} />
                  <Nav.Link as="span" href="/about">
                    ABOUT
                  </Nav.Link>
                </div>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )}
    </ContextConsumer>
  )
}

const dropdownHover = css`
  cursor: pointer;
  &:hover div a {
    color: #0f346c !important;
  }
`

const navbar = css`
  background-color: #fff;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.14);
`

const navbarBrand = css`
  letter-spacing: 2px;
  margin-left:.1rem;
  margin-right: .1rem;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  &:hover {
    margin-left: -5px;
    letter-spacing: 3px;
  }
`

const navbarBrandText = css`
  background: linear-gradient(to right, #13346c, #4c91a9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border-top:1px solid white;
  outline:1px solid white;
`

const navbarBurger = css`
  .navbar-toggle:hover > .icon-bar {
    background-color: #0f346c;
  }

  .navbar-toggle {
    border: none;
    background: transparent !important;
    padding-left: 0px !important;
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

const siteLogoStyles = css`
  margin-right: -2px;
  margin-top: -1px;
`

const cartSizeStyles = css`
  position: absolute;
  background-color: #0f346c;
  color: #fff;
  height: 19px;
  width: 19px;
  font-size: 11px;
  line-height: 16px;
  border-radius: 50%;
  padding: 2px 3px 0 3px;
  right: -8px;
  top: -7px;

  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const navbarCart = css`
  color: #5e727d;
  display:flex;
  flex-wrap:nowrap;
  margin-right:-20px
  align-items:center;
  // position: absolute;
  // right: 16px;
  // top: 9px;
  &:hover span {
    cursor: pointer;
    transform: scale(1.1);
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
  }
`

const navbarCollapse = css`
  border-top: solid 1px #f0f0f0;
  justify-content: left;
  // span.nav-link.active {
  //   font-weight: bold;
  //   color: #0f346c !important;
  // }
`

export default ShopNavbar
