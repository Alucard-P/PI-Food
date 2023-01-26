import {
  selectDiet,
  selectData,
  sortName,
  sortScore,
  getRecipes,
} from "../../redux/actions";
import { useDispatch } from "react-redux";
import style from "./Filters.module.css";
import { useState } from "react";

const Filters = ({ setPage, setOrder }) => {
  const dispatch = useDispatch();

  const [diet, setDiet] = useState({
    All: false,
    "gluten free": false,
    "dairy free": false,
    "lacto ovo vegetarian": false,
    vegan: false,
    paleolithic: false,
    "whole 30": false,
    primal: false,
    pescatarian: false,
    ketogenic: false,
    "fodmap friendly": false,
  });
  const [data, setData] = useState({
    All: false,
    API: false,
    BD: false,
  });
  const [sort, setSort] = useState({
    "A-Z": false,
    "Z-A": false,
    "HealthScore >": false,
    "HealthScore <": false,
  });

  const filterDiet = (e) => {
    setDiet({
      All: false,
      "gluten free": false,
      "dairy free": false,
      "lacto ovo vegetarian": false,
      vegan: false,
      paleolithic: false,
      "whole 30": false,
      primal: false,
      pescatarian: false,
      ketogenic: false,
      "fodmap friendly": false,
    });
    setPage(1);
    dispatch(selectDiet(e.target.value));
    setOrder(`${e.target.value}`);
    setDiet({ [e.target.name]: true });
  };

  const filterData = (e) => {
    setData({
      All: false,
      API: false,
      BD: false,
    });
    setPage(1);
    dispatch(selectData(e.target.value));
    setOrder(`${e.target.value}`);
    setData({ [e.target.name]: true });
  };

  const filterName = (e) => {
    setSort({
      "A-Z": false,
      "Z-A": false,
      "HealthScore >": false,
      "HealthScore <": false,
    });
    setPage(1);
    dispatch(sortName(e.target.value));
    setOrder(`${e.target.value}`);
    setSort({ [e.target.name]: true });
  };

  const filterScore = (e) => {
    setSort({
      "A-Z": false,
      "Z-A": false,
      "HealthScore >": false,
      "HealthScore <": false,
    });
    setPage(1);
    dispatch(sortScore(e.target.value));
    setOrder(`${e.target.value}`);
    setSort({ [e.target.name]: true });
  };

  const resetAll = () => {
    dispatch(getRecipes());
    setDiet({
      All: false,
      "gluten free": false,
      "dairy free": false,
      "lacto ovo vegetarian": false,
      vegan: false,
      paleolithic: false,
      "whole 30": false,
      primal: false,
      pescatarian: false,
      ketogenic: false,
      "fodmap friendly": false,
    });
    setData({
      All: false,
      API: false,
      BD: false,
    });
    setSort({
      "A-Z": false,
      "Z-A": false,
      "HealthScore >": false,
      "HealthScore <": false,
    });
    setPage(1);
  };

  return (
    <div className={style.container_filter}>
      <p className={style.title}>Filters</p>
      <p className={style.label_title}>Select your diet: </p>
      <div className={style.button_filter}>
        <button
          onClick={filterDiet}
          value="All"
          name="All"
          className={diet["All"] ? style.button_active : style.button_disable}
        >
          All
        </button>
        <button
          onClick={filterDiet}
          value="gluten free"
          name="gluten free"
          className={
            diet["gluten free"] ? style.button_active : style.button_disable
          }
        >
          gluten free
        </button>
        <button
          onClick={filterDiet}
          value="dairy free"
          name="dairy free"
          className={
            diet["dairy free"] ? style.button_active : style.button_disable
          }
        >
          dairy free
        </button>
        <button
          onClick={filterDiet}
          value="lacto ovo vegetarian"
          name="lacto ovo vegetarian"
          className={
            diet["lacto ovo vegetarian"]
              ? style.button_active
              : style.button_disable
          }
        >
          lacto ovo vegetarian
        </button>
        <button
          onClick={filterDiet}
          value="vegan"
          name="vegan"
          className={diet["vegan"] ? style.button_active : style.button_disable}
        >
          vegan
        </button>
        <button
          onClick={filterDiet}
          value="paleolithic"
          name="paleolithic"
          className={
            diet["paleolithic"] ? style.button_active : style.button_disable
          }
        >
          paleolithic
        </button>
        <button
          onClick={filterDiet}
          value="whole 30"
          name="whole 30"
          className={
            diet["whole 30"] ? style.button_active : style.button_disable
          }
        >
          whole 30
        </button>
        <button
          onClick={filterDiet}
          value="primal"
          name="primal"
          className={
            diet["primal"] ? style.button_active : style.button_disable
          }
        >
          primal
        </button>
        <button
          onClick={filterDiet}
          value="pescatarian"
          name="pescatarian"
          className={
            diet["pescatarian"] ? style.button_active : style.button_disable
          }
        >
          pescatarian
        </button>
        <button
          onClick={filterDiet}
          value="ketogenic"
          name="ketogenic"
          className={
            diet["ketogenic"] ? style.button_active : style.button_disable
          }
        >
          ketogenic
        </button>
        <button
          onClick={filterDiet}
          value="fodmap friendly"
          name="fodmap friendly"
          className={
            diet["fodmap friendly"] ? style.button_active : style.button_disable
          }
        >
          fodmap friendly
        </button>
      </div>

      <p className={style.label_title}>Select data: </p>
      <div className={style.button_filter}>
        <button
          onClick={filterData}
          value="All"
          name="All"
          className={data["All"] ? style.button_active : style.button_disable}
        >
          All
        </button>
        <button
          onClick={filterData}
          value="API"
          name="API"
          className={data["API"] ? style.button_active : style.button_disable}
        >
          API
        </button>
        <button
          onClick={filterData}
          value="BD"
          name="BD"
          className={data["BD"] ? style.button_active : style.button_disable}
        >
          BD
        </button>
      </div>

      <p className={style.label_title}>Select order: </p>
      <div className={style.button_filter}>
        <button
          onClick={filterName}
          value="Asce"
          name="Asce"
          className={sort["Asce"] ? style.button_active : style.button_disable}
        >
          A-Z
        </button>
        <button
          onClick={filterName}
          value="Desc"
          name="Desc"
          className={sort["Desc"] ? style.button_active : style.button_disable}
        >
          Z-A
        </button>
        <button
          onClick={filterScore}
          value="HtSM"
          name="HtSM"
          className={sort["HtSM"] ? style.button_active : style.button_disable}
        >{`HealthScore >`}</button>
        <button
          onClick={filterScore}
          value="HtSm"
          name="HtSm"
          className={sort["HtSm"] ? style.button_active : style.button_disable}
        >{`HealthScore <`}</button>
      </div>

      <div className={style.button_filter}>
        <button className={style.reset} onClick={resetAll}>
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
