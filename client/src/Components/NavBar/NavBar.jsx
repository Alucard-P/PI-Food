import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";
import food from "../../Images/food_icon.png";

const NavBar = () => {
  return (
    <div className={style.NavBar_container}>
      <img
        className={style.NavBar_img}
        // src="https://cdn1.iconfinder.com/data/icons/fillio-fpngood-kitchen-and-cooking/48/food_-_dish-256."
        src={food}
        alt="comida"
      />
      <div className={style.NavBar_buttons}>
        <NavLink to={"/about"}>
          <button className={style.NavBar_button}>About Us</button>
        </NavLink>
        <NavLink to={"/create"}>
          <button className={style.NavBar_button}>Create an recipe</button>
        </NavLink>
        <NavLink to={"/home"}>
          <button className={style.NavBar_button}>Home</button>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
