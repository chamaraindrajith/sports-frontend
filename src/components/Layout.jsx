import React from "react";
import MenuItems from "./layouts/MenuItems";
import Content from "./layouts/Content";
import NewsSideBar from "./layouts/news/NewsSideBar";
import { useParams, Redirect } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout(props) {
  var { sport, category, stage, game_name, game_id, tab } = useParams();
  if (sport == undefined) {
    sport = "cricket"; // default sport
  } else if (sport != "cricket" && sport != "basketball" && sport != "soccer") {
    sport = "cricket"; // default sport
  }

  if (props.layout == "mobile") {
    // full
    return (
      <div>
        <Header sport={sport} />
        <div className="container">
          <div className="box_message">Mobile feature will available soon</div>
        </div>
        <Footer sport={sport} />
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
        <Header sport={sport} />
        <div className="container">
          <div className="box_message">News feature will available soon</div>
        </div>
        <Footer sport={sport} />
      </div>
    );
  } else if (props.layout == "fan-club") {
    // not sure
    return (
      <div>
        <Header sport={sport} />
        <div className="container">
          <div className="box_message">Fan Club feature will available soon</div>
        </div>
        <Footer sport={sport} />
      </div>
    );
  } else {
    return (
      <div>
        {/* {props.layout} */}
        <Header sport={sport} />
        <div className="container">
          <div className="row">
            <div className="col-md-2 col" id="menuItemNameDiv">
              <div className="container-left flex-column border_box">
                <MenuItems />
              </div>
            </div>
            <div className="col-md-6 col" id="content_div">
              <div className="container-left d-flex flex-column border_box" id="content_div_inside" >
                <Content sport={sport} layout={props.layout} favorite_tab={props.favorite_tab} />
              </div>
            </div>
            <div className="col-md-4 col" id="news_div">
              <div className="container-left d-flex flex-column border_box" id="news_div_inside">
                <NewsSideBar sport={sport} />
              </div>
            </div>
          </div>
        </div>
        <Footer sport={sport} />
      </div>
    );
  }
}

export default Layout;
