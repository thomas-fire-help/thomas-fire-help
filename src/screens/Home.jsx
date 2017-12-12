import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 15px 30px;
`

const HeaderContainer = styled.div`
  align-self: flex-start;
  flex: 1;
  text-transform: uppercase;
  font-size: 2.25rem;
  padding-bottom: 1em;
`

const NavContainer = styled.nav`
  flex: 4;
`
const activeClassName = 'nav-item-active'

const StyledLink = styled(Link).attrs({
  activeClassName
})`
  text-decoration: none;
`

const NavigationCard = styled.section`
  margin-top: 20px;
  padding: 4rem 6em;
  border: 1px solid black;
  text-transform: uppercase;
  text-align: center;
  font-size: 2rem;
  color: black;
  text-decoration: none;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.23), 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  }
`

const AuthContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const AuthLink = styled(Link)`
  color: #000;
  font-size: 2rem;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  padding: 20px;
  margin: 4.5rem 4.5rem;
`

const TranslateLink = styled.aside`
  display: block;
  font-size: 2rem;
  text-align: center;
  padding: 35px 15px;
`

const Footer = styled.footer`
  font-size: 2rem;
  text-align: center;

  p {
    font-size: 1rem;
  }
`

const Home = props => (
  <Container>
    <div>
      In event of Emergency, call 911
    </div>
    <HeaderContainer>
      <h1>
        Thomas Fire Help
      </h1>
    </HeaderContainer>

    <NavContainer>
      <StyledLink to="/looking_for_help">
        <NavigationCard>
          I'm Looking for Resources
        </NavigationCard>
      </StyledLink>
      <StyledLink to="/helping">
        <NavigationCard>
          I Want to Help
        </NavigationCard>
      </StyledLink>
      {/* <AuthContainer>
        <AuthLink to="login">
          Login
        </AuthLink>
        <AuthLink to="sign_up">
          Sign Up
        </AuthLink>
      </AuthContainer> */}
    </NavContainer>

    {/* <TranslateLink>
      en Español
    </TranslateLink> */}

    <Footer>
      <div>
        #venturastrong
      </div>
      <p>
        www.ThomasFireHelp.com does not warrant or guarantee any of the accuracy of the information contained herein. All information provided here originated elsewhere though voluntary submissions that have not been screened for accuracy. The authors of this website are simply acting as aggregators of reported information and do not have the resources to independently verify the data contained herein. For the most accurate, validated information from the County of Ventura, go to www.readyventuracounty.org.
      </p>
    </Footer>
  </Container>
)

export default Home
