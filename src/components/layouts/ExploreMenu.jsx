import { React, useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

function ExploreMenu(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuitems, setMenuItems] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setIsLoaded(false);
    setError(false);
    // console.log("Location changed ExploreMenu");
    getMenuItems();
  }, [location]);

  function getMenuItems() {
    var url = "https://sports.pfplapp.com/backend/public/api/get/" + props.sport + "/categories";
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setTimeout(() => {
            // console.log(result);
            setMenuItems(result);
            setIsLoaded(true);
          }, 1000);
        },
        (error) => {
          setError(error);
          setIsLoaded(true);
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
      <div style={{ height: "350px", display: "flex", justifyContent: "center" }}>
        <div style={{ marginTop: "150px" }}>
          <CircularProgress />
        </div>
      </div>
    );
  } else if (isLoaded) {
    return (
      <ul className="Ch">
        {menuitems.map((menuitem, key) => (
          <Link to={"/" + props.sport + "/" + menuitem.slug} style={{ textDecoration: "none" }} className="menuitems" key={key}>
            <li className="Fh">
              <div className="ej">
                <img loading="lazy" className="flags" src={"images/flags/" + menuitem.slug + ".jpg"} alt="" />
                { }
              </div>
              <span className="menuItemName">
                {menuitem.name}
              </span>
            </li>
          </Link>
        ))}
      </ul>
    );
  }
}

export default ExploreMenu;
