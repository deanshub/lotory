import React, { Component, PropTypes } from 'react'
import request from 'superagent'

import style from './style.css'
import PastEvent from '../../components/PastEvent'

const addAt = (str, idx, addition)=>{
  return str.slice(0, idx) + addition + str.slice(idx)
}

class Past extends Component {
  static propTypes = {
    params: PropTypes.object,
  }

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
    const { date } = this.props.params
    let filterEvents
    if (date){
      let parsedDate = addAt(addAt(date,4,'/'),2,'/')
      filterEvents = (item)=>item.date===parsedDate
    }else{
      filterEvents = ()=>true
    }


    return (
      <div className={['fluid',style.events].join(' ')}>
        {
          events.filter(filterEvents).map((event, index)=>{
            event.date=date?`Those are the people who were chosend in the lottery of ${event.date}`:event.date
            return (
              <PastEvent key={index} {...event} />
            )
          })
        }
      </div>
    )
  }
}

export default Past
