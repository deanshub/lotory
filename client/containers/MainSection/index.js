import React, { Component, PropTypes } from 'react'
import request from 'superagent'

import Lotteries from '../Lotteries'

const disabledPeople = []

class MainSection extends Component {
  static propTypes = {
    locale: PropTypes.string,
  }

  constructor(props){
    super(props)
    this.state = {
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

  render() {
    const { people } = this.state
    const { locale } = this.props

    return (
      <Lotteries
          disabledPeople={disabledPeople}
          number={4}
          people={people.filter(person=>person.Country===locale)}
      />
    )
  }
}

export default MainSection
