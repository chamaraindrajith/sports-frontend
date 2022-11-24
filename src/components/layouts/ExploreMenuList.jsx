import { React, useState } from 'react';
import { Link } from "react-router-dom";

function ExploreMenuList(props) {
    //create a new array by filtering the original array
    const filteredData = props.menuitems.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.name.toLowerCase().includes(props.input)
        }
    })
    return (
        <div>
            {filteredData.map((menuitem, key) => (
            <Link to={"/" + menuitem.url} style={{ textDecoration: "none" }} className="menuitems" key={key}>
              {/*  <Link to={"/" + props.sport + "/" + menuitem.slug} style={{ textDecoration: "none" }} className="menuitems" key={key}> */}
              <li className="Fh">
                <div className="ej">
                  <img loading="lazy" className="flags" src={"/images/flags/" + menuitem.image + ".jpg"} alt="" />
                </div>
                <span className={"menuItemName " + (menuitem.slug === props.stage ? " active" : "")}>
                  {menuitem.name}
                </span>
              </li>
            </Link>
          ))}
        </div>
    )
}

export default ExploreMenuList