import React from 'react'
import { css } from '@emotion/core'
import { Formik, Form } from 'formik'
import { Container, Row } from 'react-bootstrap'
import * as Yup from 'yup'

const delay = t => new Promise(resolve => setTimeout(resolve, t))

const ContactContainer = () => {
  // const alpha = /^[a-zA-Z_]+( [a-zA-Z_]+)*$/
  // var userInfo = {}
  return (
    <Formik
      initialValues={{
        email: '',
        name: '',
        subject: '',
        message: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
        name: Yup.string()
          .max(35, 'Must be 35 characters or less')
          .required('Required'),
        subject: Yup.string()
          .max(30, 'Must be 30 characters or less')
          .required('Required'),
        message: Yup.string()
          .min(10, 'Must be 10 characters or more')
          .required('Required'),
      })}
      onSubmit={values => {
        console.log('omg')
        delay(10000).then(() => {
          return false
        })
      }}
    >
      {({
        handleBlur,
        handleChange,
        values,
        errors,
        touched,
        isValid,
        dirty,
      }) => {
        return (
          <Container css={contactWrapper} fluid>
            <Row>
              <div
                css={contactContainer}
                className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12"
              >
                <Form>
                  <div css={userInfoContainer}>
                    <div css={contactContainerHeader}>Contact Us</div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <div css={userInfoTop}>
                        <label
                          className={
                            touched.name && !errors.name ? 'validatedInfo' : ''
                          }
                          css={userInfoLabel}
                          htmlFor="name"
                        >
                          Name
                        </label>
                        {touched.name && errors.name ? (
                          <div css={userInfoError}>{errors.name}</div>
                        ) : null}
                      </div>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className={
                          touched.name && errors.name
                            ? 'userInfoErrorInput'
                            : ''
                        }
                        css={userInfoInput}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                      />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <div css={userInfoTop}>
                        <label
                          className={
                            touched.subject && !errors.subject
                              ? 'validatedInfo'
                              : ''
                          }
                          css={userInfoLabel}
                          htmlFor="subject"
                        >
                          Subject
                        </label>
                        {touched.subject && errors.subject ? (
                          <div css={userInfoError}>{errors.subject}</div>
                        ) : null}
                      </div>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        className={
                          touched.subject && errors.subject
                            ? 'userInfoErrorInput'
                            : ''
                        }
                        css={userInfoInput}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.subject}
                      />
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div css={userInfoTop}>
                        <label
                          className={
                            touched.email && !errors.email
                              ? 'validatedInfo'
                              : ''
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
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <div css={userInfoTop}>
                        <label
                          className={
                            touched.message && !errors.message
                              ? 'validatedInfo'
                              : ''
                          }
                          css={userInfoLabel}
                          htmlFor="message"
                        >
                          Message
                        </label>
                        {touched.message && errors.message ? (
                          <div css={userInfoError}>{errors.message}</div>
                        ) : null}
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        type="text"
                        rows="5"
                        className={
                          touched.message && errors.message
                            ? 'userInfoErrorInput'
                            : ''
                        }
                        css={textAreaInput}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                      />
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <button
                        css={submitButton}
                        type="submit"
                        className={!isValid || !dirty ? 'buttonDisabled' : ''}
                        disabled={!isValid || !dirty}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </Form>
              </div>
            </Row>
          </Container>
        )
      }}
    </Formik>
  )
}

const submitButton = css`
  margin-top: 15px;
  transition: all 0.2s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 45px;
  width: 100%;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  font-family: varela round;
  letter-spacing: 1.5px;
  color: #a1bce6;
  border: none;

  &:hover {
    font-size: 16px;
    letter-spacing: 2px;
    color: #fff;
  }

  &:active {
    color: #fff;
  }
  background-color: #0f346c;
`

const contactWrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

const textAreaInput = css`
  font-size: 18px;
  min-height: 100px;

  border: none;
  border-bottom: solid 1px #dfdfdf;
  -webkit-appearance: none;
  width: 100%;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1), cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-duration: 300ms, 300ms, 300ms, 300ms;
  &:focus {
    border-bottom: solid 1px #0f346c;
  }
`

const userInfoInput = css`
  height: 25px;
  line-height: 0px;
  font-size: 18px;
  width: 100%;
  border: none;
  border-bottom: solid 1px #dfdfdf;
  -webkit-appearance: none;

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

const contactContainer = css`
  margin-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 5px;
  max-width: 1000px;
`

const contactContainerHeader = css`
  padding-left: 15px;
  font-family: varela round;
  font-weight: 700;
  color: #0f346c;
  padding-top: 5px;
  font-size: 24px;
  width: 100%;
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
  position: sticky;
  top: 70px;
  width: 100%;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1), cubic-bezier(0.645, 0.045, 0.355, 1),
    cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-duration: 300ms, 300ms, 300ms, 300ms;
  &:hover {
    box-shadow: 0px 8px 32px 0px rgba(31, 32, 68, 0.16);
  }
`

export default ContactContainer
