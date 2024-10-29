import "../assets/styles/Card.css";
import "../assets/styles/Media-queries.css";

import React from "react";

import PriorityIcon from "./PriorityIcon";
import StatusIcon from "./StatusIcon";

import { User } from "lucide-react";

function Card({ ticket, grouping }) {
  const shouldShowStatusIcon = grouping !== "status";
  const shouldShowPriorityIcon = grouping !== "priority";
  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <span className="ticket-id">{ticket.id}</span>
        {grouping !== "user" && (
          <div className="ava-container">
            <div className="avatar">
              <User />
            </div>
            <div
              className="status-indicator"
              style={{ transform: "translate(25%, 25%)" }}
            />
          </div>
        )}
      </div>
      <div className="ticket-title">
        {shouldShowStatusIcon && <StatusIcon status={ticket.status} />}
        <h3>{ticket.title}</h3>
      </div>
      <div className="ticket-footer">
        {shouldShowPriorityIcon && <PriorityIcon priority={ticket.priority} />}
        <div className="tag">
          <div className="tag-dot"></div>
          <span className="tag-text">{ticket.tag[0]}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
