import React from 'react'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'
import { connectModule } from 'redux-modules'
import { Spinner } from '@procore/core-react'
import { compose, lifecycle, withStateHandlers } from 'recompose'
import { Card } from '../../components/atoms'
import housingModule from '../../modules/housing'
import Layout from '../../components/Layout'
import HouseCard from '../../components/HouseCard'
import MobileHouseCard from '../../components/MobileHouseCard'
import { Container, MobileHeaderContainer } from '../../components/atoms'

const CardList = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    margin-bottom: 30px;
  }
`

const Housing = ({ loading, data, history: { goBack }}) => (
  <Layout header="Housing" onBack={goBack}>
    <Container style={{ margin: '15px 25px'}}>
      <MediaQuery minDeviceWidth={320} maxDeviceWidth={480}>
        <MobileHeaderContainer style={{ marginBottom: '20px', textAlign: 'left' }}>
          <h1> Housing </h1>
        </ MobileHeaderContainer>
        <CardList>
          {data.map((houseListing, i) => (
            <MobileHouseCard key={i} {...houseListing} />
          ))}
        </CardList>
      </ MediaQuery>

      <MediaQuery minDeviceWidth={481}>
        <CardList>
          {data.map((houseListing, i) => (
            <HouseCard key={i} {...houseListing} />
          ))}
        </CardList>
      </MediaQuery>
    </Container>
  </Layout>
)

Housing.defaultProps = {
  loading: false,
  data: [],
}

export default compose(
  connectModule(housingModule),
  lifecycle({
    componentWillMount() {
      this.props.actions.list()
    }
  }),
)(Housing)
