import React from 'react'
import { connectModule } from 'redux-modules'
import { Spinner } from '@procore/core-react'
import { compose, lifecycle } from 'recompose'
import MediaQuery from 'react-responsive'
import housingModule from '../../modules/housing'
import {
  Container,
  MobileHeaderContainer,
  HeaderContainer,
  MobileExternal,
  External
} from '../../components/atoms'
import Layout from '../../components/Layout'

const Housing = ({ loading, data, history: { goBack }}) => (
  <Layout header="Housing" onBack={goBack}>
    <Container>
      <MediaQuery minDeviceWidth={320} maxDeviceWidth={480}>
        <MobileHeaderContainer style={{ marginBottom: '20px', textAlign: 'left' }}>
          <h1> I want to help... </h1>
        </MobileHeaderContainer>
        <MobileExternal
          href="https://drive.google.com/open?id=1ul5ZYbb4UUBuzpMB-nKplNFtIv3mloLD5u3iWhvEWq0"
          target="_blank"
        >
          <h2> 🏩 An Organization </h2>
        </MobileExternal>
        <MobileExternal
          href="https://drive.google.com/open?id=1ul5ZYbb4UUBuzpMB-nKplNFtIv3mloLD5u3iWhvEWq0"
          target="_blank"
        >
          <h2> 🏡 My Neighbors </h2>
        </MobileExternal>
      </MediaQuery>

      <MediaQuery minDeviceWidth={481}>
        <HeaderContainer>
          <h1> I want to help... </h1>
        </HeaderContainer>
        <External
          href="https://drive.google.com/open?id=1ul5ZYbb4UUBuzpMB-nKplNFtIv3mloLD5u3iWhvEWq0"
          target="_blank"
        >
          <h2> 🏩 An Organization </h2>
        </External>
        <External
          href="https://drive.google.com/open?id=1ul5ZYbb4UUBuzpMB-nKplNFtIv3mloLD5u3iWhvEWq0"
          target="_blank"
        >
          <h2> 🏡 My Neighbors </h2>
        </External>
      </MediaQuery>
    </Container>
  </Layout>
)

Housing.defaultProps = {
  loading: false,
  data: [
    {
      title: '2BR on the Ave.'
    },
    {
      title: '3BR on the Ave.'
    }
  ]
}

export default compose(
  connectModule(housingModule),
  lifecycle({
    componentWillMount() {
      this.props.actions.list()
    }
  }),
)(Housing)
