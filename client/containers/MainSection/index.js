import React, { Component } from 'react'
import request from 'superagent'

import Lotteries from '../Lotteries'

const disabledPeople = []

class MainSection extends Component {
  constructor(props){
    super(props)
    this.state = {
      people: [],
    }
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
    const { people } = this.state

    return (
      <Lotteries
          disabledPeople={disabledPeople}
          number={4}
          people={people}
      />
    )
  }
}

export default MainSection
