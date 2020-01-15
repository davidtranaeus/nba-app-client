import React from 'react';
import Record from './Record'

const Standings = ({ isFetching, teams }) => {

  // Sort on ranking
  teams.sort((a, b) => (parseInt(a.confRank) > parseInt(b.confRank)) ? 1 : -1);

  return isFetching
    ? <div className="loader">Loading</div>
    : (<table cellPadding="6">
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
          {teams.map((record, index) => <Record data={record} key={index}/>)}
        </tbody>
      </table>
    )
}

export default Standings;