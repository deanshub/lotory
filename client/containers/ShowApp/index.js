import React, { Component } from 'react'
import request from 'superagent'

import Navbar from '../../components/Navbar'
import Lotteries from '../Lotteries'

const disabledPeople = []

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      started: false,
      people: [],
    }
  }

  startLottery(){
    this.setState({
      started: !this.state.started,
    })
  }

  componentDidMount(){
    request.get('/api/people')
    .set('Accept', 'application/json')
    .end((err, res)=>{
      this.setState({
        people: res.body,
      })
    })
  }

  render() {
    const { started, people } = this.state
    return (
      <div>
        <Navbar
            started={started}
            toggleLottery={::this.startLottery}
        />
          <Lotteries
              disabledPeople={disabledPeople}
              number={4}
              people={people}
              started={started}
          />
      </div>
    )
  }
}

export default App
