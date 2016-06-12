import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'
import 'bulma'

import configure from './store'
import App from './containers/ShowApp'
import MainSection from './containers/MainSection'
import Past from './containers/Past'

const store = configure()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route
          component={App}
      >
        <Route
            component={MainSection}
            path="/"
        />
        <Route
            component={Past}
            path="/past"
        />
        <Route
            component={Past}
            path="/past/:date"
        />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
