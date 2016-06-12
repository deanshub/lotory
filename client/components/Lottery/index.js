import React, { Component, PropTypes } from 'react'
import PersonBox from '../PersonBox'
import style from './style.css'

class Lottery extends Component {
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
    this.state = {
      x: 0,
    }
  }

  handleStart(started){
    if (started){
      setTimeout(()=>{
        this.setState({
          x: this.state.x+80,
        })
      },500)
    }
  }

  render() {
    const { people, disabledPeople, started } = this.props
    const { x } = this.state
    this.handleStart(started)

    return (
      <div
          className={[style.lottery].join(' ')}
          style={{marginLeft:-1*x,marginRight:x}}
      >
        {
          people.sort(()=>Math.random()).map((person, index)=>{
            return (
              <PersonBox
                  key={index}
                  {...person}
                  selected={index===2}
              />
            )
          })
        }
      </div>
    )
  }
}

export default Lottery
