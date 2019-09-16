import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router'

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import SignIn from './components/sign-in/sign-in.components'
import HomePage from './pages/homepage/homepage.component'
import Header from './components/header/header.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import './App.css'


class App extends React.Component {

  constructor(location) {
    super(location)

    this.state = {
      currentUser: null
    }
  }

unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot =>  {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          },() => console.log('user local data', this.state))
        })
      } else {
        this.setState({ currentUser: userAuth })
        // console.log('user local data:', this.state.currentUser)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div className="App">
        {/* {location.pathname !== '/signin' && <Header />} */}
        <Switch>
          <Route path='/register' exact component={SignInAndSignUpPage} />
          <Route path='/signin' exact component={SignIn} />
          <Fragment>
            <Header currentUser={this.state.currentUser} />
            <Route exact path='/' component={HomePage} />
          </Fragment>
        </Switch>
      </div>
    )
  }

}

export default withRouter(App)
