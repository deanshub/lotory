import React, { Component, PropTypes } from 'react'

import style from './style.css'

const imageStyle = {
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  height:'40vh',
  margin: '0 auto',
  backgroundColor: 'black',
}

class PersonBox extends Component {
  static propTypes = {
    'Department': PropTypes.string,
    'First Name': PropTypes.string,
    'Last Name': PropTypes.string,
    height: PropTypes.string,
    selected: PropTypes.bool,
  }
  static defaultProps = {
    selected: false,
    height: '40vh',
  }

  render() {
    const { selected, height } = this.props
    const name = `${this.props['First Name']}  ${this.props['Last Name']}`
    let image
    try {
      image = require(`../../pictures/${this.props['First Name']} ${this.props['Last Name']}.jpg`)
    } catch (e) {
      // console.log(`The image ${this.props['First Name']} ${this.props['Last Name']}.jpg wasn't found`);
      image = require('../../pictures/defaultImg.png')
    }

    return (
      <div
          className={[style.person, selected?style.selected:''].join(' ')}
      >
        <div style={{...imageStyle, height, backgroundImage:`url(${image})`}} />

        <p
            style={{fontSize:'1.2vw', textAlign:'center', padding:10}}
        >{name}</p>
      </div>
    )
  }
}

export default PersonBox
