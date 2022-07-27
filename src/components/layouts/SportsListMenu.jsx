import { React } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import "./../../css/SportsListMenu.css";
import { Link } from "react-router-dom";



function SportsListMenu(props) {

  var soccer_class = '';
  var cricket_class = '';
  var basketball_class = '';

  if (props.sport == "cricket") {
    var cricket_class = "active";
  } else if (props.sport == "soccer") {
    var soccer_class = "active";
  } else if (props.sport == "basketball") {
    var basketball_class = "active";
  }

  return (
    <div id="sport_chips">
      <Box sx={{ mt: 1.5, mb: 1.5 }}>
        <Stack direction="row" spacing={1}>
          <Link to="/soccer" className="sport_chips_links" style={{ textDecoration: "none" }}>
            <Chip className={`chip ${soccer_class}`} label="Football" />
          </Link>
          <Link to="/basketball" className="sport_chips_links" style={{ textDecoration: "none" }}>
            <Chip className={`chip ${basketball_class}`} label="Basketball" />
          </Link>
          <Link to="/cricket" className="sport_chips_links" style={{ textDecoration: "none" }}>
            <Chip className={`chip ${cricket_class}`} label="Cricket" />
          </Link>
        </Stack>
      </Box>
    </div>
  );
}

export default SportsListMenu;
