import React, { Component, PropTypes } from 'react'
import PersonBox from '../PersonBox'
import style from './style.css'

class LotteryInbox extends Component {
  static propTypes = {
    disabledPeople: PropTypes.array,
    people: PropTypes.array,
    started: PropTypes.bool,
  }

  static defaultProps = {
    started: false,
  }

  constructor(props){
    super(props)

    let shffule = (arr)=>{
      let comperator = ()=>{
        let num = Math.floor(Math.random()*10%2)
        return num===0?-1:1
      }
      return arr.slice(0).sort(comperator)
    }

    this.state = {
      personIndex: 0,
      shuffledPeople: shffule(props.people.filter((person)=>person.Country==='IL')),
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
    this.setState({
      started: props.started,
    })
  }

  render() {
    // const { disabledPeople } = this.props
    const { started, shuffledPeople, personIndex } = this.state
    this.handleStart(started)

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
