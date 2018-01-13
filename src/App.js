// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>App React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Route, BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'

import { ModuleProvider } from 'redux-modules'
import { createStore } from 'redux'
import { install, combineReducers } from 'redux-loop'

import { Helmet } from 'react-helmet'
import Home from './screens/Home'
import Login from './screens/auth/Login'
import SignUp from './screens/auth/SignUp'
import PhoneVerification from './screens/auth/PhoneVerification'

import LookingForHelp from './screens/looking_for_resources'
import Housing from './screens/looking_for_resources/Housing'
import LFVolunteers from './screens/looking_for_resources/Volunteers'
import LFVolunteerForm from './screens/looking_for_resources/VolunteerForm'
import VolunteerList from './screens/looking_for_resources/VolunteerList'

import Helping from './screens/helping'
import Volunteers from './screens/helping/Volunteers'
import HousingForm from './screens/helping/HousingForm'
import './App.css'

const store = createStore(s => s, {}, install());

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-family: Montserrat, sans-serif;
`

const App = props => (
  <BrowserRouter>
    <ModuleProvider store={store} combineReducers={combineReducers}>
      <AppContainer>
        <Helmet>
          <link rel="apple-touch-icon" sizes="72x72" href="/public/favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/public/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/public/favicons/favicon-16x16.png" />
          <link rel="manifest" href="/public/favicons/manifest.json" />
          <link rel="mask-icon" href="/public/favicons/safari-pinned-tab.svg" color="#5bbad5" />
          <link rel="shortcut icon" href="/public/favicons/favicon.ico" />
          <meta name="msapplication-config" content="/public/favicons/browserconfig.xml" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </Helmet>
        <Route exact path="/" component={Home} />
        <Route exact path="/looking_for_resources" component={LookingForHelp} />
        <Route exact path="/looking_for_resources/housing" component={Housing} />
        <Route exact path="/looking_for_resources/volunteers" component={LFVolunteers} />
        <Route exact path="/looking_for_resources/volunteers/personal" component={LFVolunteerForm} />
        <Route exact path="/looking_for_resources/volunteers/organization" component={LFVolunteerForm} />
        <Route exact path="/helping" component={Helping} />
        <Route exact path="/helping/housing" component={HousingForm} />
        <Route exact path="/helping/volunteers" component={VolunteerList} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/verify_phone" component={PhoneVerification} />
        <Route exact path="/sign_up" component={SignUp} />
      </AppContainer>
    </ModuleProvider>
  </BrowserRouter>
)

App.defaultProps = {
  name: 'David'
}

App.propTypes = {
  name: PropTypes.string
}

export default App
