import React from "react";
import "../../../../../css/soccerlineup.css";
import  "../../../../../js/soccerlineup.js";

function GameInfoTabsLineUps() {
  return (
    <div style={{ height: "800px" }}>
    <div id="lineup" className="info-content info-content-active">
      <div className="lineup-main-container d-flex flex-column ">
        <div className="button-container d-flex align-items-center m-auto">
          <div className="swap-button btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-outline-info clicked">Argentina</button>
            <button type="button" className="btn btn-outline-info">Brazill</button>
          </div>
        </div>
      </div>
      <div className="team-card-container team-card-container-active flex-column">
        <div className="team-card team-card-active d-flex flex-column">
          <div className="team-card-header d-flex flex-row">
            <div className="team-logo"><img src="/images/soccer/argentina.jpg  " style={{width: 32, height: '32px'}} /></div>
            <div className="team-name"><a>Argentina</a></div>
            <div className="team-formation">4-3-2-1</div>
          </div>
          <div className="team-card-body d-flex flex-column">
            <div className="d-flex justify-content-between">
              <div className="align-items-center ml-4">
                <span>starting XI</span>
              </div>
              <div className="justify-content-center mr-4">
                <span>substitution</span>
              </div>
            </div>                  
            <div className="team-card">
              <ul className="list-group">
                <li className="list-group-item d-flex align-items-center">
                  <span className="badge badge-primary badge-pill">14</span>
                  test brazil
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <span className="badge badge-primary badge-pill">14</span>
                  Cras justo odio
                </li>
                <li className="list-group-item d-flex  align-items-center">
                  <span className="badge badge-primary badge-pill">14</span>
                  Cras justo odio
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <span className="badge badge-primary badge-pill">14</span>
                  Cras justo odio
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <span className="badge badge-primary badge-pill">14</span>
                  Cras justo odio
                </li>
                <li className="list-group-item d-flex  align-items-center">
                  <span className="badge badge-primary badge-pill">14</span>
                  Cras justo odio
                </li>
                <li className="list-group-item d-flex  align-items-center">
                  <span className="badge badge-primary badge-pill">14</span>
                  Cras justo odio
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <span className="badge badge-primary badge-pill">14</span>
                  Cras justo odio
                </li>
                <li className="list-group-item d-flex  align-items-center">
                  <span className="badge badge-primary badge-pill">14</span>
                  Cras justo odio
                </li>
                <li className="list-group-item d-flex  align-items-center">
                  <span className="badge badge-primary badge-pill">14</span>
                  Cras justo odio
                </li>
                <li className="list-group-item d-flex  align-items-center">
                  <span className="badge badge-primary badge-pill">14</span>
                  Cras justo odio
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="team-card-container flex-column">
        <div className="team-card-header d-flex flex-row">
          <div className="team-logo"><img src="/images/soccer/brazil.jpg " style={{width: 32, height: '32px'}} /></div>
          <div className="team-name"><a>Brazil</a></div>
          <div className="team-formation">4-3-2-1</div>
        </div>
        <div className="team-card-body d-flex flex-column">
          <div className="d-flex justify-content-between">
            <div className="align-items-center ml-4">
              <span>starting XI</span>
            </div>
            <div className="justify-content-center mr-4">
              <span>substitution</span>
            </div>
          </div> 
          <div className="team-card">
            <ul className="list-group">
              <li className="list-group-item d-flex align-items-center">
                <span className="badge badge-primary badge-pill">14</span>
                Cras justo odio
              </li>
              <li className="list-group-item d-flex align-items-center">
                <span className="badge badge-primary badge-pill">14</span>
                Cras justo odio
              </li>
              <li className="list-group-item d-flex  align-items-center">
                <span className="badge badge-primary badge-pill">14</span>
                Cras justo odio
              </li>
              <li className="list-group-item d-flex align-items-center">
                <span className="badge badge-primary badge-pill">14</span>
                Cras justo odio
              </li>
              <li className="list-group-item d-flex align-items-center">
                <span className="badge badge-primary badge-pill">14</span>
                Cras justo odio
              </li>
              <li className="list-group-item d-flex  align-items-center">
                <span className="badge badge-primary badge-pill">14</span>
                Cras justo odio
              </li>
              <li className="list-group-item d-flex  align-items-center">
                <span className="badge badge-primary badge-pill">14</span>
                Cras justo odio
              </li>
              <li className="list-group-item d-flex align-items-center">
                <span className="badge badge-primary badge-pill">14</span>
                Cras justo odio
              </li>
              <li className="list-group-item d-flex  align-items-center">
                <span className="badge badge-primary badge-pill">14</span>
                Cras justo odio
              </li>
              <li className="list-group-item d-flex  align-items-center">
                <span className="badge badge-primary badge-pill">14</span>
                Cras justo odio
              </li>
              <li className="list-group-item d-flex  align-items-center">
                <span className="badge badge-primary badge-pill">14</span>
                Cras justo odio
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default GameInfoTabsLineUps;
