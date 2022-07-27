import { React, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { AiFillCaretRight } from "react-icons/ai";
import "./../../../css/NewsSideBar.css";
import { useLocation } from "react-router-dom";
import NewsCard from "./NewsCard";

function NewsCards() {
  return (
    <div>
      Test
    </div>
  );
}

function NewsCards1(props) {
  const location = useLocation();
  useEffect(() => {
    console.log("Location changed NewsSideBar");

    getNews();
  }, [location]);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  function getNews() {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "9c7fb15e1cmsh9f6b13b1188de61p11f9cfjsn48bb8a30a77b",
        "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
      },
    };
    var url = "https://cricbuzz-cricket.p.rapidapi.com/news/v1/index";
    fetch(url, options)
      .then((res) => res.json())
      .then(
        (result) => {
          // console.log(result.storyList);
          setItems(result.storyList);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }

  const badArrayNews = [];
  const goodArrayNews = [];
  items.map((news) => badArrayNews.push(news.story));
  console.log(badArrayNews);
  badArrayNews.forEach((element) => {
    if (element != undefined && element.context && element.id) {
      console.log(element.id);
      console.log(element.context);
      goodArrayNews.push(element);
    }
  });
  console.log(goodArrayNews);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else if (isLoaded) {
    return (
      <div className="stage_card">
        <Box sx={{ mt: 1.5, mb: 1.5 }}>
          {goodArrayNews.map((news) => (
            <NewsCard sport={props.sport} news={news} />
          ))}
        </Box>
      </div>
    );
  }
}

export default NewsCards;
