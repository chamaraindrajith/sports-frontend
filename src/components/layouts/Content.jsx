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
  return (
    <div>
      <SportsListMenu sport={props.sport} />
      {category == undefined ? (
        <div>
          <Divider variant="middle" />
          <Calender />
          <Divider variant="middle" />
          <StageCards sport={props.sport} />
        </div>
      ) : (
        <div>
          <Divider variant="middle" />
          <GameInfo sport={props.sport} />
        </div>
      )}

    </div>
  );
}

export default Content;
