import React from 'react'
import styled, { keyframes } from 'styled-components'
import MediaQuery from 'react-responsive'
import { Icon } from 'antd'

import { fadeIn, horizontalSlide } from './atoms'

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-top: 10px;
  color: white;
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  animation: ${horizontalSlide} .2s forwards;
  will-change: transform;
`

const LeftButton = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: white;
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
  align-items: flex-start;
  padding: 30px;
  color: white;
  overflow-y: auto;
  height: 100%;
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
          Filters
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
