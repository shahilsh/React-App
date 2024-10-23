import React from 'react';
import './DisplaySelector.css';

const DisplaySelector = ({ 
  grouping, 
  sorting, 
  onGroupingChange, 
  onSortingChange,
  onClose 
}) => {
  return (
    <div className="display-selector">
      <div className="selector-row">
        <span>Grouping</span>
        <select 
          value={grouping} 
          onChange={(e) => onGroupingChange(e.target.value)}
        >
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <div className="selector-row">
        <span>Ordering</span>
        <select 
          value={sorting} 
          onChange={(e) => onSortingChange(e.target.value)}
        >
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
};

export default DisplaySelector;