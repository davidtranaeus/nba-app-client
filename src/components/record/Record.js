import React from 'react';

function Record(props) {
  const { index, logo, nickname, rank, win, loss } = props;

  return (    
    <tr key={index}>
        <td>{rank}</td>
        <td><img src={logo} alt={nickname} width="30px"/></td>
        <td>{nickname}</td>
        <td>{win}</td>
        <td>{loss}</td>
      </tr>
  )
}

export default Record; 