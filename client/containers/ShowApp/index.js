import React, { Component } from 'react'

import Navbar from '../../components/Navbar'
import Lotteries from '../Lotteries'
import style from '../Lotteries/style.css'

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
    const { started } = this.state
    const buttonText = started?'Stop':'Let\'s Go!'

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
        <div className={style.actionssection}>
            <a
                className="button is-info is-large"
                onClick={::this.startLottery}
                style={{border:'none', borderRadius:'none'}}
            >
            {buttonText}
            </a>
        </div>
      </div>
    )
  }
}

export default App
