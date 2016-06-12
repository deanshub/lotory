import React, { Component, PropTypes } from 'react'
import LotteryInbox from '../../components/LotteryInbox'
import Howler from '../../components/Howler'
import style from './style.css'

class Lotteries extends Component {
  static propTypes = {
    number: PropTypes.number,
    started: PropTypes.bool,
  }

  render() {
    const { number } = this.props
    let lotteryElements = new Array(number).fill(null)
    const song = require('../../song/background.mp3')

    return (
      <div className={['fluid', style.lotteries].join(' ')}>
        {
          lotteryElements.map((item, index)=>{
            return (
              <LotteryInbox
                  key={index}
                  {...this.props}
              />
            )
          })
        }
        <Howler
            loop
            playing={this.props.started}
            src={song}
        />
      </div>
    )
  }
}

export default Lotteries
