import React from 'react'
import { Banner, SuccessBanner } from '@procore/core-react'
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
    transform: translateY(0px);
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

const MobileSuccessBannerContainer = styled(SuccessBanner)`
  animation: ${fadeIn} 1s, ${mobileDropIn} .7s forwards;
`

const SuccessBannerContainer = styled(SuccessBanner)`
  animation: ${fadeIn} 1s, ${dropIn} .7s forwards;
`

const GeneralSuccessBanner = ({ errors }) => {
  return (
    <div>
      <MediaQuery minDeviceWidth={320} maxDeviceWidth={480}>
        <MobileSuccessBannerContainer>
          <Banner.Content>
            <Banner.Title style={{ fontSize: '17px' }}>Success!</Banner.Title>
            <Banner.Body style={{ fontSize: '15px' }}>Save Successful</Banner.Body>
          </Banner.Content>
        </MobileSuccessBannerContainer>
      </MediaQuery>

      <MediaQuery minDeviceWidth={481}>
        <SuccessBannerContainer>
          <Banner.Content>
            <Banner.Title style={{ fontSize: '17px' }}>Success!</Banner.Title>
            <Banner.Body style={{ fontSize: '15px' }}>Save Successful</Banner.Body>
          </Banner.Content>
        </SuccessBannerContainer>
      </MediaQuery>
    </div>
  )
}

export default GeneralSuccessBanner;
