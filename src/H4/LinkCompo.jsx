import React from "react";
import { NavLink } from "react-router-dom";
export default function LinkCompo() {
  return (
    <header className="Header">
      <nav className="nav">
        <ul className="ul">
          <li className="li">
            <NavLink to="/"> Home</NavLink>
          </li>
          <li>
            <NavLink to="/student">Student</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
