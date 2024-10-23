import React, { useState } from 'react';
import './Header.css';
import DisplaySelector from '../DisplaySelector/DisplaySelector';

const Header = ({ grouping, sorting, onGroupingChange, onSortingChange }) => {
  const [showSelector, setShowSelector] = useState(false);

  return (
    <div className="header">
      <button 
        className="display-button"
        onClick={() => setShowSelector(!showSelector)}
      >
        Display ▼
      </button>
      {showSelector && (
        <DisplaySelector
          grouping={grouping}
          sorting={sorting}
          onGroupingChange={onGroupingChange}
          onSortingChange={onSortingChange}
          onClose={() => setShowSelector(false)}
        />
      )}
    </div>
  );
};

export default Header;