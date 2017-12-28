import React from 'react'
import styled from 'styled-components'
import { connectModule } from 'redux-modules'
import { Spinner } from '@procore/core-react'
import { Icon } from 'antd'
import MediaQuery from 'react-responsive'
import { compose, lifecycle, withStateHandlers } from 'recompose'
import { Container, Card, MobileHeaderContainer } from '../../components/atoms'
import lfVolunteersModule from '../../modules/lfVolunteers'
import Layout from '../../components/Layout'
import VolunteerListingCard from '../../components/VolunteerListingCard'
import MobileVolunteerListingCard from '../../components/MobileVolunteerListingCard'

const CardList = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    margin-bottom: 30px;
  }
`

const Volunteers = ({ loading, data, history: { goBack }}) => (
  <Layout header="Volunteers" onBack={goBack}>
    <Container style={{ margin: '15px 25px'}}>
      <CardList>
        <MediaQuery minDeviceWidth={320} maxDeviceWidth={480}>
          <MobileHeaderContainer style={{ marginBottom: '20px' }}>
            <h1> Volunteer </h1>
            <Icon
              type="filter"
              style={{ display: 'flex', textTransform: 'uppercase', fontWeight: 'bold', marginRight: '10px', justifyContent: 'space-between', width: '75px', cursor: 'pointer' }}
            >
              Filter
            </Icon>
          </ MobileHeaderContainer>
          {data.map((volunteerListing, i) => (
            <MobileVolunteerListingCard key={i} {...volunteerListing} />
          ))}
        </MediaQuery>
        <MediaQuery minDeviceWidth={481}>
          <MobileHeaderContainer style={{ marginBottom: '20px' }}>
            <h1> Volunteer </h1>
            <Icon
              type="filter"
              style={{ display: 'flex', textTransform: 'uppercase', fontWeight: 'bold', marginRight: '10px', justifyContent: 'space-between', width: '75px', cursor: 'pointer' }}
            >
              Filter
            </Icon>
          </ MobileHeaderContainer>
          {data.map((volunteerListing, i) => (
            <VolunteerListingCard key={i} {...volunteerListing} />
          ))}
        </MediaQuery>
      </CardList>
    </Container>
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
