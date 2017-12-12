import React from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import MediaQuery from 'react-responsive';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 15px 55px;
`

const HeaderContainer = styled.div`
  align-self: flex-start;
  flex: .75;
  text-transform: uppercase;
  letter-spacing: 3px;
  width: 100%;
  text-align: center;
  font-size: 20px;
  margin-top: 100px;
  opacity: 0;
  animation: ${fadeIn} 1.5s forwards;
`

const MobileHeaderContainer = styled.div`
  align-self: flex-start;
  flex: .75;
  text-transform: uppercase;
  letter-spacing: 2px;
  width: 100%;
  text-align: center;
  font-size: 11.5px;
  margin-top: 30px;
  opacity: 0;
  animation: ${fadeIn} 1.5s forwards;
`

const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1.75;
  width: 100%;
  opacity: 0;
  animation: ${fadeIn} 1.5s forwards;
  animation-delay: .3s;
  padding-bottom: 20px;
`

const MobileNavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 2.5;
  width: 100%;
  margin-bottom: 35px;
  opacity: 0;
  animation: ${fadeIn} 1.5s forwards;
  animation-delay: .3s;
`

const activeClassName = 'nav-item-active'

const StyledLink = styled(Link).attrs({
  activeClassName
})`
  display: flex;
  justify-content: center;
  text-decoration: none;
  width: 100%;
`

const NavigationCard = styled.section`
  margin-top: 20px;
  padding: 30px 0px;
  text-align: center;
  font-size: 18px;
  width: 100%;
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
  border: 1px solid black;
  text-align: center;
  font-size: 17px;
  width: 100%;
  color: #000;
  letter-spacing: 2px;
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

const NotificationBar = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  animation: ${fadeIn} 1.5s forwards;
  animation-delay: .7s;
  margin-top: 2rem;
`

const Footer = styled.footer`
  font-size: 28px;
  text-align: left;
  margin-bottom: 100px;
  padding-top: 10px;
  width: 450px;
  p {
    font-size: 12px;
  }
  opacity: 0;
  animation: ${fadeIn} 1.5s forwards;
  animation-delay: .7s;
`

const MobileFooter = styled.footer`
  flex: 1;
  font-size: 28px;
  text-align: left;
  margin: 0px 10px;
  padding-top: 6px;
  p {
    font-size: 12px;
  }
  opacity: 0;
  animation: ${fadeIn} 1.5s forwards;
  animation-delay: .8s;
`

const Home = props => (
  <Container>
    <MediaQuery minDeviceWidth={320} maxDeviceWidth={480}>
      <MobileHeaderContainer>
        <h1>Thomas Fire Help</h1>
      </MobileHeaderContainer>
      <MobileNavContainer>
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
      </MobileNavContainer>
      <NotificationBar>
        <div>
          In event of Emergency, call <a href="tel:911"><Emphasis>911</Emphasis></a>
        </div>
        <div>
          <a href="mailto:help@thomasfirehelp.com">Send us Feedback 💌</a>
        </div>
      </NotificationBar>
      <MobileFooter>
        <p>
          ThomasFireHelp.com does not warrant or guarantee any of the accuracy of the information contained herein. All information provided here originated elsewhere though voluntary submissions that have not been screened for accuracy. The authors of this website are simply acting as aggregators of reported information and do not have the resources to independently verify the data contained herein. For the most accurate, validated information from the County of Ventura, go to <a href="http://www.readyventuracounty.org" target="_blank">www.readyventuracounty.org</a>.
        </p>
      </MobileFooter>
    </MediaQuery>

    <MediaQuery minDeviceWidth={481}>
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
      <Footer>
        <p>
          ThomasFireHelp.com does not warrant or guarantee any of the accuracy of the information contained herein. All information provided here originated elsewhere through voluntary submissions that have not been screened for accuracy. The authors of this website are simply acting as aggregators of reported information and do not have the resources to independently verify the data contained herein. For the most accurate, validated information from the County of Ventura, go to <a href="http://www.readyventuracounty.org" target="_blank">www.readyventuracounty.org</a>.
        </p>
      </Footer>
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
  </Container>
)

export default Home
