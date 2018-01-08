import React from 'react'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'
import { Icon } from 'antd'

import { MobileContainer, Container } from './atoms'

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 35px;
  margin-bottom: 30px;
`

const MobileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 10px;
`

const MobileLeftButton = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 2px;
`

const LeftButton = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
`

const Title = styled.div`
  flex: 1;
  text-align: center;

  h2 {
    padding: 0;
    margin: 0;
    font-size: 20px;
    letter-spacing: 2px;
  }
`

const RightButton = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MobileBackArrow = styled(Icon)`
  margin-right: 10px;
  margin-left: -5px;
  font-size: 22px;
`

const BackArrow = styled(Icon)`
  margin-right: 10px;
  margin-left: -5px;
  font-size: 24px;
`

const Layout = ({ onBack, children, header }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100vw' }}>
    <MediaQuery minDeviceWidth={320} maxDeviceWidth={480}>
      <MobileContainer>
        <MobileHeader>
          <MobileLeftButton onClick={onBack}>
            <MobileBackArrow type="arrow-left"/>
            {'Back'}
          </MobileLeftButton>
          <Title>
            <h2>
              <img src={require('../assets/logo.svg')} style={{ height: '40px', width: 'auto' }}/>
            </h2>
          </Title>
          <RightButton>
            {/* <a href="mailto:help@thomasfirehelp.com">
              Send us Feedback 💌
            </a> */}
          </RightButton>
        </MobileHeader>
      </MobileContainer>
      <Body>
        {children}
      </Body>
    </MediaQuery>

    <MediaQuery minDeviceWidth={481}>
      <Container>
        <Header>
          <LeftButton onClick={onBack}>
            <BackArrow type="arrow-left"/>
            {'Back'}
          </LeftButton>
          <Title>
            <h2>
              <img src={require('../assets/logo.svg')} style={{ height: '40px', width: 'auto' }}/>
            </h2>
          </Title>
          <RightButton>
            {/* <a href="mailto:help@thomasfirehelp.com">
              Send us Feedback 💌
            </a> */}
          </RightButton>
        </Header>
        <Body>
          {children}
        </Body>
      </Container>
    </MediaQuery>
  </div>
)

export default Layout
