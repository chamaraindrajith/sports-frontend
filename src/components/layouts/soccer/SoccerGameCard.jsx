import { React } from "react";
import Box from "@mui/material/Box";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import "./../../../css/GameCard.css";
import "./../../../css/SoccerGameCard.css";

function SoccerGameCard(props) {
  return (
    <Box sx={{ mt: 0.75, mb: 0.75 }} style={{ display: "flex" }} className="gameCard soccerGameCard" id={"gameCard_" + props.game.game_id} >
      <div>
        <span className="game_card_time">21.00</span>
      </div>
      <div className="team_names">
        <span>
          <img src={"https://lsm-static-prod.livescore.com/medium/" + props.game.t1[0].image} className="team_img" style={{ marginBottom: "2px" }} />
          {props.game.t1[0].name}
        </span>
        <span>
          <img src={"https://lsm-static-prod.livescore.com/medium/" + props.game.t2[0].image} className="team_img" />
          {props.game.t2[0].name}
        </span>
      </div>
      <div className="match_row" style={{ display: "flex", flexDirection: "column" }}>
        <span>{props.game.score[0].Tr1}</span>
        <span>{props.game.score[0].Tr2}</span>
      </div>
      <AiOutlineStar style={{ fontSize: "30px" }} />
    </Box>
  );
}

export default SoccerGameCard;
