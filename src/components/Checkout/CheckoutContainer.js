import React from 'react'
import { navigate } from 'gatsby'
import { css } from '@emotion/core'
import { Formik, Field } from 'formik'
import { Container, Row } from 'react-bootstrap'
import CheckoutProgress from './CheckoutProgress'
import * as Yup from 'yup'
import OrderSummary from '../Cart/OrderSummary'
import OrderDetails from './OrderDetails'

const CheckoutContainer = ({ orderContext }) => {
  const alpha = /^[a-zA-Z_]+( [a-zA-Z_]+)*$/
  orderContext.userInfo = {}
  // console.log(orderContext)
  return (
    <Formik
      initialValues={{
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        apt: '',
        city: '',
        state: '',
        zip: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        address: Yup.string().required('Required'),
        city: Yup.string()
          .matches(alpha, {
            message: 'Enter Valid City Name',
            excludeEmptyString: true,
          })
          .required('Required'),
        state: Yup.string()
          .matches(alpha, {
            message: 'Enter Valid State Name',
            excludeEmptyString: true,
          })
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        zip: Yup.string()
          .matches(/^[0-9]{5}$/, 'Must be exactly 5 digits')
          .required('Required'),
      })}
      onSubmit={values => {
        return false
      }}
    >
      {({
        handleBlur,
        handleChange,
        values,
        errors,
        touched,
        dirty,
        isValid,
      }) => {
        console.log(values)
        return (
          <Container fluid>
            <Row>
              <CheckoutProgress orderContext={orderContext} phase={2} />
            </Row>

            <Row>
              <div
                css={deliveryContainer}
                className="col-xl-9 col-lg-8 col-md-12 col-sm-12 col-xs-12"
              >
                <div css={header}>Delivery</div>
                <div css={cartDivider}></div>
                <div css={userInfoContainer}>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div css={userInfoTop}>
                      <label
                        className={
                          touched.email && !errors.email ? 'validatedInfo' : ''
                        }
                        css={userInfoLabel}
                        htmlFor="email"
                      >
                        Email Address
                      </label>
                      {touched.email && errors.email ? (
                        <div css={userInfoError}>{errors.email}</div>
                      ) : null}
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={
                        touched.email && errors.email
                          ? 'userInfoErrorInput'
                          : ''
                      }
                      css={userInfoInput}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div css={userInfoTop}>
                      <label
                        className={
                          touched.firstName && !errors.firstName
                            ? 'validatedInfo'
                            : ''
                        }
                        css={userInfoLabel}
                        htmlFor="firstName"
                      >
                        First Name
                      </label>
                      {touched.firstName && errors.firstName ? (
                        <div css={userInfoError}>{errors.firstName}</div>
                      ) : null}
                    </div>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      className={
                        touched.firstName && errors.firstName
                          ? 'userInfoErrorInput'
                          : ''
                      }
                      css={userInfoInput}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstName}
                    />
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div css={userInfoTop}>
                      <label
                        className={
                          touched.lastName && !errors.lastName
                            ? 'validatedInfo'
                            : ''
                        }
                        css={userInfoLabel}
                        htmlFor="lastName"
                      >
                        Last Name
                      </label>
                      {touched.lastName && errors.lastName ? (
                        <div css={userInfoError}>{errors.lastName}</div>
                      ) : null}
                    </div>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      className={
                        touched.lastName && errors.lastName
                          ? 'userInfoErrorInput'
                          : ''
                      }
                      css={userInfoInput}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastName}
                    />
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div css={userInfoTop}>
                      <label
                        className={
                          touched.address && !errors.address
                            ? 'validatedInfo'
                            : ''
                        }
                        css={userInfoLabel}
                        htmlFor="address"
                      >
                        Address
                      </label>
                      {touched.address && errors.address ? (
                        <div css={userInfoError}>{errors.address}</div>
                      ) : null}
                    </div>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      className={
                        touched.address && errors.address
                          ? 'userInfoErrorInput'
                          : ''
                      }
                      css={userInfoInput}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.address}
                    />
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div css={userInfoTop}>
                      <label
                        className={
                          touched.apt && !errors.apt ? 'validatedInfo' : ''
                        }
                        css={userInfoLabelOptional}
                        htmlFor="apt"
                      >
                        Apartment, Suite, etc
                      </label>
                      {touched.apt && errors.apt ? (
                        <div css={userInfoError}>{errors.apt}</div>
                      ) : null}
                    </div>
                    <input
                      id="apt"
                      name="apt"
                      type="text"
                      className={
                        touched.apt && errors.apt ? 'userInfoErrorInput' : ''
                      }
                      css={userInfoInput}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.apt}
                    />
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div css={userInfoTop}>
                      <label
                        className={
                          touched.city && !errors.city ? 'validatedInfo' : ''
                        }
                        css={userInfoLabelOptional}
                        htmlFor="city"
                      >
                        City
                      </label>
                      {touched.city && errors.city ? (
                        <div css={userInfoError}>{errors.city}</div>
                      ) : null}
                    </div>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      className={
                        touched.city && errors.city ? 'userInfoErrorInput' : ''
                      }
                      css={userInfoInput}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.city}
                    />
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div css={userInfoTop}>
                      <label
                        className={
                          touched.state && !errors.state ? 'validatedInfo' : ''
                        }
                        css={userInfoLabelOptional}
                        htmlFor="state"
                      >
                        State
                      </label>
                      {touched.state && errors.state ? (
                        <div css={userInfoError}>{errors.state}</div>
                      ) : null}
                    </div>
                    <input
                      id="state"
                      name="state"
                      type="text"
                      className={
                        touched.state && errors.state
                          ? 'userInfoErrorInput'
                          : ''
                      }
                      css={userInfoInput}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.state}
                    />
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div css={userInfoTop}>
                      <label
                        className={
                          touched.zip && !errors.zip ? 'validatedInfo' : ''
                        }
                        css={userInfoLabelOptional}
                        htmlFor="zip"
                      >
                        Zip Code
                      </label>
                      {touched.zip && errors.zip ? (
                        <div css={userInfoError}>{errors.zip}</div>
                      ) : null}
                    </div>
                    <input
                      id="zip"
                      name="zip"
                      type="text"
                      className={
                        touched.zip && errors.zip ? 'userInfoErrorInput' : ''
                      }
                      css={userInfoInput}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.zip}
                    />
                  </div>
                </div>
              </div>
              <OrderSummary
                checkoutNavigate={() =>
                  navigate('/payment', {
                    state: { orderContext },
                  })
                }
                orderContext={orderContext}
                subTotal={orderContext.subTotal}
                totalItems={orderContext.totalItems}
                shippingInfo={orderContext.shippingInfo}
                navigateMessage="Confirm and Pay"
                disableButton={!isValid || !dirty}
              >
                <OrderDetails productData={orderContext.productData} />
              </OrderSummary>
            </Row>
          </Container>
        )
      }}
    </Formik>
  )
}

