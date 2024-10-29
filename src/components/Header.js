import "../assets/styles/Header.css";
import "../assets/styles/Media-queries.css";

import React, { useState, useRef, useEffect } from "react";

import { ChevronDown } from "lucide-react";
import SVGDisplay from "../assets/icons/display.svg";

function Header({ grouping, ordering, onGroupingChange, onOrderingChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleGroupingChange = (e) => {
    onGroupingChange(e.target.value);
    setIsOpen(false);
  };

  const handleOrderingChange = (e) => {
    onOrderingChange(e.target.value);
    setIsOpen(false);
  };

  return (
    <div className="header">
      <div style={{ position: "relative", display: "inline-block" }}>
        <button
          className="display-button"
          onClick={() => setIsOpen(!isOpen)}
          ref={buttonRef}
        >
          <img src={SVGDisplay} alt="display" />
          <span>Display</span>
          <ChevronDown />
        </button>

        {isOpen && (
          <div className="dropdown" ref={dropdownRef}>
            <div className="dropdown-row">
              <span className="dropdown-label">Grouping</span>
              <select value={grouping} onChange={handleGroupingChange}>
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="dropdown-row">
              <span className="dropdown-label">Ordering</span>
              <select value={ordering} onChange={handleOrderingChange}>
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
