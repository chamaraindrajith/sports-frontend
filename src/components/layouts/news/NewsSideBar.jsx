import { React, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { AiFillCaretRight } from "react-icons/ai";
import "./../../../css/NewsSideBar.css";
import NewsCards from "./NewsCards";
import { useLocation } from "react-router-dom";





function NewsSideBar(props) {    

  return (
    <div className="stage_card">
      <Box sx={{ mt: 1.5, mb: 1.5 }}>
        <div className="stage_card_stage">
          <div class="header__stage">
            <div className="header__stage__headers">
              <span className="sidebar_sport_news_header">{props.sport} News</span>
            </div>
          </div>
          <AiFillCaretRight style={{ fontSize: "25px" }} />
        </div>
        {/* {props.stage.games.map((game) => (
            <NewsCard sport={props.sport} game={game} />
          ))} */}
          <div>test</div>
          <NewsCards/>
      </Box>

    </div>
  );
}

export default NewsSideBar;
