import { React, useState } from "react";
import { ReactDimmer } from "react-dimmer";
import { Menu } from "./../components/Menu";
import "./index.css";
import "../css/header.css";

function Header() {
    const [isMenuOpen, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu((prevState) => !prevState);
    };

    return (
        <header>
            <div className="header">
                <div className="navbar navbar-expand navbar-dark flex-column flex-md-row sticky-top" id="top-nav">
                    <a className="navbar-brand" href="#">
                        <img src=".\images\icons\menu-handler.png" width={40} height={40} className="d-inline-block align-top" alt="" />
                        <img src=".\images\icons\scorexcard logo light.png" width={205} height={40} className="d-inline-block align-top" alt="" />
                    </a>
                    <div className="navbar-nav-scroll">
                        <ul className="navbar-nav bd-navbar-nav flex-row">
                            <li className="nav-item" />
                            <li className="nav-item">
                                <a className="nav-link active" id="score" href="#">
                                    Score
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="fav" href="#">
                                    Favourites
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="news" href="#">
                                    News
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="fanclub" href="#">
                                    Fan Club
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Menu isMenuOpen={isMenuOpen} />
            <ReactDimmer isOpen={isMenuOpen} exitDimmer={setMenu} zIndex={100} blur={1.5} />
        </header>
    );
}

export default Header;
