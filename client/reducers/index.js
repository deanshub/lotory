
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import shows from './shows'

export default combineReducers({
  routing,
  shows,
})
