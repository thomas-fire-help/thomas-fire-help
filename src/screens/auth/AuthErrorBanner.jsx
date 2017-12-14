import React from 'react'
import { Banner, ErrorBanner } from '@procore/core-react'
import styled, { keyframes } from 'styled-components'
import { hasSignupErrors } from '../../utils/authUtils'

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

const ErrorBannerContainer = styled(ErrorBanner)`
  animation: ${fadeIn} 1s, ${enlarge} 1s forwards
`

const ErrorMessage = styled.div`
  animation: ${fadeIn} 1s forwards;
`

const AuthErrorBanner = ({ hasSignUpErrors, errors }) => {
  return (
    <ErrorBannerContainer hasSignUpErrors={hasSignUpErrors}>
      <Banner.Content>
        <Banner.Title style={{ fontSize: '17px' }}>Error</Banner.Title>
        <Banner.Body style={{ fontSize: '15px' }}>
        { Object.keys(errors)
            .filter(category => Boolean(errors[category].label))
            .map((category, index) => (
              <ErrorMessage>{`${index + 1}. ${errors[category].label}`}</ErrorMessage>
            ))
        }
        </Banner.Body>
      </Banner.Content>
      {/* <Banner.Dismiss onClick={() => alert('dismiss clicked')} /> */}
    </ErrorBannerContainer>
  )
}

AuthErrorBanner.defaultProps = {
  hasSignUpErrors: false,
}

export default AuthErrorBanner;
