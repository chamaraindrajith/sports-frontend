import React from "react";
import  "./../../../css/soccertimeline.css";

function SoccerSummary() {
  return (
    <div style={{ height: "800px" }}>
      <div id="timeline" className="info-content">
  <div id="substitution" className="event-info-container d-flex flex-column">
    <div className="event-name-container d-flex flex-row">
      <div className="event-icon my-auto">
        <img src="/images/soccer/change.png" />
      </div>
      <div className="event-name ">
        <span>SUBSTITUTION</span>
      </div>
      <div className="event-time ">
        <span>21'</span>
      </div>
    </div>
    <div className="event-bottom-border" />
    <div className="event-info d-flex flex-row">
      <div className="event-player-details d-flex flex-column">
        <div className="event-player-detail d-flex flex-column">
          <a id="in" style={{color: 'green', fontSize: '14px'}}>IN</a>
          <a id="event-player-name" style={{fontSize: '24px'}}>S.jaims</a>
          <a id="player-team" style={{fontSize: '16px', color: 'darkgray'}}>Argentina.Midfeider #3</a>
        </div>
        <div className="event-player-detail d-flex flex-column">
          <a id="in" style={{color: 'red', fontSize: '14px'}}>OUT</a>
          <a id="event-player-name" style={{fontSize: '24px'}}>S.jaims</a>
          <a id="player-team" style={{fontSize: '16px', color: 'darkgray'}}>Argentina.Midfeider #3</a>
        </div>
      </div>
      <div className="event-team-logo d-flex align-items-center"> 
        <img src="/images/soccer/argentina.jpg" height={64} width={64} />
      </div>
    </div>
  </div>
  <div id="give-card" className="event-info-container d-flex flex-column">
    <div className="event-name-container d-flex flex-row">
      <div className="event-icon my-auto">
        <img src="/images/soccer/yellow-card.png" />
      </div>
      <div className="event-name ">
        <span>YELLOW CARD</span>
      </div>
      <div className="event-time ">
        <span>21'</span>
      </div>
    </div>
    <div className="event-bottom-border" />
    <div className="event-info d-flex flex-row">
      <div className="event-player-details d-flex flex-column">
        <div className="event-player-detail d-flex flex-column">
          <a id="event-player-name" style={{fontSize: '24px'}}>S.jaims</a>
          <a id="player-team" style={{fontSize: '16px', color: 'darkgray'}}>Argentina.Defender #12</a>
        </div>
      </div>
      <div className="event-team-logo d-flex align-items-center "> 
        <img src="/images/soccer/argentina.jpg" height={64} width={64} />
      </div>
    </div>
  </div>
  <div id="goal" className="event-info-container d-flex flex-column">
    <div className="event-name-container d-flex flex-column align-items-center" style={{backgroundColor: '#11743a'}}>
      <div className="event-icon ">
        <img src="/images/soccer/football.png" />
      </div>
      <div className="event-name">
        <span>GOOOAAALLL!!!</span>
      </div>
      <div className="event-time">
        <span>21'</span>
      </div>
    </div>
    <div className="event-bottom-border" />
    <div className="event-info d-flex flex-row">
      <div className="event-player-details d-flex flex-column">
        <div className="event-player-detail d-flex flex-column">
          <a id="event-player-name" style={{fontSize: '24px'}}>S.jaims</a>
          <a id="player-team" style={{fontSize: '16px', color: 'darkgray'}}>Argentina.Defender #12</a>
        </div>
      </div>
      <div className="event-team-logo d-flex align-items-center"> 
        <img src="/images/soccer/argentina.jpg" height={64} width={64} />
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default SoccerSummary;
