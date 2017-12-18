
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'
import Layout from '../../components/Layout'
import AuthErrorBanner from './AuthErrorBanner'
import { Container, HeaderContainer, MobileHeaderContainer } from '../../components/atoms'
import { fetchConfig } from '../../utils/fetchUtils'
import { hasSignUpErrors } from '../../utils/authUtils'

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

const MobileLoginButton = styled.button`
  align-self: flex-end;
  background: none;
  border: 1px solid #000;
  border-radius: 3px;
  color: #000;
  cursor: pointer;
  font-size: 18px;
  height: 35px;
  width: 140px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 3rem;
  outline: none;
`

const LoginButton = styled.button`
  align-self: flex-end;
  background: none;
  border: 1px solid #000;
  border-radius: 3px;
  font-size: 1.25rem;
  height: 2.5rem;
  width: 10rem;
  text-transform: uppercase;
  margin-top: 2rem;
  cursor: pointer;
`

class PhoneVerification extends Component {
  constructor() {
    super()
    this.state = {
      user: '',
      password: '',
      errors: {},
    }
  }

  handleOnClick = () => {
    const { history } = this.props
    const { user: login, password } = this.state

    fetch('https://firehelp-api-staging.herokuapp.com/auth/login', {
      method: 'post',
      body: JSON.stringify({ login, password }),
      headers: fetchConfig(),
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      localStorage.setItem('access_token', data.access_token)
      history.push('/')
    })
  }

  handleUsernameInput = (e) => {
    this.setState({
      user: e.target.value
    })
  }

  handlePasswordInput = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  render() {
    const { errors } = this.state;
    const { history: { goBack }} = this.props;

    return (
      <Layout onBack={goBack}>
        <Container>
          <MediaQuery minDeviceWidth={320} maxDeviceWidth={480}>
            {hasSignUpErrors(errors) &&
              <AuthErrorBanner errors={errors} />
            }
            <MobileHeaderContainer style={{ marginBottom: '40px', textAlign: 'left' }}>
              <h1>Verify Phone</h1>
            </MobileHeaderContainer>
            <AuthInputContainer>
              <AuthInput
                onChange={(e) => {this.handleUsernameInput(e)}}
                placeholder="Enter text verification code"
                type="text"
                style={{ marginTop: '0' }}
              />
              <MobileLoginButton onClick={this.handleOnClick}>
                Verify
              </MobileLoginButton>
            </AuthInputContainer>
          </MediaQuery>

          <MediaQuery minDeviceWidth={481}>
            {hasSignUpErrors(errors) &&
              <AuthErrorBanner errors={errors} />
            }
            <HeaderContainer>
              <h1>Verify Phone</h1>
            </HeaderContainer>
            <AuthInputContainer>
              <AuthInput
                onChange={(e) => {this.handlePasswordInput(e)}}
                placeholder="Enter text verification code"
                type="text"
              />
              <LoginButton onClick={this.handleOnClick}>
                Verify
              </LoginButton>
            </AuthInputContainer>
          </MediaQuery>
        </Container>
      </Layout>
    );
  }
}

export default PhoneVerification;