const userInfoInput = css`
  height: 25px;
  line-height: 0px;
  font-size: 18px;
  width: 100%;
  border: none;
  border-bottom: solid 1px #dfdfdf;

  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1), cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-duration: 300ms, 300ms, 300ms, 300ms;

  &:focus {
    border-bottom: solid 1px #0f346c;
  }
`

const userInfoTop = css`
  width: 100%;
  position: relative;
  margin-bottom: 0px;
  margin-top: 15px;
`

const userInfoLabelOptional = css`
  font-size: 16px;
  float: left;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1), cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-duration: 300ms, 300ms, 300ms, 300ms;
  letter-spacing: 1.5px;
  color: #6a6d75;
`

const userInfoLabel = css`
  font-size: 16px;
  float: left;
  letter-spacing: 1.5px;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1), cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-duration: 300ms, 300ms, 300ms, 300ms;
  color: #6a6d75;
`
const userInfoError = css`
  font-size: 16px;
  float: right;
  letter-spacing: 1.1px;

  color: #d20d0d;
`

const userInfoSelect = css`
  // height: 25px;
  // line-height: 0px;
  // font-size: 18px;
  // border-bottom: solid 1px #dfdfdf;

  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1), cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-duration: 300ms, 300ms, 300ms, 300ms;

  // &:focus {
  //   border-bottom: solid 1px #0f346c;
  // }

  align-items: center;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  background: #fff;
  // border: 1px solid #767677;
  border-radius: 0px;
  // color: #000;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  height: 25px;
  justify-content: space-between;
  line-height: 20px;
  margin: 0;
  padding: 0 20px;
  position: relative;
  width: 100%;
`

const deliveryContainer = css`
  padding-left: 10px;
  padding-right: 10px;
`

const userInfoContainer = css`
  padding: 10px;
  background-color: #fff;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 9px;
  font-family: Lato;
  box-shadow: rgba(31, 32, 68, 0.16) 0px 2px 8px 0px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1), cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-duration: 300ms, 300ms, 300ms, 300ms;
  &:hover {
    box-shadow: 0px 8px 32px 0px rgba(31, 32, 68, 0.16);
  }
`

const header = css`
  color: #0f346c;
  font-size: 26px;
  width: 100%;
  font-family: varela round;
`
const cartDivider = css`
  height: 1px;
  width: 100%;
  margin-bottom: 10px;
  background-color: #a1bce6;
`
export default CheckoutContainer
