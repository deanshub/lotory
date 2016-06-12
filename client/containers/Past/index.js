import React, { Component } from 'react'
import request from 'superagent'

import style from './style.css'
import PastEvent from '../../components/PastEvent'

class Past extends Component {
  constructor(props){
    super(props)
    this.state = {
      events: [],
    }
  }
  componentDidMount(){
    request.get('/api/events')
    .set('Accept', 'application/json')
    .end((err, res)=>{
      this.setState({
        events: res.body,
      })
    })
  }

  render() {
    const { events } = this.state

    return (
      <div className={['fluid',style.events].join(' ')}>
        {
          events.map((event, index)=><PastEvent key={index} {...event} />)
        }
      </div>
    )
  }
}

export default Past
