import React from 'react'
import { StaticQuery, graphql, navigate } from 'gatsby'
import { css } from '@emotion/core'
import Img from 'gatsby-image'
import axios from 'axios'
import CheckoutHeader from '../Checkout/CheckoutHeader'
import { Container, Row } from 'react-bootstrap'
import CheckoutProgress from '../Checkout/CheckoutProgress'
import OrderSummary from '../Cart/OrderSummary'

const sendOrderData = true

const delay = t => new Promise(resolve => setTimeout(resolve, t))

const secondsToMinutes = sec => {
  const minutes = '0' + Math.floor(sec / 60)
  const seconds = '0' + (sec % 60)
  return minutes.substr(-2) + ':' + seconds.substr(-2)
}

class PaymentContainer extends React.Component {
  constructor(props) {
    var today = new Date() //date.now?
    const orderTimestamp = today.toUTCString()
    super(props)
    this.state = {
      isValidating: false,
      timeLimitStarted: false,
      timeLimit: 600,
      orderTimestamp: orderTimestamp,
      validateTimerId:""
    }

    this.startValidatingPayment = this.startValidatingPayment.bind(this)
    this.stopTimeLimit = this.stopTimeLimit.bind(this)
    this.resetTimeLimit = this.resetTimeLimit.bind(this)

    var orderInfo = props.orderContext
    orderInfo.timestamp = orderTimestamp
    orderInfo.validated = false

    if (sendOrderData) {
      axios
        .post(
          'https://us-central1-shounenstop.cloudfunctions.net/Checkout',
          orderInfo
        )
        .then(function(response) {
          // handle success
          console.log(response)
        })
    }
  }

  startValidatingPayment() {
    if (!this.state.isValidating) {
      this.setState({
        isValidating: true,
      })
      delay(3000).then(
        (this.state.validateTimerId = setInterval(() => {
          var self = this;
          axios
            .get(
              'https://us-central1-shounenstop.cloudfunctions.net/CheckPaymentValidated?email=' +
                this.props.orderContext.userInfo.email +
                '&timestamp=' +
                this.state.orderTimestamp
            )
            .then(function(response) {
              if (response.data === 'VALID') {
                clearInterval(self.state.validateTimerId)
                navigate('/confirmation', {
                  state: { orderContext: self.props.orderContext },
                })
              }
            })
        }, 5000))
      )
    }
  }
  stopTimeLimit() {
    clearInterval(this.timer)
  }
  resetTimeLimit() {
    this.setState({ timeLimit: 600, timeLimitStarted: false })
  }

  confirmPayment() {}

  componentDidMount() {
    this.setState({
      timeLimitStarted: true,
    })
    this.timer = setInterval(() => {
      this.setState(prevState => {
        if (prevState.timeLimit <= 0) {
          this.stopTimeLimit()
          navigate('/cart')
        }

        return {
          timeLimit: prevState.timeLimit - 1,
        }
      })
    }, 1000)
  }

  componentWillUnmount() {
    this.stopTimeLimit()
  }

  //place order
  render() {
    return (
      <Container fluid>
        <Row>
          <CheckoutProgress orderContext={this.props.orderContext} phase={3} />
        </Row>
        <Row>
          <div
            css={paymentContainer}
            className="col-xl-9 col-lg-8 col-md-12 col-sm-12 col-xs-12"
          >
            <CheckoutHeader
              header="Payment"
              headerNavigate={() => {
                this.stopTimeLimit()
                navigate('/checkout', {
                  state: { orderContext: this.props.orderContext },
                })
              }}
            />
            <div
              css={paypalContainer}
              className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12"
            >
              <div css={timeLimitContainer}>
                <div></div>
                {secondsToMinutes(this.state.timeLimit)}
              </div>
              <StaticQuery
                query={graphql`
                  query {
                    paypalMeImage: file(
                      relativePath: { eq: "paypalmewhitetoned.png" }
                    ) {
                      childImageSharp {
                        fluid(maxWidth: 500) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                `}
                render={data => {
                  return (
                    <div css={paypalProcess}>
                      <div css={priceContainer}>
                        <Row css={priceText}>
                          <div css={dollarTop}>$</div>
                          <div css={priceActual}>
                            {this.props.orderContext.totalPrice.toFixed(2)}
                          </div>
                        </Row>
                        <div css={currency}>USD</div>
                      </div>
                      <div
                        css={paypalButton}
                        onClick={() => {
                          this.startValidatingPayment()
                        }}
                      >
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={
                            'https://paypal.me/jonathanwu70/' +
                            this.props.orderContext.totalPrice.toFixed(2) +
                            'USD'
                          }
                          css={paypalButtonLink}
                        >
                          <Img
                            css={imgStyles}
                            fluid={data.paypalMeImage.childImageSharp.fluid}
                          />
                        </a>
                      </div>
                    </div>
                  )
                }}
              />
            </div>
          </div>
          <OrderSummary
            orderContext={this.props.orderContext}
            subTotal={this.props.orderContext.subTotal}
            totalItems={this.props.orderContext.totalItems}
            shippingInfo={this.props.orderContext.shippingInfo}
          >
            {/* Add shipping summary */}
          </OrderSummary>
        </Row>
      </Container>
    )
  }
}

const timeLimitContainer = css`
  position: absolute;
  right: 10px;
  color: #0f346c;
  font-family: lato;
  font-weight: 700;
  top: 0;
  font-size: 20px;
`

const paypalButtonLink = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const currency = css`
  font-size: 15px;
`

const priceActual = css`
  height: 100%;
  padding-top: 10px;
  line-height: 40px;
`

const priceText = css`
  align-items: center;
  justify-content: center;
  position: flex;
  flex-wrap: nowrap;
`

const dollarTop = css`
  font-size: 18px;
  height: 100%;
  line-height: 30px;
  padding-right: 4px;
  align-self: flex-start;
`

const priceContainer = css`
  font-size: 35px;
  text-align: center;
  color: #151515;
  position: relative;
  width: 100%;
`

const imgStyles = css`
  height: 45px;
  width: 100px;
  max-width: 150px;
`

const paypalButton = css`
  position: relative;
  border-radius: 6px;
  height: 60px;
  width: 100%;
  max-width: 300px;
  background-color: #0070ba;
  margin-top: -30px;

  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1), cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-duration: 300ms, 300ms, 300ms, 300ms;

  &:hover {
    background-color: #003087;
  }

  &:active {
    background-color: #003087;
  }
`

const paypalProcess = css`
  margin-top: 20px;
  height: 200px;
  width: 100%;

  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`

const paypalContainer = css`
  border-radius: 9px;

  align-items: center;
  justify-content: center;
  box-shadow: rgba(31, 32, 68, 0.16) 0px 2px 8px 0px;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

const paymentContainer = css`
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 20px;
`

export default PaymentContainer
