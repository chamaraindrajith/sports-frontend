import { React } from "react";
import Box from "@mui/material/Box";
import { Link, useParams } from "react-router-dom";
import Stack from "@mui/material/Stack";
import "./../../../../css/GameInfoTabs.css";

function FavoritesMenu(props) {

  var matches_class = "";
  var competitions_class = "";

  if (props.favorite_tab == "matches") {
    matches_class = "active";
  } else if (props.favorite_tab == "competitions") {
    competitions_class = "active";
  }

  return (
    <div id="favorites_menu" className="tab_menu">
      <div className="wrapper-nav" id="game_info_tabs">
        <Box sx={{ mt: 1.5, mb: 1.5 }}>
          <Stack direction="row" spacing={1}>
            <Link to={"/" + props.sport + "/favorites/matches"} className={`game_info_tab ${matches_class}`} style={{ textDecoration: "none" }}>
              Matches
            </Link>
            <Link to={"/" + props.sport + "/favorites/competitions"} className={`game_info_tab ${competitions_class}`} style={{ textDecoration: "none" }}>
              Competitions
            </Link>
          </Stack>
        </Box>
      </div>
    </div>
  );
}

export default FavoritesMenu;
