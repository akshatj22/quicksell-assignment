import "../assets/styles/PriorityIcon.css";
import "../assets/styles/Media-queries.css";

import React from "react";

import SVGDot from "../assets/icons/no-priority.svg";
import SVGUrgent from "../assets/icons/urgent-priority-color.svg";
import SVGHigh from "../assets/icons/high-priority.svg";
import SVGMedium from "../assets/icons/medium-priority.svg";
import SVGLow from "../assets/icons/low-priority.svg";

function PriorityIcon({ priority }) {
  switch (priority) {
    case 4:
      return <img src={SVGUrgent} alt="urgent" />;
    case 3:
      return <img src={SVGHigh} alt="high" />;
    case 2:
      return <img src={SVGMedium} alt="medium" />;
    case 1:
      return <img src={SVGLow} alt="low" />;
    default:
      return <img src={SVGDot} alt="No-priority" />;
  }
}

export default PriorityIcon;
