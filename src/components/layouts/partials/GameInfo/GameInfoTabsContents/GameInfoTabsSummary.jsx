import React from "react";
import CricketSummary from "./../../../cricket/CricketSummary";
import SoccerSummary from "./../../../soccer/SoccerSummary";
import BasketBallSummary from "./../../../basketball/BasketBallSummary";

function GameInfoTabsSummary(props) {
  if (props.sport == "cricket") {
    return <CricketSummary />;
  } else if (props.sport == "soccer") {
    return <SoccerSummary />;
  } else if (props.sport == "basketball") {
    return <BasketBallSummary />;
  }
}

export default GameInfoTabsSummary;
