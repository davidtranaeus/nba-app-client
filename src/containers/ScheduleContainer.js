import { connect } from 'react-redux'
import Schedule from '../components/Schedule/Schedule'

const getToggledSchedule = (games, teamId) => {
  return games.filter(game => game.hTeam.teamId === teamId || game.vTeam.teamId === teamId)
}

const mapStateToProps = state => ({
  games: getToggledSchedule(state.games.items, state.schedule.teamId)
})

export default connect(
  mapStateToProps
)(Schedule)