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
          href="https://drive.google.com/open?id=1DjCXaJgoLG4vG4OVD3ACY_DUidvn3MHaBEiQLG0mkIc"
          target="_blank"
        >
          <h2> 🏡 Offer Housing </h2>
          <p> Help a displaced family or individual, short term or long term. </p>
        </MobileExternal>

        <MobileExternal
          href="https://drive.google.com/open?id=13X6RVw99trn_Hmmng3NcyacolVJDo3wPmo4WjYV0Ulw"
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
          href="https://drive.google.com/open?id=1s4R5IOZtu8_AVKZG5-fd_ood_aFOO6P04mABgI401b8"
          target="_blank"
        >
          <h2> 👕 Donate or Collect Supplies </h2>
          <p> Donate supplies or register a drop-off location. </p>
        </MobileExternal>

        <MobileExternal
          href="https://drive.google.com/open?id=1bio9KHbv25rozXF6mV924IbS06EZHWnJhOe8sYCxVqM"
          target="_blank"
        >
          <h2> ⬇️ Drop-Off Supplies </h2>
          <p> View registered drop-off locations. </p>
        </MobileExternal>

        <MobileExternal
          href="https://drive.google.com/open?id=1CKBobLoLVF3Uve5Enm9_RUsxCTFcHQI-ounJV0zUO-0"
          target="_blank"
        >
          <h2> 🍲 Offer Food </h2>
          <p> I have food or meals to offer. </p>
        </MobileExternal>

        <MobileExternal
          href="https://drive.google.com/open?id=1ykwR9EozuxWDQ0oLkiE9fIn5ku7Z6VjelsY3PWWrNM0"
          target="_blank"
        >
          <h2> ⛑ Services </h2>
          <p> Offer professional services. </p>
        </MobileExternal>

      </MediaQuery>

      <MediaQuery minDeviceWidth={481}>
        <HeaderContainer>
          <h1> How do you want to help? </h1>
        </HeaderContainer>

        <External
          href="https://drive.google.com/open?id=1DjCXaJgoLG4vG4OVD3ACY_DUidvn3MHaBEiQLG0mkIc"
          target="_blank"
        >
          <h2> 🏡 Offer Housing </h2>
          <p> Help a displaced family, short term or long term. </p>
        </External>

        <External
          href="https://drive.google.com/open?id=13X6RVw99trn_Hmmng3NcyacolVJDo3wPmo4WjYV0Ulw"
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
          href="https://drive.google.com/open?id=1s4R5IOZtu8_AVKZG5-fd_ood_aFOO6P04mABgI401b8"
          target="_blank"
        >
          <h2> 👕 Donate or Collect Supplies </h2>
          <p> Donate supplies or register a drop-off location. </p>
        </External>

        <External
          href="https://drive.google.com/open?id=1bio9KHbv25rozXF6mV924IbS06EZHWnJhOe8sYCxVqM"
          target="_blank"
        >
          <h2> ⬇️ Drop-Off Supplies </h2>
          <p> View registered drop-off locations. </p>
        </External>

        <External
          href="https://drive.google.com/open?id=1CKBobLoLVF3Uve5Enm9_RUsxCTFcHQI-ounJV0zUO-0"
          target="_blank"
        >
          <h2> 🍲 Offer Food </h2>
          <p> Donate food or meals. </p>
        </External>

        <External
          href="https://drive.google.com/open?id=1ykwR9EozuxWDQ0oLkiE9fIn5ku7Z6VjelsY3PWWrNM0"
          target="_blank"
        >
          <h2> ⛑ Services </h2>
          <p> Offer professional services. </p>
        </External>

      </MediaQuery>
    </Container>
  </Layout>
)

export default Home
