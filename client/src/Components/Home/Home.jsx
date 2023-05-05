import style from "./Home.module.css";
import NavBar from "../NavBar/NavBar";
import RecipeContainer from "../RecipeContainer/RecipeContainer";

const Home = () => {
  return (
    <div className={style.container}>
      {/* <h1>soy el componente Home</h1> */}
      <NavBar />
      <RecipeContainer />
    </div>
  );
};

export default Home;
