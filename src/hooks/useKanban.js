import { useState, useEffect } from 'react';

const useKanban = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [grouping, setGrouping] = useState(localStorage.getItem('grouping') || 'status');
  const [sorting, setSorting] = useState(localStorage.getItem('sorting') || 'priority');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await response.json();
      setTickets(data.tickets);
      setUsers(data.users);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const updateGrouping = (newGrouping) => {
    setGrouping(newGrouping);
    localStorage.setItem('grouping', newGrouping);
  };

  const updateSorting = (newSorting) => {
    setSorting(newSorting);
    localStorage.setItem('sorting', newSorting);
  };

  return {
    tickets,
    users,
    loading,
    grouping,
    sorting,
    updateGrouping,
    updateSorting
  };
};

export default useKanban;