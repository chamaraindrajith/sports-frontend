import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div>
      {/* Test Footer */}
      <div id="fixed_footer">
        <Link className="fixed_footer_link" to={"/" + props.sport} style={{ textDecoration: "none" }}>
          <img className="fixed_footer_icon" src={"https://api.tvpool.net/images/common/" + props.sport + "-scores" + ((props.layout === "stages") ? "-active" : "") + ".svg"} alt="" srcSet="" />
          <span className={"fixed_footer_link_text" + ((props.layout === "stages") ? " active" : "")}>Scores</span>
        </Link>
        <Link className="fixed_footer_link" to={"/" + props.sport + "/favorites"} style={{ textDecoration: "none" }}>
          <img className="fixed_footer_icon" src={"https://api.tvpool.net/images/common/favourites" + ((props.layout === "favorites") ? "-active" : "") + ".svg"} alt="" srcSet="" />
          <span className={"fixed_footer_link_text" + ((props.layout === "favorites") ? " active" : "")}>Favorites</span>
        </Link>
        <Link className="fixed_footer_link" to="/news" style={{ textDecoration: "none" }}>
          <img className="fixed_footer_icon" src={"https://api.tvpool.net/images/common/news-article" + ((props.layout === "news") ? "-active" : "") + ".svg"} alt="" srcSet="" />
          <span className={"fixed_footer_link_text" + ((props.layout === "news") ? " active" : "")}>News</span>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
