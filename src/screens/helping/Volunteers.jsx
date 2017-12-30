import React from 'react'
import { Spinner } from '@procore/core-react'
import MediaQuery from 'react-responsive'
import {
  MobileContainer,
  Container,
  MobileHeaderContainer,
  HeaderContainer,
  MobileCategory,
  Category
} from '../../components/atoms'
import Layout from '../../components/Layout'

const Volunteers = ({ history: { goBack }}) => (
  <Layout header="Volunteers" onBack={goBack}>
      <MediaQuery minDeviceWidth={320} maxDeviceWidth={480}>
        <MobileContainer>
          <MobileHeaderContainer style={{ marginBottom: '20px', textAlign: 'left' }}>
            <h1> I want to help... </h1>
          </MobileHeaderContainer>
          <MobileCategory to="/helping/volunteers/organization">
            <h2> 🏩 An Organization </h2>
          </MobileCategory>
          <MobileCategory to="/helping/volunteers/personal">
            <h2> 🏡 My Neighbors </h2>
          </MobileCategory>
        </MobileContainer>
      </MediaQuery>

      <MediaQuery minDeviceWidth={481}>
        <Container>
          <HeaderContainer>
            <h1> I want to help... </h1>
          </HeaderContainer>
          <Category to="/helping/volunteers/organization">
            <h2> 🏩 An Organization </h2>
          </Category>
          <Category to="/helping/volunteers/personal">
            <h2> 🏡 My Neighbors </h2>
          </Category>
        </Container>
      </MediaQuery>
  </Layout>
)

export default Volunteers
