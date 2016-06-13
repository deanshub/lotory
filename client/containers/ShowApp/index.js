import React, { Component, PropTypes } from 'react'

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
    this.state = { locale }
  }

  setLocale(locale) {
    window.localStorage.setItem(localeKey, locale)
    this.setState({ locale })
  }

  render() {
    const { locale } = this.state

    return (
      <div>
        <Navbar
            locale={locale}
            setLocale={::this.setLocale} 
        />
        {this.props.children}
      </div>
    )
  }
}

export default App
