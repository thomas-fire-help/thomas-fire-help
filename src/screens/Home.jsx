import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Category } from '../components/atoms'
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
  width: 100%;
  text-align: center;
  font-size: 28px;
  padding-bottom: 20px;
  padding-top: 20px;
`

const NavContainer = styled.nav`
  flex: 4;
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
`
const activeClassName = 'nav-item-active'

const StyledLink = styled(Link).attrs({
  activeClassName
})`
  text-decoration: none;
`

const NavigationCard = styled.section`
  margin-top: 20px;
  padding: 30px 60px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 24px;
  color: black;
  text-decoration: none;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.23), 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  }
`

const Emphasis = styled.span`
  background-color: orange;
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
    font-size: 12px;
  }
`

const NotificationBar = styled.div`
  display: flex;
  justify-content: space-between;
`

const Home = props => (
  <Container>
    <NotificationBar>
      <div>
        In event of Emergency, call <a href="tel:911">911</a>
      </div>
      <div>
        <a href="mailto:help@thomasfirehelp.com">
          Send us Feedback 💌
        </a>
      </div>
    </NotificationBar>
    <HeaderContainer>
      <h1>
        Thomas Fire Help
      </h1>
    </HeaderContainer>

    <NavContainer>
      <Category to="/looking_for_resources">
          <h2>🏘 I'm Looking for Resources</h2>
          <p>
            For those affected by the Thomas Fire.
          </p>
      </Category>
      <Category to="/helping">
          <h2>🛠 I Want to Help</h2>
          <p>
            For those looking to help rebuild.
          </p>
      </Category>
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
      <p>
        ThomasFireHelp.com does not warrant or guarantee any of the accuracy of the information contained herein. All information provided here originated elsewhere though voluntary submissions that have not been screened for accuracy. The authors of this website are simply acting as aggregators of reported information and do not have the resources to independently verify the data contained herein. For the most accurate, validated information from the County of Ventura, go to <a href="http://www.readyventuracounty.org" target="_blank">www.readyventuracounty.org</a>.
      </p>
    </Footer>
  </Container>
)

export default Home
