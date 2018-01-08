import { Icon } from 'antd'
import { withStateHandlers } from 'recompose'
import React from 'react'
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

const DetailsPane = styled.aside`
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
  align-items: center;

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
  background-color: ${props => props.active ? '#3A3A3A' : '#FFF'};
  border: 1px solid lightgray;
  color: ${props => props.active ? '#FFF' : '#000'};
  cursor: pointer;
  flex: 1;
  outline: none;
  padding: 15px 30px;
  transition: background-color 0.3s ease-in-out;
  margin-top: 20px;
  user-select: none;
`

const DetailsButton = styled.button`
  align-self: flex-end;
  background-color: ${props => props.active ? '#3A3A3A' : '#FFF'};
  border: 1px solid lightgray;
  color: ${props => props.active ? '#FFF' : '#000'};
  cursor: pointer;
  flex: 1;
  outline: none;
  padding: 15px 30px;
  transition: background-color 0.3s ease-in-out;
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
  address,
  contact_name,
  email_address,
  organization,
  phone_number,
  setShowContact,
  showContact,
  setShowDetails,
  showDetails,
  volunteers_notes,
}) => (
  <Card style={{ marginTop: '50px' }}>
    <Body>
      <HeaderContainer onClick={() => setShowDetails(!showDetails)}>
        <h2>
          {organization}
        </h2>
        {address &&
          <aside>
            <Icon type="environment-o" style={{ marginRight: '5px' }}/>
            {address}
          </aside>
        }
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

      <DetailsPane active={showContact}>
        <div>
          <b>Contact Name</b>
          <p>
            {contact_name}
          </p>
        </div>
        {email_address &&
          <div>
            <b>Email</b>
            <p>
              <a href={`mailto:${email_address}`}>
                {email_address}
              </a>
            </p>
          </div>
        }
        {phone_number &&
          <div>
            <b>Phone</b>
            <p>
              <a href={`tel:${phone_number}`}>
                {phone_number}
              </a>
            </p>
          </div>
        }
      </DetailsPane>

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
      <ContactButton
        active={showContact}
        onClick={() => setShowContact(!showContact)}
      >
        Contact
      </ContactButton>
    </Footer>
  </Card>
)

export default withStateHandlers({ showDetails: false }, {
  setShowDetails: state => value => ({ showDetails: value }),
  setShowContact: state => value => ({ showContact: value }),
})(VolunteerListingCard)
