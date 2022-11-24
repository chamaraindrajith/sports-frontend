import { React, useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { AiFillCaretLeft, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import ExploreMenuList from "./ExploreMenuList";

function ExploreMenu(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuitems, setMenuItems] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setIsLoaded(false);
    setError(false);
    // console.log("Location changed ExploreMenu");
    getMenuItems();
    setInputText("");
  }, [location]);

  function getMenuItems() {

    if (props.category) {
      var url = "https://api.tvpool.net/api/get/" + props.sport + "/" + props.category + "/stages";
    } else {
      var url = "https://api.tvpool.net/api/get/" + props.sport + "/categories";
    }

    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setTimeout(() => {
            // console.log(result);
            setMenuItems(result);
            // console.log(result)
            setIsLoaded(true);
          }, 1000);
        },
        (error) => {
          setError(error);
          setIsLoaded(true);
        }
      );
  }

  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  if (!isLoaded) {
    return (
      <div style={{ height: "350px", display: "flex", justifyContent: "center" }}>
        <div style={{ marginTop: "150px" }}>
          <CircularProgress />
        </div>
      </div>
    );
  } else if (isLoaded || error) {
    if (error || menuitems === undefined || menuitems === [] || menuitems === null || menuitems.length === 0) {
      return (
        <div style={{ height: "350px" }}>
          <div className="box_message">Categories not loaded</div>
        </div>
      );
    } else {
      return (
        <ul className="Ch">

          <div style={{ marginTop: "12px", marginBottom: "12px" }} className={(props.category ? "hide" : "") + " stage_card_stage"}>
            <Link style={{ textDecoration: "none" }} className="menuitems">
              <AiOutlineSearch style={{ fontSize: "25px" }} />
            </Link>
            <div className="header__stage" style={{ marginRight: "22px", marginLeft: "15px", width: "50%" }}>
              <div className="header__stage__headers">
                <span className="sidebar_sport_news_header">
                  <input type="text" placeholder="Search..." className="search" onChange={inputHandler} />
                </span>
              </div>
            </div>
            <Link to={"/" + props.sport + (props.stage ? ("/" + props.category) : "")} style={{ textDecoration: "none" }} className="menuitems">
              <AiOutlineClose style={{ fontSize: "25px" }} />
            </Link>
          </div>

          <div style={{ marginTop: "12px", marginBottom: "12px" }} className={(props.category ? "" : "hide") + " stage_card_stage"}>
            <Link to={"/" + props.sport + (props.stage ? ("/" + props.category) : "")} style={{ textDecoration: "none" }} className="menuitems">
              <AiFillCaretLeft style={{ fontSize: "25px" }} />
            </Link>
            <div className="header__stage" style={{ justifyContent: "center", marginRight: "22px" }}>
              <div className="header__stage__headers">
                <div className="header__stage__headers">
                  <span className="category-header__stage">{props.stage ? props.stage_name : props.category_name}</span>
                  <span className={"category-header__category " + props.stage ? "" : "hide"}>{props.stage_name ? props.category_name : ""}</span>
                </div>
              </div>
            </div>
          </div>

          <ExploreMenuList menuitems={menuitems} input={inputText} />

          {console.log(menuitems)}

          {/* {menuitems.map((menuitem, key) => (
            <Link to={"/" + menuitem.url} style={{ textDecoration: "none" }} className="menuitems" key={key}>
              <li className="Fh">
                <div className="ej">
                  <img loading="lazy" className="flags" src={"/images/flags/" + menuitem.image + ".jpg"} alt="" />
                </div>
                <span className={"menuItemName " + (menuitem.slug === props.stage ? " active" : "")}>
                  {menuitem.name}
                </span>
              </li>
            </Link>
          ))} */}

        </ul>
      );
    }

  }
}

export default ExploreMenu;
