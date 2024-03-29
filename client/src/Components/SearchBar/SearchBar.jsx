import style from "./SearchBar.module.css";
import { useDispatch } from "react-redux";
import { getRecipes, getRecipe } from "../../redux/actions";
import { useState } from "react";
import swal from "sweetalert";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const resetAll = () => {
    dispatch(getRecipes());
    setSearch("");
  };

  const changeSearchBar = (e) => {
    setSearch(e.target.value);
  };

  const inputSearch = (e) => {
    e.preventDefault();
    if (search === "") {
      swal({
        title: "Sorry!",
        text: "You must write the name of the recipe",
        icon: "warning",
        button: "Ok",
      });
      setSearch("");
    } else {
      dispatch(getRecipe(search));
      setSearch("");
    }
  };

  return (
    <div className={style.searchBar_container}>
      <div className={style.column}>
        <input
          className={style.searchBar_input}
          type="text"
          maxLength="35"
          size="35"
          onChange={changeSearchBar}
          autoComplete="off"
          placeholder="Search a recipe..."
          value={search}
        />
        <button className={style.searchBar_button} onClick={inputSearch}>
          Search
        </button>
      </div>
      <button className={style.searchBar_button} onClick={resetAll}>
        Reset All
      </button>
    </div>
  );
};

export default SearchBar;
