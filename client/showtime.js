import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'
import 'bulma'

import configure from './store'
import App from './containers/ShowApp'

const store = configure()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route
          component={App}
          path="/"
      />
    </Router>
  </Provider>,
  document.getElementById('root')
)
