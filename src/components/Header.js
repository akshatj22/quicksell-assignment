import './styles.css';
import React, { useState } from 'react'

import { ChevronDown } from 'lucide-react';
import display from '../assets/Display.svg'

function Header({ grouping, ordering, onGroupingChange, onOrderingChange }) {
    const [isOpen,setIsOpen] = useState(false);
  return (
    <div className="header">
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button className="display-button" onClick={() => setIsOpen(!isOpen)}>
        <img src={display} alt="display" />
        <span>Display</span>
        <ChevronDown />
      </button>

      {isOpen && (
        <div className="dropdown">
          <div className="dropdown-row">
            <span className="dropdown-label">Grouping</span>
            <select value={grouping} onChange={(e) => onGroupingChange(e.target.value)}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="dropdown-row">
            <span className="dropdown-label">Ordering</span>
            <select value={ordering} onChange={(e) => onOrderingChange(e.target.value)}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  </div>
  );
};

export default Header