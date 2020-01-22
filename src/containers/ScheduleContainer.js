import { connect } from 'react-redux'
import Schedule from '../components/Schedule/Schedule'

const getToggledSchedule = (games, teamId) => {
  if (teamId.length === 0) return []

  return games.filter(game => {
    return teamId.every(id => {
      return id === game.hTeam.teamId || id === game.vTeam.teamId
    })
  })
}

const mapStateToProps = state => ({
  games: getToggledSchedule(state.games.items, state.schedule.teamId),
  teams: state.teams.items,
})

export default connect(
  mapStateToProps
)(Schedule)