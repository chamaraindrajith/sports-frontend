import { React, useState, useEffect } from "react";
import Calender from "./Calender";
import SportsListMenu from "./SportsListMenu";
import "./../../css/Calender.css";
import Divider from "@mui/material/Divider";
import StageCards from "./StageCards";

function Content(props) {
  return (
    <div>
      <SportsListMenu sport={props.sport} />
      <Calender />
      <Divider variant="middle" />
      <StageCards sport={props.sport} />
    </div>
  );
}

export default Content;
