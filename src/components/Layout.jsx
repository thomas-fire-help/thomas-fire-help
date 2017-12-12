import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-top: 10px;
`

const Container = styled.section`
  height: 100%;
  width: 100%;
`

const LeftButton = styled.div`
  flex: 1;
  cursor: pointer;
  font-size: 16px;
`

const Title = styled.div`
  flex: 1;
  text-align: center;

  h2 {
    padding: 0;
    margin: 0;
    font-size: 20px;
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
          Thomas Fire Help
        </h2>
      </Title>
      <RightButton>
        <a href="mailto:help@thomasfirehelp.com">
          Send us Feedback 💌
        </a>
      </RightButton>
    </Header>
    <Body>
      {children}
    </Body>
  </Container>
)

export default Layout
