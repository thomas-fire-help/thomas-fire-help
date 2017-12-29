import React from 'react'
import styled from 'styled-components'
import { connectModule } from 'redux-modules'
import { Spinner } from '@procore/core-react'
import { compose, lifecycle, withStateHandlers } from 'recompose'
import { Card } from '../../components/atoms'
import servicesModule from '../../modules/services'
import Layout from '../../components/Layout'
// Change below to services card
import HouseCard from '../../components/HouseCard'

const CardList = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    margin-bottom: 30px;
  }
`

const Services = ({ loading, data, history: { goBack }}) => (
  <Layout header="Services" onBack={goBack}>
    <CardList>
      {data.map((servicesListing, i) => (
        <HouseCard key={i} {...servicesListing} />
      ))}
    </CardList>
  </Layout>
)

Services.defaultProps = {
  loading: false,
  data: [],
}

export default compose(
  connectModule(servicesModule),
  lifecycle({
    componentWillMount() {
      this.props.actions.list()
    }
  }),
)(Services)
