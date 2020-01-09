import React from 'react';
import { VisibilityFilters } from '../actions'
import './App.css';

const Selector = ({ onClick }) => {
  return (
    <div className="selector-container">
      {/* Lägg till markering på vad conference .selected/.unselected */}
      <div
        onClick={() => onClick(VisibilityFilters.SHOW_WEST)}
        >Western conference
      </div>
      <div 
        onClick={() => onClick(VisibilityFilters.SHOW_EAST)}
        >Eastern conference
      </div>
    </div>
  )
}

export default Selector;