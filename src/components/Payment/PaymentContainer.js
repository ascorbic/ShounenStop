import React from 'react'
import { StaticQuery, graphql, navigate } from 'gatsby'
import { css } from '@emotion/core'
import Img from 'gatsby-image'
import axios from 'axios'
import CheckoutHeader from '../Checkout/CheckoutHeader'
import { Container, Row, Form } from 'react-bootstrap'
import CheckoutProgress from '../Checkout/CheckoutProgress'
import OrderSummary from '../Cart/OrderSummary'
import OrderDetails from '../Checkout/OrderDetails'
import ShippingDetails from '../Checkout/ShippingDetails'
import QACardList from './QACardList'

const sendOrderData = true

const delay = t => new Promise(resolve => setTimeout(resolve, t))

const secondsToMinutes = sec => {
  const minutes = '0' + Math.floor(sec / 60)
  const seconds = '0' + (sec % 60)
  return minutes.substr(-2) + ':' + seconds.substr(-2)
}

class PaymentContainer extends React.Component {
  constructor(props) {
    super(props)
    const paypalFeeAmount = Number((props.orderContext.totalPrice * 0.029 + 0.3).toFixed(2))
    this.state = {
      isValidating: false,
      timeLimitStarted: false,
      timeLimit: 600,
      orderTimestamp: new Date().toUTCString(),
      validateTimerId: '',
      paypalFeesEnabled: false,
      paypalFees: paypalFeeAmount,
      currentTotal: props.orderContext.totalPrice
    }

    this.startValidatingPayment = this.startValidatingPayment.bind(this)
    this.sendCheckoutData = this.sendCheckoutData.bind(this)
    this.stopTimeLimit = this.stopTimeLimit.bind(this)
    this.resetTimeLimit = this.resetTimeLimit.bind(this)
  }

  startValidatingPayment() {
    if (!this.state.isValidating) {
      this.setState({
        isValidating: true,
      })
      delay(3000).then(
        (this.state.validateTimerId = setInterval(() => {
          var self = this
          axios
            .get(
              'https://us-central1-shounenstop.cloudfunctions.net/CheckPaymentValidated?email=' +
                this.props.orderContext.userInfo.email +
                '&timestamp=' +
                this.state.orderTimestamp
            )
            .then(function(response) {
              console.log(response)
              if (response.data === 'VALID') {
                clearInterval(self.state.validateTimerId)
                navigate('/confirmation', {
                  state: { orderContext: self.props.orderContext },
                })
              }
            })
        }, 3000))
      )
    }
  }
  stopTimeLimit() {
    clearInterval(this.timer)
  }
  resetTimeLimit() {
    this.setState({ timeLimit: 600, timeLimitStarted: false })
  }

