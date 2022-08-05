import { React } from "react";
import Box from "@mui/material/Box";
import { AiFillCaretRight } from "react-icons/ai";
import SoccerGameCard from "./../../soccer/SoccerGameCard";
import BasketBallGameCard from "./../../basketball/BasketBallGameCard";
import CricketGameCard from "./../../cricket/CricketGameCard";

function StageCard(props) {
  const game = {
    cricket_phase: "Womens Twenty20",
    start_date: "2022-08-04",
    cricket_phase_info: "Match 11",
    end_date: "2022-08-04",
    live_time: "Finished",
    live_status_comment: "South Africa Women win by 10 wickets",
    t1: [
      {
        name: "Sri lanka",
      },
    ],
    t2: [
      {
        name: "Australia",
      },
    ],
    score: [
      {
        t1i1r: 12,
        t1i1w: 1,
        t1i2r: 45,
        t1i2w: 55,
        t2i1r: 12,
        t2i1w: 1,
        t2i2r: 45,
        t2i2w: 55,
      },
    ],
  };

  return (
    <div className="stage_card">
      <Box sx={{ mt: 1.5, mb: 1.5 }}>
        <div className="stage_card_stage">
          <div>
            <img
              src="https://static.livescore.com/i2/fh/xcr-intl-test.jpg"
              style={{
                width: "25px",
                marginRight: "13px",
              }}
            />
          </div>
          <div class="header__stage">
            <div className="header__stage__headers">
              <span className="category-header__stage">Netherlands v New Zealand</span>
              <span className="category-header__category">Twenty20 Internationals</span>
            </div>
          </div>
          <AiFillCaretRight style={{ fontSize: "25px" }} />
        </div>
        <div>
          {props.sport == "cricket" ? (
            <CricketGameCard game={game} />
          ) : props.sport == "basketball" ? (
            <BasketBallGameCard game={game} />
          ) : props.sport == "soccer" ? (
            <SoccerGameCard game={game} />
          ) : (
            <></>
          )}
        </div>
      </Box>
    </div>
  );
}

export default StageCard;
