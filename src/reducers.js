import { SET_VISIBILITY_FILTER, VisibilityFilters } from './actions'
import { combineReducers } from 'redux';

const { SHOW_WEST } = VisibilityFilters

function visibilityFilter(state = SHOW_WEST, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function teams(state = [], action) {
  switch (action.type) {
    default:
      return state
  }
}

const nbaApp = combineReducers({
  visibilityFilter,
  teams,
})

export default nbaApp;