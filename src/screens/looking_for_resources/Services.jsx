import React from 'react';
import Layout from '../../components/Layout'
import styled from 'styled-components'

import { HeaderContainer, Body, Footer, DetailPane } from '../../components/HouseCard'
import { CardList, Card, StackInput } from '../../components/atoms'
import { lifecycle, withStateHandlers } from 'recompose'
import { map, reduce, keys, filter, compose } from 'ramda'

const API_URL = 'https://spreadsheets.google.com/feeds/list/1nUv_bw0IA7KPy_jP5IXEGELd1GF7cfzv_LkJutN_nV4/default/public/values?alt=json'

const prettifyRow = columns => row => compose(
  reduce((finalObj, key) => {
    const prettyColLabel = columns.find(col => col.key === key).label
    return Object.assign({}, finalObj, {[prettyColLabel]: row[key]['$t']})
  }, {}),
  filter(key => key.includes('gsx$_')),
  keys
)(row)

const parseServices = ({ feed: { entry } }) => {
  const [columnRow, ...dataRows] = entry
  console.log('Parsing services', columnRow, dataRows)

  const columns = compose(
    map(columnKey => ({ label: columnRow[columnKey]['$t'], key: columnKey })),
    filter(key => key.includes('gsx$_')),
    keys
  )(columnRow)


  const services = map(prettifyRow(columns), dataRows)

  return { columns, services }
}

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  > * {
    max-width: 50%;
    padding: 15px;
  }
`

const ServicesList = ({ services }) => (
  <Layout header="Services">
    Hello!
    <CardList>
      {services.map(service => (
        <Card>
          <Body>
            <HeaderContainer>
              <h2>{service['Organization/Company']}</h2>
            </HeaderContainer>
            <DetailPane active={true}>
              <div>
                {service['Services Offered:'] &&
                  <div>
                    <b>Services Offered</b>
                    <p>
                      {service['Services Offered:']}
                    </p>
                  </div>
                }
                {service['Fees:'] &&
                  <div>
                    <b>Fees</b>
                    <p>
                      {service['Fees:']}
                    </p>
                  </div>
                }
              </div>
            </DetailPane>
            <DetailPane active={true}>
              <div>
                {service['Contact Name'] &&
                  <div>
                    <b>Contact Name</b>
                    <p>
                      {service['Contact Name']}
                    </p>
                  </div>
                }
                {service['Instructions to contact:'] &&
                  <div>
                    <b>Contact Instructions</b>
                    <p>
                      {service['Instructions to contact:']}
                    </p>
                  </div>
                }
                {service['Email Address'] &&
                  <div>
                    <b>Email</b>
                    <p>
                      <a href={`mailto:${service['Email Address']}`}>
                        {service['Email Address']}
                      </a>
                    </p>
                  </div>
                }
                {service['Phone Number'] &&
                  <div>
                    <b>Phone</b>
                    <p>
                      <a href={`tel:${service['Phone Number']}`}>
                        {service['Phone Number']}
                      </a>
                    </p>
                  </div>
                }
                {service[' Website'] &&
                  <div>
                    <b>Website</b>
                    <p>
                      <a href={`${service[' Website']}`}>
                        Click Here
                      </a>
                    </p>
                  </div>
                }
              </div>
            </DetailPane>
          </Body>
        </Card>
      ))}
    </CardList>
  </Layout>
)

export default compose(
  withStateHandlers(
    { services: [] },
    {
      setServices: () => ({ columns, services }) => ({ columns, services })
    }
  ),
  lifecycle({
    componentWillMount() {
      fetch(API_URL)
        .then(res => res.json())
        .then(parseServices)
        .then(this.props.setServices)

    }
  })
)(ServicesList)
