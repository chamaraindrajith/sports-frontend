import { React } from "react";
import Calender from "./Calender";
import SportsListMenu from "./SportsListMenu";
import "./../../css/Calender.css";
import StageCards from "./StageCards";
import { useParams } from "react-router-dom";
import GameInfo from "./partials/GameInfo/GameInfo";
import FavoritesMenu from "./partials/Favorites/FavoritesMenu";
import Stage from "./partials/Stage/Stage";

function Content(props) {
  
  const { category } = useParams();

  if (props.layout == "favorites") {
    return (
      <div>
        {props.layout}
        {/* <SportsListMenu sport={props.sport} /> */}
        <FavoritesMenu sport={props.sport} favorite_tab={props.favorite_tab} />
        <StageCards sport={props.sport} layout="favorites" favorite_tab={props.favorite_tab} />
      </div>
    );
  } else if (props.layout == "stage" || props.layout == "category") {
    return (
      <div>
        {props.layout}
        {/* <SportsListMenu sport={props.sport} /> */}
        <StageCards sport={props.sport} layout={props.layout} />
      </div>
    );
  } else if (props.layout == "game") {
    return (
      <div>
        {props.layout}
        <GameInfo sport={props.sport} />
      </div>
    );
  } else {
    return (
      <div>
        {props.layout}
        {/* <SportsListMenu sport={props.sport} /> */}
        <Calender />
        <StageCards sport={props.sport} />
      </div>
    );
  }

  return (
    <div>
      {props.layout}
      {/* <SportsListMenu sport={props.sport} /> */}

      <div>
        <Calender />
        <StageCards sport={props.sport} />
      </div>
    </div>
  );
}

export default Content;
