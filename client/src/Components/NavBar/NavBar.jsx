import { NavLink, useHistory } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={style.prueba}>
      {/* <audio autoPlay>
        <source src="../audio/lefestin.mp3" type="audio/mpeg" />
      </audio> */}
      <img
        className={style.image}
        src="https://cdn1.iconfinder.com/data/icons/fillio-food-kitchen-and-cooking/48/food_-_dish-256.png"
        alt="comida"
      />
      <div className={style.space}>
        <NavLink to={"/create"}>
          <button className={style.navBar_button}>Create an recipe</button>
        </NavLink>
        <NavLink to={"/home"}>
          <button className={style.navBar_button}>Home</button>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
