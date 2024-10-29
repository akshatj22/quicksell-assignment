import "../assets/styles/StatusIcon.css";
import "../assets/styles/Media-queries.css";

import React from "react";

import SVGTodo from "../assets/icons/to-do.svg";
import SVGInProgress from "../assets/icons/in-progress.svg";
import SVGDone from "../assets/icons/done.svg";
import SVGCanceled from "../assets/icons/cancelled.svg";
import SVGBacklog from "../assets/icons/backlog.svg";

function StatusIcon({ status }) {
  switch (status.toLowerCase()) {
    case "todo":
      return <img src={SVGTodo} alt="todo" />;
    case "in progress":
      return <img src={SVGInProgress} alt="inProgress" />;
    case "done":
      return <img src={SVGDone} alt="done" />;
    case "canceled":
      return <img src={SVGCanceled} alt="canceled" />;
    default:
      return <img src={SVGBacklog} alt="backlog" />;
  }
}

export default StatusIcon;
