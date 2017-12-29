import React from 'react'
import { connectModule } from 'redux-modules'
import { compose, withStateHandlers } from 'recompose'
import servicesModule from '../../modules/services'
import Layout from '../../components/Layout'
import { Container, HeaderContainer } from '../../components/atoms'
import { Input, Radio, Checkbox, Button } from 'antd'
import styled from 'styled-components'
const RadioGroup = Radio.Group
const CheckboxGroup = Checkbox.Group
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

const contactOptions = ['Phone', 'Text Message', 'Email', ]

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

const Services = ({ actions, update, formData, history }) => (
  <Layout header="Services" onBack={history.goBack}>
    <Container style={{ maxWidth: '600px', display: 'flex' }}>
      <HeaderContainer>
        Service Information
      </HeaderContainer>
      
      <FormSection>
        <StackInput required label="Your Name:">
          <Input
            onChange={({ target }) => update('name', target.value)}
          />
        </StackInput>

        <StackInput required label="Organization/Company:">
          <Input
            onChange={({ target }) => update('update-this-field', target.value)}
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

        <StackInput label="Website:">
          <Input
            onChange={({ target }) => update('update-this-field', target.value)}
          />
        </StackInput>
      </FormSection>

      <FormSection>
        <StackInput required label="Service Fees:">
          <RadioGroup value={formData.duration} onChange={({ target }) => update('duration', target.value)}>
            <Radio value={'short'}>Full Fee</Radio>
            <Radio value={'long'}>Reduced Fee</Radio>
            <Radio value={'permanent'}>Pro Bono</Radio>
          </RadioGroup>
        </StackInput>
      </FormSection>

      <FormSection>
        <StackInput required label="Description of services:">
          <TextArea
            placeholder="Legal counsel, Insurance, Accounting, Therapy & emotional support, House cleaning, Childcare, Transportation, Chiropractic..."
            autosize={{ minRows: 3 }}
            onChange={({ target }) => update('childNotes', target.value)}
          />
        </StackInput>
      </FormSection>
      
      <FormSection>
        <StackInput required label="Preferred Method(s) of customer contact:">
          <CheckboxGroup 
            options = {contactOptions}
          />
        </StackInput>
      </FormSection>

      <FormSection>
        <StackInput label="Additional Information:">
          <TextArea
            placeholder="Additional Information..."
            autosize={{ minRows: 2 }}
            onChange={({ target }) => update('childNotes', target.value)}
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

Services.defaultProps = {

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
  connectModule(servicesModule)
)(Services)
