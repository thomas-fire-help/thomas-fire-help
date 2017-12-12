import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import MediaQuery from 'react-responsive';

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
  letter-spacing: 3px;
  width: 100%;
  text-align: center;
  font-size: 20px;
  margin-top: 100px;
`

const MobileHeaderContainer = styled.div`
  align-self: flex-start;
  flex: 1;
  text-transform: uppercase;
  letter-spacing: 2px;
  width: 100%;
  text-align: center;
  font-size: 13px;
  margin-top: 55px;
`

const NavContainer = styled.nav`
  flex: 4;
  align-self: center;
  text-align: center;
`
const activeClassName = 'nav-item-active'

const StyledLink = styled(Link).attrs({
  activeClassName
})`
  text-decoration: none;
`

const NavigationCard = styled.section`
  margin-top: 20px;
  padding: 30px 0px;
  text-align: center;
  font-size: 18px;
  color: #6D6D6D;
  letter-spacing: 2px;
  width: 450px;
  text-decoration: none;
  text-transform: uppercase;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.23), 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  }
`

const MobileNavigationCard = styled.section`
  margin-top: 20px;
  padding: 30px 0px;
  text-align: center;
  font-size: 15px;
  color: #6D6D6D;
  letter-spacing: 2px;
  width: 280px;
  text-decoration: none;
  text-transform: uppercase;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.23), 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  }
`

const Emphasis = styled.span`
  color: orange;
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
  font-size: 28px;
  text-align: center;

  p {
    font-size: 10px;
  }
`

const NotificationBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const Home = props => (
  <Container>
    <MediaQuery minDeviceWidth={320} maxDeviceWidth={480}>
      <MobileHeaderContainer>
        <h1>Thomas Fire Help</h1>
      </MobileHeaderContainer>
      <NavContainer>
        <StyledLink to="/looking_for_resources">
          <MobileNavigationCard>
            Show me resources
          </MobileNavigationCard>
        </StyledLink>
        <StyledLink to="/helping">
          <MobileNavigationCard>
            I want to help
          </MobileNavigationCard>
        </StyledLink>
      </NavContainer>
      <NotificationBar>
        <div>
          In event of Emergency, call <a href="tel:911"><Emphasis>911</Emphasis></a>
        </div>
        <div>
          <a href="mailto:help@thomasfirehelp.com">Send us Feedback 💌</a>
        </div>
      </NotificationBar>
    </MediaQuery>

    <MediaQuery minDeviceWidth={1224}>
      <HeaderContainer>
        <h1>Thomas Fire Help</h1>
      </HeaderContainer>
      <NavContainer>
        <StyledLink to="/looking_for_resources">
          <NavigationCard>
            Show me resources
          </NavigationCard>
        </StyledLink>
        <StyledLink to="/helping">
          <NavigationCard>
            I want to help
          </NavigationCard>
        </StyledLink>
      </NavContainer>
      <NotificationBar>
        <div>
          In event of Emergency, call <a href="tel:911"><Emphasis>911</Emphasis></a>
        </div>
        <div>
          <a href="mailto:help@thomasfirehelp.com">Send us Feedback 💌</a>
        </div>
      </NotificationBar>
    </MediaQuery>
      {/* <AuthContainer>
        <AuthLink to="login">
          Login
        </AuthLink>
        <AuthLink to="sign_up">
          Sign Up
        </AuthLink>
      </AuthContainer> */}
    {/* <TranslateLink>
      en Español
    </TranslateLink> */}

    <Footer>
      <p>
        ThomasFireHelp.com does not warrant or guarantee any of the accuracy of the information contained herein. All information provided here originated elsewhere though voluntary submissions that have not been screened for accuracy. The authors of this website are simply acting as aggregators of reported information and do not have the resources to independently verify the data contained herein. For the most accurate, validated information from the County of Ventura, go to <a href="http://www.readyventuracounty.org" target="_blank">www.readyventuracounty.org</a>.
      </p>
    </Footer>
  </Container>
)

export default Home
