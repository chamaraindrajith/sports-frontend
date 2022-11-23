import { React } from "react";
import Box from "@mui/material/Box";
import { AiFillCaretRight } from "react-icons/ai";
import "./../../../css/NewsSideBar.css";
import NewsCards from "./NewsCards";

function NewsSideBar(props) {
  const sport_name = props.sport.charAt(0).toUpperCase() + props.sport.slice(1); // capitalize first letter

  return (
    <div>
      <Box sx={{ mt: 1.5, mb: 1.5 }}>
        <div className="stage_card_stage">
          <div className="header__stage">
            <div className="header__stage__headers">
              <span className="sidebar_sport_news_header">{sport_name} News</span>
            </div>
          </div>
          <AiFillCaretRight style={{ fontSize: "25px" }} />
        </div>
        <NewsCards sport={props.sport} />
      </Box>
    </div>
  );
}

export default NewsSideBar;
