import { connect } from 'react-redux'
import Standings from '../components/Standings'
import { VisibilityFilters } from '../actions'

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
  teams: getConferenceRecords(state.teams, state.visibilityFilter)
})

export default connect(
  mapStateToProps
)(Standings)