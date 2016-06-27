import React, { Component, PropTypes } from 'react'
import request from 'superagent'

class Login extends Component {
  // static propTypes = {
  //   params: PropTypes.object,
  // }

  // constructor(props){
  //   super(props)
  //   this.state = {
  //     events: [],
  //   }
  // }
  //
  // componentDidMount(){
  //   request.get('/api/events')
  //   .set('Accept', 'application/json')
  //   .end((err, res)=>{
  //     this.setState({
  //       events: res.body,
  //     })
  //   })
  // }

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
