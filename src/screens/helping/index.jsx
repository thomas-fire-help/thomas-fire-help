import React from 'react'
import styled from 'styled-components'
import Layout from '../../components/Layout'
import MediaQuery from 'react-responsive'
import {
  Container,
  MobileHeader,
  HeaderContainer,
  MobileExternal,
  External,
  MobileCategory,
  Category,
  MobileHeaderContainer
} from '../../components/atoms'

const Home = ({ history: { goBack }}) => (
  <Layout onBack={goBack}>
    <Container>
      <MediaQuery minDeviceWidth={320} maxDeviceWidth={480}>
        <MobileHeaderContainer style={{ whiteSpace: 'normal', overflow: 'auto', marginBottom: '20px', textAlign: 'left' }}>
          <h1> How do you want to help? </h1>
        </MobileHeaderContainer>

        <MobileExternal
          href="https://docs.google.com/forms/d/1W4Z7wwVGVBVNuf9bajq3ud0UwtkrrQ4H6AwY5F155X0/edit"
          target="_blank"
        >
          <h2> 🏡 Offer Housing </h2>
          <p> Help a displaced family, short term or long term. </p>
        </MobileExternal>

        <MobileExternal
          href="https://docs.google.com/spreadsheets/d/1miFPjSVhG8NR-tpieEH3Tu9cusCAesCSfr6ro1Nbd88/edit#gid=427392080"
          target="_blank"
        >
          <h2> 🐴 Help With Animals </h2>
          <p> Volunteer to help animals. </p>
        </MobileExternal>
        
        <MobileCategory to="/helping/volunteers">
          <h2> 🛠 Volunteer </h2>
          <p> With individuals or organizations. </p>
        </MobileCategory>

        <MobileExternal
          href="https://docs.google.com/spreadsheets/d/1miFPjSVhG8NR-tpieEH3Tu9cusCAesCSfr6ro1Nbd88/edit#gid=427392080"
          target="_blank"
        >
          <h2> 👕 Donate or Collect Supplies </h2>
          <p> Donate supplies or register a drop-off location. </p>
        </MobileExternal>

        <MobileExternal
          href="https://docs.google.com/spreadsheets/d/1miFPjSVhG8NR-tpieEH3Tu9cusCAesCSfr6ro1Nbd88/edit#gid=427392080"
          target="_blank"
        >
          <h2> ⬇️ Drop-Off Supplies </h2>
          <p> View registered drop-off locations. </p>
        </MobileExternal>

        <MobileExternal
          href="https://docs.google.com/spreadsheets/d/1miFPjSVhG8NR-tpieEH3Tu9cusCAesCSfr6ro1Nbd88/edit#gid=427392080"
          target="_blank"
        >
          <h2> 🍲 Offer Food </h2>
          <p> I have food or meals to offer. </p>
        </MobileExternal>

      </MediaQuery>

      <MediaQuery minDeviceWidth={481}>
        <HeaderContainer>
          <h1> How do you want to help? </h1>
        </HeaderContainer>

        <External
          href="https://docs.google.com/forms/d/1W4Z7wwVGVBVNuf9bajq3ud0UwtkrrQ4H6AwY5F155X0/edit"
          target="_blank"
        >
          <h2> 🏡 Offer Housing </h2>
          <p> Help a displaced family, short term or long term. </p>
        </External>

        <External
          href="https://docs.google.com/spreadsheets/d/1miFPjSVhG8NR-tpieEH3Tu9cusCAesCSfr6ro1Nbd88/edit#gid=427392080"
          target="_blank"
        >
          <h2> 🐴 Help With Animals </h2>
          <p> Volunteer to help animals. </p>
        </External>
        
        <Category to="/helping/volunteers">
          <h2> 🛠 Volunteer </h2>
          <p> With individuals or organizations. </p>
        </Category>

        <External
          href="https://docs.google.com/spreadsheets/d/1miFPjSVhG8NR-tpieEH3Tu9cusCAesCSfr6ro1Nbd88/edit#gid=427392080"
          target="_blank"
        >
          <h2> 👕 Donate or Collect Supplies </h2>
          <p> Donate supplies or register a drop-off location. </p>
        </External>

        <External
          href="https://docs.google.com/spreadsheets/d/1miFPjSVhG8NR-tpieEH3Tu9cusCAesCSfr6ro1Nbd88/edit#gid=427392080"
          target="_blank"
        >
          <h2> ⬇️ Drop-Off Supplies </h2>
          <p> View registered drop-off locations. </p>
        </External>

        <External
          href="https://docs.google.com/spreadsheets/d/1miFPjSVhG8NR-tpieEH3Tu9cusCAesCSfr6ro1Nbd88/edit#gid=427392080"
          target="_blank"
        >
          <h2> 🍲 Offer Food </h2>
          <p> I have food or meals to offer. </p>
        </External>



        <Category to="/helping/volunteers">
          <h2> 🛠 Volunteer </h2>
          <p> With individuals or organizations. </p>
        </Category>
        <External
          href="https://docs.google.com/forms/d/1W4Z7wwVGVBVNuf9bajq3ud0UwtkrrQ4H6AwY5F155X0/edit"
          target="_blank"
        >
          <h2> 🏡 Offer Housing </h2>
          <p> Help a displaced family, short term or long term. </p>
        </External>
        <External
          href="https://docs.google.com/spreadsheets/d/1miFPjSVhG8NR-tpieEH3Tu9cusCAesCSfr6ro1Nbd88/edit#gid=427392080"
          target="_blank"
        >
          <h2> 🗃 Offer Supplies </h2>
          <p> Donate supplies or register a drop-off location. </p>
        </External>
      </MediaQuery>
    </Container>
  </Layout>
)

export default Home
