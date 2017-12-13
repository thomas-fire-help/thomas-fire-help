import React from 'react'
import { connectModule } from 'redux-modules'
import { Spinner } from '@procore/core-react'
import { compose, lifecycle } from 'recompose'
import housingModule from '../../modules/housing'
import { Container, MobileHeaderContainer, HeaderContainer, MobileExternal, External } from '../../components/atoms'
import Layout from '../../components/Layout'
import MediaQuery from 'react-responsive';

const Housing = ({ loading, data, history: { goBack }}) => (
  <Layout header="Housing" onBack={goBack}>
    <Container>
      <MediaQuery minDeviceWidth={320} maxDeviceWidth={480}>
        <MobileHeaderContainer style={{ marginBottom: '20px', textAlign: 'left' }}>
          <h1> I am an... </h1>
        </MobileHeaderContainer>
        <MobileExternal
          href="https://docs.google.com/forms/d/e/1FAIpQLSex42gLquN2__nkCOtO6ei_Y-kHOoSDBpVAk4bTX2TdDvLrpA/viewform"
          target="_blank"
        >
          <h2> 🏩 Organization </h2>
        </MobileExternal>
        <MobileExternal
          href="https://docs.google.com/forms/d/e/1FAIpQLSekXv_IcLhfSi3N3kCg__wJdDL2fcsvM9Oq2UU7pnuIcHouug/viewform"
          target="_blank"
        >
          <h2> 🙋 Individual </h2>
        </MobileExternal>
      </MediaQuery>

      <MediaQuery minDeviceWidth={481}>
        <HeaderContainer>
          <h1> I'm an... </h1>
        </HeaderContainer>
        <External
          href="https://docs.google.com/forms/d/e/1FAIpQLSex42gLquN2__nkCOtO6ei_Y-kHOoSDBpVAk4bTX2TdDvLrpA/viewform"
          target="_blank"
        >
          <h2> 🏩 Organization </h2>
        </External>
        <External
          href="https://docs.google.com/forms/d/e/1FAIpQLSekXv_IcLhfSi3N3kCg__wJdDL2fcsvM9Oq2UU7pnuIcHouug/viewform"
          target="_blank"
        >
          <h2> 🙋 Individual </h2>
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
