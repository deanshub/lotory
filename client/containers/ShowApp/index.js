import React, { Component } from 'react'

import Navbar from '../../components/Navbar'
import Lotteries from '../Lotteries'

const people = require('../../../docs/people.csv')
const disabledPeople = []


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      started: false,
    }
  }

  startLottery(){
    this.setState({
      started: !this.state.started,
    })
  }

  render() {
    return (
      <div>
        <Navbar
            started={this.state.started}
            toggleLottery={::this.startLottery}
        />
          <Lotteries
              disabledPeople={disabledPeople}
              number={4}
              people={people}
              started={this.state.started}
          />
      </div>
    )
  }
}

export default App
