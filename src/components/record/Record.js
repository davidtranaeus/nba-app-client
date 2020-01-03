import React from 'react';

function Record(props) {
  const { index, logo, nickname, rank, win, loss, winPercentage,
    streak, isWinStreak, lastTenWin, lastTenLoss } = props;

  return (    
    <tr key={index}>
        <td>{rank}</td>
        <td><img src={logo} alt={nickname} width="30px"/></td>
        <td>{nickname}</td>
        <td>{win}</td>
        <td>{loss}</td>
        <td>{winPercentage}</td> 
        <td>{`${isWinStreak === '1' ? 'W' : 'L'}${streak}`}</td>
        <td>{`${lastTenWin}-${lastTenLoss}`}</td>
    </tr>
  )
}

export default Record; 