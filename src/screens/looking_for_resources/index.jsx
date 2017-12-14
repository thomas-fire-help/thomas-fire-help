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
        <MobileCategory to="/looking_for_resources/volunteers">
          <h2> 🛠 Volunteers </h2>
          <p> For property assistance, events, animal care, and more. </p>
        </MobileCategory>
        <MobileCategory to="/looking_for_resources/housing">
          <h2> 🏘 Housing </h2>
          <p> View housing that is available now. </p>
        </MobileCategory>
        <MobileExternal
          href="https://docs.google.com/spreadsheets/d/1miFPjSVhG8NR-tpieEH3Tu9cusCAesCSfr6ro1Nbd88/edit#gid=427392080"
          target="_blank"
        >
          <h2> 🗃 Supplies </h2>
          <p> Free food, tools, housewares, animal supplies, and more. </p>
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
        <Category to="/looking_for_resources/housing">
          <h2> 🏘 Housing </h2>
          <p> View housing that is available now. </p>
        </Category>
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
