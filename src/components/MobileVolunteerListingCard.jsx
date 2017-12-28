import React from 'react'
import { withStateHandlers } from 'recompose'
import styled from 'styled-components'
import { Icon } from 'antd'
import { MobileCard } from './atoms'

const Body = styled.div`
  padding: 15px;
  padding-bottom: 0px;
`

const Summary = styled.div`
  margin-left: 2px;
  margin-top: 6px;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  font-color: #6D6D6D;
  letter-spacing: 1px;
`

const Location = styled.div`
  font-size: 20px;
`

const DetailsPane = styled.aside`
  max-height: ${props => props.active ? '750px' : '0px'};
  overflow: hidden;
  font-size: 14px;
  transition: max-height 0.25s ease-in-out;
  margin-top: 15px;

  p {
    margin-bottom: 0;
  }
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

const ContactButton = styled.button`
  align-self: flex-end;
  background-color: #FFF;
  border: 1px solid lightgray;
  color: #000;
  cursor: pointer;
  flex: 1;
  outline: none;
  padding: 15px 30px;
  margin-top: 20px;
  user-select: none;
`

const DetailsButton = styled.button`
  align-self: flex-end;
  background-color: ${props => props.active ? '#3A3A3A' : '#FFF'};
  border: 1px solid lightgray;
  color: ${props => props.active ? 'white' : 'black'};
  cursor: pointer;
  flex: 1;
  outline: none;
  padding: 15px 30px;
  transition: background-color 0.25s ease-in-out;
  margin-top: 20px;
  user-select: none;
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

const MobileVolunteerListingCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  user-select: none;

  h2 {
    font-size: 24px;
    line-height: 30px;
    margin: 0px;
  }

  aside {
    font-size: 14px;
    margin-top: 10px;
  }
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

const prettyPrint = (key, value) => wordMap[key][value]


const MobileVolunteerListingCard = ({
  address,
  organization,
  phone_number,
  setShowDetails,
  showDetails,
  volunteers_notes,
}) => (
  <MobileCard>
    <Body>
      <MobileVolunteerListingCardHeader onClick={() => setShowDetails(!showDetails)}>
        <h2>
          {organization}
        </h2>
        {address &&
          <aside>
            <Icon type="environment-o" style={{ marginRight: '5px' }}/>
            {address}
          </aside>
        }
      </MobileVolunteerListingCardHeader>

      <Summary>
        <div>
          {}
        </div>
      </Summary>

      {/* <TagList>
        <Tag>{prettyPrint('paid', houseListing.paid)}</Tag>
        <Tag>{prettyPrint('length_of_stay', houseListing.length_of_stay)}</Tag>
        {houseListing.child_friendly &&
          <Tag>Child Friendly</Tag>
        }
        {houseListing.pets_accepted &&
          <Tag>Pets Accepted</Tag>
        }
      </TagList> */}

      <DetailsPane active={showDetails}>
       {volunteers_notes &&
          <div>
            <b>Description:</b>
            <p>
              {volunteers_notes}
            </p>
          </div>
        }
      </DetailsPane>
    </Body>
    <Footer>
      <DetailsButton
        active={showDetails}
        onClick={() => setShowDetails(!showDetails)}
      >
        Details
      </DetailsButton>
      <ContactButton>
        Contact
      </ContactButton>
    </Footer>
  </MobileCard>
)

export default withStateHandlers({ showDetails: false }, {
  setShowDetails: state => value => ({ showDetails: value }),
})(MobileVolunteerListingCard)
