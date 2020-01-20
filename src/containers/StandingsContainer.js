import { connect } from 'react-redux'
import Standings from '../components/Standings/Standings'
import { VisibilityFilters, toggleTeam } from '../actions'

const getConferenceRecords = (teams, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_WEST:
      return teams.filter(team => team.confName === 'West')
    case VisibilityFilters.SHOW_EAST:
      return teams.filter(team => team.confName === 'East')
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  isFetching: state.teams.isFetching,
  teams: getConferenceRecords(state.teams.items, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTeam: teamId => {
    dispatch(toggleTeam(teamId))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Standings)