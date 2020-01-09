/*
 * action types
 */

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_WEST: 'SHOW_WEST',
  SHOW_EAST: 'SHOW_EAST',
}

/*
 * action creators
 */

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}