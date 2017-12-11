import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { Container, HeaderContainer, External, Category } from '../components/atoms'

const Home = ({ history: { goBack }}) => (
  <Layout onBack={goBack}>
    <Container>
      <HeaderContainer>
        <h1>
          I want to...
        </h1>
      </HeaderContainer>
      <Category to="/helping/volunteers">
        <h2>
          Volunteer
        </h2>
        <p>
          With individuals or organizations.
        </p>
      </Category>
      <External
        href="https://docs.google.com/forms/d/1W4Z7wwVGVBVNuf9bajq3ud0UwtkrrQ4H6AwY5F155X0/edit"
        target="_blank"
      >
        <h2>
          Offer Housing
        </h2>
        <p>
          Help a displaced family, short term or long term
        </p>
      </External>
      <External
        href="https://docs.google.com/spreadsheets/d/1miFPjSVhG8NR-tpieEH3Tu9cusCAesCSfr6ro1Nbd88/edit#gid=427392080"
        target="_blank"
      >
        <h2>
          Offer Supplies
        </h2>
        <p>
          Donate supplies or register a drop-off location
        </p>
      </External>
    </Container>
  </Layout>
)

export default Home
