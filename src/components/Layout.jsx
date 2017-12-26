import React from 'react'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'
import { Icon } from 'antd'

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-top: 10px;
`

const MobileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 40px;
`

const Container = styled.section`
  height: 100%;
  width: 100%;
`

const LeftButton = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
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

const BackArrow = styled(Icon)`
  margin-right: 10px;
  font-size: 24px;
`

const Layout = ({ onBack, children, header }) => (
  <Container>
    <Header>
      <LeftButton onClick={onBack}>
        <BackArrow type="arrow-left"/>
        {'Back'}
      </LeftButton>
      <Title>
        <h2>
          TFH
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
)

export default Layout
