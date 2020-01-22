import React from 'react';

const Record = ({ data, selectTeam, isSelected }) => {
  return (    
    <tr className={`${isSelected ? 'highlight' : ''} hover`} onClick={() => selectTeam(data.teamId)}>
      <td>{data.confRank}</td>
      <td><img src={data.logo} alt={data.nickname} width="30px"/></td>
      <td>{window.innerWidth > 640 ? data.nickname : data.tricode}</td>
      <td align="center">{data.win}</td>
      <td align="center">{data.loss}</td>
      <td align="center">{data.winPct}</td>
      <td align="center">{data.gamesBehind}</td>
      <td align="center">{`${data.isWinStreak ? 'W' : 'L'}${data.streak}`}</td>
      <td align="center">{`${data.lastTenWin}-${data.lastTenLoss}`}</td>
    </tr>
  )
}

export default Record; 