import { React, useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
// import './../../js/FileServer.js';
import { saveAs } from 'file-saver';

function ExploreMenu(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuitems, setMenuItems] = useState([]);
  const location = useLocation();

  var FileSaver = require('file-saver');

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

  return (
    <ul className="Ch">
      {/* {console.log(menuitems)} */}
      {menuitems.map((menuitem, key) => (
        <Link to={"/" + props.sport + "/" + menuitem.slug} style={{ textDecoration: "none" }} className="menuitems" key={key}>
          <li className="Fh">
            <div className="ej">
              <img loading="lazy" className="flags" src={"https://static.livescore.com/i2/fh/" + menuitem.slug + ".jpg"} alt="" />
              {/* {FileSaver.saveAs("https://static.livescore.com/i2/fh/" + menuitem.slug + ".jpg", menuitem.slug + ".jpg")} */}
              {/* {FileSaver.saveAs("https://httpbin.org/image", "image.jpg")} */}
              {}
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

export default ExploreMenu;
