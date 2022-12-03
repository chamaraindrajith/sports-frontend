import { React, useState } from "react";
import { ReactDimmer } from "react-dimmer";
import { Menu } from "./../components/Menu";
import "./index.css";
import "../css/header.css";
import Divider from "@mui/material/Divider";
import { Link, useParams } from "react-router-dom";

function Header(props) {
  const [isMenuOpen, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu((prevState) => !prevState);
  };

  return (
    <header>
      <div className="header" id="topHeaderMenu">
        <img onClick={handleMenu} src="https://api.tvpool.net/images/common/menu-handler.png" className="d-inline-block align-top" alt="" />
        <img src="https://api.tvpool.net/images/common/scorexcard-logo-light.png" alt="" />
        <img alt="" src="https://api.tvpool.net/images/common/search.svg" style={{ width: "14px" }}></img>
      </div>
      <Menu isMenuOpen={isMenuOpen} />
      <ReactDimmer isOpen={isMenuOpen} exitDimmer={setMenu} zIndex={100} blur={1.5} />

      <div className="container" id="topHeaderMenu2">
        <div className="d-flex p-2 justify-content-around align-items-center">
          <div>
            <img src="https://api.tvpool.net/images/common/menu-handler.png" width={25} onClick={handleMenu} />
            <Link to="/">
              <img className="topMenu2Logo" src="https://api.tvpool.net/images/common/scorexcard-logo-light.png" />
            </Link>
          </div>
          <Link to={"/" + props.sport} className="d-flex p-2 center align-items-center" style={{ textDecoration: "none" }}>
            <img src="https://api.tvpool.net/images/common/cricket-scores-active.svg" width={20} />
            <span className="topMenu2LinkText">Score</span>
          </Link>
          <Link to={"/" + props.sport + "/favorites/matches"} className="d-flex p-2 center align-items-center" style={{ textDecoration: "none" }}>
            <img src="https://api.tvpool.net/images/common/favourites.svg" width={20} />
            <span className="topMenu2LinkText">Favorites</span>
          </Link>
          <Link to="/news" className="d-flex p-2 center align-items-center" style={{ textDecoration: "none" }}>
            <img src="https://api.tvpool.net/images/common/news-article.svg" width={20} />
            <span className="topMenu2LinkText">News</span>
          </Link>
          <Link to="/fan-club" className="d-flex p-2 center align-items-center" style={{ textDecoration: "none" }}>
            <img src="https://api.tvpool.net/images/common/news-article.svg" width={20} />
            <span className="topMenu2LinkText">Fan Club</span>
          </Link>
          <Link to="/mobile" className="d-flex p-2 center align-items-center" style={{ textDecoration: "none" }}>
            <img src="https://api.tvpool.net/images/common/download.svg" width={20} />
            <span className="topMenu2LinkText">Get the app</span>
          </Link>
        </div>
        <Divider variant="middle" />
      </div>
    </header>
  );
}

export default Header;
