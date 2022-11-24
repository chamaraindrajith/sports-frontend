import { React, useState, useEffect } from "react";
import Calender from "./Calender";
import SportsListMenu from "./SportsListMenu";
import "./../../css/Calender.css";
import Divider from "@mui/material/Divider";
import CircularProgress from "@mui/material/CircularProgress";
import StageCard from "./StageCard";
import { useLocation, useParams } from "react-router-dom";

function StageCards(props) {

  var { category, stage, game_name } = useParams();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const location = useLocation();

  useEffect(() => {
    setIsLoaded(false);
    setError(false);
    // console.log("Location changed");
    let today = new Date().toISOString().slice(0, 10);
    getStages(today);
  }, [location]);

  function getStages(date) {
    var url = "https://api.tvpool.net/api/get/" + props.sport + "/date/" + date + "/json";
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setTimeout(() => {
            // console.log(result.stages);
            setItems(result.stages);
            setIsLoaded(true);
          }, 1000);
        },
        (error) => {
          setError(error);
          setIsLoaded(true);
        }
      );
  }

  // show There are no games available error if games not in stage or category
  useEffect(() => {
    if (isLoaded) {
      var available_stage_cards_count = 0;
      if (stage) {
        for (let items_stage of items) {
          if (items_stage.slug === stage) {
            available_stage_cards_count++;
          }
        }
        if (0 === available_stage_cards_count) {
          setError(true);
        }
      }
      else if (category) {
        for (let stage of items) {
          if (stage.category_slug === category) {
            available_stage_cards_count++;
          }
        }
        if (0 === available_stage_cards_count) {
          setError(true);
        }
      }
    }
  })

  if (!isLoaded) {
    return (
      <div style={{ height: "800px", display: "flex", justifyContent: "center" }}>
        <div style={{ marginTop: "150px" }}>
          <CircularProgress />
        </div>
      </div>
    );
  } else if (isLoaded || error) {
    if (error || items === undefined || items === [] || items === null) {
      return (
        <div style={{ height: "800px" }}>
          <div className="box_message">There are no games available</div>
        </div>
      );
    } else if (props.layout == "favorites" && props.favorite_tab == "matches" && (!localStorage.getItem("favorite_games") || localStorage.getItem("favorite_games") === '[]')) {
      return (
        <div style={{ height: "800px" }}>
          <div className="box_message">Tap Star to add a Match to Favourites</div>
        </div>
      );
    } else if (props.layout == "favorites" && props.favorite_tab == "competitions" && (!localStorage.getItem("favorite_stages") || localStorage.getItem("favorite_stages") === '[]')) {
      return (
        <div style={{ height: "800px" }}>
          <div className="box_message">Tap Star to add a Competition to Favourites</div>
        </div>
      );
    } else {
      return (
        <div>
          {items.map((stage, key) => (
            <StageCard sport={props.sport} stage_id={stage.stage_id} stage={stage} layout={props.layout} favorite_tab={props.favorite_tab} key={key} />
          ))}
        </div>
      );
    }
  }
}

export default StageCards;
