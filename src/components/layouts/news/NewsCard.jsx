import { React } from "react";
import "./../../../css/NewsCrad.css";

function NewsSideBar(props) {
  var src = "";

  if (props.sport == "cricket") {
    src = "https://sports.pfplapp.com/backend/public/data/news/images/rapid_";
  } else if (props.sport == "soccer") {
    src = "https://sports.pfplapp.com/backend/public/data/news/images/espn_";
  } else if (props.sport == "basketball") {
    src = "https://sports.pfplapp.com/backend/public/data/news/images/espn_";
  }

  return (
    <div className="stage_card">
      <div className="news_card_box">
        <div className="news_card_parent">
          <img className="news_card_image" src={src + props.news.image_id + ".jpeg"} id={"img_" + props.news.id}></img>
          <span className="news_card_background">
            <h3 className="news_card_title">{props.news.title} </h3>
          </span>
        </div>
      </div>
    </div>
  );
}

export default NewsSideBar;
