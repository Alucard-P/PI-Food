import style from "./Home.module.css";
import NavBar from "../NavBar/NavBar";

import RecipeCard from "../RecipeCard/RecipeCard";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRecipes, getDiets } from "../../redux/actions";
import Pagination from "../Pagination/Pagination";
import Filters from "../Filters/Filters";
import SearchBar from "../SearchBar/SearchBar";
import Loading from "../Loading/Loading";
import Footer from "../Footer/Footer";

const Home = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(9);
  const [order, setOrder] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipes());
    dispatch(getDiets());
  }, [dispatch]);
  const recipes = useSelector((state) => state.recipes);
  const max = Math.ceil(recipes.length / perPage);
  console.log(max);

  const paginado = (number) => {
    setPage(number);
  };
  return !recipes.length ? (
    <Loading />
  ) : (
    <div className={style.container_all}>
      <div className={style.grid_nav}>
        <NavBar />
      </div>
      <div className={style.grid_search}>
        <SearchBar />
      </div>
      <div className={style.grid_pag}>
        <Pagination
          page={page}
          setPage={setPage}
          max={max}
          paginado={paginado}
        />
      </div>

      <div className={style.grid_sidebar}>
        <Filters setPage={setPage} setOrder={setOrder} />
      </div>

      <div className={style.container_card}>
        {recipes
          .slice((page - 1) * perPage, (page - 1) * perPage + perPage)
          .map((recipes) => {
            return (
              <div className={style.flex_item}>
                <RecipeCard
                  id={recipes.id}
                  key={recipes.id}
                  name={recipes.name}
                  typeofdiets={recipes.typeofdiets.map((e) => e)}
                  image={recipes.image}
                  healthScore={recipes.healthScore}
                />
              </div>
            );
          })}
      </div>
      <div className={style.grid_footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
