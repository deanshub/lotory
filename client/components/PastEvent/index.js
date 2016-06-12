import React, { Component, PropTypes } from 'react'

import PersonBox from '../PersonBox'
import style from './style.css'

class PastEvent extends Component {
  static propTypes = {
    date: PropTypes.string,
    people: PropTypes.array,
  }

  render(){
    const { date, people } = this.props
    return (
      <div className={style.event}>
        <p className="content is-large">{date}</p>
        <div className={style.people}>
          {people.map((person,index)=><div key={index} style={{margin:'0 50px',flex:1}}><PersonBox {...person} height="15vh" /></div>)}
        </div>
      </div>
    )
  }
}

export default PastEvent
