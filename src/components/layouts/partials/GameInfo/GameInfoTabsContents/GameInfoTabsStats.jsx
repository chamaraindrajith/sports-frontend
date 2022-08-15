import React from "react";
import "../../../../../css/soccerteamstats.css";

function GameInfoTabsStats() {
  return (
    <div style={{ height: "800px" }}>
       <div id="match-stats" className="info-content ">
        <table className="match-stats table table-borderless table-dark table-sm">
          <thead>
            <tr>
              <th scope="col" style={{alignItems: 'center'}}><img src={process.env.PUBLIC_URL+"/images/soccer/brazil.jpg"} height={32} width={32} /></th>
              <th scope="col">TEAM STATS</th>
              <th scope="col" style={{alignItems: 'center'}}><img src={process.env.PUBLIC_URL+"/images/soccer/argentina.jpg"} height={32} width={32} /></th>
            </tr>
          </thead>
          <tbody className="border border-dark">
            <tr>
              <td>0</td>
              <td>Goals</td>
              <td>0</td>
            </tr>
            <tr>
              <td>0</td>
              <td>Shots</td>
              <td>0</td>
            </tr>
            <tr>
              <td>0</td>
              <td>Shots on Target</td>
              <td>0</td>
            </tr>
            <tr>
              <td>0</td>
              <td>Possession</td>
              <td>0</td>
            </tr>
            <tr>
              <td>0</td>
              <td>Tackel</td>
              <td>0</td>
            </tr>
            <tr>
              <td>0</td>
              <td>Fouls</td>
              <td>0</td>
            </tr>
            <tr>
              <td>0</td>
              <td>Yellow cards</td>
              <td>0</td>
            </tr>
            <tr>
              <td>0</td>
              <td>Red cards</td>
              <td>0</td>
            </tr>
            <tr>
              <td>0</td>
              <td>Injuries</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GameInfoTabsStats;
