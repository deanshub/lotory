import React, { Component } from 'react'
import { Link } from 'react-router'
import moment from 'moment'
import style from './style.css'

const getDateByLocale = locale => {
    // Moment does not support IL, we can use fr instead...
  if (locale === 'IL') {
      return moment().locale('fr').format('L')
  }
  return moment().format('L')
}

class Navbar extends Component {
  setLocale (e, locale) {
    e.preventDefault()

    const { setLocale } = this.props
    setLocale(locale)
  }

  render() {
    const { locale } = this.props;
    return (
      <nav className={['nav', style.branded].join(' ')}>
          <div className="nav-left">
            <div
                className="nav-item"
            >
              <img
                  alt="Logo"
                  src={`/${require('./logo.png')}`}
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
          <span className={style.navtitle}>
            <Link
                to="/login"
            >
              Sisense Lottery Launch
            </Link>
          </span>
          <div className="nav-right nav-menu">
            <a className="nav-item" onClick={e => this.setLocale(e, "US")}>
              <img
                  alt="US"
                  src={`/${require('./us.png')}`} />
            </a>
            <a className="nav-item" onClick={e => this.setLocale(e, "IL")}>
              <img
                  alt="IL"
                  src={`/${require('./il.png')}`} />
            </a>
            <span className="nav-item">{getDateByLocale(locale)}</span>
          </div>
      </nav>
    )
  }
}

export default Navbar
