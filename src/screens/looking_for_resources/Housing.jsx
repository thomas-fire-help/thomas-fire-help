import React from 'react'
import styled from 'styled-components'
import { connectModule } from 'redux-modules'
import { Spinner } from '@procore/core-react'
import { compose, lifecycle, withStateHandlers } from 'recompose'
import { Card } from '../../components/atoms'
import housingModule from '../../modules/housing'
import Layout from '../../components/Layout'

const Body = styled.div`
  padding: 15px;
`

const Summary = styled.div`
  padding-top: 15px;
  font-size: 20px;
`

const Location = styled.div`
  font-size: 20px;
`

const DetailPane = styled.aside`
  padding-top: 15px;
  max-height: ${props => props.active ? '200px' : '0px'};
  overflow: hidden;
  font-size: 14px;
  transition: max-height 0.2s ease-in-out;
`

const Footer = styled.section`
  width: 100%;
  display: flex;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Button = styled.button`
  align-self: flex-end;
  background-color: ${props => props.active ? 'darkgray' : 'none'};
  color: ${props => props.active ? 'white' : 'black'};
  border: 1px solid lightgray;
  border-radius: 3px;
  padding: 15px 30px;
  flex: 1;
  text-transform: uppercase;
  margin-top: 2rem;
  cursor: pointer;
`

const TagList = styled.ul`
  list-style: none;
`

const Tag = styled.li`

`

const wordMap = {
  paid: {
    true: 'Paid',
    false: 'Free',
  },
  housing_type: {
    room: 'Room',
    house: 'Entire House',
  },
  length_of_stay: {
    short_term: 'Short Term - 5 days',
    long_term: 'Long Term - 1 month',
  },
}

const prettyPrint = (key, value) => wordMap[key][value]

const Housing = ({ setShowDetails, showDetails, loading, data, history: { goBack }}) => (
  <Layout header="Housing" onBack={goBack}>
    {data.map(houseListing => (
      <Card>
        <Body>
          <HeaderContainer>
            <h2>
              {`${prettyPrint('housing_type', houseListing.housing_type)} in ${houseListing.city}`}
            </h2>
            <aside>
              {prettyPrint('length_of_stay', houseListing.length_of_stay)}
            </aside>
          </HeaderContainer>
          <Summary>
            <p>
              {`🛏 ${houseListing.beds} beds available`}
            </p>
          </Summary>
          <Location>
            {`📍 ${houseListing.city}, ${houseListing.neighborhood}`}
          </Location>
          <DetailPane active={showDetails}>
            <TagList>
              <Tag>{prettyPrint('paid', houseListing.paid)}</Tag>
              <Tag>{prettyPrint('length_of_stay', houseListing.length_of_stay)}</Tag>
              {houseListing.child_friendly &&
                <Tag>Child Friendly</Tag>
              }
              {houseListing.pets_accepted &&
                <Tag>Pets Accepted</Tag>
              }
            </TagList>
            {houseListing.kid_notes &&
              <div>
                <b>Notes on Children</b>
                <p>
                  {houseListing.kid_notes}
                </p>
              </div>
            }
            {houseListing.pet_notes &&
              <div>
                <b>Notes on Pets</b>
                <p>
                  {houseListing.pet_notes}
                </p>
              </div>
            }
            {houseListing.notes &&
              <div>
                <b>Notes</b>
                <p>
                  {houseListing.notes}
                </p>
              </div>
            }
          </DetailPane>
          <Footer>
            <Button
              active={showDetails}
              onClick={() => setShowDetails(!showDetails)}
            >
              Details
            </Button>
            <Button>
              Contact
            </Button>
          </Footer>
        </Body>
      </Card>
    ))}
  </Layout>
)

Housing.defaultProps = {
  loading: false,
  data: [],
}

export default compose(
  connectModule(housingModule),
  withStateHandlers({ showDetails: false }, {
    setShowDetails: state => value => ({ showDetails: value }),
  }),
  lifecycle({
    componentWillMount() {
      this.props.actions.list()
    }
  }),
)(Housing)
