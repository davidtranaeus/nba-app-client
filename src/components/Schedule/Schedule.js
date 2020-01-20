import React from 'react';
import GameBox from './GameBox'

const Schedule = ({ games }) => {
  return games.map((game, index) => <GameBox key={index} gameId={game.gameId}/>)
}

export default Schedule;