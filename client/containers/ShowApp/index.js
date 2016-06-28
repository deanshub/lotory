import React, { Component, PropTypes } from 'react'
import request from 'superagent'

import Navbar from '../../components/Navbar'
import './style.css'

const localeKey = 'sll-localel-key'

class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  constructor(props){
    super(props)

    // Get locale from localStorage
    const locale = window.localStorage.getItem(localeKey) || 'IL'
    this.state = {
      locale,
      loggedin:false,
    }
  }

  componentDidMount(){
    request.get('/api/loggedin')
    .set('Accept', 'application/json')
    .end((err, res)=>{
      if (res.body && res.body.authenticated){
        this.refreshLoggedin(res.body.authenticated)
      }else{
        this.refreshLoggedin(false)
      }
    })
  }

  refreshLoggedin(loggedin=false){
    this.setState({
      loggedin,
    })
  }

  setLocale(locale) {
    window.localStorage.setItem(localeKey, locale)
    this.setState({ locale })
  }

  render() {
    const { locale, loggedin } = this.state

    return (
      <div>
        <Navbar
            locale={locale}
            loggedin={loggedin}
            setLocale={::this.setLocale}
        />
        {React.cloneElement(this.props.children,{locale, loggedin })}
      </div>
    )
  }
}

export default App
