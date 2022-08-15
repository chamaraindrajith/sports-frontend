import React from "react";
import "../../../../../css/soccerh2h.css";

function GameInfoTabsH2H() {
  return (
    <div style={{ height: "800px" }}>
      <div id="head-to-head" className="info-content">
        <div className="scorecard d-flex flex-column align-items-center">
          <div className="score d-flex flex-row">
            <div className="head-to-head-text">
              <span>H2H</span>
            </div>
            {/* team one name and logo - left side */}
            <div className="team-one d-flex flex-column">
              <img src="/images/soccer/argentina.jpg" height={64} width={64} />
              <a id="team-name">Argentina</a>
            </div>
            {/* both team points and time in center */}
            <div className="points-card d-flex flex-column">
              <div className="points d-flex flex-row">
                <div className="win-count d-flex flex-column">
                  <div id="team-one">
                    <a id="team-one-wins">4</a>
                  </div>
                  <span>Wins</span>
                </div>
                <div className="draw-count d-flex flex-column">
                  <a id="divider">|</a>
                </div>
                <div className="draw-count d-flex flex-column">
                  <a id="teams-draw">0</a>
                  <span>Draw</span>
                </div>
                <a id="divider">|</a>
                <div className="win-count d-flex flex-column">
                  <div id="team-two">
                    <a id="team-two-wins">3</a>
                  </div>
                  <span>Wins</span>
                </div>
              </div>
            </div>
            {/* team two name and logo - right side */}
            <div className="team-two d-flex flex-column">
              <img src="/images/soccer/brazil.jpg" height={64} width={64} />
              <a id="team-name">Brazil</a>
            </div>
            <div className="bottom-border" />
          </div>
          {/*match history*/}
          <div className="match-history d-flex flex-column">
            <div id="pre-match-1" className="pre-match-info d-flex flex-row align-items-center">
              <div className="pre-match-info-container d-flex flex-row align-items-center">
                <div id="team1" className="team-name"><span>Argentina</span></div>
                <div className="pre-match-score d-flex flex-column align-items-center">
                  <div className="points d-flex flex-row">
                    <div id="team-one">
                      <a id="point">1</a>
                    </div>
                    <a id="divider">-</a>
                    <div id="team-two">
                      <a id="point">0</a>
                    </div>
                  </div>
                  <a id="date">19 July 2022</a>
                </div>
                <div id="team2" className="team-name"><span>Argentina</span></div>
              </div>
            </div>
            <div id="pre-match-2" className="pre-match-info d-flex flex-row align-items-center">
              <div className="pre-match-info-container d-flex flex-row align-items-center">
                <div id="team1" className="team-name"><span>Argentina</span></div>
                <div className="pre-match-score d-flex flex-column align-items-center">
                  <div className="points d-flex flex-row">
                    <div id="team-one">
                      <a id="point">1</a>
                    </div>
                    <a id="divider">-</a>
                    <div id="team-two">
                      <a id="point">0</a>
                    </div>
                  </div>
                  <a id="date">19 July 2022</a>
                </div>
                <div id="team2" className="team-name"><span>Argentina</span></div>
              </div>
            </div>
            <div id="pre-match-3" className="pre-match-info d-flex flex-row align-items-center">
              <div className="pre-match-info-container d-flex flex-row align-items-center">
                <div id="team1" className="team-name"><span>Argentina</span></div>
                <div className="pre-match-score d-flex flex-column align-items-center">
                  <div className="points d-flex flex-row">
                    <div id="team-one">
                      <a id="point">1</a>
                    </div>
                    <a id="divider">-</a>
                    <div id="team-two">
                      <a id="point">0</a>
                    </div>
                  </div>
                  <a id="date">19 July 2022</a>
                </div>
                <div id="team2" className="team-name"><span>Argentina</span></div>
              </div>
            </div>
            <div id="pre-match-4" className="pre-match-info d-flex flex-row align-items-center">
              <div className="pre-match-info-container d-flex flex-row align-items-center">
                <div id="team1" className="team-name"><span>Argentina</span></div>
                <div className="pre-match-score d-flex flex-column align-items-center">
                  <div className="points d-flex flex-row">
                    <div id="team-one">
                      <a id="point">1</a>
                    </div>
                    <a id="divider">-</a>
                    <div id="team-two">
                      <a id="point">0</a>
                    </div>
                  </div>
                  <a id="date">19 July 2022</a>
                </div>
                <div id="team2" className="team-name"><span>Argentina</span></div>
              </div>
            </div>
            <div id="pre-match-5" className="pre-match-info d-flex flex-row align-items-center">
              <div className="pre-match-info-container d-flex flex-row align-items-center">
                <div id="team1" className="team-name"><span>Argentina</span></div>
                <div className="pre-match-score d-flex flex-column align-items-center">
                  <div className="points d-flex flex-row">
                    <div id="team-one">
                      <a id="point">1</a>
                    </div>
                    <a id="divider">-</a>
                    <div id="team-two">
                      <a id="point">0</a>
                    </div>
                  </div>
                  <a id="date">19 July 2022</a>
                </div>
                <div id="team2" className="team-name"><span>Argentina</span></div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default GameInfoTabsH2H;