  sendCheckoutData() {
    var orderInfo = this.props.orderContext
    var timestamp = new Date().toUTCString()
    this.setState({ orderTimestamp: timestamp })
    orderInfo.timestamp = timestamp
    orderInfo.validated = false
    orderInfo.paypalFeesEnabled = this.state.paypalFeesEnabled
    orderInfo.totalPrice = this.state.currentTotal

    if (sendOrderData) {
      axios
        .post(
          'https://us-central1-shounenstop.cloudfunctions.net/Checkout',
          orderInfo
        )
        .then(function(response) {
          console.log(response)
        })
    }
  }

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
            className="col-xl-8 col-lg-7 col-md-12 col-sm-12 col-xs-12"
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
                  lockImage: file(relativePath: { eq: "lock.png" }) {
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
                  <>
                    <div
                      css={paypalContainer}
                      className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12"
                    >
                      <div css={paypalSecure}>
                        <Img
                          css={lockImgStyles}
                          fluid={data.lockImage.childImageSharp.fluid}
                        />
                        Secured by Paypal
                      </div>
                      <div css={timeLimitContainer}>
                        {'Session: ' + secondsToMinutes(this.state.timeLimit)}
                      </div>

                      <div css={paypalProcess}>
                        <div css={priceContainer}>
                          <Row css={priceText}>
                            <div css={dollarTop}>$</div>
                            <div css={priceActual}>
                              {this.state.currentTotal.toFixed(2)}
                            </div>
                          </Row>
                          <div css={currency}>USD</div>
                        </div>
                        <div
                          css={paypalButton}
                          onClick={() => {
                            if (sendOrderData) {
                              this.sendCheckoutData()
                              this.startValidatingPayment()
                            } else {
                              navigate('/confirmation', {
                                state: {
                                  orderContext: this.props.orderContext,
                                },
                              })
                            }
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
                      <div></div>
                      <Form.Group controlId="formBasicCheckbox">
                        <Form.Check
                          onClick={() => {
                            this.setState(prevState => {
                              var total = prevState.currentTotal
                              console.log(total)
                              console.log(this.state.paypalFees)
                              if(prevState.paypalFeesEnabled){
                                total -= this.state.paypalFees
                              }
                              else{
                                total += this.state.paypalFees
                              }
                              return {
                                paypalFeesEnabled: !prevState.paypalFeesEnabled,
                                currentTotal: total
                              }
                            })
                          }}
                          css={paypalGoodsCheckbox}
                          type="checkbox"
                          label="Enable Paypal Goods and Services for a fee."
                        />
                      </Form.Group>
                      {/* <div css={disclaimerContainer}>
                        <div css={disclaimerTextGoods}>
                          Please pay the exact amount <b>WITHOUT</b> goods and
                          services or the transaction will <b>NOT</b> succeed.
                        </div>
                        <div css={disclaimerTextReasons}>
                          This allows us to offer the best price by not having
                          to pay a fee. You can verify our credibility as a
                          seller below.
                        </div>
                      </div> */}
                    </div>
                    <div
                      css={QACardListContainer}
                      className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12"
                    >
                      <QACardList />
                    </div>
                  </>
                )
              }}
            />
          </div>

          <OrderSummary
            orderContext={this.props.orderContext}
            subTotal={this.props.orderContext.subTotal}
            fees={this.state.paypalFeesEnabled ? this.state.paypalFees : 0}
            totalItems={this.props.orderContext.totalItems}
            shippingInfo={this.props.orderContext.shippingInfo}
          >
            <ShippingDetails
              shippingData={this.props.orderContext.shippingInfo}
              userInfo={this.props.orderContext.userInfo}
            />
            <OrderDetails productData={this.props.orderContext.productData} />

            {/* Add shipping summary */}
          </OrderSummary>
        </Row>
      </Container>
    )
  }
}

const paypalGoodsCheckbox = css``

const disclaimerTextReasons = css`
  padding-top: 10px;
  font-size: 16px;
`

const disclaimerTextGoods = css`
  font-size: 18px;
`

const disclaimerContainer = css`
  text-align: center;
  margin-top: -10px;
  width: 100%;
  max-width: 520px;
  padding-bottom: 10px;
`

const lockImgStyles = css`
  width: 16px;
  height: 16px;
  margin-top: 8px;
  margin-right: 5px;
  @media only screen and (max-width: 350px) {
    margin-top: 6px;
    width: 13px;
    height: 13px;
  }
`

const paypalSecure = css`
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.4);
  position: absolute;
  top: -3px;
  left: -5px;
  font-size: 14px;
  letter-spacing: 1.5px;
  line-height: 35px;
  padding-left: 5px;
  padding-right: 5px;
  font-weight: 300;
  background-color: #0f346c;
  z-index: 1;
  display: inline-flex;
  color: #fff;
  @media only screen and (max-width: 350px) {
    font-size: 10px !important;
    line-height: 27px;
  }
`

const timeLimitContainer = css`
  position: absolute;
  text-align: right;
  width: 50%;
  right: 10px;
  color: #0f346c;
  font-family: lato;
  font-weight: 700;
  top: 0;
  font-size: 20px;
  @media only screen and (max-width: 350px) {
    font-size: 15px !important;
  }
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
  margin-top: 10px;
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
  padding-bottom: 5px;
`

const QACardListContainer = css`
  padding-right: 0;
  padding-left: 0;
  padding-bottom: 20px;
`

export default PaymentContainer
