import {
  GET_RECIPES,
  GET_DIETS,
  DETAIL_RECIPE,
  SEARCH_RECIPE,
  SELECT_DIET,
  SELECT_DATA,
  SORT_NAME,
  SORT_SCORE,
  POST_RECIPE,
  RESET_DETAIL,
} from "../actions";

const initialState = {
  recipes: [],
  recipeDetail: {},
  diets: [],
  recipesAll: [],
  filters: [],
  filterCreated: "All",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return { ...state, recipes: action.payload, recipesAll: action.payload };
    case GET_DIETS:
      return { ...state, diets: action.payload };
    case SEARCH_RECIPE:
      return { ...state, recipes: action.payload };
    case DETAIL_RECIPE:
      return { ...state, recipeDetail: action.payload };
    case POST_RECIPE:
      return { ...state };
    case SELECT_DIET:
      const foods =
        state.filterCreated === "All"
          ? state.recipesAll
          : state.filterCreated === "API"
          ? state.recipesAll.filter((e) => typeof e.id === "number")
          : state.recipesAll.filter((e) => typeof e.id === "string");
      const filterdiets =
        action.payload === "All"
          ? foods
          : foods.filter((select) =>
              select.typeofdiets.includes(action.payload)
            );
      return { ...state, recipes: filterdiets, filters: filterdiets };
    case SELECT_DATA:
      const foodsTotal = !state.filters.length
        ? state.recipesAll
        : state.filters;

      const filterData =
        action.payload === "All"
          ? foodsTotal
          : action.payload === "API"
          ? foodsTotal.filter((e) => typeof e.id === "number")
          : foodsTotal.filter((e) => typeof e.id === "string");
      return {
        ...state,
        recipes: filterData,
        filterCreated: action.payload,
      };

    case RESET_DETAIL:
      return { ...state, recipeDetail: {} };

    case SORT_NAME:
      const sort_name =
        action.payload === "Asce"
          ? state.recipes.sort(function (a, b) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
              }
              if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1;
              }
              return 0;
            })
          : state.recipes.sort(function (a, b) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return -1;
              }
              if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return 1;
              }
              return 0;
            });
      return { ...state, recipes: sort_name };

    case SORT_SCORE:
      const sort_score =
        action.payload === "HtSM"
          ? state.recipes.sort(function (a, b) {
              if (a.healthScore > b.healthScore) {
                return 1;
              }
              if (a.healthScore < b.healthScore) {
                return -1;
              }
              return 0;
            })
          : state.recipes.sort(function (a, b) {
              if (a.healthScore > b.healthScore) {
                return -1;
              }
              if (a.healthScore < b.healthScore) {
                return 1;
              }
              return 0;
            });
      return { ...state, recipes: sort_score };
    default:
      return { ...state };
  }
};

export default rootReducer;
