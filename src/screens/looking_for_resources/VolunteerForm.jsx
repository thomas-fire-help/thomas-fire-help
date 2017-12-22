import React from 'react'
import { connectModule } from 'redux-modules'
import { compose, withStateHandlers } from 'recompose'
import lfVolunteersModule from '../../modules/lfVolunteers'
import Layout from '../../components/Layout'
import { Container, HeaderContainer } from '../../components/atoms'
import { Input, Button, Select } from 'antd'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'

const Option = Select.Option
const { TextArea } = Input

const RequiredIndicator = styled.em`
  color: red;
`

const Label = styled.div`
  font-size: 1.5rem;
  padding: 1rem 0;
`

const StackContainer = styled.div`
  margin: 30px 0;
`

const StackInput = ({ required, children, label }) => (
  <StackContainer>
    <Label>
      {required && <RequiredIndicator>*</RequiredIndicator>} {label}
    </Label>
    <div>
      {children}
    </div>
  </StackContainer>
)

const LFVolunteerForm = ({ actions, update, formData, history: { goBack }, match: { path } }) => (
  <Layout header="Housing" onBack={goBack}>
    <Container>
      <HeaderContainer>
        I need volunteer help...
      </HeaderContainer>

      <StackInput required label="Type of help:">
        <Select
          showSearch
          style={{ width: '100%' }}
          value={formData.type}
          optionFilterProp="children"
          onChange={value => update('type', value)}
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
          <Option value="foodAndWater">Food and water</Option>
          <Option value="medicalSupplies">Medical supplies</Option>
          <Option value="clothing">Clothing</Option>
          <Option value="housing">Housing</Option>
          <Option value="personalCareItems">Personal care items</Option>
          <Option value="animalServices">Animal services</Option>
        </Select>
      </StackInput>

      <StackInput required label="Describe what you need (be specific):">
        <TextArea
          autosize={{ minRows: 3 }}
          onChange={value => update('description', value)}
        />
      </StackInput>

      {(formType => {
        if (formType === 'organization') {
          return (
            <div>
              <StackInput label="Number of volunteers:">
                <Input
                  onChange={value => update('numberVolunteers', value)}
                />
              </StackInput>

              <StackInput label="Time(s) needed:">
                <Input
                  onChange={value => update('timeNeeded', value)}
                />
              </StackInput>
            </div>
          )
        }
      })(path.split('/').pop())}

      <StackInput required label="City:">
        <Select
          showSearch
          style={{ width: '100%' }}
          value={formData.city}
          placeholder="Select a city"
          optionFilterProp="children"
          onChange={value => update('city', value)}
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
          <Option value="goleta">Goleta</Option>
          <Option value="ojai">Ojai</Option>
          <Option value="santa_barbara">Santa Barbara</Option>
          <Option value="camarillo">Camarillo</Option>
          <Option value="ventura">Ventura</Option>
          <Option value="thousand_oaks">Thousand Oaks</Option>
        </Select>
      </StackInput>

      <StackInput label="Neighborhood:">
        <Input
          onChange={value => update('neighborhood', value)}
        />
      </StackInput>

      <StackInput required label="Street address:">
        <Input
          onChange={value => update('streetAddress', value)}
        />
      </StackInput>

      <StackInput required label="Your name:">
        <Input
          onChange={value => update('name', value)}
        />
      </StackInput>

      <StackInput required label="Phone number:">
        <Input
          onChange={value => update('phoneNumber', value)}
        />
      </StackInput>

      <StackInput required label="Email address:">
        <Input
          onChange={value => update('emailAddress', value)}
        />
      </StackInput>

      <div style={{ paddingTop: '1em' }}>
        <MediaQuery minDeviceWidth={320} maxDeviceWidth={480}>
          <Button
            size="large"
            style={{ width: '100%' }}
            onClick={() => actions.create(formData)}
          >
            Submit
          </Button>
        </MediaQuery>
        <MediaQuery minDeviceWidth={481}>
          <Button
            size="large"
            onClick={() => actions.create(formData)}
          >
            Submit
          </Button>
        </MediaQuery>
      </div>
    </Container>
  </Layout>
)

LFVolunteerForm.defaultProps = {

}

export default compose(
  withStateHandlers(
    {
      formData: {
        type: 'foodAndWater',
        description: '',
        city: 'ventura',
        neighborhood: '',
        streetAddress: '',
        name: '',
        phoneNumber: '',
        emailAddress: '',
        RequiredIndicatorailAddress: ''
      }
    },
    {
      update: (state) => (key, value) => Object.assign({}, { formData: { ...state.formData, [key]: value  } })
    }
  ),
  connectModule(lfVolunteersModule)
)(LFVolunteerForm)
