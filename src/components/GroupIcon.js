import { Signal } from "lucide-react";
import { UserCircle2 } from "lucide-react";

import todo from "../assets/To-do.svg";
import inProgress from "../assets/in-progress.svg";
import done from "../assets/Done.svg";
import canceled from "../assets/Cancelled.svg";
import backlog from "../assets/Backlog.svg";
import dot from "../assets/No-priority.svg";
import urgent from "../assets/SVG - Urgent Priority colour.svg";
import high from "../assets/Img - High Priority.svg";
import medium from "../assets/Img - Medium Priority.svg";
import low from "../assets/Img - Low Priority.svg";

const GroupIcon = ({ grouping, title }) => {
  if (grouping === "status") {
    switch (title.toLowerCase()) {
      case "todo":
        return <img src={todo} alt="todo" />;
      case "in progress":
        return <img src={inProgress} alt="inProgress" />;
      case "done":
        return <img src={done} alt="done" />;
      case "cancelled":
        return <img src={canceled} alt="canceled" />;
      default:
        return <img src={backlog} alt="backlog" />;
    }
  }

  if (grouping === "priority") {
    switch (title.toLowerCase()) {
      case "no priority":
        return <img src={dot} alt="dot" />;
      case "urgent":
        return <img src={urgent} alt="urgent" />;
      case "high":
        return <img src={high} alt="high" />;
      case "medium":
        return <img src={medium} alt="medium" />;
      case "low":
        return <img src={low} alt="low" />;
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
