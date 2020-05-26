import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

import { Navbar, Nav } from 'react-bootstrap'

const ShopNavbar = class extends React.Component {
  constructor(props) {
    console.log(props.pageInfo);
    super(props);
    this.state = {
      collapsed: false
    }
  }

  render() {
    return (
      <>
        <Navbar fixed="top" className="py-0" onToggle={collapsed=>{this.setState({collapsed:collapsed});console.log(collapsed)}} css={[navbar, navbarBurger]}  expand="lg" id="site-navbar">
          {/* <Container> */}
          <Navbar.Toggle className="navbar-toggle mr-auto" aria-controls="basic-navbar-nav">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar top-bar"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
          </Navbar.Toggle>
          <Link to="/" className="link-no-style">
            <Navbar.Brand as="span" css={navbarBrand} >SHOUNEN STOP</Navbar.Brand>
          </Link>
          <Link to="/cart" className="order-lg-last ml-auto">
            <Nav css={navbarCart}>
              Cart: {this.props.CartSize}
            </Nav>
          </Link>
          <Navbar.Collapse id="basic-navbar-nav" css={navbarCollapsible} className="">
            <Nav className="" css = {navbarCollapse} activeKey={this.props.pageInfo && this.props.pageInfo.pageName}>
              <Link to="/products" className="link-no-style">
                <Nav.Link as="span" eventKey="PRODUCTS">
                  PRODUCTS
                </Nav.Link>
              </Link>
              <Link to="/products/weiss" className="link-no-style">
                <Nav.Link as="span" eventKey="WEISS">
                  WEISS
                </Nav.Link>
              </Link>
              <Link to="/products/comiket" className="link-no-style">
                <Nav.Link as="span" eventKey="COMIKET">
                  COMIKET
                </Nav.Link>
              </Link>
              <Link to="/contact" className="link-no-style">
                <Nav.Link as="span" eventKey="CONTACT">
                  CONTACT
                </Nav.Link>
              </Link>
            </Nav>
            {/* <Nav className="" activeKey={this.props && this.props.pageInfo.pageName}>

            </Nav>
            <Nav className="" activeKey={this.props && this.props.pageInfo.pageName}>

            </Nav>
            <Nav className="" activeKey={this.props && this.props.pageInfo.pageName}>

            </Nav> */}
            {/* <Nav className="">
              <Form inline onSubmit={e => e.preventDefault()}>
                <Form.Group>
                  <FormControl
                    type="text"
                    placeholder="Fake Search"
                    className="mr-2"
                  />
                </Form.Group>
                <Button>Fake Button</Button>
              </Form>
            </Nav> */}
          </Navbar.Collapse>
          {/* </Container> */}
        </Navbar>

      </>
    )
  }
}

const navbar = css`
  background-color:#fff;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.14);
`;

const navbarBrand = css`
  letter-spacing: 2px;
  color: #5e727d!important;

  &:hover{
    -webkit-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
    color: #0f346c !important;
  }

`;

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
    -webkit-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
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

.icon-bar{
  display: block;
  width: 22px;
  height: 2px;
  border-radius: 1px;
  background-color: #0f346c;
}

.icon-bar+.icon-bar{
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
`;

const navbarCart = css`

  color: #5e727d;

  &:hover{
    cursor: pointer;
    -webkit-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
    color: #0f346c !important;
  }
`;

const navbarCollapse = css`
  border-top: solid 1px #f0f0f0;

  span.nav-link.active{
    font-weight: bold;
    color:#0f346c !important;
  }
`;

const navbarCollapsible = css`
  // background-color:green;

  // &:not(.show):hover{
  // }
  // &.show:hover  {
  //   background-color:blue;
  // }
`;

export default ShopNavbar
