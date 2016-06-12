import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'
import { convertToRaw, convertFromRaw, EditorState } from 'draft-js'

import StepsEditor from '../StepsEditor'

class NewShow extends Component {
  static propTypes = {
    img: PropTypes.string,
    steps: PropTypes.object,
  }

  static defaultProps = {
    img: require('./defaultUser.jpeg'),
  }

  constructor(props){
    super()
    this.state = {
      editorState: props.steps?convertFromRaw(props.steps):EditorState.createEmpty(),
    }
  }

  handleSubmit(){
    // TODO: change latest to _id of the presentation after saving to DB
    const path = '/show/latest'
    let slides = convertToRaw(this.state.editorState.getCurrentContent())
    let presentationName = this.refs.presentationName.value
    browserHistory.push({
      pathname: path,
      state:{
        presentationName,
        slides,
      },
    })
  }

  onChange(editorState){
    // console.log(convertToRaw(editorState.getCurrentContent()))
    this.setState({
      editorState,
    })
  }

  // TODO: load press enter to submit from localstorage to keep persistancy
  render() {
    return (
      <article
          className="container"
          style={{position:'inherit'}}
      >
        <label className="label">Presentation Name</label>
          <p className="control">
            <input className="input"
                placeholder="Presentation 1"
                ref="presentationName"
                type="text"
            />
          </p>

          <div>
            <StepsEditor
                editorState={this.state.editorState}
                onChange={::this.onChange}
            />
          </div>
          <nav className="navbar">
            <div className="navbar-left">
              <div className="navbar-item">
                <a className="button is-info is-medium"
                    onClick={::this.handleSubmit}
                >
                  Create Presentation
                </a>
              </div>
            </div>
            <div className="navbar-right">
              <div className="navbar-item">
                <label className="checkbox">
                  <input type="checkbox" /> Press enter to submit
                </label>
              </div>
            </div>
          </nav>
      </article>
    )
  }
}

export default NewShow
