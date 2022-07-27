import { React, useState } from "react";
import { ReactDimmer } from "react-dimmer";
import { Menu } from "./../components/Menu";
import "./index.css";

function Header() {
  const [isMenuOpen, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu((prevState) => !prevState);
  };

  return (
    <header>
        <div className="header">
          <img alt="" src="https://www.livescore.com/ls-web-assets/svgs/common/hamburger-menu-09595bd28744ad1fa99a010f1f41f34b.svg" style={{width:"14px"}} onClick={handleMenu}></img>
          <img src="https://www.livescore.com/ls-web-assets/svgs/common/livescore-logo-b3b211143dccd9e22d164701d32a390f.svg" alt="" />
          <img alt="" src="https://www.livescore.com/ls-web-assets/svgs/common/search-1e1f1087166a2eae49a82dd529b7aafd.svg" style={{width:"14px"}}></img>
        </div>
      <Menu isMenuOpen={isMenuOpen} />
      <ReactDimmer isOpen={isMenuOpen} exitDimmer={setMenu} zIndex={100} blur={1.5} />
    </header>
  );
}

export default Header;
