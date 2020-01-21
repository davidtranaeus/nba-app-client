import React from 'react';

const GameBox = ({ game, hTeam, vTeam }) => {

  const hWon = parseInt(game.hTeam.score) > parseInt(game.vTeam.score)

  return (
    <li className="gamebox hover"> 
      <div>
        <img src={hTeam.logo} alt={hTeam.tricode} width="30px"/>
        <img src={vTeam.logo} alt={vTeam.tricode} width="30px"/>
      </div>
      <div>
        <span className={`${hWon ? "bold" : ""}`}>{game.hTeam.score} </span>
        -
        <span className={`${!hWon ? "bold" : ""}`}> {game.vTeam.score}</span>
      </div>
      <div className="date">{parseUTCDate(game.startTimeUTC)}</div>
    </li>
  )
}

const parseUTCDate = date => {
  return date.substr(5,5).split("-").reverse().join('/')
}

export default GameBox;