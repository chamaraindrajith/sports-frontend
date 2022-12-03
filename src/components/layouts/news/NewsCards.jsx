import { React, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import "./../../../css/NewsSideBar.css";
import { useLocation } from "react-router-dom";
import NewsCard from "./NewsCard";
import CircularProgress from "@mui/material/CircularProgress";

function NewsCards(props) {
  const location = useLocation();
  const [currentSport, setCurrentSport] = useState(null);
  useEffect(() => {
    // console.log("NewsCards: Location changed");
    let today = new Date().toISOString().slice(0, 10);
    console.log(props.sport)
    console.log(currentSport)
    if (props.sport !== currentSport) {
      setIsLoaded(false);
      setError(false);
      getNews(today);
    }
    setCurrentSport(props.sport);
  }, [location]);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  function getNews(date) {
    var url = "https://api.tvpool.net/api/get/news/" + props.sport + "/date/" + date + "/json";
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          // console.log(result);
          setItems(result);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }

  if (error) {
    return (
      <div style={{ height: "800px" }}>
        <div className="box_message">There are no news available</div>
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
        <Box sx={{ mt: 1.5, mb: 1.5 }}>
          {items.map((news, key) => (
            <NewsCard sport={props.sport} news={news} key={key} />
          ))}
        </Box>
      </div>
    );
  }
}

export default NewsCards;
