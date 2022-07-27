import React from "react";
import MenuItems from "./layouts/MenuItems";
import Content from "./layouts/Content";

function Score(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2 col" id="menuItemNameDiv">
          <div className="container-left flex-column">
            <MenuItems/>
          </div>
        </div>
        <div className="col-md-6 col" id="contentDiv">
          <div className="container-left d-flex flex-column">
            <Content sport={props.sport}/>
          </div>
        </div>
        <div className="col-md-4 col" id="newsDiv">
          <div className="container-left d-flex flex-column">
            <div className="back-button">
              <img src="assets/basketball/img/back.png" height={40} width={40} />
              <a>Back</a>
            </div>
            <div className="bottom-border" />
            <div className="list-group">
              <a href="#" className="list-group-item list-group-item-action">
                <img src="assets/basketball/img/xbb-wnba.png" />
                WNBA
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                <img src="assets/basketball/img/xbb-nba.jpg" />
                NBA
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                <img src="assets/basketball/img/xbb-ncaa.jpg" />
                NCAA
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                <img src="assets/basketball/img/xbb-euro-league.jpg" />
                EuroLeague
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                <img src="assets/basketball/img/xbb-eurobasket.jpg" />
                EuroBasket
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                <img src="assets/basketball/img/xbb-eurobasket-women.jpg" />
                EuroBasket Women
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                <img src="assets/basketball/img/xbb-eurobasket-u18.jpg" />
                EuroBasket U18
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                <img src="assets/basketball/img/xbb-champions-league.jpg" />
                Champions League
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                <img src="assets/basketball/img/xbb-euro-cup.jpg" />
                EuroCup
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                <img src="assets/basketball/img/xbb-asia-cup.jpg" />
                AsiaCup
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                <img src="assets/basketball/img/xbb-world-cup.jpg" />
                World Cup
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                <img src="assets/basketball/img/xbb-womens-world-cup.jpg" />
                Women's World Cup
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Score;
