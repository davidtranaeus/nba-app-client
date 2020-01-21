import React from 'react';

const GameBox = ({ game, hTeam, vTeam }) => {
  return (
    <li className="gamebox"> 
      <div>
        <img src={hTeam.logo} alt={hTeam.tricode} width="30px"/>
        <img src={vTeam.logo} alt={vTeam.tricode} width="30px"/>
      </div>
      <div>{game.hTeam.score} - {game.vTeam.score}</div>
    </li>
  )
}

export default GameBox;