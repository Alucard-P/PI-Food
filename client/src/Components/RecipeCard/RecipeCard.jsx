import style from "./RecipeCard.module.css";
import { Link } from "react-router-dom";

const RecipeCard = ({ name, typeofdiets, image, healthScore, id }) => {
  return (
    <div className={style.container_recipecard}>
      {/* <h1>soy el componente RecipeCard</h1> */}
      {/* <p>{id}</p> */}
      <Link className={style.link} to={`/detail/${id}`}>
        {/* <p>{id}</p> */}
        <img
          className={style.image_card}
          src={image === "" ? "https://cutt.ly/b2FeLSa" : image}
          alt={name}
        />
        <p className={style.text_color}>Name: {name}</p>
        <p className={style.text_color}>
          Type of Diets: {typeofdiets.join(", ")}
        </p>
        <p className={style.text_color}>Health Score: {healthScore}</p>
        {/* {console.log(id)}
        {console.log(typeof id)} */}
      </Link>
    </div>
  );
};

export default RecipeCard;
