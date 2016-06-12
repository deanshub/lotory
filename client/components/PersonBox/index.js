import React, { Component, PropTypes } from 'react'

import style from './style.css'

class PersonBox extends Component {
  static propTypes = {
    'Department': PropTypes.string,
    'First Name': PropTypes.string,
    'Last Name': PropTypes.string,
    selected: PropTypes.bool,
  }
  static defaultProps = {
    selected: false,
  }

  render() {
    const { selected } = this.props
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
        <div>
          <figure
              className="image"
              style={{height:'40vh', width:'25vw', margin: '0 auto'}}
          >
            <img
                src={image}
                style={{height:'100%', width:'90%'}}
            />
          </figure>
        </div>
        <p
            style={{fontSize:'1.2vw', textAlign:'center', padding:10}}
        >{name}</p>
      </div>
    )
  }
}

export default PersonBox
