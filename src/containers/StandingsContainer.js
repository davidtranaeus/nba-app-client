import { connect } from 'react-redux'
import Standings from '../components/Standings/Standings'
import { VisibilityFilters, selectSchedule } from '../actions'

const getConferenceRecords = (teams, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_WEST:
      return Object.values(teams).filter(team => team.confName === 'West')
    case VisibilityFilters.SHOW_EAST:
      return Object.values(teams).filter(team => team.confName === 'East')
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  isFetching: state.teams.isFetching,
  teams: getConferenceRecords(state.teams.items, state.visibilityFilter),
  selectedTeams: state.schedule.teamIds,
})

const mapDispatchToProps = dispatch => ({
  selectTeam: teamId => dispatch(selectSchedule(teamId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Standings)