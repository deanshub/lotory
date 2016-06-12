import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import style from './style.css'

class Navbar extends Component {
  static propTypes = {
    started: PropTypes.bool,
    toggleLottery: PropTypes.func,
  }
  static defaultProps = {
    started: false,
  }

  render() {
    const { started, toggleLottery } = this.props

    return (
      <nav className={['nav', style.branded].join(' ')}>
          <div className="nav-left">
            <div
                className="nav-item"
            >
              <img
                  alt="Logo"
                  src={require('./logo.png')}
                  style={{maxHeight:40, marginRight:20}}
              />
            </div>
            <Link
                activeClassName="is-active"
                className={['nav-item is-tab', style.mytab].join(' ')}
                to="/"
            >
              Lottery
            </Link>
            <Link
                activeClassName="is-active"
                className={['nav-item is-tab', style.mytab].join(' ')}
                to="/past"
            >
              Previous Selected
            </Link>
          </div>
          <span className={style.navtitle}>Sisense Lottery Launch</span>
          <div className="nav-right nav-menu">
          </div>
      </nav>
    )
  }
}

export default Navbar
