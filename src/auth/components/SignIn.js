import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signIn } from '../api'
import messages from '../messages'
import './SignIn.css'

class SignIn extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignIn = event => {
    event.preventDefault()

    const { alert, history, setUser } = this.props

    signIn(this.state)
      .then(res => setUser(res.data.user))
      .then(() => alert(messages.signInSuccess, 'success'))
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({ email: '', password: '' })
        alert(messages.signInFailure, 'danger')
      })
  }

  render () {
    const { email, password } = this.state

//     <div class="form-style-8">
//   <h2>Login to your account</h2>
//   <form>
//     <input type="text" name="field1" placeholder="Full Name" />
//     <input type="email" name="field2" placeholder="Email" />
//     <input type="url" name="field3" placeholder="Website" />
//     <textarea placeholder="Message" onkeyup="adjust_textarea(this)"></textarea>
//     <input type="button" value="Send Message" />
//   </form>
// </div>

    return (
      <form className='auth-form' onSubmit={this.onSignIn}>
        <h2>LOGIN TO YOUR ACCOUNT</h2>
        <label  id="inputIconEx2" ></label>
        <input
          required
          type="text"
          name="email"
          id="inputIconEx2"
          class="form-control"
          value={email}
          placeholder="Email"
          onChange={this.handleChange}
        />
        <label id="inputIconEx2"></label>
        <input
          required
          type="text"
          name="password"
          id="inputIconEx2"
          class="form-control"
          value={password}
          type="password"
          placeholder="Password"
          onChange={this.handleChange}
        />
        <button type="Submit" class="btn btn-info btn-lg">Sign In</button>
      </form>
    )
  }
}

export default withRouter(SignIn)
