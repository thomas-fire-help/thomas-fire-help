import React from 'react'
import styled from 'styled-components'
import { connectModule } from 'redux-modules'
import { Spinner } from '@procore/core-react'
import { compose, lifecycle, withStateHandlers } from 'recompose'
import { Card } from '../../components/atoms'
import lfVolunteersModule from '../../modules/lfVolunteers'
import Layout from '../../components/Layout'
import HouseCard from '../../components/HouseCard'

const CardList = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    margin-bottom: 30px;
  }
`

const Volunteers = ({ loading, data, history: { goBack }}) => (
  <Layout header="Volunteers" onBack={goBack}>
    <CardList>
      {JSON.stringify(data)}
    </CardList>
  </Layout>
)

Volunteers.defaultProps = {
  loading: false,
  data: [],
}

export default compose(
  connectModule(lfVolunteersModule),
  lifecycle({
    componentWillMount() {
      this.props.actions.list()
    }
  }),
)(Volunteers)
