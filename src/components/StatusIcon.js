import React from 'react';
import todo from '../assets/To-do.svg';
import inProgress from '../assets/in-progress.svg';
import done from '../assets/Done.svg';
import canceled from '../assets/Cancelled.svg';
import backlog from '../assets/Backlog.svg';

function StatusIcon({status}) {
  switch (status.toLowerCase()) {
    case 'todo':
      return    <img src={todo} alt="todo" />;
    case 'in progress':
      return    <img src={inProgress} alt="inProgress" />;
    case 'done':
      return    <img src={done} alt="done" />;
    case 'canceled':
      return  <img src={canceled} alt="canceled" />;
    default:
      return  <img src={backlog} alt="backlog" />;
  }
}

export default StatusIcon