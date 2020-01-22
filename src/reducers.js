import { SET_VISIBILITY_FILTER, VisibilityFilters,
  RECEIVE_TEAMS, REQUEST_TEAMS,
  RECEIVE_GAMES, REQUEST_GAMES,
  TOGGLE_TEAM } from './actions'
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

function teams(state = { isFetching: false, items: {} }, action) {
  switch (action.type) {
    case REQUEST_TEAMS:
      return {
        isFetching: true,
        items: {}
      }
    case RECEIVE_TEAMS:
      return {
        isFetching: false,
        items: action.data.reduce((obj, team) => {
          obj[team.teamId] = team
          return obj
        }, {})
      }
    default:
      return state
  }
}

function games(state = { isFetching: false, items: [] }, action) {
  switch (action.type) {
    case REQUEST_GAMES:
      return {
        isFetching: true,
        items: []
      }
    case RECEIVE_GAMES:
      return {
        isFetching: false,
        items: action.data
      }
    default:
      return state
  }
}

function schedule(state = { teamId: [] }, action) {
  switch (action.type) {
    case TOGGLE_TEAM:
      return {
        teamId: state.teamId.includes(action.teamId)
        ? state.teamId.filter(id => id !== action.teamId)
        : [...state.teamId, action.teamId]
      }
    default:
      return state
  }
}


const nbaApp = combineReducers({
  visibilityFilter,
  teams,
  games,
  schedule,
})

export default nbaApp;