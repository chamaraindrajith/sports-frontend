import { React } from "react";
import Box from "@mui/material/Box";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import "./../../../css/GameCard.css";
import "./../../../css/CricketGameCard.css";

function dateFormatter(start_date, end_date) {
  let start = new Date(start_date);
  let end = new Date(end_date);

  let start_formatted = start.toUTCString().substring(5, 11);
  let end_formatted = end.toUTCString().substring(5, 11);

  if (start_formatted === end_formatted) {
    return start_formatted;
  } else {
    return start_formatted + " - " + end_formatted;
  }
}

function CricketGameCard(props) {

  return (
    <Box sx={{ mt: 0.75, mb: 0.75 }} style={{ display: "flex" }} className="gameCard cricketGameCard" id={"gameCard_" + props.game.game_id} >
      <div className="cricket_details">
        <div className="match_row_cricket_phase">
          <span>{((props.game.cricket_phase) ? props.game.cricket_phase : "") + ((props.game.cricket_phase_info) ? " (" + props.game.cricket_phase_info + ")" : "")}</span>
          <span>{dateFormatter(props.game.start_date, props.game.end_date)}</span>
        </div>
        <div className={"match_row_live_time " + ((props.game.status === 1) ? "in_progress" : "")}>
          <span>{props.game.live_time}</span>
        </div>
        <span className="name_with_score">
          <span>
            {
              ((props.game.score[0].bat)) ?
                <img src={(props.game.score[0].bat === 1) ? "https://api.tvpool.net/images/cricket/bat.svg" : "https://api.tvpool.net/images/cricket/ball.svg"} className="ball_bat" style={{ marginBottom: "2px" }} /> :
                <span></span>
            }
            {props.game.t1[0].name}
          </span>
          <span className="cricket_score">{((props.game.score[0].t1i1r || props.game.score[0].t1i1w) ? props.game.score[0].t1i1r + ((props.game.score[0].t1i1w !== 10) ? '/' + props.game.score[0].t1i1w : "") : "") + ((props.game.score[0].t1i1d === 1) ? "d" : "") + ((props.game.score[0].t1i2r || props.game.score[0].t1i2w) ? ' & ' + props.game.score[0].t1i2r + ((props.game.score[0].t1i2w !== 10) ? '/' + props.game.score[0].t1i2w : "") : "") + ((props.game.score[0].t1i2d === 1) ? "d" : "")}</span>
        </span>
        <span className="name_with_score">
          <span>
            {
              ((props.game.score[0].bat)) ?
                <img src={(props.game.score[0].bat === 1) ? "https://api.tvpool.net/images/cricket/ball.svg" : "https://api.tvpool.net/images/cricket/bat.svg"}  className="ball_bat" style={{ marginBottom: "2px" }} /> :
                <span></span>
            }
            {props.game.t2[0].name}
          </span>
          <span className="cricket_score">{((props.game.score[0].t2i1r || props.game.score[0].t2i1w) ? props.game.score[0].t2i1r + ((props.game.score[0].t2i1w !== 10) ? '/' + props.game.score[0].t2i1w : "") : "") + ((props.game.score[0].t2i1d === 1) ? "d" : "") + ((props.game.score[0].t2i2r || props.game.score[0].t2i2w) ? ' & ' + props.game.score[0].t2i2r + ((props.game.score[0].t2i2w !== 10) ? '/' + props.game.score[0].t2i2w : "") : "") + ((props.game.score[0].t2i2d === 1) ? "d" : "")}</span>
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
