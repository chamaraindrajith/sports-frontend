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
        <img onClick={handleMenu} src="https://sports.pfplapp.com/menu-handler.png" className="d-inline-block align-top" alt="" />
        <img src="https://sports.pfplapp.com/scorexcard%20logo%20light.png" alt="" />
        <img alt="" src="https://www.livescore.com/ls-web-assets/svgs/common/search-1e1f1087166a2eae49a82dd529b7aafd.svg" style={{ width: "14px" }}></img>
      </div>
      <Menu isMenuOpen={isMenuOpen} />
      <ReactDimmer isOpen={isMenuOpen} exitDimmer={setMenu} zIndex={100} blur={1.5} />

      <div className="container" id="topHeaderMenu2">
        <div className="d-flex p-2 justify-content-around align-items-center">
          <div>
            <img src="https://sports.pfplapp.com/menu-handler.png" width={25} onClick={handleMenu} />
            <Link to="/">
              <img className="topMenu2Logo" src="https://sports.pfplapp.com/scorexcard%20logo%20light.png" />
            </Link>
          </div>
          <Link to={"/" + props.sport} className="d-flex p-2 center align-items-center" style={{ textDecoration: "none" }}>
            <img src="https://www.livescore.com/ls-web-assets/svgs/common/cricket-scores-active-2d77d8149f51f9106fc0f4024631dd20.svg" width={20} />
            <span className="topMenu2LinkText">Score</span>
          </Link>
          <Link to={"/" + props.sport + "/favorites"} className="d-flex p-2 center align-items-center" style={{ textDecoration: "none" }}>
            <img src="https://www.livescore.com/ls-web-assets/svgs/common/favourites-5b58c2e7fd0c287f9bd1fd6b23b15019.svg" width={20} />
            <span className="topMenu2LinkText">Favorites</span>
          </Link>
          <Link to="/news" className="d-flex p-2 center align-items-center" style={{ textDecoration: "none" }}>
            <img src="https://www.livescore.com/ls-web-assets/svgs/common/news-article-72be5c0a80489a5b2c0fb7ff831784dc.svg" width={20} />
            <span className="topMenu2LinkText">News</span>
          </Link>
          <Link to="/fan-club" className="d-flex p-2 center align-items-center" style={{ textDecoration: "none" }}>
            <img src="https://www.livescore.com/ls-web-assets/svgs/common/news-article-72be5c0a80489a5b2c0fb7ff831784dc.svg" width={20} />
            <span className="topMenu2LinkText">Fan Club</span>
          </Link>
          <Link to="/mobile" className="d-flex p-2 center align-items-center" style={{ textDecoration: "none" }}>
            <img src="https://www.livescore.com/ls-web-assets/svgs/common/download-a627554318349f77bb4b3634e94b0205.svg" width={20} />
            <span className="topMenu2LinkText">Get the app</span>
          </Link>
        </div>
        <Divider variant="middle" />
      </div>
    </header>
  );
}

export default Header;
