import { React } from "react";
import Box from "@mui/material/Box";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import "./../../../css/GameCard.css";
import "./../../../css/SoccerGameCard.css";

function SoccerGameCard(props) {
  return (
    <Box sx={{ mt: 0.75, mb: 0.75 }} style={{ display: "flex" }} className="gameCard soccerGameCard">
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
      </div>
      <div className="match_row">
        <span>
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDE2IDE0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iI0FBQSI+CiAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTExLjAyOSAzLjE3MmMuMjgxLjE3LjUxNy40MDUuNjg2LjY4Nmw1LjQ2OCA5LjExM2MuNTY4Ljk0Ny4yNiAyLjE3Ni0uNjg2IDIuNzQ0LS4zMTEuMTg2LS42NjcuMjg1LTEuMDMuMjg1SDQuNTMzYy0xLjEwNCAwLTItLjg5NS0yLTIgMC0uMzYyLjA5OS0uNzE4LjI4NS0xLjAyOWw1LjQ2OC05LjExM2MuNTY4LS45NDcgMS43OTctMS4yNTQgMi43NDQtLjY4NnpNMTAgMTJjLS41NSAwLTEgLjQ1LTEgMXMuNDUgMSAxIDEgMS0uNDUgMS0xLS40NS0xLTEtMXptMC02Yy0uMzggMC0uNjkzLjI4Mi0uNzQzLjY0OGwtLjAwNy4xMDJ2My41YzAgLjQxNC4zMzYuNzUuNzUuNzUuMzggMCAuNjkzLS4yODIuNzQzLS42NDhsLjAwNy0uMTAydi0zLjVjMC0uNDE0LS4zMzYtLjc1LS43NS0uNzV6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDM3IC00MTgpIHRyYW5zbGF0ZSgxOTAgMTUwKSB0cmFuc2xhdGUoMjIxIDEyMikgdHJhbnNsYXRlKDEwIDU2KSB0cmFuc2xhdGUoMTAgODQpIHRyYW5zbGF0ZSg0IDQpIi8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo="
          />
        </span>
        <span>a</span>
      </div>
      <AiOutlineStar style={{ fontSize: "30px" }} />
      {/* <AiTwotoneStar style={{ fontSize: "25px" }} /> */}
    </Box>
  );
}

export default SoccerGameCard;
