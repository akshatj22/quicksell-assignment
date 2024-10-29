import React from 'react'
import './styles.css';
import dot from '../assets/No-priority.svg';
import urgent from '../assets/SVG - Urgent Priority grey.svg'
import high from '../assets/Img - High Priority.svg';
import medium from '../assets/Img - Medium Priority.svg';
import low from '../assets/Img - Low Priority.svg';

function PriorityIcon({priority}) {
    switch (priority) {
        case 4:
          return  <img src={urgent} alt="urgent" />;
        case 3:
          return  <img src={high} alt="high" />;
        case 2:
          return  <img src={medium} alt="medium" />;
        case 1:
          return   <img src={low} alt="low" />;
        default:
          return  <img src={dot} alt="No-priority" />;
      }
};

export default PriorityIcon