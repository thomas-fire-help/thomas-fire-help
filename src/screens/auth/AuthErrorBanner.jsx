import React from 'react'
import { Banner, ErrorBanner } from '@procore/core-react'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

const dropIn = keyframes`
  0% {
    transform: translateY(-100px);
  }
  100% {
    transform: translateY(20px);
  }
`;

const ErrorBannerContainer = styled(ErrorBanner)`
  animation: ${fadeIn} 1s, ${dropIn} .7s forwards;
`

const ErrorMessage = styled.span`
  display: block;
  animation: ${fadeIn} 1s forwards;
`

const AuthErrorBanner = ({ errors }) => {
  return (
    <ErrorBannerContainer>
      <Banner.Content>
        <Banner.Title style={{ fontSize: '17px' }}>Error</Banner.Title>
        <Banner.Body style={{ fontSize: '15px' }}>
        { Object.keys(errors)
            .filter(category => Boolean(errors[category].label))
            .map((category, index) => (
              <ErrorMessage key={`error-${index}`}>{`${index + 1}. ${errors[category].label}`}</ErrorMessage>
            ))
        }
        </Banner.Body>
      </Banner.Content>
    </ErrorBannerContainer>
  )
}

export default AuthErrorBanner;
