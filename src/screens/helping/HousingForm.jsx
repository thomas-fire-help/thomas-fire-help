import React from 'react'
import { connectModule } from 'redux-modules'
import { compose, withStateHandlers } from 'recompose'
import housingModule from '../../modules/housing'
import Layout from '../../components/Layout'
import { Container, HeaderContainer } from '../../components/atoms'
import { Input, Radio, Checkbox, Button, Select } from 'antd'
import styled from 'styled-components'
import SegmentedController from '../../components/SegmentedController'
const RadioGroup = Radio.Group
const Option = Select.Option
const { TextArea } = Input

const RequiredIndicator = styled.em`
  color: red;
`

const Label = styled.div`
  font-size: 18px;
  text-transform: uppercase;
  padding: 15px 0;
`

const StackContainer = styled.div`
  margin: 0 0;
`

const FormSection = styled.div`
  padding: 30px 0;
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

const Housing = ({ actions, update, formData, history }) => (
  <Layout header="Housing" onBack={history.goBack}>
    <Container style={{ maxWidth: '600px', display: 'flex' }}>
      <HeaderContainer>
        Housing Information
      </HeaderContainer>
      <FormSection>
        <StackInput required label="Housing Type:">
          <SegmentedController
            value={formData.housingType}
            onChange={value => update('housingType', value)}
            options={[
              {label: 'Entire Home', value: 'house'},
              {label: 'Private Room', value: 'room'}
            ]}
          />
        </StackInput>

        <StackInput required label="Beds Available:">
          <Select
            showSearch
            style={{ width: '100%' }}
            value={formData.bedsAvailable}
            placeholder="Select number of beds available"
            optionFilterProp="children"
            onChange={value => update('bedsAvailable', value)}
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
            <Option value="5">5+</Option>
          </Select>
        </StackInput>
      </FormSection>

      <FormSection>
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
            onChange={({ target }) => update('neighborhood', target.value)}
          />
        </StackInput>
      </FormSection>

      <FormSection>
        <StackInput required label="Duration:">
          <RadioGroup value={formData.duration} onChange={({ target }) => update('duration', target.value)}>
            <Radio value={'short'}>Short-Term: one week or less</Radio>
            <Radio value={'long'}>Long-Term: one month to one week </Radio>
            <Radio value={'permanent'}>Permanent: available for rent or lease</Radio>
          </RadioGroup>
        </StackInput>
      </FormSection>

      <FormSection>
        <StackInput required label="Price:">
          <SegmentedController
            value={formData.paid}
            onChange={value => update('paid', value)}
            options={[{ label: "Free", value: false }, { label: "Paid", value: true }]}
          />
        </StackInput>

        {formData.paid &&
          <StackInput required label="Monthly Payment">
            <Input
              onChange={({ target }) => update('price', target.value)}
              placeholder="Enter a price..."
            />
          </StackInput>
        }
      </FormSection>

      <FormSection>
        <StackInput label="Child Friendly:">
          <SegmentedController
            value={formData.childFriendly}
            onChange={value => update('childFriendly', value)}
            options={[{ label: "Yes", value: true }, { label: "No", value: false }]}
          />
        </StackInput>

        {formData.childFriendly &&
          <StackInput required label="Notes on Children">
            <TextArea
              placeholder="Enter additional information about children..."
              onChange={({ target }) => update('childNotes', target.value)}
            />
          </StackInput>
        }
      </FormSection>

      <FormSection>
        <StackInput label="Animals present:">
          <SegmentedController
            value={formData.householdHasAnimals}
            onChange={value => update('householdHasAnimals', value)}
            options={[{ label: "Yes", value: true }, { label: "No", value: false }]}
          />
        </StackInput>

        <StackInput label="Pets allowed:">
          <SegmentedController
            value={formData.petsAllowed}
            onChange={value => update('petsAllowed', value)}
            options={[{ label: "Yes", value: true }, { label: "No", value: false }]}
          />
        </StackInput>

        {formData.petsAllowed &&
          <StackInput required label="Pet Notes">
            <TextArea
              placeholder="Enter additional information about pets..."
              onChange={({ target }) => update('petNotes', target.value)}
            />
          </StackInput>
        }
      </FormSection>

      <FormSection>
        <StackInput label="Description of Housing:">
          <TextArea
            placeholder="Additional Information"
            autosize={{ minRows: 2 }}
            onChange={({ target }) => update('description', target.value)}
          />
        </StackInput>
      </FormSection>

      <FormSection>
        <StackInput required label="Your Name:">
          <Input
            onChange={({ target }) => update('name', target.value)}
          />
        </StackInput>

        <StackInput required label="Phone Number:">
          <Input
            onChange={({ target }) => update('phoneNumber', target.value)}
          />
        </StackInput>

        <StackInput required label="Email Address:">
          <Input
            onChange={({ target }) => update('emailAddress', target.value)}
          />
        </StackInput>
      </FormSection>

      <div style={{ padding: '30px 0' }}>
        <Button
          type="primary"
          style={{ width: '100%', height: '44px' }}
          onClick={() => actions.create(formData, { onSuccess: () => history.push('/looking_for_resources/housing')})}
        >
          Submit!
        </Button>
      </div>
    </Container>
  </Layout>
)

Housing.defaultProps = {

}

export default compose(
  withStateHandlers(
    {
      formData: {
        housingType: 'room',
        bedsAvailable: 1,
        city: 'ventura',
        neighborhood: '',
        duration: 'short',
        paid: true,
        childFriendly: true,
        householdHasAnimals: false,
        petsAllowed: true,
        description: '',
        yourName: '',
        phoneNumber: '',
        emailAddress: ''
      }
    },
    {
      update: (state) => (key, value) => Object.assign({}, { formData: { ... state.formData, [key]: value  } })
    }
  ),
  connectModule(housingModule)
)(Housing)
