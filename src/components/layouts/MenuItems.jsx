import { React } from "react";

function MenuItems() {
  return (
    <ul class="Ch">
      <li class="Fh">
        <div className="ej">
          <img loading="lazy" className="flags" src="https://static.livescore.com/i2/fh/england.jpg" alt="" />
        </div>
        <span className="menuItemName">England </span>
      </li>
      <li class="Fh">
        <div className="ej">
          <img loading="lazy" className="flags" src="https://static.livescore.com/i2/fh/spain.jpg" alt="" />
        </div>
        <span className="menuItemName">Spain</span>
      </li>
      <li class="Fh">
        <div className="ej">
          <img loading="lazy" className="flags" src="https://static.livescore.com/i2/fh/italy.jpg" alt="" />
        </div>
        <span className="menuItemName">Italy</span>
      </li>
      <li class="Fh">
        <div className="ej">
          <img loading="lazy" className="flags" src="https://static.livescore.com/i2/fh/germany.jpg" alt="" />
        </div>
        <span className="menuItemName">Germany</span>
      </li>
      <li class="Fh">
        <div className="ej">
          <img loading="lazy" className="flags" src="https://static.livescore.com/i2/fh/france.jpg" alt="" />
        </div>
        <span className="menuItemName">France</span>
      </li>
      <li class="Fh">
        <div className="ej">
          <img loading="lazy" className="flags" src="https://static.livescore.com/i2/fh/netherlands.jpg" alt="" />
        </div>
        <span className="menuItemName">Netherlands</span>
      </li>
    </ul>
  );
}

export default MenuItems;
