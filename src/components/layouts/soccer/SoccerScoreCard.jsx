import React from "react";
import "./../../../css/soccerscorecard.css";

function SoccerScoreCard() {
  return (
    <div style={{ height: "800px" }}>
      <div className="scorecard d-flex flex-column">
        {/* top bar with league logo and stage name */}
        <div className="match-header">
          <div className="match-status">Live</div>
          <div className="match-tournament"><img src={process.env.PUBLIC_URL+"/images/soccer/premier-league-logo.png"} />English Premier League</div>
          <div className="match-actions">
            <button className="btn-icon"><img src="images/logo192.png" style={{width: '32px'}} /></button>
          </div>
        </div>
        <div className="score d-flex flex-row">
          {/* team one name and logo - left side */}
          <div className="team-one d-flex flex-column">
            <img src={process.env.PUBLIC_URL+"/images/soccer/argentina.jpg"} height={64} width={64} /> 
            <a id="team-name">Argentina</a>
          </div>
          {/* both team points and time in center */}
          <div className="points-card d-flex flex-column">
            <div className="points d-flex flex-row">
              <div id="team-one">
                <a id="point">1</a>
              </div>
              <a id="divider">:</a>
              <div id="team-two">
                <a id="point">0</a>
              </div>
            </div>
            <a id="time">Full time</a>
          </div>
          {/* team two name and logo - right side */}
          <div className="team-two d-flex flex-column">
            <img src={process.env.PUBLIC_URL+"/images/soccer/brazil.jpg"} height={64} width={64} />
            <a id="team-name">Brazil</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SoccerScoreCard;
