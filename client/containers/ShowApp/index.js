import React, { Component } from 'react'
import request from 'superagent'

import Navbar from '../../components/Navbar'
import Lotteries from '../Lotteries'
import style from '../Lotteries/style.css'

const disabledPeople = []

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      started: false,
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

  startLottery(){
    this.setState({
      started: !this.state.started,
    })
  }

  render() {
    const { started, people } = this.state
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
