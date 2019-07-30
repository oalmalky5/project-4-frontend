import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import AlertDismissible from './auth/components/AlertDismissible'
import ShowProduct from './products/ShowProduct'
import IndexProduct from './products/IndexProduct/IndexProduct'
import Home from './Home'
import CreateProduct from './products/CreateProduct/CreateProduct'
import EditProduct from './products/EditProduct'
import SignUpAdmin from './auth/components/SignUpAdmin'
import Search from './products/Search'



class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] })
  }

  render () {
    const { alerts, user } = this.state

    return (
      <React.Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <AlertDismissible key={index} variant={alert.type} message={alert.message} />
        ))}
        <main className="container">
          <Route exact path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />

          <Route path='/sign-up/admin' render={() => (
            <SignUpAdmin alert={this.alert} setUser={this.setUser} />
          )} />

          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />

          <AuthenticatedRoute user={user} exact path='/'render={() => (
            <Search user={user} />

          )}/>

          
          <Route exact path='/'render={() => (
            <Home />

          )}/>


          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />

          <AuthenticatedRoute  user={user} exact path='/products' render={() => (
          <IndexProduct  user={user}/>
          )}/>

          <AuthenticatedRoute  user={user} path='/products/:id' render={(props) => (
            <ShowProduct user={user} />
          )}/>   
            <AuthenticatedRoute  user={user} path='/create' render={() => (
            <CreateProduct user={user} alert={this.alert} />
          )}/>
          <AuthenticatedRoute user={user} path='/products/:id/edit' render={(props) => (
            <EditProduct user={user}/>
          )}/>
          



      
      
        </main>
      </React.Fragment>
    )
  }
}

export default App
