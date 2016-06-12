import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Slide from '../Slide'
import style from './style.css'
// TODO: make your own actions
import * as TodoActions from '../../actions/todos'

class Show extends Component {
  static propTypes = {
    params: PropTypes.object,
    slides: PropTypes.object,
  }
  // static defaultProps = {
  // }
  constructor(props) {
    super()
    let filteredShows = props.shows.filter((tile)=>tile.link === props.params.showId)
    this.state = {
      show: filteredShows.length>0?filteredShows[0]:null,
    }
  }

  render() {
    // const {showId} = this.props.params
    // const {presentationName} = this.props
    const {slides} = this.props
    return (
      <article
          className={['fluid', style['show-container']].join(' ')}
          style={{marginTop:-20}}
      >
        {slides.blocks
          .filter((block, index)=>{
            return slides.entityMap[index]!==undefined
          })
          .map((block, index)=>{
            return (
              <Slide
                  index={index}
                  key={index}
                  slides={slides}
              />
            )
          })}
      </article>
    )
  }
}

function mapStateToProps(state) {
  return {
    shows: state.shows,
    ...state.routing.locationBeforeTransitions.state,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Show)
