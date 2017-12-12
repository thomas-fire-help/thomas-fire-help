import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 30px;
  padding-right: 30px;
`

const Container = styled.section`
  padding-top: 20px;
  height: 100%;
  width: 100%;
`

const LeftButton = styled.div`
  flex: 1;
  cursor: pointer;
  font-size: 20px;
`

const Title = styled.div`
  flex: 1;
  text-align: center;
  font-size: 24px;
`

const RightButton = styled.div`
  flex: 1;
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 30px;
`

const Layout = ({ onBack, children, header }) => (
  <Container>
    <Header>
      <LeftButton onClick={onBack}>
        {'< Back'}
      </LeftButton>
      <Title>
        <h2>
          TFH
        </h2>
      </Title>
      <RightButton></RightButton>
    </Header>
    <Body>
      {children}
    </Body>
  </Container>
)

export default Layout
