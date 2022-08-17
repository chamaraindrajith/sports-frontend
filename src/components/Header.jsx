import { React, useState } from "react";
import { ReactDimmer } from "react-dimmer";
import { Menu } from "./../components/Menu";
import "./index.css";
import "../css/header.css";
import Divider from "@mui/material/Divider";

function Header() {
  const [isMenuOpen, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu((prevState) => !prevState);
  };

  return (
    <header>
      <div className="header" id="topHeaderMenu">
        <img onClick={handleMenu} src="\images\icons\menu-handler.png" className="d-inline-block align-top" alt="" />
        <img src="\images\icons\scorexcard logo light.png" alt="" />
        <img alt="" src="https://www.livescore.com/ls-web-assets/svgs/common/search-1e1f1087166a2eae49a82dd529b7aafd.svg" style={{ width: "14px" }}></img>
      </div>
      <Menu isMenuOpen={isMenuOpen} />
      <ReactDimmer isOpen={isMenuOpen} exitDimmer={setMenu} zIndex={100} blur={1.5} />

      <div className="container" id="topHeaderMenu2">
        <div className="d-flex p-2 justify-content-around align-items-center">
          <div>
            <img src="http://localhost:3000/images/icons/menu-handler.png" width={25} onClick={handleMenu} />
            <img className="topMenu2Logo" src="http://localhost:3000/images/icons/scorexcard%20logo%20light.png" />
          </div>
          <div className="d-flex p-2 center align-items-center">
            <img src="https://www.livescore.com/ls-web-assets/svgs/common/cricket-scores-active-2d77d8149f51f9106fc0f4024631dd20.svg" width={20} />
            <span className="topMenu2LinkText">Score</span>
          </div>
          <div className="d-flex p-2 center align-items-center">
            <img src="https://www.livescore.com/ls-web-assets/svgs/common/favourites-5b58c2e7fd0c287f9bd1fd6b23b15019.svg" width={20} />
            <span className="topMenu2LinkText">Favourites</span>
          </div>
          <div>
            <img src="https://www.livescore.com/ls-web-assets/svgs/common/news-article-72be5c0a80489a5b2c0fb7ff831784dc.svg" width={20} />
            <span className="topMenu2LinkText">News</span>
          </div>
          <div>
            <img src="https://www.livescore.com/ls-web-assets/svgs/common/news-article-72be5c0a80489a5b2c0fb7ff831784dc.svg" width={20} />
            <span className="topMenu2LinkText">Fan Club</span>
          </div>
          <div>
            <img src="https://www.livescore.com/ls-web-assets/svgs/common/download-a627554318349f77bb4b3634e94b0205.svg" width={20} />
            <span className="topMenu2LinkText">Get the app</span>
          </div>
        </div>
        <Divider variant="middle" />
      </div>
    </header>
  );
}

export default Header;
