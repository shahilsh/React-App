import React from 'react';
import './KanbanBoard.css';
import Header from '../Header/Header';
import Card from '../Card/Card';
import useKanban from '../../hooks/useKanban';
import { groupTickets, sortTickets } from '../../utils/helpers';

const KanbanBoard = () => {
  const { 
    tickets, 
    users, 
    loading, 
    grouping, 
    sorting, 
    updateGrouping, 
    updateSorting 
  } = useKanban();

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  const groupedTickets = groupTickets(tickets, users, grouping);

  return (
    <div className="kanban-board">
      <Header
        grouping={grouping}
        sorting={sorting}
        onGroupingChange={updateGrouping}
        onSortingChange={updateSorting}
      />
      <div className="board-content">
        {Object.entries(groupedTickets).map(([group, tickets]) => (
          <div key={group} className="board-column">
            <div className="column-header">
              <h2>{group}</h2>
              <span className="ticket-count">{tickets.length}</span>
            </div>
            <div className="column-content">
              {sortTickets(tickets, sorting).map(ticket => (
                <Card
                  key={ticket.id}
                  ticket={ticket}
                  user={users.find(user => user.id === ticket.userId)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;