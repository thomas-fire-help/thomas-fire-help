import React from 'react'
import styled from 'styled-components'
import { connectModule } from 'redux-modules'
import { Spinner } from '@procore/core-react'
import { compose, lifecycle, withStateHandlers } from 'recompose'
import { Card } from '../../components/atoms'
import housingModule from '../../modules/housing'
import Layout from '../../components/Layout'
import HouseCard from '../../components/HouseCard'

const CardList = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    margin-bottom: 30px;
  }
`

const Housing = ({ loading, data, history: { goBack }}) => (
  <Layout header="Housing" onBack={goBack}>
    <CardList>
      {data.map((houseListing, i) => (
        <HouseCard key={i} {...houseListing} />
      ))}
    </CardList>
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
