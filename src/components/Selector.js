import React from 'react';
import { VisibilityFilters } from '../actions'
import './App.css';

const { SHOW_WEST, SHOW_EAST } = VisibilityFilters

const Selector = ({ onClick, conference }) => {
  return (
    <div className="selector-container">
      <div
        onClick={() => onClick(SHOW_WEST)}
        className={`${conference === SHOW_WEST ? "selected" : "unselected"}`}
        >Western conference
      </div>
      <div 
        onClick={() => onClick(SHOW_EAST)}
        className={`${conference === SHOW_EAST ? "selected" : "unselected"}`}
        >Eastern conference
      </div>
    </div>
  )
}

export default Selector;