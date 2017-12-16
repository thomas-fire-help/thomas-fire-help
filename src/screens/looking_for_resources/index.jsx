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
          href="https://drive.google.com/open?id=1xWoeLBQYWkgpaMcVCaBnMfEC-oY80aS2CD3sGxMHdes"
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
          href="https://drive.google.com/open?id=1ARhcqiax5bf4vDfPZak7ffUEolMvqTFcGw9sp62m1qA"
          target="_blank"
        >
          <h2> 🐴 Help With Animals </h2>
          <p> Animal supplies & volunteer help. </p>
        </MobileExternal>

        <MobileExternal
          href="https://drive.google.com/open?id=1bio9KHbv25rozXF6mV924IbS06EZHWnJhOe8sYCxVqM"
          target="_blank"
        >
          <h2> 👕 Supplies </h2>
          <p> Free clothing, tools, housewares, and more. </p>
        </MobileExternal>

        <MobileExternal
          href="https://docs.google.com/spreadsheets/d/12E1-zwPSmnNNtPz3KSE1oB3i_Y3SYNmYFpoRL9aLXkg/edit?usp=sharing"
          target="_blank"
        >
          <h2> 🍲 Food </h2>
          <p> Something free to eat. </p>
        </MobileExternal>
        
        <MobileExternal
          href="https://drive.google.com/open?id=1nUv_bw0IA7KPy_jP5IXEGELd1GF7cfzv_LkJutN_nV4"
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

        <External
          href="https://drive.google.com/open?id=1xWoeLBQYWkgpaMcVCaBnMfEC-oY80aS2CD3sGxMHdes"
          target="_blank"
        >
          <h2> 🏘 Housing </h2>
          <p> View housing that is available now. </p>
        </External>

        <Category to="/looking_for_resources/volunteers">
          <h2> 🛠 Volunteers </h2>
          <p> For property assistance, events, and more. </p>
        </Category>

        <External
          href="https://drive.google.com/open?id=1ARhcqiax5bf4vDfPZak7ffUEolMvqTFcGw9sp62m1qA"
          target="_blank"
        >
          <h2> 🐴 Help With Animals </h2>
          <p> Animal supplies & volunteer help. </p>
        </External>

        <External
          href="https://drive.google.com/open?id=1bio9KHbv25rozXF6mV924IbS06EZHWnJhOe8sYCxVqM"
          target="_blank"
        >
          <h2> 👕 Supplies </h2>
          <p> Free clothing, tools, housewares, and more. </p>
        </External>

        <External
          href="https://docs.google.com/spreadsheets/d/12E1-zwPSmnNNtPz3KSE1oB3i_Y3SYNmYFpoRL9aLXkg/edit?usp=sharing"
          target="_blank"
        >
          <h2> 🍲 Food </h2>
          <p> Something free to eat. </p>
        </External>
        
        <External
          href="https://drive.google.com/open?id=1nUv_bw0IA7KPy_jP5IXEGELd1GF7cfzv_LkJutN_nV4"
          target="_blank"
        >
          <h2> ⛑ Services </h2>
          <p> FEMA assistance, disaster recovery & more. </p>
        </External>

      </MediaQuery>
    </Container>
  </Layout>
)

export default Home
