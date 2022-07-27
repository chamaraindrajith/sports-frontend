import { React, useState, useEffect } from "react";
import Calender from "./Calender";
import SportsListMenu from "./SportsListMenu";
import "./../../css/Calender.css";
import Divider from "@mui/material/Divider";
import StageCard from "./StageCard";
import Axios from "axios";
import { useLocation } from "react-router-dom";

function Content(props) {
  const location = useLocation();
  useEffect(() => {
    console.log("Location changed");

    let today = new Date().toISOString().slice(0, 10)
    getStages(today);

  }, [location]);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  function getStages(date) {
    // https://reactjs.org/docs/faq-ajax.html
    var url = "https://sports.pfplapp.com/backend/public/api/get/" + props.sport + "/date/" + date + "/json";
    // var url = "http://127.0.0.1/sports/laravel/sports/backend/public/api/get/cricket/date/2022-07-27/json";
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result.stages);
          setItems(result.stages);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else if (isLoaded) {
    return (
      <div>
        <SportsListMenu sport={props.sport} />
        <Calender />
        <Divider variant="middle" />
          {items.map((stage) => (
            <StageCard sport={props.sport} stage_id={stage.stage_id} stage={stage} />
          ))}
      </div>
    );
  }
}

export default Content;
