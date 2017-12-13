import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import debounce from 'lodash.debounce'
import MediaQuery from 'react-responsive'
import Layout from '../components/Layout'
import { Container, HeaderContainer, MobileHeaderContainer } from '../components/atoms'
import { fetchConfig, handleErrors } from '../utils/fetchUtils'
import { Banner, ErrorBanner } from '@procore/core-react';

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
  margin-top: 40px;
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
  border: 1px solid #000;
  border-radius: 3px;
  cursor: pointer;
  font-size: 18px;
  height: 35px;
  width: 140px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 3rem;
`

const SignUpButton = styled.button`
  align-self: flex-end;
  background: none;
  border: 1px solid #000;
  border-radius: 3px;
  cursor: pointer;
  font-size: 20px;
  height: 35px;
  width: 140px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 3rem;
`

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
0% {
  opacity: 1;
}
100% {
  opacity: 0;
}
`;

const enlarge = keyframes`
  0% {
    transform: scale(.5);
  }
  100% {
    transform: scale(1);
  }
`;

const ErrorWrapper = styled.div`
  animation: ${fadeIn} 1s, ${enlarge} .5s;
`

const ErrorMessage = styled.span`
  animation: ${fadeIn} 1s;
`

const isValidEmail = (email) => (
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
);

const isValidPassword = (password) => (
  password.length >= 8
);

const hasSignupErrors = (errors) => (
  Object.values(errors).some(error => Boolean(error.label))
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

    this.handleEmailInput = debounce(this.handleEmailInput, 800)
    this.handlePhoneNumberInput = debounce(this.handlePhoneNumberInput, 800)
    this.handlePasswordInput = debounce(this.handlePasswordInput, 800)
  }

  handleOnClick = () => {
    const { email: username, phoneNumber: phone_number, password, errors } = this.state;

    hasSignupErrors(errors)
      ? null
      : fetch('auth/register', {
        method: 'post',
        body: JSON.stringify({ username, phone_number, password }),
        headers: fetchConfig(),
      })
        .then(handleErrors)
        .catch((err) => console.log(err))
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
    this.setState({ phoneNumber: e.target.value });
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
    const { errors } = this.state;

    return (
      <Layout onBack={goBack}>
        <Container>
          <MediaQuery minDeviceWidth={320} maxDeviceWidth={480}>
          { hasSignupErrors(errors) &&
              <ErrorWrapper>
                <ErrorBanner>
                  <Banner.Content>
                    <Banner.Title>Error</Banner.Title>
                    <Banner.Body>
                    { Object.keys(errors)
                        .filter(category => Boolean(errors[category].label))
                        .map((category, index) => (
                          <ErrorMessage>{`${index + 1}. ${errors[category].label}`}</ErrorMessage>
                        ))
                    }
                    </Banner.Body>
                  </Banner.Content>
                  <Banner.Dismiss onClick={() => alert('dismiss clicked')} />
                </ErrorBanner>
              </ErrorWrapper>
            }
            <MobileHeaderContainer style={{ marginBottom: '20px', textAlign: 'left' }}>
              <h1> Sign Up </h1>
            </MobileHeaderContainer>
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
              <MobileSignUpButton onClick={this.handleOnClick}>
                Sign Up
              </MobileSignUpButton>
            </AuthInputContainer>
          </MediaQuery>

          <MediaQuery minDeviceWidth={481}>
            { hasSignupErrors(errors) &&
              <ErrorWrapper>
                <ErrorBanner>
                  <Banner.Content>
                    <Banner.Title>Error</Banner.Title>
                    <Banner.Body>
                    { Object.keys(errors)
                        .filter(category => Boolean(errors[category].label))
                        .map((category, index) => (
                          <ErrorMessage>{`${index + 1}. ${errors[category].label}`}</ErrorMessage>
                        ))
                    }
                    </Banner.Body>
                  </Banner.Content>
                  <Banner.Dismiss onClick={() => alert('dismiss clicked')} />
                </ErrorBanner>
              </ErrorWrapper>
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
              <SignUpButton onClick={this.handleOnClick}>
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
