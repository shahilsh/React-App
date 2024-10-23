export const groupTickets = (tickets, users, grouping) => {
    switch (grouping) {
      case 'status':
        return groupByStatus(tickets);
      case 'user':
        return groupByUser(tickets, users);
      case 'priority':
        return groupByPriority(tickets);
      default:
        return groupByStatus(tickets);
    }
  };
  
  const groupByStatus = (tickets) => {
    return tickets.reduce((groups, ticket) => {
      const status = ticket.status;
      if (!groups[status]) {
        groups[status] = [];
      }
      groups[status].push(ticket);
      return groups;
    }, {});
  };
  
  const groupByUser = (tickets, users) => {
    const userMap = users.reduce((map, user) => {
      map[user.id] = user.name;
      return map;
    }, {});
  
    return tickets.reduce((groups, ticket) => {
      const userName = userMap[ticket.userId];
      if (!groups[userName]) {
        groups[userName] = [];
      }
      groups[userName].push(ticket);
      return groups;
    }, {});
  };
  
  const groupByPriority = (tickets) => {
    const priorityNames = {
      4: 'Urgent',
      3: 'High',
      2: 'Medium',
      1: 'Low',
      0: 'No Priority'
    };
  
    return tickets.reduce((groups, ticket) => {
      const priority = priorityNames[ticket.priority];
      if (!groups[priority]) {
        groups[priority] = [];
      }
      groups[priority].push(ticket);
      return groups;
    }, {});
  };
  
  export const sortTickets = (tickets, sorting) => {
    return [...tickets].sort((a, b) => {
      if (sorting === 'priority') {
        return b.priority - a.priority;
      } else {
        return a.title.localeCompare(b.title);
      }
    });
  };