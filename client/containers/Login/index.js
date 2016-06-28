import React, { Component } from 'react'

class Login extends Component {
  render() {
    return (
      <div className="container" style={{marginTop:10}}>
        <form method="post" url="/login">
          <p className="control has-icon">
            <input className="input is-medium" name="username" type="text" placeholder="User Name" />
            <i className="fa fa-envelope"></i>
          </p>
          <p className="control has-icon">
            <input className="input is-medium" name="password" type="password" placeholder="Password" />
            <i className="fa fa-lock"></i>
          </p>
          <p className="control">
            <button type="submit" className="button is-success is-large">
              Login
            </button>
          </p>
        </form>
      </div>
    )
  }
}

export default Login
