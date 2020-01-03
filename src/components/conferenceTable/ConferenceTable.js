import React from 'react';
import Record from '../record/Record';

function ConferenceTable(props) {
  props.records.sort((a, b) => (parseInt(a.rank) > parseInt(b.rank)) ? 1 : -1);

  const tableData = props.records.map((record, index) => {
    const { logo, nickname, rank, win, loss } = record;
    return (
      <tr key={index}>
        <td>{rank}</td>
        <td><img src={logo} alt={nickname} width="30px"/></td>
        <td>{nickname}</td>
        <td>{win}</td>
        <td>{loss}</td>
      </tr>
    )
  })

  return (
      <table cellpadding="6">
        <thead>
          <tr>
            <th>Ranking</th>
            <th></th>
            <th></th>
            <th>W</th>
            <th>L</th>
          </tr>
        </thead>
        <tbody>
          {tableData}
        </tbody>
      </table>
  )
}

export default ConferenceTable;