import { React, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { AiFillCaretRight } from "react-icons/ai";
import "./../../../css/NewsSideBar.css";
import NewsCards from "./NewsCards";
import { useLocation } from "react-router-dom";

function NewsSideBar(props) {


  function getImage(id) {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "9c7fb15e1cmsh9f6b13b1188de61p11f9cfjsn48bb8a30a77b",
        "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
      },
    };
    var url = "https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c" + id + "/i.jpg?p=100";
    fetch(url, options)
      .then((res) => res.blob())
      .then(
        (blob) => {
          // imgElement.src = URL.createObjectURL(blob);
          console.log(URL.createObjectURL(blob));
          document.querySelector("#img_" + id).src = URL.createObjectURL(blob);
        //   setItems(result.storyList);
        //   setIsLoaded(true);
        },
        (error) => {
        //   setIsLoaded(true);
        //   setError(error);
        }
      );
  }

  getImage(props.news.id);

  return (
    <div className="stage_card">
      {props.news.hline}
      <br></br>
      <br></br>
      <img src={props.news.coverImage} id={"img_" + props.news.id}></img>
    </div>
  );
}

export default NewsSideBar;
