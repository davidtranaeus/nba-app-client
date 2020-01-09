import React from 'react';
import './App.css';
import Record from './Record'

const Standings = ({ teams }) => {
  teams.sort((a, b) => (parseInt(a.rank) > parseInt(b.rank)) ? 1 : -1);

  const tableData = teams.map((record, index) => { // TODO: Denna delen är onödig
    const { logo, nickname, shortName, rank, win, loss, winPercentage, 
      gamesBehind, streak, isWinStreak, lastTenWin, lastTenLoss } = record;

    return (
      <Record
        key={index}
        logo={logo}
        nickname={nickname}
        shortName={shortName}
        rank={rank}
        win={win}
        loss={loss}
        winPercentage={winPercentage}
        gamesBehind={gamesBehind}
        streak={streak}
        isWinStreak={isWinStreak}
        lastTenWin={lastTenWin}
        lastTenLoss={lastTenLoss}
      />
    )
  })

  return (
      <table cellPadding="6">
        <thead>
          <tr>
            <th>{window.innerWidth > 640 ? "Ranking" : ""}</th>
            <th></th>
            <th></th>
            <th>W</th>
            <th>L</th>
            <th>%</th>
            <th>GB</th>
            <th>Strk</th>
            <th>L10</th>
          </tr>
        </thead>
        <tbody>
          {tableData}
        </tbody>
      </table>
  )
}

export default Standings;