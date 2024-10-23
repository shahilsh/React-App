import React from 'react';
import './Card.css';

const Card = ({ ticket, user }) => {
  const getPriorityIcon = (priority) => {
    switch(priority) {
      case 4: return '🔴'; // Urgent
      case 3: return '🔶'; // High
      case 2: return '🟡'; // Medium
      case 1: return '🟢'; // Low
      default: return '⚪'; // No priority
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <span className="ticket-id">{ticket.id}</span>
        <div className="user-avatar">
          {user?.name.charAt(0)}
          <span className={`status-dot ${user?.available ? 'available' : ''}`}></span>
        </div>
      </div>
      <div className="card-title">
        <span className="priority-icon">{getPriorityIcon(ticket.priority)}</span>
        <p>{ticket.title}</p>
      </div>
      <div className="card-tags">
        {ticket.tag.map((tag, index) => (
          <span key={index} className="tag">
            ⭕ {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;