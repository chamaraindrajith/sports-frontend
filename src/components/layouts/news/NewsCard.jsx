import { React } from "react";
import "./../../../css/NewsCrad.css";

function NewsSideBar(props) {
  return (
    <div className="stage_card">
      <div className="news_card_box">
        <div className="news_card_parent">
          <img className="news_card_image" src={"https://sports.pfplapp.com/backend/public/data/news/images/rapid_" + props.news.image_id + ".jpeg"} id={"img_" + props.news.id}></img>
          <span className="news_card_background">
            <h3 className="news_card_title">{props.news.title} </h3>
          </span>
        </div>
      </div>
    </div>
  );
}

export default NewsSideBar;
