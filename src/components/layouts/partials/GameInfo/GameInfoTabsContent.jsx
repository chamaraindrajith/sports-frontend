import { React } from "react";
import "./../../../../css/GameInfoTabs.css";
import GameInfoTabsInfo from "./GameInfoTabsContents/GameInfoTabsInfo";
import GameInfoTabsScoreCard from "./GameInfoTabsContents/GameInfoTabsScoreCard";
import GameInfoTabsTable from "./GameInfoTabsContents/GameInfoTabsTable";
import GameInfoTabsSummary from "./GameInfoTabsContents/GameInfoTabsSummary";
import GameInfoTabsLineUps from "./GameInfoTabsContents/GameInfoTabsLineUps";
import GameInfoTabsH2H from "./GameInfoTabsContents/GameInfoTabsH2H";
import GameInfoTabsStats from "./GameInfoTabsContents/GameInfoTabsStats";
import GameInfoTabsTeams from "./GameInfoTabsContents/GameInfoTabsTeams";

function GameInfoTabs(props) {
  if (props.tab == "info") {
    return <GameInfoTabsInfo />;
  } else if (props.tab == "scorecard") {
    return <GameInfoTabsScoreCard sport={props.sport} />;
  } else if (props.tab == "table") {
    return <GameInfoTabsTable />;
  } else if (props.tab == "summary") {
    return <GameInfoTabsSummary sport={props.sport} />;
  } else if (props.tab == "line-ups") {
    return <GameInfoTabsLineUps />;
  } else if (props.tab == "h2h") {
    return <GameInfoTabsH2H />;
  } else if (props.tab == "stats") {
    return <GameInfoTabsStats />;
  } else if (props.tab == "teams") {
    return <GameInfoTabsTeams />;
  } else {
    return <GameInfoTabsScoreCard sport={props.sport} />;
  }
}

export default GameInfoTabs;
