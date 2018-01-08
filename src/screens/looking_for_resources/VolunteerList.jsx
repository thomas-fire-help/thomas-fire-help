import React from 'react'
import styled from 'styled-components'
import { connectModule } from 'redux-modules'
import { Spinner } from '@procore/core-react'
import { Icon } from 'antd'
import MediaQuery from 'react-responsive'
import { compose, lifecycle, withStateHandlers } from 'recompose'

import { Container, MobileContainer, Card, MobileHeaderContainer } from '../../components/atoms'
import lfVolunteersModule from '../../modules/lfVolunteers'
import Layout from '../../components/Layout'
import VolunteerListingCard from '../../components/VolunteerListingCard'
import MobileVolunteerListingCard from '../../components/MobileVolunteerListingCard'
import LoadingSpinner from '../../components/LoadingSpinner';

const CardList = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    margin-bosttom: 30px;
  }
`

const Volunteers = ({ loading, data, history: { goBack }}) => (
  <Layout header="Volunteers" onBack={goBack}>
      <LoadingSpinner loading={loading}>
        <CardList>
          <MediaQuery minDeviceWidth={320} maxDeviceWidth={480}>
            <MobileContainer style={{ margin: '15px 25px'}}>
              <MobileHeaderContainer style={{ marginBottom: '20px' }}>
                <h1> Volunteer </h1>
                <Icon
                  type="filter"
                  style={{ display: 'flex', fontSize: '14px', textTransform: 'uppercase', fontWeight: 'bold', marginRight: '10px', justifyContent: 'space-between', width: '75px', cursor: 'pointer' }}
                  >
                  Filter
                </Icon>
              </ MobileHeaderContainer>
              {data.map((volunteerListing, i) => (
                <MobileVolunteerListingCard key={i} {...volunteerListing} />
              ))}
            </MobileContainer>
          </MediaQuery>

          <MediaQuery minDeviceWidth={481}>
            <Container>
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
            </Container>
          </MediaQuery>
        </CardList>
      </LoadingSpinner>
  </Layout>
)

Volunteers.defaultProps = {
  loading: true,
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
