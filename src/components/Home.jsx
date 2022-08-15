import React from "react";
import MenuItems from "./layouts/MenuItems";
import Content from "./layouts/Content";
import NewsSideBar from "./layouts/news/NewsSideBar";
import { useParams } from "react-router-dom";

function Home() {
  var { sport } = useParams();
  if (sport == undefined) {
    sport = "cricket"; // default sport
  }
  return (
    <div className="container">
      <div className="row"> 
        <div className="col-md-2 col" id="menuItemNameDiv">
          <div className="container-left flex-column">
            <MenuItems />
          </div>
        </div>
        <div className="col-md-6 col" id="contentDiv">
          <div className="container-left d-flex flex-column">
            <Content sport={sport} />
          </div>
        </div>
        <div className="col-md-4 col" id="newsDiv">
          <div className="container-left d-flex flex-column">
            <NewsSideBar sport={sport} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
