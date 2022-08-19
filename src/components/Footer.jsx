import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div>
      Test Footer
      <div id="fixed_footer">
        <Link className="fixed_footer_link" to={"/" + props.sport} style={{ textDecoration: "none" }}>
          <img className="fixed_footer_icon" src="https://www.livescore.com/ls-web-assets/svgs/common/cricket-scores-active-2d77d8149f51f9106fc0f4024631dd20.svg" alt="" srcset="" />
          <span className="fixed_footer_link_text">Scores</span>
        </Link>
        <Link className="fixed_footer_link" to={"/" + props.sport + "/favorites"} style={{ textDecoration: "none" }}>
          <img className="fixed_footer_icon" src="https://www.livescore.com/ls-web-assets/svgs/common/favorites-5b58c2e7fd0c287f9bd1fd6b23b15019.svg" alt="" srcset="" />
          <span className="fixed_footer_link_text">Favorites</span>
        </Link>
        <Link className="fixed_footer_link" to="/news" style={{ textDecoration: "none" }}>
          <img className="fixed_footer_icon" src="https://www.livescore.com/ls-web-assets/svgs/common/news-article-72be5c0a80489a5b2c0fb7ff831784dc.svg" alt="" srcset="" />
          <span className="fixed_footer_link_text">News</span>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
