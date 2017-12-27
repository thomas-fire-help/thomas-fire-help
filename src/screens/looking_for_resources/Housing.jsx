import React from 'react'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'
import { Icon } from 'antd';
import { connectModule } from 'redux-modules'
import { Spinner } from '@procore/core-react'
import { compose, lifecycle, withStateHandlers } from 'recompose'
import { Card } from '../../components/atoms'
import housingModule from '../../modules/housing'
import Layout from '../../components/Layout'
import HouseCard from '../../components/HouseCard'
import MobileHouseCard from '../../components/MobileHouseCard'
import {
  FullscreenOverlay,
  Container,
  MobileHeaderContainer,
  HeaderContainer,
  StackInput
  } from '../../components/atoms'
import MultiSelect from '../../components/MultiSelect'
import OverlayLayout from '../../components/OverlayLayout'

const CardList = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    margin-bottom: 30px;
  }
`

const Housing = ({
  filterPaneActive,
  hideFilters,
  showFilters,
  loading,
  data,
  history: { goBack }
}) => (
  <Layout header="Housing" onBack={goBack}>
    <Container style={{ margin: '15px 25px'}}>
      {filterPaneActive &&
        <OverlayLayout onBack={hideFilters}>
          <StackInput dark label="Housing Type">
            <MultiSelect
              options={[
                { label: "House", value: "house" },
                { label: "Room", value: "room" }
              ]}
              onChange={selected => console.log(selected)}
            />

          </StackInput>
          <StackInput dark label="Beds Available">

          </StackInput>
          <StackInput dark label="Duration">

          </StackInput>
          <StackInput dark label="Paid">
            <MultiSelect
              options={[
                { label: "Paid", value: true },
                { label: "Free", value: false }
              ]}
              onChange={selected => console.log(selected)}
            />
          </StackInput>
          <StackInput dark label="Pets Allowed">
            <MultiSelect
              options={[
                { label: "Allowed", value: true },
                { label: "Not Allowed", value: false }
              ]}
              onChange={selected => console.log(selected)}
            />
          </StackInput>
        </OverlayLayout>
      }
      <MediaQuery minDeviceWidth={320} maxDeviceWidth={480}>
        <MobileHeaderContainer style={{ marginBottom: '20px' }}>
          <h1> Housing </h1>

          <Icon
            type="filter"
            style={{ display: 'flex', textTransform: 'uppercase', fontWeight: 'bold', marginRight: '10px', justifyContent: 'space-between', width: '75px', cursor: 'pointer' }}
          >
            Filter
          </Icon>
        </ MobileHeaderContainer>
        <CardList>
          {data.map((houseListing, i) => (
            <MobileHouseCard key={i} {...houseListing} />
          ))}
        </CardList>
      </ MediaQuery>

      <MediaQuery minDeviceWidth={481}>
        <HeaderContainer style={{ marginBottom: '20px' }}>
          <h1> Housing </h1>

          <Icon
            onClick={showFilters}
            type="filter"
            style={{ display: 'flex', textTransform: 'uppercase', fontWeight: 'bold', marginRight: '10px', justifyContent: 'space-between', width: '75px', cursor: 'pointer' }}
          >
            Filter
          </Icon>
        </HeaderContainer>
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
  withStateHandlers({ filterPaneActive: false }, {
    showFilters: state => () => ({ filterPaneActive: true }),
    hideFilters: state => () => ({ filterPaneActive: false }),
  }),
  lifecycle({
    componentWillMount() {
      this.props.actions.list()
    }
  }),
)(Housing)
