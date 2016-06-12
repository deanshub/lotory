import React, { Component, PropTypes } from 'react'
import LotteryInbox from '../../components/LotteryInbox'
import Howler from '../../components/Howler'
import style from './style.css'

class Lotteries extends Component {
  static propTypes = {
    number: PropTypes.number,
  }

  constructor(props){
    super(props)
    this.state = {
      started: false,
    }
  }

  toggleLottery(){
    this.setState({
      started: !this.state.started,
    })
  }

  render() {
    const { number } = this.props
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
        </div>
      </div>
    )
  }
}

export default Lotteries
