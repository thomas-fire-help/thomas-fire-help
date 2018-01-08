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
    {/* {filterPaneActive &&
      <OverlayLayout onBack={hideFilters}>
        <StackInput dark label="Housing Type">
          <SingleSelect
            value={filters.housing_type}
            options={[
              { label: "House", value: "house" },
              { label: "Room", value: "room" }
            ]}
            onChange={selected =>
              actions.updateFilters({ key: 'housing_type', value: selected })
            }
          />
        </StackInput>

        <StackInput dark label="Beds Available">
          <SingleSelect
            value={filters.beds}
            options={[
              { label: "1", value: "1" },
              { label: "2", value: "2" },
              { label: "3", value: "3" },
              { label: "4", value: "4" },
              { label: "5+", value: "5" }
            ]}
            onChange={selected =>
              actions.updateFilters({ key: 'beds', value: selected })
            }
          />
        </StackInput>

        <StackInput dark label="Duration">
          <SingleSelect
            value={filters.length_of_stay}
            options={[
              { label: "Short Term", value: "short" },
              { label: "Long Term", value: "long" },
              { label: "Permanent", value: "permanent" }
            ]}
            onChange={selected =>
              actions.updateFilters({ key: 'length_of_stay', value: selected })
            }
          />
        </StackInput>

        <StackInput dark label="Paid">
          <SingleSelect
            value={filters.paid}
            options={[
              { label: "Paid", value: true },
              { label: "Free", value: false }
            ]}
            onChange={selected =>
              actions.updateFilters({ key: 'paid', value: selected })
            }
          />
        </StackInput>

        <StackInput dark label="Pets Allowed">
          <SingleSelect
            value={filters.pets_accepted}
            options={[
              { label: "Allowed", value: true },
              { label: "Not Allowed", value: false }
            ]}
            onChange={selected =>
              actions.updateFilters({ key: 'pets_accepted', value: selected })
            }
          />
        </StackInput>

        <MobileButton
          onClick={hideFilters}
        >
          <Icon type="search" style={{ marginRight: '10px' }}/>
          Filter
        </MobileButton>
      </OverlayLayout>
    } */}
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
