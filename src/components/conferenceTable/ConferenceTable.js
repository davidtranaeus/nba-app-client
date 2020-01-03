import React from 'react';
import Record from '../record/Record';

function ConferenceTable(props) {
  props.records.sort((a, b) => (parseInt(a.rank) > parseInt(b.rank)) ? 1 : -1);

  const tableData = props.records.map((record, index) => {
    const { logo, nickname, rank, win, loss, winPercentage, gamesBehind,
      streak, isWinStreak, lastTenWin, lastTenLoss } = record;

    return (
      <Record 
        key={index}
        logo={logo}
        nickname={nickname}
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
            <th>Ranking</th>
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

export default ConferenceTable;