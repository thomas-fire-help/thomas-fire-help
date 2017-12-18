import React from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import MediaQuery from 'react-responsive';
import { withAuth } from '../utils/authUtils';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 45px;
`

const HeaderContainer = styled.div`
  align-self: flex-start;
  flex: .75;
  text-transform: uppercase;
  letter-spacing: 3px;
  width: 100%;
  text-align: center;
  font-size: 20px;
  margin-bottom: 30px;
  opacity: 0;
  animation: ${fadeIn} 1.5s forwards;

  h1 {
    margin: 0;
  }
`

const MobileHeaderContainer = styled.div`
  align-self: flex-start;
  flex: .75;
  text-transform: uppercase;
  letter-spacing: 2px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  margin-top: 300px;
  margin-bottom: 30px;
  marginTop: 100px;
  opacity: 0;
  animation: ${fadeIn} 1.5s forwards;
  h1 {
    margin: 0;
  }
`

const SubheadingContainer = styled.div`
  font-size: 16px;
  text-align: center;
  width: 450px;
  padding: 30px 0px;
  margin: 20px 0 10px 0;
  animation: ${fadeIn} 1.5s forwards;
  animation-delay: .3s;
  margin-bottom: 10px;
`

const MobileSubheadingContainer = styled.div`
  font-size: 14px;
  text-align: center;
  margin: 10px 0 5px 0;
  animation: ${fadeIn} 1.5s forwards;
  animation-delay: .3s;
  margin-bottom: 10px;

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
  margin-bottom: 10px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding: 30px 0px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding: 30px 0px;
  border: 1px solid black;
  font-size: 16px;
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

const EmphasisSmallSpace = styled.span`
  font-size: 5px;
`

const LogoutContainer = styled.section`
  display: flex;
  justify-content: center;
`

const AuthContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: 0;
  animation: ${fadeIn} 1.5s forwards;
  animation-delay: .7s;
`

const LogoutButton = styled.div`
  color: #000;
  text-decoration: none;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  padding: 20px;
  margin: 40px 40px;
  cursor: pointer;
`

const AuthLink = styled(Link)`
  color: #000;
  text-decoration: none;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  padding: 20px;
  margin: 40px 40px;
`

const MobileAuthLink = styled(Link)`
  color: #000;
  text-decoration: none;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  padding: 10px;
  margin: 0px 30px;
`

const TranslateLink = styled.aside`
  display: block;
  font-size: 2rem;
  text-align: center;
  padding: 35px 15px;
`

const MobileNotificationBar = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  animation: ${fadeIn} 1.5s forwards;
  animation-delay: .7s;
  margin: 60px 0px 15px 0px;
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
  margin: 30px 0px 20px 0px;
`

const Footer = styled.footer`
  font-size: 28px;
  text-align: left;
  margin-bottom: 10px;
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
  margin: 15px 0px 10px 0px;
  padding-top: 10px;
  p {
    font-size: 12px;
  }
  opacity: 0;
  animation: ${fadeIn} 1.5s forwards;
  animation-delay: .8s;
`

const Home = ({ loggedIn, authActions, user }) => (
  <Container>
    <MediaQuery minDeviceWidth={320} maxDeviceWidth={480}>
      <MobileHeaderContainer>
        <h1>Thomas Fire Help</h1>
      </MobileHeaderContainer>
      <MobileNavContainer>
        <StyledLink to="/looking_for_resources">
          <MobileNavigationCard>
            View recovery resources
          </MobileNavigationCard>
        </StyledLink>
        <StyledLink to="/helping">
          <MobileNavigationCard>
            I want to help
          </MobileNavigationCard>
        </StyledLink>
      </MobileNavContainer>
      {!loggedIn &&
        <AuthContainer>
          <MobileAuthLink to="login">
            Login
          </MobileAuthLink>
          <MobileAuthLink to="sign_up">
            Sign Up
          </MobileAuthLink>
        </AuthContainer>
      }
      {loggedIn &&
        <AuthContainer>
          <LogoutButton onClick={authActions.logout}>
            Logout
          </LogoutButton>
        </AuthContainer>
      }
      <MobileSubheadingContainer>
        <h3>We're volunteers connecting community-sourced help to recovery needs for the Thomas Fire.</h3>
      </MobileSubheadingContainer>
      <MobileNotificationBar>
        <div>
          Homegrown in Ventura County 🌱
        </div>
        <div>
          Part of the
            <Emphasis> #805
              <EmphasisSmallSpace> </EmphasisSmallSpace>
              Strong
            </Emphasis> Network
        </div>
        <div>
          <a href="mailto:help@thomasfirehelp.com">Send us Feedback 💌</a>
        </div>
      </MobileNotificationBar>
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
            View recovery resources
          </NavigationCard>
        </StyledLink>
        <StyledLink to="/helping">
          <NavigationCard>
            I want to help
          </NavigationCard>
        </StyledLink>
      </NavContainer>
      {!loggedIn &&
        <AuthContainer>
          <AuthLink to="login">
            Login
          </AuthLink>
          <AuthLink to="sign_up">
            Sign Up
          </AuthLink>
        </AuthContainer>
      }
      {loggedIn &&
        <LogoutContainer>
          <LogoutButton onClick={authActions.logout}>
            Logout
          </LogoutButton>
        </LogoutContainer>
      }
      <SubheadingContainer>
        <h3>We're volunteers connecting community-sourced help to recovery needs for the Thomas Fire.</h3>
      </SubheadingContainer>
      <NotificationBar>
        <div>
          <h3>Homegrown in Ventura County 🌱</h3>
        </div>
        <div>
          <h3>Part of the
            <Emphasis> #805
              <EmphasisSmallSpace> </EmphasisSmallSpace>
              Strong
            </Emphasis> Network</h3>
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
    {/* <TranslateLink>
      en Español
    </TranslateLink> */}
  </Container>
)

export default withAuth(Home)
