import React from 'react';

function Record(props) {
  const { index, logo, nickname, rank, win, loss, winPercentage,
    gamesBehind, streak, isWinStreak, lastTenWin, lastTenLoss } = props;

  return (    
    <tr key={index}>
      <td>{rank}</td>
      <td><img src={logo} alt={nickname} width="30px"/></td>
      <td>{nickname}</td>
      <td align="center">{win}</td>
      <td align="center">{loss}</td>
      <td align="center">{winPercentage}</td>
      <td align="center">{gamesBehind}</td>
      <td align="center">{`${isWinStreak === '1' ? 'W' : 'L'}${streak}`}</td>
      <td align="center">{`${lastTenWin}-${lastTenLoss}`}</td>
    </tr>
  )
}

export default Record; 