import React from 'react'
import { connectModule } from 'redux-modules'
import { Spinner } from '@procore/core-react'
import { compose, lifecycle } from 'recompose'
import housingModule from '../../modules/housing'
import { Container, MobileHeaderContainer, HeaderContainer, MobileCategory, Category } from '../../components/atoms'
import Layout from '../../components/Layout'
import MediaQuery from 'react-responsive';

const Housing = ({ loading, data, history: { goBack }}) => (
  <Layout header="Housing" onBack={goBack}>
    <Container>
      <MediaQuery minDeviceWidth={320} maxDeviceWidth={480}>
        <MobileHeaderContainer style={{ marginBottom: '20px', textAlign: 'left' }}>
          <h1> I am an... </h1>
        </MobileHeaderContainer>
        <MobileCategory to="/looking_for_resources/volunteers/organization">
          <h2> 🏩 Organization </h2>
        </MobileCategory>
        <MobileCategory to="/looking_for_resources/volunteers/individual">
          <h2> 🙋 Individual </h2>
        </MobileCategory>
      </MediaQuery>

      <MediaQuery minDeviceWidth={481}>
        <HeaderContainer>
          <h1> I'm an... </h1>
        </HeaderContainer>
        <Category to="/looking_for_resources/volunteers/organization">
          <h2> 🏩 Organization </h2>
        </Category>
        <Category to="/looking_for_resources/volunteers/individual">
          <h2> 🙋 Individual </h2>
        </Category>
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
