import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router'

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import HomePage from './pages/homepage/homepage.component'
import Header from './components/header/header.component'

import './App.css'


function App(location) {
  return (
    <div className="App">
      {/* {location.pathname !== '/signin' && <Header />} */}
      <Switch>
      <Route path='/signin' exact component={SignInAndSignUpPage} />
        <Fragment>
          <Header />
          <Route exact path='/' component={HomePage} />
          
        </Fragment>
      </Switch>
    </div>
  );
}

export default withRouter(App)
