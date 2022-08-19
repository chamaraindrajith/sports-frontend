import { React } from "react";
import Calender from "./Calender";
import SportsListMenu from "./SportsListMenu";
import "./../../css/Calender.css";
import Divider from "@mui/material/Divider";
import StageCards from "./StageCards";
import { useParams } from "react-router-dom";
import GameInfo from "./partials/GameInfo/GameInfo";

function Content(props) {
  const { category } = useParams();

  if (props.layout == "favourites") {
    return (
      <div>
        {props.layout}
        <SportsListMenu sport={props.sport} />
        <Divider variant="middle" />
        <StageCards sport={props.sport} layout="favourites" />
      </div>
    );
  } else if (props.layout == "game") {
    return (
      <div>
        {props.layout}
        <Divider variant="middle" />
        <GameInfo sport={props.sport} />
      </div>
    );
  } else {
    return (
      <div>
        {props.layout}
        <SportsListMenu sport={props.sport} />
        <Divider variant="middle" />
        <Calender />
        <Divider variant="middle" />
        <StageCards sport={props.sport} />
      </div>
    );
  }

  return (
    <div>
      {props.layout}
      <SportsListMenu sport={props.sport} />

      <div>
        <Divider variant="middle" />
        <Calender />
        <Divider variant="middle" />
        <StageCards sport={props.sport} />
      </div>
    </div>
  );
}

export default Content;
