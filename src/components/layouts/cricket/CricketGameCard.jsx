import { React } from "react";
import Box from "@mui/material/Box";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import "./../../../css/GameCard.css";
import "./../../../css/CricketGameCard.css";

function CricketGameCard(props) {
  return (
    <Box sx={{ mt: 0.75, mb: 0.75 }} style={{ display: "flex" }} className="gameCard cricketGameCard" id={"gameCard_" + props.game.game_id} >
      <div className="cricket_details">
        <div className="match_row_cricket_phase">
          <span>{props.game.cricket_phase + ' (' + props.game.cricket_phase_info + ')'}</span>
          <span>{props.game.start_date} - {props.game.end_date}</span>
        </div>
        <div className={"match_row_live_time " + ((props.game.status === 1) ? "in_progress" : "")}> 
          <span>{props.game.live_time}</span>
        </div>
        <span className="name_with_score">
          <span>
            <img src="https://lsm-static-prod.livescore.com/medium/enet/7797.png" className="ball_bat" style={{ marginBottom: "2px" }} />
            {props.game.t1[0].name}
          </span>
          <span className="cricket_score">{ props.game.score[0].t1i1r + '/' + props.game.score[0].t1i1w + ' & ' + props.game.score[0].t1i2r + '/' + props.game.score[0].t1i2w }</span>
        </span>
        <span className="name_with_score">
          <span>
            <img src="https://lsm-static-prod.livescore.com/medium/enet/7797.png" className="ball_bat" />
            {props.game.t2[0].name}
          </span>
          <span className="cricket_score">{ props.game.score[0].t2i1r + '/' + props.game.score[0].t2i1w + ' & ' + props.game.score[0].t2i2r + '/' + props.game.score[0].t2i2w }</span>
        </span>
        <div className="match_row_cricket_phase">
          <span>{props.game.live_status_comment}</span>
        </div>
      </div>
      <AiOutlineStar style={{ fontSize: "25px", visibility: "hidden" }} />
    </Box>
  );
}

export default CricketGameCard;
