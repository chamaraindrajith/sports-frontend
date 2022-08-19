import * as React from "react";
import { Link } from "react-router-dom";

interface IMenuProps {
  isMenuOpen: boolean;
}

export const Menu = ({ isMenuOpen }: IMenuProps) => {
  return (
    <div className={`app-menu ${isMenuOpen ? "menu-open" : ""}`}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2>ScorexCard</h2>
        <Link to="/settings" className="sport_chips_links" style={{ textDecoration: "none" }} >
          Settings
        </Link>
        <Link to="/contact" className="sport_chips_links" style={{ textDecoration: "none" }}>
          Contact
        </Link>
        <Link to="/mobile" className="sport_chips_links" style={{ textDecoration: "none" }}>
          Mobile App
        </Link>
        <Link to="/privacy" className="sport_chips_links" style={{ textDecoration: "none" }}>
          Privacy Notice
        </Link>
      </div>
    </div>
  );
};
