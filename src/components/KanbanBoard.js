import React from "react";
import { useState, useEffect } from "react";
import Column from "./Column";
import Header from "./Header";
import "./styles.css";

function KanbanBoard() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState(
    localStorage.getItem("grouping") || "status"
  );
  const [ordering, setOrdering] = useState(
    localStorage.getItem("ordering") || "priority"
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.quicksell.co/v1/internal/frontend-assignment"
        );
        const data = await response.json();
        setTickets(data.tickets);
        setUsers(data.users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem("grouping", grouping);
    localStorage.setItem("ordering", ordering);
  }, [grouping, ordering]);

  const sortTickets = (ticketsToSort) => {
    return [...ticketsToSort].sort((a, b) => {
      if (ordering === "priority") {
        return b.priority - a.priority;
      }
      return a.title.localeCompare(b.title);
    });
  };

  const groupTickets = () => {
    let groups = {};

    if (grouping === "status") {
      groups = {
        Todo: [],
        "In progress": [],
        Done: [],
        Cancelled: [],
      };
      tickets.forEach((ticket) => {
        const status = ticket.status;
        if (!groups[status]) groups[status] = [];
        groups[status].push(ticket);
      });
    } else if (grouping === "user") {
      users.forEach((user) => {
        groups[user.name] = tickets.filter(
          (ticket) => ticket.userId === user.id
        );
      });
    } else if (grouping === "priority") {
      const priorities = {
        4: "Urgent",
        3: "High",
        2: "Medium",
        1: "Low",
        0: "No priority",
      };

      Object.values(priorities).forEach((priority) => {
        groups[priority] = [];
      });

      tickets.forEach((ticket) => {
        const priorityName = priorities[ticket.priority];
        groups[priorityName].push(ticket);
      });
    }

    Object.keys(groups).forEach((key) => {
      groups[key] = sortTickets(groups[key]);
    });

    return groups;
  };

  const groupedTickets = groupTickets();

  return (
    <div className="kanban-container">
      <Header
        grouping={grouping}
        ordering={ordering}
        onGroupingChange={setGrouping}
        onOrderingChange={setOrdering}
      />
      <div className="board-container">
        <div className="columns-container">
          {Object.entries(groupedTickets).map(([title, groupTickets]) => (
            <Column
              key={title}
              title={title}
              tickets={groupTickets}
              users={users}
              grouping={grouping}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default KanbanBoard;
