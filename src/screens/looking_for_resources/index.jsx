import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Layout from '../../components/Layout'
import MediaQuery from 'react-responsive';
import {
  Container,
  MobileHeaderContainer,
  HeaderContainer,
  MobileExternal,
  External,
  MobileCategory,
  Category,
} from '../../components/atoms'

const Home = ({ history: { goBack }}) => (
  <Layout onBack={goBack}>
    <Container>
      <MediaQuery minDeviceWidth={320} maxDeviceWidth={480}>
        <MobileHeaderContainer style={{ marginBottom: '20px', textAlign: 'left' }}>
          <h1> What do you need? </h1>
        </MobileHeaderContainer>

        <MobileExternal
          href="https://docs.google.com/spreadsheets/d/1miFPjSVhG8NR-tpieEH3Tu9cusCAesCSfr6ro1Nbd88/edit#gid=1117680778"
          target="_blank"
        >
          <h2> 🏘 Housing </h2>
          <p> View housing that is available now. </p>
        </MobileExternal>
        
        <MobileCategory to="/looking_for_resources/volunteers">
          <h2> 🛠 Volunteers </h2>
          <p> For property assistance, events, and more. </p>
        </MobileCategory>

        <MobileExternal
          href="https://drive.google.com/open?id=1hbUqWT0P2SkQtSLdfir0S-j2Iw8k1R-gNmIwXsXHlgE"
          target="_blank"
        >
          <h2> 🐴 Help With Animals </h2>
          <p> Animal supplies & volunteer help. </p>
        </MobileExternal>
        <MobileExternal
          href="https://docs.google.com/spreadsheets/d/1miFPjSVhG8NR-tpieEH3Tu9cusCAesCSfr6ro1Nbd88/edit#gid=427392080"
          target="_blank"
        >
          <h2> 👕 Supplies </h2>
          <p> Free clothing, tools, housewares, and more. </p>
        </MobileExternal>
        <MobileExternal
          href="https://drive.google.com/open?id=1Ws8tgwwf6q9I9enknXBtL3sEZf7orBE_v5OBwhZtVw4"
          target="_blank"
        >
          <h2> 🍲 Food </h2>
          <p> Something free to eat. </p>
        </MobileExternal>
        <MobileExternal
          href="https://drive.google.com/open?id=1Oi1ij6GmdOVR9WGqL_LGycydMsSF--HKGzDQyM-7WxU"
          target="_blank"
        >
          <h2> ⛑ Services </h2>
          <p> FEMA assistance, disaster recovery & more. </p>
        </MobileExternal>
      </MediaQuery>

      <MediaQuery minDeviceWidth={481}>
        <HeaderContainer>
          <h1> What do you need? </h1>
        </HeaderContainer>
        <Category to="/looking_for_resources/volunteers">
          <h2> 🛠 Volunteers </h2>
          <p> For property assistance, events, animal care, and more. </p>
        </Category>
        <External
          href="https://docs.google.com/spreadsheets/d/1miFPjSVhG8NR-tpieEH3Tu9cusCAesCSfr6ro1Nbd88/edit#gid=1117680778"
          target="_blank"
        >
          <h2> 🏘 Housing </h2>
          <p> View housing that is available now. </p>
        </External>
        <External
          href="https://docs.google.com/spreadsheets/d/1miFPjSVhG8NR-tpieEH3Tu9cusCAesCSfr6ro1Nbd88/edit#gid=427392080"
          target="_blank"
        >
          <h2> 🗃 Supplies </h2>
          <p> Free food, tools, housewares, animal supplies, and more. </p>
        </External>
      </MediaQuery>
    </Container>
  </Layout>
)

export default Home
