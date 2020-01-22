import { connect } from 'react-redux'
import Schedule from '../components/Schedule/Schedule'

const getSelectedSchedule = (games, teamIds) => {
  if (teamIds.length === 0) return []

  return games.filter(game => {
    return teamIds.every(id => {
      return id === game.hTeam.teamId || id === game.vTeam.teamId
    })
  })
}

const mapStateToProps = state => ({
  games: getSelectedSchedule(state.games.items, state.schedule.teamIds),
  teams: state.teams.items,
})

export default connect(
  mapStateToProps
)(Schedule)