import React, { Component, PropTypes } from 'react'
import PersonBox from '../PersonBox'
import style from './style.css'

class LotteryInbox extends Component {
  static propTypes = {
    disabledPeople: PropTypes.array,
    handleStop: PropTypes.func,
    people: PropTypes.array,
  }

  constructor(props){
    super(props)

    this.state = {
      personIndex: 0,
      shuffledPeople: [],
      started: props.started,
    }
  }

  handleStart(started){
    if (started){
      setTimeout(()=>{
        let newIndex = this.state.personIndex+1
        if (newIndex===this.state.shuffledPeople.length){
          newIndex=0
        }
        this.setState({
          personIndex: newIndex,
        })
      },300)
    }
  }

  handleClick(){
    this.setState({
      started: !this.state.started,
    })
  }

  componentWillReceiveProps(props){
    let shffule = (arr)=>{
      let comperator = ()=>{
        let num = Math.floor(Math.random()*10%2)
        return num===0?-1:1
      }
      return arr.slice(0).sort(comperator)
    }

    this.setState({
      started: props.started,
      shuffledPeople: shffule(props.people),
    })
  }

  render() {
    const { handleStop } = this.props
    const { started, shuffledPeople, personIndex } = this.state

    this.handleStart(started)
    if (started===false){
      handleStop(shuffledPeople[personIndex])
    }

    return (
      <div
          className={[style.lottery].join(' ')}
          onClick={::this.handleClick}
      >
        <PersonBox
            {...shuffledPeople[personIndex]}
        />
      </div>
    )
  }
}

export default LotteryInbox
