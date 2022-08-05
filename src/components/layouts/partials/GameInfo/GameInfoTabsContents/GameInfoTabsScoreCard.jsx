import React from "react";
import CricketScoreCard from "../../../cricket/CricketScoreCard";
import SoccerScoreCard from "../../../soccer/SoccerScoreCard";
import BasketBallScoreCard from "../../../basketball/BasketBallScoreCard";

function GameInfoTabsScoreCard(props) {
  if (props.sport == "cricket") {
    return <CricketScoreCard />;
  } else if (props.sport == "soccer") {
    return <SoccerScoreCard />;
  } else if (props.sport == "basketball") {
    return <BasketBallScoreCard />;
  }
}

export default GameInfoTabsScoreCard;
