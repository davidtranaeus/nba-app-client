import { SET_VISIBILITY_FILTER, VisibilityFilters, RECEIVE_TEAMS, REQUEST_TEAMS } from './actions'
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

function teams(state = { isFetching: false, items: []}, action) {
  switch (action.type) {
    case REQUEST_TEAMS:
      return {
        isFetching: true,
        items: []
      }
    case RECEIVE_TEAMS:
      return {
        isFetching: false,
        items: action.data
      }
    default:
      return state
  }
}

const nbaApp = combineReducers({
  visibilityFilter,
  teams,
})

export default nbaApp;