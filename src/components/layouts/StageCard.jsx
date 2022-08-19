import { React, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { AiFillCaretRight } from "react-icons/ai";
import "./../../css/StageCard.css";
import GameCard from "./GameCard";
import { Link } from "react-router-dom";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";

function StageCard(props) {
  const [favorite_games, setFavoriteGames] = useState([]);

  useEffect(() => {
    const fav_games = JSON.parse(localStorage.getItem("favorite_games"));
    if (fav_games) {
      setFavoriteGames(fav_games);
    }

    if (props.layout == "favourites") {
      listFavorites();
    }
  }, []);

  // show active stars
  favorite_games.map((favorite_game) => {
    if (favorite_game.sport == props.sport) {
      starActive(favorite_game.game_id);
    }
  });

  // active star icon
  function starActive(game_id) {
    var star_inactive_elem = document.querySelector("#star_inactive_" + game_id);
    if (star_inactive_elem) {
      star_inactive_elem.style.display = "none";
    }
    var star_active_elem = document.querySelector("#star_active_" + game_id);
    if (star_active_elem) {
      star_active_elem.style.display = "unset";
    }
  }

  // inactive star icon
  function starInactive(game_id) {
    var star_inactive_elem = document.querySelector("#star_inactive_" + game_id);
    if (star_inactive_elem) {
      star_inactive_elem.style.display = "unset";
    }
    var star_active_elem = document.querySelector("#star_active_" + game_id);
    if (star_active_elem) {
      star_active_elem.style.display = "none";
    }
  }

  // click stars
  function favoriteControll(e, game_id, status) {
    if (localStorage["favorite_games"]) {
    } else {
      var game_ids = [];
      localStorage["favorite_games"] = JSON.stringify(game_ids);
    }
    var favorite_games = JSON.parse(localStorage.getItem("favorite_games"));
    if (status == 1) {
      starActive(game_id);
      favorite_games.push({ game_id: game_id.toString(), sport: props.sport, stage_id: props.stage_id.toString() });
      localStorage["favorite_games"] = JSON.stringify(favorite_games);
    } else if (status == 0) {
      starInactive(game_id);

      favorite_games = favorite_games.filter((favorite_games) => favorite_games.game_id != game_id.toString());
      localStorage["favorite_games"] = JSON.stringify(favorite_games);
    }
  }

  // hide all stages, games and show only favorites
  function listFavorites() {
    var stage_cards = document.querySelectorAll(".stage_card");
    var game_cards = document.querySelectorAll(".game_card");

    for (let stage_card of stage_cards) {
      stage_card.style.display = "none";
    }
    for (let game_card of game_cards) {
      game_card.style.display = "none";
    }

    var favorite_games = JSON.parse(localStorage.favorite_games);
    var fav_count = 0;
    for (let favorite_game of favorite_games) {
      if (fav_count > 7 / 9) {
      }
      var game_card_element = document.querySelector("#game_card_" + favorite_game.game_id);
      var stage_card_element = document.querySelector("#stage_card_" + favorite_game.stage_id);
      if (game_card_element && stage_card_element) {
        game_card_element.style.display = "block";
        stage_card_element.style.display = "block";
      } else {
        console.log("game id = " + favorite_game.game_id + " and stage id = " + favorite_game.stage_id + " must be removed from local storage");
      }
    }
  }
  return (
    <div className="stage_card" id={"stage_card_" + props.stage_id}>
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
          <div className="game_card" id={"game_card_" + game.game_id}>
            <Link
              to={"/" + props.sport + "/" + props.stage.category_slug + "/" + props.stage.slug + "/" + game.game_id + "/" + game.game_id}
              className="sport_chips_links"
              style={{ textDecoration: "none" }}
            >
              <GameCard sport={props.sport} game={game} category_slug={props.stage} />
            </Link>
            <span onClick={(e) => favoriteControll(e, game.game_id, 1)} id={"star_inactive_" + game.game_id} className="star star_inactive">
              <AiOutlineStar className="star_svg" gameId={game.game_id} />
            </span>
            <span onClick={(e) => favoriteControll(e, game.game_id, 0)} id={"star_active_" + game.game_id} className="star star_active" style={{ display: "none" }}>
              <AiTwotoneStar className="star_svg" gameId={game.game_id} />
            </span>
          </div>
        ))}
      </Box>
    </div>
  );
}

export default StageCard;
