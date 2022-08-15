import { React } from "react";
import Box from "@mui/material/Box";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import "./../../../css/GameCard.css";
import "./../../../css/BasketBallGameCard.css";

function BasketBallGameCard(props) {
  return (
    <Box sx={{ mt: 0.75, mb: 0.75 }} style={{ display: "flex" }} className="gameCard BasketBallGameCard">
      <div>
        <span className="game_card_time">21.00</span>
      </div>
      <div class="team_names">
        <span>
          <img src="https://lsm-static-prod.livescore.com/medium/enet/7797.png" className="team_img" style={{ marginBottom: "2px" }} />
          {props.game.t1[0].name}
        </span>
        <span>
          <img src="https://lsm-static-prod.livescore.com/medium/enet/7797.png" className="team_img" />
          {props.game.t2[0].name}
        </span>
      </div
      <div className="match_row" style={{ display: "flex", flexDirection: "column" }}>
        <span>{props.game.score[0].Tr1}</span>
        <span>{props.game.score[0].Tr2}</span>
      </div>
      <AiOutlineStar style={{ fontSize: "30px" }} />
      {/* <AiTwotoneStar style={{ fontSize: "25px" }} /> */}
    </Box>
  );
}

export default BasketBallGameCard;
