import style from "./RecipeCard.module.css";
import { Link } from "react-router-dom";

const RecipeCard = ({ name, typeofdiets, image, healthScore, id }) => {
  return (
    <div className={style.recipecard_container}>
      <Link className={style.recipecard_link} to={`/detail/${id}`}>
        <img
          className={style.recipecard_img}
          src={image === "" ? "https://cutt.ly/b2FeLSa" : image}
          alt={name}
        />
        <p className={style.recipecard_text}>Name: {name}</p>
        <p className={style.recipecard_text}>
          Type of Diets: {typeofdiets.join(", ")}
        </p>
        <p className={style.recipecard_text}>Health Score: {healthScore}</p>
      </Link>
    </div>
  );
};

export default RecipeCard;
