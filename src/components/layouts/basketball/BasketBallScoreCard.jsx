import React from "react";
import "./../../../css/BasketBallScoreCard.css";

function BasketBallScoreCard() {
  return (
    <div style={{ height: "800px" }}>
      {/* <div ClassName="container-center">this is the container center</div> */}
      <div className="container-center d-flex flex-column">
        <div className="scorecard d-flex flex-column">
          {/* top bar with league logo and stage name */}
          <div className="league-detail d-flex flex-row">
            <img id="back-btn" src={process.env.PUBLIC_URL + "/images/basketball/img/live.svg"} height={24} width={24} />
            <div className="league-stage d-flex flex-row">
              <img id="league-icon" src={process.env.PUBLIC_URL + "/images/basketball/img/league-icons/xbb-wnba.png"} height={24} width={36} />
              <a id="stage">League : Stage</a>
            </div>
          </div>
          <div className="score d-flex flex-row">
            {/* team one name and logo - left side */}
            <div className="team-one d-flex flex-column">
              <img src={process.env.PUBLIC_URL + "/images/basketball/img/team-icons/connecticut_sun.png"} height={54} width={54} />
              <a id="team-name">Connecticut Sun</a>
            </div>
            {/* both team points and time in center */}
            <div className="points-card d-flex flex-column">
              <div className="points d-flex flex-row">
                <div id="team-one">
                  <a id="point">82</a>
                </div>
                <a id="divider">-</a>
                <div id="team-two">
                  <a id="point">40</a>
                </div>
              </div>
              <a id="time">Full time</a>
            </div>
            {/* team two name and logo - right side */}
            <div className="team-two d-flex flex-column">
              <img src={process.env.PUBLIC_URL + "/images/basketball/img/team-icons/new_york_liberty.png"} height={54} width={54} />
              <a id="team-name">New York Liberty</a>
            </div>
          </div>
        </div>
        <div className="bottom-border" />
        {/* info and table button */}
        <div className="info-bar">
          <button type="button" className="btn btn-dark clicked">Info</button>
          <button type="button" className="btn btn-dark">Table</button>
        </div>
        <div className="bottom-border" />
        {/* info container */}
        <div className="info-content info-content-active">
          {/* points table */}
          <div className="container-table">
            <table className="point-table table table-borderless table-dark table-sm">
              <thead>
                <tr>
                  <th scope="col" style={{textAlign: 'left'}}>Team</th>
                  <th scope="col">1</th>
                  <th scope="col">2</th>
                  <th scope="col">3</th>
                  <th scope="col">4</th>
                  <th scope="col">T</th>
                </tr>
              </thead>
              <tbody className="border border-dark">
                <tr>
                  <th scope="row">Team one</th>
                  <td>19</td>
                  <td>20</td>
                  <td>14</td>
                  <td>14</td>
                  <td>14</td>
                </tr>
                <tr>
                  <th scope="row">Team two</th>
                  <td>14</td>
                  <td>14</td>
                  <td>14</td>
                  <td>14</td>
                  <td>14</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* match info */}
          <div className="match-info d-flex flex-column">
            <lable>Match info</lable>
            <div className="match-date d-flex flex-row align-items-center">
              <img src={process.env.PUBLIC_URL + "/images/basketball/img/calendar.svg"} height={40} width={40} />
              <div className="time-info d-flex flex-column">
                <a id="date-value">19 July 2022</a>
                <a id="date">Date</a>
              </div>
            </div>
            <div className="match-venue d-flex flex-row align-items-center">
              <img src={process.env.PUBLIC_URL + "/images/basketball/img/venue.svg"} height={40} width={40} />
              <div className="venue-info d-flex flex-column">
                <a id="vanue-value">Mohegan Sun Arena</a>
                <a id="venue">Venue</a>
              </div>
            </div>
          </div>
        </div>
        {/* table container */}
        <div className="info-content info-table">
          <div className="container-table">
            <table className="point-table table table-borderless table-dark table-sm">
              <thead>
                <tr>
                  <th scope="col" style={{textAlign: 'center'}}>#</th>
                  <th scope="col" style={{textAlign: 'left'}}>Team</th>
                  <th scope="col">P</th>
                  <th scope="col">W</th>
                  <th scope="col">L</th>
                  <th scope="col">F</th>
                  <th scope="col">A</th>
                  <th scope="col">SD</th>
                  <th scope="col">PER</th>
                </tr>
              </thead>
              <tbody className="border border-dark">
                <tr>
                  <th scope="row" style={{textAlign: 'center'}}>1</th>
                  <td style={{textAlign: 'left'}}>Team name</td>
                  <td>11</td>
                  <td>9</td>
                  <td>2</td>
                  <td>1140</td>
                  <td>989</td>
                  <td>989</td>
                  <td>0.8</td>
                </tr>
                <tr>
                  <th scope="row" style={{textAlign: 'center'}}>2</th>
                  <td style={{textAlign: 'left'}}>Team name</td>
                  <td>11</td>
                  <td>9</td>
                  <td>2</td>
                  <td>1140</td>
                  <td>989</td>
                  <td>989</td>
                  <td>0.8</td>
                </tr>
                <tr>
                  <th scope="row" style={{textAlign: 'center'}}>3</th>
                  <td style={{textAlign: 'left'}}>Team name</td>
                  <td>11</td>
                  <td>9</td>
                  <td>2</td>
                  <td>1140</td>
                  <td>989</td>
                  <td>989</td>
                  <td>0.8</td>
                </tr>
                <tr>
                  <th scope="row" style={{textAlign: 'center'}}>4</th>
                  <td style={{textAlign: 'left'}}>Team name</td>
                  <td>11</td>
                  <td>9</td>
                  <td>2</td>
                  <td>1140</td>
                  <td>989</td>
                  <td>989</td>
                  <td>0.8</td>
                </tr>
                <tr>
                  <th scope="row" style={{textAlign: 'center'}}>5</th>
                  <td style={{textAlign: 'left'}}>Team name</td>
                  <td>11</td>
                  <td>9</td>
                  <td>2</td>
                  <td>1140</td>
                  <td>989</td>
                  <td>989</td>
                  <td>0.8</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasketBallScoreCard;
