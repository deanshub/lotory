import React, { Component, PropTypes } from 'react'

import Navbar from '../../components/Navbar'
import './style.css'

class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  render() {
    return (
      <div>
        <Navbar/>
        {this.props.children}
      </div>
    )
  }
}

export default App
