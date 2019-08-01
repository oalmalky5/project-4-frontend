 import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signUp, signIn } from '../api'
import messages from '../messages'

class SignUp extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignUp = event => {
    event.preventDefault()

    const { alert, history, setUser } = this.props

    signUp(this.state)
      .then(() => signIn(this.state))
      .then(res => setUser(res.data.user))
      .then(() => alert(messages.signUpSuccess, 'success'))
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({ email: '', password: '', passwordConfirmation: '' })
        alert(messages.signUpFailure, 'danger')
      })
  }

  render () {
    const { email, password, passwordConfirmation } = this.state

    return (
      <form className='auth-form' onSubmit={this.onSignUp}>
        <h3>Sign Up</h3>

        <label id="inputIconEx2"></label>
        <input
          required
          name="email"
          value={email}
          type="email"
          id="inputIconEx2"
          class="form-control"
          placeholder="Email"
          onChange={this.handleChange}
          className="form-control"
        />
        <label htmlFor="password"></label>
        <input
          required
          name="password"
          value={password}
          type="password"
          class="form-control"
          placeholder="Password"
          id="inputIconEx2"
          onChange={this.handleChange}
        />
        <label id="inputIconEx2"></label>
        <input
          required
          name="passwordConfirmation"
          value={passwordConfirmation}
          type="password"
          id="inputIconEx2"
          class="form-control"
          placeholder="Confirm Password"
          onChange={this.handleChange}
        />
        <label for="gender">Gender</label>
        <select name="gender" id="gender">  
              <option value="male">Male</option>
              <option value="female">Female</option>
        </select>
          <option></option>
        <div>
          <input type="checkbox" id="accept-terms" class="form-check-input" />
          <label for="accept-terms" class="form-check-label">Accept Terms &amp; Conditions</label>
        </div>
        <button type="Submit" class="btn btn-info btn-lg">Sign Up</button>
      </form>
    )
  }
}

export default withRouter(SignUp)
