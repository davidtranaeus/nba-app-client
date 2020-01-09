import fetch from 'cross-fetch'

// Actions
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const REQUEST_DATA = 'REQUEST_DATA'
export const RECEIVE_DATA = 'RECEIVE_DATA'

// Constants
export const VisibilityFilters = {
  SHOW_WEST: 'SHOW_WEST',
  SHOW_EAST: 'SHOW_EAST',
}

// Action creators
export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

export function requestData() {
  return { type: REQUEST_DATA }
}

export function receiveData(data) {
  return { type: RECEIVE_DATA, data }
}

// Async calls
export function fetchData() {
  return dispatch => {
    
    dispatch(requestData()) // TODO: This is currently not doing anything

    const url = (process.env.NODE_ENV === 'development') 
      ? 'http://localhost:3001/teams'
      : 'http://ec2-13-53-135-10.eu-north-1.compute.amazonaws.com/teams';

    return fetch(url)
      .then(response => response.json())
      .then(data => dispatch(receiveData(data)))
  }
}