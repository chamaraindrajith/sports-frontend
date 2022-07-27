import { React } from "react";
import Box from "@mui/material/Box";
import { AiFillCaretRight } from "react-icons/ai";
import "./../../css/StageCard.css";
import GameCard from "./GameCard";


function StageCard(props) {

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
              <span className="category-header__stage">{props.stage.name}</span>
              <span className="category-header__category">{props.stage.category_name}</span>
            </div>
          </div>
          <AiFillCaretRight style={{ fontSize: "25px" }} />
        </div>
        {props.stage.games.map((game) => (
            <GameCard sport={props.sport} game={game} />
          ))}
      </Box>

    </div>
  );
}

export default StageCard;
