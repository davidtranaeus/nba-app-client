import React from 'react';
import GameBox from './GameBox'

const Schedule = ({ games, teams }) => {
  return games
    .filter(game => teams[game.hTeam.teamId] && teams[game.vTeam.teamId])
    .map((game, index) => 
      <GameBox 
        key={index} 
        game={game} 
        hTeam={teams[game.hTeam.teamId]}
        vTeam={teams[game.vTeam.teamId]}
      />)
}

export default Schedule;