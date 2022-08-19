import { React, useState, useEffect } from "react";
import Calender from "./Calender";
import SportsListMenu from "./SportsListMenu";
import "./../../css/Calender.css";
import Divider from "@mui/material/Divider";
import CircularProgress from "@mui/material/CircularProgress";
import StageCard from "./StageCard";
import { useLocation } from "react-router-dom";

function StageCards(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const location = useLocation();

  useEffect(() => {
    setIsLoaded(false);
    setError(false);
    console.log("Location changed");
    let today = new Date().toISOString().slice(0, 10);
    getStages(today);
  }, [location]);

  function getStages(date) {
    var url = "https://sports.pfplapp.com/backend/public/api/get/" + props.sport + "/date/" + date + "/json";
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

  if (error) {
    return (
      <div style={{ height: "800px" }}>
        <div className="box_message">There are no games available</div>
      </div>
    );
  } else if (!isLoaded) {
    return (
      <div style={{ height: "800px", display: "flex", justifyContent: "center" }}>
        <div style={{ marginTop: "150px" }}>
          <CircularProgress />
        </div>
      </div>
    );
  } else if (isLoaded) {
    return (
      <div>
        {items.map((stage) => (
          <StageCard sport={props.sport} stage_id={stage.stage_id} stage={stage} layout={props.layout} />
        ))}
      </div>
    );
  }
}

export default StageCards;
