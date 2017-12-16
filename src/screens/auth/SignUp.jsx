import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import debounce from 'lodash.debounce'
import MediaQuery from 'react-responsive'
import Layout from '../../components/Layout'
import AuthErrorBanner from './AuthErrorBanner';
import { Container, HeaderContainer, MobileHeaderContainer } from '../../components/atoms'
import { fetchConfig, handleErrors } from '../../utils/fetchUtils'
import { isValidEmail, isValidPassword, isValidPhoneNumber, hasEmptyFields, hasSignUpErrors } from '../../utils/authUtils'

const AuthInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const AuthInput = styled.input`
  background: none;
  background-color: #FFF;
  border: none;
  border-bottom: 1px solid #000;
  border-radius: 0;
  color: #000;
  margin-top: 30px;
  font-size: 20px;
  width: 100%;
  &:focus {
    caret-color: #000;
    outline-style: none;
    box-shadow: none;
    border-color: transparent;
    border-bottom: 1px solid #000;
  }
  &::placeholder {
    color: #000;
    font-size: 20px;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
  }
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 3rem white inset;
    -webkit-text-fill-color: #000;
    -webkit-animation-name: autofill;
    -webkit-animation-fill-mode: both;
  }
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: #000;
  }
`

const MobileSignUpButton = styled.button`
  align-self: flex-end;
  background: none;
  border: ${props => props.disabled
    ? '1px solid #AFAFAF;'
    : '1px solid #000;'
  }
  border-radius: 3px;
  color: ${props => props.disabled
    ? '#AFAFAF;'
    : '#000;'
  }
  cursor: ${props => props.disabled
    ? 'auto;'
    : 'pointer;'
  }
  font-size: 18px;
  height: 35px;
  width: 140px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 3rem;
  outline: none;
`

const SignUpButton = styled.button`
  align-self: flex-end;
  background: none;
  border: ${props => props.disabled
    ? '1px solid #AFAFAF;'
    : '1px solid #000;'
  }
  border-radius: 3px;
  color: ${props => props.disabled
    ? '#AFAFAF;'
    : '#000;'
  }
  cursor: ${props => props.disabled
    ? 'auto;'
    : 'pointer;'
  }
  font-size: 18px;
  height: 35px;
  width: 140px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 3rem;
  outline: none;
`

const canSubmit = (hasErrors, hasEmptyFields) => (
  !hasErrors && !hasEmptyFields
);

class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      phoneNumber: '',
      password: '',
      errors: {},
    }

    this.handleEmailInput = debounce(this.handleEmailInput, 1000)
    this.handlePhoneNumberInput = debounce(this.handlePhoneNumberInput, 1000)
    this.handlePasswordInput = debounce(this.handlePasswordInput, 1000)
  }

  handleOnClick = (allowSubmit) => {
    const { email: username, phoneNumber: phone_number, password, errors } = this.state;

    allowSubmit
      ? fetch('https://firehelp-api-staging.herokuapp.com/auth/register', {
          method: 'post',
          body: JSON.stringify({ username, phone_number, password }),
          headers: fetchConfig(),
        })
          .then(handleErrors)
          .catch((err) => console.log(err))
      : null
  }

  handleEmailInput = (e) => {
    const { errors } = this.state;

    isValidEmail(e.target.value || e.target.value === '')
      ? this.setState({
          email: e.target.value,
          errors: { ...errors, email: { label: '' } }
        })
      : this.setState({
          email: e.target.value,
          errors: { ...errors, email: { label: 'Please enter a valid email' } }
        })
  }

  handlePhoneNumberInput = (e) => {
    const { errors } = this.state;

    isValidPhoneNumber(e.target.value)
      ? this.setState({
          phoneNumber: e.target.value,
          errors: { ...errors, phoneNumber: { label: '' } }
        })
      : this.setState({
          phoneNumber: e.target.value,
          errors: { ...errors, phoneNumber: { label: 'Please enter a phone number with an area code' } }
        })
  }

  handlePasswordInput = (e) => {
    const { errors } = this.state;

    isValidPassword(e.target.value)
      ? this.setState({
          password: e.target.value,
          errors: { ...errors, password: { label: '' } }
        })
      : this.setState({
          password: e.target.value,
          errors: { ...errors, password: { label: 'Password must be at least 8 characters' } }
        })
  }

  render() {
    const { history: { goBack }} = this.props;
    const { email, phoneNumber, password, errors } = this.state;

    const allowSubmit = canSubmit(
      hasSignUpErrors(errors),
      hasEmptyFields(email, phoneNumber, password)
    );

    return (
      <Layout onBack={goBack}>
        <Container>
          <MediaQuery minDeviceWidth={320} maxDeviceWidth={480}>
            {hasSignUpErrors(errors) &&
              <AuthErrorBanner errors={errors} />
            }
            <MobileHeaderContainer style={{ marginBottom: '40px', textAlign: 'left' }}>
              <h1> Sign Up </h1>
            </MobileHeaderContainer>
            <AuthInputContainer>
              <AuthInput
                onChange={(e) => {
                  e.persist();
                  this.handleEmailInput(e)
                }}
                placeholder="Email address"
                style={{ marginTop: '0' }}
                type="text"
              />
              <AuthInput
                onChange={(e) => {
                  e.persist();
                  this.handlePhoneNumberInput(e)
                }}
                placeholder="Phone number"
                type="text"
              />
              <AuthInput
                onChange={(e) => {
                  e.persist();
                  this.handlePasswordInput(e)}
                }
                placeholder="Password"
                type="password"
              />
              <MobileSignUpButton disabled={!allowSubmit} onClick={this.handleOnClick}>
                Sign Up
              </MobileSignUpButton>
            </AuthInputContainer>
          </MediaQuery>

          <MediaQuery minDeviceWidth={481}>
            {hasSignUpErrors(errors) &&
              <AuthErrorBanner errors={errors} />
            }
            <HeaderContainer>
              <h1> Sign Up </h1>
            </HeaderContainer>
            <AuthInputContainer>
              <AuthInput
                onChange={(e) => {
                  e.persist();
                  this.handleEmailInput(e)
                }}
                placeholder="Email address"
                type="text"
              />
              <AuthInput
                onChange={(e) => {
                  e.persist();
                  this.handlePhoneNumberInput(e)
                }}
                placeholder="Phone number"
                type="text"
              />
              <AuthInput
                onChange={(e) => {
                  e.persist();
                  this.handlePasswordInput(e)}
                }
                placeholder="Password"
                type="password"
              />
              <SignUpButton disabled={!allowSubmit} onClick={() => this.handleOnClick(allowSubmit)}>
                Sign Up
              </SignUpButton>
            </AuthInputContainer>
          </MediaQuery>
        </Container>
      </Layout>
    );
  }
}

export default SignUp;
