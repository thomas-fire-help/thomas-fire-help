import React from 'react'
import { withStateHandlers } from 'recompose'
import styled from 'styled-components'
import { Card } from './atoms'

const Body = styled.div`
  padding: 15px;
`

const Summary = styled.div`
  padding-left: 4px;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 600;
  font-color: #6D6D6D;
  letter-spacing: .03em;
`

const Location = styled.div`
  font-size: 20px;
`

const DetailPane = styled.aside`
  padding-top: ${props => props.acive && '15px'};
  max-height: ${props => props.active ? '750px' : '0px'};
  overflow: hidden;
  font-size: 14px;
  transition: max-height 0.25s ease-in-out;
`

const Footer = styled.section`
  width: 100%;
  display: flex;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  user-select: none;

  h2 {
    cursor: pointer;
    font-size: 36px;
    color: #3A3A3A;
    font-weight: 600;
    margin-bottom: 0px;
  }
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
  margin-top: 30px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const Tag = styled.li`
  margin: 5px;
  padding: 5px 10px;
  border-radius: 15px;
  border: 1px solid grey;
`

const wordMap = {
  paid: {
    true: 'Paid',
    false: 'Free',
  },
  housing_type: {
    room: 'Room',
    house: 'House',
  },
  length_of_stay: {
    short: 'Short Term (5 days)',
    long: 'Long Term (1 month)',
    permanent: 'Permanent',
  },
  city: {
    santa_barbara: 'Santa Barbara',
    ventura: 'Ventura',
    goleta: 'Goleta',
    ojai: 'Ojai',
    camarillo: 'Camarillo',
    thousand_oaks: 'Thousand Oaks',
  }
}

// const prettyPrint = (key, value) => wordMap[key][value]


const VolunteerListingCard = ({
  organization,
  setShowDetails,
  showDetails,
}) => (
  <Card>
    <Body>
      <HeaderContainer>
        <h2>
          {`${organization}`}
        </h2>
        <aside>
          {}
        </aside>
      </HeaderContainer>

      <Summary>
        {/* <div>
          {`${houseListing.beds} beds - ${prettyPrint('length_of_stay', houseListing.length_of_stay)}`}
        </div> */}
      </Summary>

      <TagList>
        {/* <Tag>{prettyPrint('paid', houseListing.paid)}</Tag>
        <Tag>{prettyPrint('length_of_stay', houseListing.length_of_stay)}</Tag>
        {houseListing.child_friendly &&
          <Tag>Child Friendly</Tag>
        }
        {houseListing.pets_accepted &&
          <Tag>Pets Accepted</Tag>
        } */}
      </TagList>

      <DetailPane>
        {/* {houseListing.kid_notes &&
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
        } */}
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
)

export default withStateHandlers({ showDetails: false }, {
  setShowDetails: state => value => ({ showDetails: value }),
})(VolunteerListingCard)
