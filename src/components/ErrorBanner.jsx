import React from 'react'
import { Banner, ErrorBanner } from '@procore/core-react'
import styled, { keyframes } from 'styled-components'
import MediaQuery from 'react-responsive'

const fadeIn = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

const mobileDropIn = keyframes`
  0% {
    transform: translateY(-100px);
  }
  100% {
    transform: translateY(20px);
  }
`;

const dropIn = keyframes`
  0% {
    transform: translateY(-100px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const MobileErrorBannerContainer = styled(ErrorBanner)`
  animation: ${fadeIn} 1s, ${mobileDropIn} .7s forwards;
`

const ErrorBannerContainer = styled(ErrorBanner)`
  animation: ${fadeIn} 1s, ${dropIn} .7s forwards;
`

const ErrorMessage = styled.span`
  display: block;
  animation: ${fadeIn} 1s forwards;
`

// Expects data in the format of:
// Ex. {
//        password: { label: 'Password must be at least 8 characters' },
//        email: { label: 'Must be a valid email' },
//        phoneNumber: { label: 'Must be a valid phone number' },
//     }

const GeneralErrorBanner = ({ errors }) => {
  return (
    <div>
      <MediaQuery minDeviceWidth={320} maxDeviceWidth={480}>
        <MobileErrorBannerContainer>
          <Banner.Content>
            <Banner.Title style={{ fontSize: '17px' }}>Error</Banner.Title>
            <Banner.Body style={{ fontSize: '15px' }}>
            { Object.keys(errors)
                .filter(category => Boolean(errors[category].label))
                .map((category, index) => (
                  <ErrorMessage key={`error-${index}`} style={{ padding: '7px 0px' }} >
                    {`${index + 1}. ${errors[category].label}`}
                  </ErrorMessage>
                ))
            }
            </Banner.Body>
          </Banner.Content>
        </MobileErrorBannerContainer>
      </MediaQuery>

      <MediaQuery minDeviceWidth={481}>
        <ErrorBannerContainer>
          <Banner.Content>
            <Banner.Title style={{ fontSize: '17px' }}>Error</Banner.Title>
            <Banner.Body style={{ fontSize: '15px' }}>
            { Object.keys(errors)
                .filter(category => Boolean(errors[category].label))
                .map((category, index) => (
                  <ErrorMessage key={`error-${index}`} style={{ padding: '7px 0px' }} >
                    {`${index + 1}. ${errors[category].label}`}
                  </ErrorMessage>
                ))
            }
            </Banner.Body>
          </Banner.Content>
        </ErrorBannerContainer>
      </MediaQuery>
    </div>
  )
}

export default GeneralErrorBanner;
