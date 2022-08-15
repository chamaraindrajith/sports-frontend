import { React } from "react";
import Box from "@mui/material/Box";
import { Link, useParams } from "react-router-dom";
import Stack from "@mui/material/Stack";
import "./../../../../css/GameInfoTabs.css";

function GameInfoTabs(props) {
  const { category, subcategory, game_name, game_id, tab } = useParams();

  var info_class = "";
  var scorecard_class = "";
  var table_class = "";
  var summary_class = "";
  var lineups_class = "";
  var h2h_class = "";
  var stats_class = "";
  var teams_class = "";

  if (tab == "info") {
    info_class = "active";
  } else if (tab == "scorecard") {
    scorecard_class = "active";
  } else if (tab == "table") {
    table_class = "active";
  } else if (tab == "summary") {
    summary_class = "active";
  } else if (tab == "line-ups") {
    lineups_class = "active";
  } else if (tab == "h2h") {
    h2h_class = "active";
  } else if (tab == "stats") {
    stats_class = "active";
  } else if (tab == "teams") {
    teams_class = "active";
  } else {
    scorecard_class = "active";
  }

  var tab_url = "/" + props.sport + "/" + category + "/" + subcategory + "/" + game_name + "/" + game_id;

  return (
    <div class="w-100">
      <div class="scroller scroller-left float-start mt-2">
        <i class="bi bi-caret-left-fill"></i>
      </div>
      <div class="scroller scroller-right float-end mt-2">
        <i class="bi bi-caret-right-fill"></i>
      </div>
      <div class="wrapper-nav" id="game_info_tabs">
        <Box sx={{ mt: 1.5, mb: 1.5 }}>
          <Stack direction="row" spacing={1}>
            <Link to={tab_url + "/info"} className={`game_info_tab ${info_class}`} style={{ textDecoration: "none" }}>
              Info
            </Link>
            <Link to={tab_url + "/scorecard"} className={`game_info_tab ${scorecard_class}`} style={{ textDecoration: "none" }}>
              Scorecard
            </Link>
            <Link to={tab_url + "/table"} className={`game_info_tab ${table_class}`} style={{ textDecoration: "none" }}>
              Table
            </Link>
            <Link to={tab_url + "/summary"} className={`game_info_tab ${summary_class}`} style={{ textDecoration: "none" }}>
              TimeLine
            </Link>
            <Link to={tab_url + "/line-ups"} className={`game_info_tab ${lineups_class}`} style={{ textDecoration: "none" }}>
              Line-Ups
            </Link>
            <Link to={tab_url + "/h2h"} className={`game_info_tab ${h2h_class}`} style={{ textDecoration: "none" }}>
              H2H
            </Link>
            <Link to={tab_url + "/stats"} className={`game_info_tab ${stats_class}`} style={{ textDecoration: "none" }}>
              Stats
            </Link>
            <Link to={tab_url + "/teams"} className={`game_info_tab ${teams_class}`} style={{ textDecoration: "none" }}>
              Teams
            </Link>
          </Stack>
        </Box>
      </div>
    </div>
  );
}

export default GameInfoTabs;
