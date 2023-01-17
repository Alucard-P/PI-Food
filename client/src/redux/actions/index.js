import axios from "axios";

export const GET_RECIPES = "GET_RECIPES";
export const SEARCH_RECIPE = "SEARCH_RECIPE";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const GET_DIETS = "GET_DIETS";
export const DETAIL_RECIPE = "DETAIL_RECIPE";
export const SELECT_DIET = "SELECT_DIET";
export const SELECT_ORDER = "SELECT_ORDER";
export const SELECT_DATA = "SELECT_DATA";
export const SORT_NAME = "SORT_NAME";
export const SORT_SCORE = "SORT_SCORE";
export const POST_RECIPE = "POST_RECIPE";
export const RESET_DETAIL = "RESET_DETAIL";

export const getRecipes = () => {
  return async function (dispatch) {
    const recipes = await axios.get("http://localhost:3001/recipes");

    const recipeAll = recipes.data;

    return dispatch({ type: GET_RECIPES, payload: recipeAll });
  };
};

export const getDetail = (id) => {
  return async function (dispatch) {
    const detail = await axios.get(`http://localhost:3001/recipes/${id}`);
    const detailAll = detail.data;
    return dispatch({ type: DETAIL_RECIPE, payload: detailAll });
  };
};

export const postRecipe = (body) => {
  return async function () {
    const post = await axios.post("http://localhost:3001/recipes", body);
    return post;
  };
};

export const getRecipe = (name) => {
  return async function (dispatch) {
    try {
      const recipe = await axios.get(
        `http://localhost:3001/recipes?name=${name}`
      );
      return dispatch({ type: SEARCH_RECIPE, payload: recipe.data });
    } catch (error) {
      alert("The name of the recipe does not exist");
    }
  };
};

export const getDiets = () => {
  return async function (dispatch) {
    const diets = await axios.get("http://localhost:3001/diets");
    return dispatch({ type: GET_DIETS, payload: diets.data });
  };
};

export const resetDetail = () => {
  return { type: RESET_DETAIL };
};

export const selectDiet = (value) => {
  return { type: SELECT_DIET, payload: value };
};

export const selectData = (value) => {
  return { type: SELECT_DATA, payload: value };
};

export const sortName = (value) => {
  return { type: SORT_NAME, payload: value };
};

export const sortScore = (value) => {
  return { type: SORT_SCORE, payload: value };
};
