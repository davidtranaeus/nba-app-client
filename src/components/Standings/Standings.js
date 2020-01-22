import React from 'react';
import Record from './Record'

const Standings = ({ isFetching, teams, selectTeam, selectedTeams }) => {

  // Sort on ranking
  teams.sort((a, b) => (parseInt(a.confRank) > parseInt(b.confRank)) ? 1 : -1);

  return isFetching
    ? <div>Loading</div>
    : (<table className="no-border" cellPadding="6">
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
          {teams.map((record, index) => 
            <Record 
              key={index}
              data={record} 
              selectTeam={selectTeam}
              isSelected={selectedTeams.includes(record.teamId)}
            />)}
        </tbody>
      </table>
    )
}

export default Standings;