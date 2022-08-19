import { React } from "react";
import { useParams } from "react-router-dom";
import GameInfoGameCard from "./../../partials/GameInfo/GameInfoGameCard";
import GameInfoTabs from "./../../partials/GameInfo/GameInfoTabs";
import GameInfoTabsContent from "./../../partials/GameInfo/GameInfoTabsContent";

function GameInfo(props) {
  const { category, stage, game_name, game_id, tab } = useParams();

  return (
    <div>
      <GameInfoGameCard sport={props.sport} />
      <GameInfoTabs sport={props.sport} />
      <GameInfoTabsContent sport={props.sport} tab={tab} />
    </div>
  );
}

export default GameInfo;
