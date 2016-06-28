import React, { Component, PropTypes } from 'react'
import request from 'superagent'
import moment from 'moment'

import LotteryInbox from '../../components/LotteryInbox'
import Howler from '../../components/Howler'
import style from './style.css'

class Lotteries extends Component {
  static propTypes = {
    number: PropTypes.number,
    loggedin: PropTypes.bool,
    locale: PropTypes.string,
  }

  constructor(props){
    super(props)
    this.selectedPeople = []
    this.state = {
      selectedPeople:[],
      started: false,
    }
  }

  toggleLottery(){
    this.setState({
      started: !this.state.started,
    })
  }

  handleSave(){
    const locale = this.props.locale
    let date
    if (locale === 'IL') {
      date = moment().locale('fr').format('L')
    }else{
      date = moment().format('L')
    }

    request.post('/api/events')
    .send({
      event:{
        people:this.selectedPeople,
        date,
      },
    })
    .set('Accept', 'application/json')
    .end((err, res) => {
      console.log(err, res.body);
    })
  }

  handleStop(index, person){
    let selectedPeople = this.selectedPeople
    if (selectedPeople[index]!==person){
      selectedPeople[index] = person
      this.selectedPeople = selectedPeople
      // this.setState({
      //   selectedPeople,
      // })
    }
  }

  render() {
    const { number, loggedin } = this.props
    const { started } = this.state
    let lotteryElements = new Array(number).fill(null)
    const song = require('../../song/background.mp3')
    const buttonText = started?'Stop':'Let\'s Go!'

    return (
      <div>
        <div className={['fluid', style.lotteries].join(' ')}>
          {
            lotteryElements.map((item, index)=>{
              return (
                <LotteryInbox
                    handleStop={person => this.handleStop(index, person)}
                    key={index}
                    {...this.props}
                    started={started}
                />
              )
            })
          }
          <Howler
              loop
              playing={started}
              src={song}
          />
        </div>
        <div className={style.actionssection}>
            <a
                className="button is-info is-large"
                onClick={::this.toggleLottery}
                style={{border:'none', borderRadius:'none'}}
            >
            {buttonText}
            </a>
            {!started && loggedin?
            <a
                className="button is-warning is-large"
                onClick={::this.handleSave}
                style={{border:'none', borderRadius:'none'}}
            >
            Save
            </a>:undefined}
        </div>
      </div>
    )
  }
}

export default Lotteries
