import fetch from 'cross-fetch'

// Actions
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const REQUEST_TEAMS = 'REQUEST_TEAMS'
export const RECEIVE_TEAMS = 'RECEIVE_TEAMS'
export const REQUEST_GAMES = 'REQUEST_GAMES'
export const RECEIVE_GAMES = 'RECEIVE_GAMES'
export const TOGGLE_TEAM = 'TOGGLE_TEAM'

// Constants
export const VisibilityFilters = {
  SHOW_WEST: 'SHOW_WEST',
  SHOW_EAST: 'SHOW_EAST',
}

// Action creators
export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

export function requestTeams() {
  return { type: REQUEST_TEAMS }
}

export function receiveTeams(data) {
  return { type: RECEIVE_TEAMS, data }
}

export function requestGames() {
  return { type: REQUEST_GAMES }
}

export function receiveGames(data) {
  return { type: RECEIVE_GAMES, data }
}

export function toggleTeam(teamId) {
  return { type: TOGGLE_TEAM, teamId }
}

// Async calls
export function fetchTeams() {
  return dispatch => {
    
    dispatch(requestTeams())

    const url = (process.env.NODE_ENV === 'development') 
      ? 'http://localhost:3001/teams'
      : 'http://ec2-13-53-135-10.eu-north-1.compute.amazonaws.com/teams';

    return fetch(url)
      .then(response => response.json())
      .then(data => dispatch(receiveTeams(data)))
  }
}

export function fetchGames() {
  return dispatch => {

    dispatch(requestGames())

    const url = (process.env.NODE_ENV === 'development') 
      ? 'http://localhost:3001/games'
      : 'http://ec2-13-53-135-10.eu-north-1.compute.amazonaws.com/games';

    return fetch(url)
      .then(response => response.json())
      .then(data => dispatch(receiveGames(data)))
  }
}