import "../assets/styles/Column.css";
import "../assets/styles/Media-queries.css";

import React from "react";
import Card from "./Card";
import GroupIcon from "./GroupIcon";

import SVGAdd from "../assets/icons/add.svg";
import SVGDot from "../assets/icons/threedot.svg";

function Column({ title, tickets, users, grouping }) {
  return (
    <div className="column">
      <div className="column-header">
        <div className="column-title">
          <GroupIcon grouping={grouping} title={title} />
          <h2>{title}</h2>
          <span className="column-count">{tickets.length}</span>
        </div>

        <div className="column-actions">
          <button className="action-button">
            <img src={SVGAdd} alt="add" />
          </button>
          <button className="action-button">
            <img src={SVGDot} alt="More" />
          </button>
        </div>
      </div>

      <div className="tickets-container">
        {tickets.map((ticket) => (
          <Card
            key={ticket.id}
            ticket={ticket}
            user={users.find((u) => u.id === ticket.userId)}
            grouping={grouping}
          />
        ))}
      </div>
    </div>
  );
}

export default Column;
