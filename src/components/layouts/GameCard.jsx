import { React } from "react";
import SoccerGameCard from "./soccer/SoccerGameCard";
import BasketBallGameCard from "./basketball/BasketBallGameCard";
import CricketGameCard from "./cricket/CricketGameCard";

function GameCard(props) {

  if (props.sport == "cricket") {
    return <CricketGameCard game={props.game} />;
  } else if (props.sport == "basketball") {
    return <BasketBallGameCard game={props.game} />;
  } else if (props.sport == "soccer") {
    return <SoccerGameCard game={props.game} />;
  }
}

export default GameCard;
