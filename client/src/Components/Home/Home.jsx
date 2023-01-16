import style from "./Home.module.css";
import RecipeContainer from "../RecipeContainer/RecipeContainer";

const Home = () => {
  return (
    <div className={style.container}>
      {/* <h1>soy el componente Home</h1> */}
      <RecipeContainer />
    </div>
  );
};

export default Home;
