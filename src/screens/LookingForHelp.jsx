import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Layout from '../components/Layout'
import MediaQuery from 'react-responsive';
import {
  MobileContainer,
  SmallContainer,
  Container,
  LargeContainer,
  MobileExternal,
  SmallExternal,
  External,
  LargeExternal,
  MobileCategory,
  SmallCategory,
  Category,
  LargeCategory,
  ActionHolder,
  MobileHeaderContainer,
  HeaderContainer,
} from '../components/atoms'

const Home = ({ history: { goBack }}) => (
  <Layout onBack={goBack}>
    <MobileContainer>
      <MediaQuery maxWidth={480}>
        <MobileHeaderContainer style={{ marginBottom: '20px', textAlign: 'left' }}>
          <h1> What do you need? </h1>
        </MobileHeaderContainer>
        <MobileCategory to="/looking_for_resources/volunteers">
          <h2> 🛠 Volunteers </h2>
          <p> For property assistance, events, animal care, and more. </p>
        </MobileCategory>
        <MobileExternal
          href="https://docs.google.com/spreadsheets/d/1miFPjSVhG8NR-tpieEH3Tu9cusCAesCSfr6ro1Nbd88/edit#gid=1117680778"
          target="_blank"
        >
          <h2> 🏘 Housing </h2>
          <p> View housing that is available now. </p>
        </MobileExternal>
        <MobileExternal
          href="https://docs.google.com/spreadsheets/d/1miFPjSVhG8NR-tpieEH3Tu9cusCAesCSfr6ro1Nbd88/edit#gid=427392080"
          target="_blank"
        >
          <h2> 🗃 Supplies </h2>
          <p> Free food, tools, housewares, animal supplies, and more. </p>
        </MobileExternal>
      </MediaQuery>
    </MobileContainer>

    <SmallContainer>
      <MediaQuery maxWidth={700} minWidth={480}>
          <HeaderContainer>
            <h1> What do you need? </h1>
          </HeaderContainer>
          <SmallCategory to="/looking_for_resources/volunteers">
            <h3><div>🛠</div><div>Volunteers</div></h3>
            <p> For property assistance, events, animal care, and more. </p>
          </SmallCategory>
          <SmallExternal
            href="https://docs.google.com/spreadsheets/d/1miFPjSVhG8NR-tpieEH3Tu9cusCAesCSfr6ro1Nbd88/edit#gid=1117680778"
            target="_blank"
          >
            <h3><div>🏘</div><div>Housing</div></h3>
            <p> View housing that is available now. </p>
          </SmallExternal>
          <SmallExternal
            href="https://docs.google.com/spreadsheets/d/1miFPjSVhG8NR-tpieEH3Tu9cusCAesCSfr6ro1Nbd88/edit#gid=427392080"
            target="_blank"
          >
            <h3><div>🗃</div><div>Supplies </div></h3>
            <p> Free food, tools, housewares, animal supplies, and more. </p>
          </SmallExternal>
      </MediaQuery>
    </SmallContainer>

    <SmallContainer>
      <MediaQuery minWidth={700} maxWidth={1042}>
          <HeaderContainer>
            <h1> What do you need? </h1>
          </HeaderContainer>
          <SmallCategory to="/looking_for_resources/volunteers">
            <h3><div>🛠</div><div>Volunteers</div></h3>
            <p> For property assistance, events, animal care, and more. </p>
          </SmallCategory>
          <SmallExternal
            href="https://docs.google.com/spreadsheets/d/1miFPjSVhG8NR-tpieEH3Tu9cusCAesCSfr6ro1Nbd88/edit#gid=1117680778"
            target="_blank"
          >
            <h3><div>🏘</div><div>Housing</div></h3>
            <p> View housing that is available now. </p>
          </SmallExternal>
          <SmallExternal
            href="https://docs.google.com/spreadsheets/d/1miFPjSVhG8NR-tpieEH3Tu9cusCAesCSfr6ro1Nbd88/edit#gid=427392080"
            target="_blank"
          >
            <h3><div>🗃</div><div>Supplies </div></h3>
            <p> Free food, tools, housewares, animal supplies, and more. </p>
          </SmallExternal>
      </MediaQuery>
    </SmallContainer>

    <Container>
      <MediaQuery minWidth={1042} maxWidth={1615}>
          <HeaderContainer>
            <h1> What do you need? </h1>
          </HeaderContainer>
          <Category to="/looking_for_resources/volunteers">
            <h2><div>🛠</div><div>Volunteers</div></h2>
            <p> For property assistance, events, animal care, and more. </p>
          </Category>
          <External
            href="https://docs.google.com/spreadsheets/d/1miFPjSVhG8NR-tpieEH3Tu9cusCAesCSfr6ro1Nbd88/edit#gid=1117680778"
            target="_blank"
          >
            <h2><div>🏘</div><div>Housing</div></h2>
            <p> View housing that is available now. </p>
          </External>
          <External
            href="https://docs.google.com/spreadsheets/d/1miFPjSVhG8NR-tpieEH3Tu9cusCAesCSfr6ro1Nbd88/edit#gid=427392080"
            target="_blank"
          >
            <h2><div>🗃</div><div>Supplies </div></h2>
            <p> Free food, tools, housewares, animal supplies, and more. </p>
          </External>
      </MediaQuery>
    </Container>

    <LargeContainer>
      <MediaQuery minWidth={1615}>
          <HeaderContainer>
            <h1> What do you need? </h1>
          </HeaderContainer>
          <LargeCategory to="/looking_for_resources/volunteers">
            <h2><div>🛠</div><div>Volunteers</div></h2>
            <p> For property assistance, events, animal care, and more. </p>
          </LargeCategory>
          <LargeExternal
            href="https://docs.google.com/spreadsheets/d/1miFPjSVhG8NR-tpieEH3Tu9cusCAesCSfr6ro1Nbd88/edit#gid=1117680778"
            target="_blank"
          >
            <h2><div>🏘</div><div>Housing</div></h2>
            <p> View housing that is available now. </p>
          </LargeExternal>
          <LargeExternal
            href="https://docs.google.com/spreadsheets/d/1miFPjSVhG8NR-tpieEH3Tu9cusCAesCSfr6ro1Nbd88/edit#gid=427392080"
            target="_blank"
          >
            <h2><div>🗃</div><div>Supplies </div></h2>
            <p> Free food, tools, housewares, animal supplies, and more. </p>
          </LargeExternal>
      </MediaQuery>
    </LargeContainer>
  </Layout>
)

export default Home
