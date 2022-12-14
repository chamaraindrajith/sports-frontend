import { React, useState, useEffect } from "react";
import ExploreMenu from "./layouts/ExploreMenu";
import Content from "./layouts/Content";
import NewsSideBar from "./layouts/news/NewsSideBar";
import { useParams, Redirect, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SportsListMenu from "./layouts/SportsListMenu";

function Layout(props) {

  const location = useLocation();

  useEffect(() => {
    getStageName(stage);
    getCategoryName(category);
  }, [location]);

  var { sport, category, stage, game_name, game_id, tab } = useParams();
  if (sport == undefined) {
    sport = "cricket"; // default sport
  } else if (sport != "cricket" && sport != "basketball" && sport != "soccer") {
    sport = "cricket"; // default sport
  }

  const [category_name, setCategoryName] = useState("");
  const [stage_name, setStageName] = useState("");

  function emptyFunction() {
    return undefined;
  }

  // getCategoryName
  function getCategoryName(category_slug) {
    if (category_slug) {
      var url = "https://api.tvpool.net/api/get/category/name?slug=" + category_slug;
      fetch(url)
        .then((res) => res.json())
        .then(
          (result) => {
            // console.log(result);
            result.length > 0 ? setCategoryName(result) : emptyFunction();
          },
          (error) => {

          }
        );
    }
  }

  // getStageName
  function getStageName(stage_slug) {
    if (stage_slug) {
      var url = "https://api.tvpool.net/api/get/stage/name?slug=" + stage_slug;
      fetch(url)
        .then((res) => res.json())
        .then(
          (result) => {
            // console.log(result);
            result.length > 0 ? setStageName(result) : emptyFunction();
          },
          (error) => {

          }
        );
    }
  }

  if (props.layout == "mobile") {
    // full
    return (
      <div>
        <Header sport={sport} layout={props.layout} />
        <div className="container">
          <div className="box_message">
            <h2>Get the ScoreXCard App</h2>
            <a href="https://sports.pfplapp.com/tvpool.apk">
              <img style={{ width: "160px" }} src="https://www.livescore.com/ls-web-assets/images/google_play-d5124d23c134d8a4693f7615d16462fa.webp" />
            </a>
            {/* Mobile feature will available soon */}
          </div>
        </div>
        <Footer sport={sport} layout={props.layout} />
      </div>
    );
  } else if (props.layout == "privacy") {
    // full
    return (
      <div>
        <Header sport={sport} />
        <div className="container">
          <div className="box_message">Privacy feature will available soon</div>
        </div>
        <Footer sport={sport} />
      </div>
    );
  } else if (props.layout == "redirect") {
    // full
    return <Redirect to={"/" + sport + "/favorites/matches"} />;
  } else if (props.layout == "contact") {
    // full
    return (
      <div>
        <Header sport={sport} />
        <div className="container">
          <div className="box_message">Contact feature will available soon</div>
        </div>
        <Footer sport={sport} />
      </div>
    );
  } else if (props.layout == "settings") {
    // full
    return (
      <div>
        <Header sport={sport} />
        <div className="container">
          <div className="box_message">Settings feature will available soon</div>
        </div>
        <Footer sport={sport} />
      </div>
    );
  }
  //  else if (props.layout == "favorites") {
  //   // middle
  //   return (
  //     <div>
  //       <Header sport={sport} />
  //       <div className="container">
  //         <div className="box_message">{sport} favorites feature will available soon</div>
  //       </div>
  //     </div>
  //   );
  // }
  else if (props.layout == "news") {
    // redirect
    return (
      <div>
        <Header sport={sport} layout={props.layout} />
        <div className="container">
          <div className="box_message">News feature will available soon</div>
        </div>
        <Footer sport={sport} layout={props.layout} />
      </div>
    );
  } else if (props.layout == "fan-club") {
    // not sure
    return (
      <div>
        <Header sport={sport} layout={props.layout} />
        <div className="container">
          <div className="box_message">Fan Club feature will available soon</div>
        </div>
        <Footer sport={sport} layout={props.layout} />
      </div>
    );
  } else {
    return (
      <div>
        {/* {props.layout} */}
        <Header sport={sport} layout={props.layout} />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col">
              <SportsListMenu sport={sport} />
              <div className="row">
                <div className="col-md-4 col" id="menuItemNameDiv">
                  <div className="container-left flex-column border_box">
                    <ExploreMenu sport={sport} category={category} stage={stage} category_name={category_name} stage_name={stage_name} />
                  </div>
                </div>
                <div className="col-md-8 col" id="content_div">
                  <div className="container-left d-flex flex-column border_box" id="content_div_inside">
                    <Content sport={sport} layout={props.layout} favorite_tab={props.favorite_tab} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col" id="news_div">
              <div className="container-left d-flex flex-column border_box" id="news_div_inside">
                <NewsSideBar sport={sport} />
              </div>
            </div>
          </div>
          <div className="row">
            {/* <div className="col-md-2 col" id="menuItemNameDiv">
              <div className="container-left flex-column border_box">
                <ExploreMenu sport={sport} />
              </div>
            </div> */}
            {/* <div className="col-md-6 col" id="content_div">
              <div className="container-left d-flex flex-column border_box" id="content_div_inside">
                <Content sport={sport} layout={props.layout} favorite_tab={props.favorite_tab} />
              </div>
            </div> */}
            {/* <div className="col-md-4 col" id="news_div">
              <div className="container-left d-flex flex-column border_box" id="news_div_inside">
                <NewsSideBar sport={sport} />
              </div>
            </div> */}
          </div>
        </div>
        <Footer sport={sport} layout={props.layout} />
      </div>
    );
  }
}

export default Layout;
