import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={style.NavBar_container}>
      <img
        className={style.NavBar_img}
        src="https://cdn1.iconfinder.com/data/icons/fillio-food-kitchen-and-cooking/48/food_-_dish-256.png"
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
