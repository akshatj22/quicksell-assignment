import { Signal } from "lucide-react";
import { UserCircle2 } from "lucide-react";

import SVGTodo from "../assets/icons/to-do.svg";
import SVGInProgress from "../assets/icons/in-progress.svg";
import SVGDone from "../assets/icons/done.svg";
import SVGCanceled from "../assets/icons/cancelled.svg";
import SVGBacklog from "../assets/icons/backlog.svg";
import SVGDot from "../assets/icons/no-priority.svg";
import SVGUrgent from "../assets/icons/urgent-priority-color.svg";
import SVGHigh from "../assets/icons/high-priority.svg";
import SVGMedium from "../assets/icons/medium-priority.svg";
import SVGLow from "../assets/icons/low-priority.svg";

const GroupIcon = ({ grouping, title }) => {
  if (grouping === "status") {
    switch (title.toLowerCase()) {
      case "todo":
        return <img src={SVGTodo} alt="todo" />;
      case "in progress":
        return <img src={SVGInProgress} alt="inProgress" />;
      case "done":
        return <img src={SVGDone} alt="done" />;
      case "cancelled":
        return <img src={SVGCanceled} alt="canceled" />;
      default:
        return <img src={SVGBacklog} alt="backlog" />;
    }
  }

  if (grouping === "priority") {
    switch (title.toLowerCase()) {
      case "no priority":
        return <img src={SVGDot} alt="dot" />;
      case "urgent":
        return <img src={SVGUrgent} alt="urgent" />;
      case "high":
        return <img src={SVGHigh} alt="high" />;
      case "medium":
        return <img src={SVGMedium} alt="medium" />;
      case "low":
        return <img src={SVGLow} alt="low" />;
      default:
        return <Signal />;
    }
  }

  if (grouping === "user") {
    return <UserCircle2 className="text-gray-500" />;
  }

  return null;
};
export default GroupIcon;
