import React from 'react';

const Record = props => {
  return (    
    <tr>
      <td>{props.data.confRank}</td>
      <td><img src={props.data.logo} alt={props.data.nickname} width="30px"/></td>
      <td>{window.innerWidth > 640 ? props.data.nickname : props.data.tricode}</td>
      <td align="center">{props.data.win}</td>
      <td align="center">{props.data.loss}</td>
      <td align="center">{props.data.winPct}</td>
      <td align="center">{props.data.gamesBehind}</td>
      <td align="center">{`${props.data.isWinStreak ? 'W' : 'L'}${props.data.streak}`}</td>
      <td align="center">{`${props.data.lastTenWin}-${props.data.lastTenLoss}`}</td>
    </tr>
  )
}

export default Record; 