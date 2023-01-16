import style from "./Create.module.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDiets, postRecipe } from "../../redux/actions";
import { Link, useHistory, NavLink } from "react-router-dom";
import validation from "./Validation.js";
import swal from "sweetalert";

const Create = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [recipeData, setRecipeData] = useState({
    name: "",
    summary: "",
    image: "",
    healthScore: "",
    stepByStep: "",
    typeofdiets: [],
  });
  const [errors, setErrors] = useState({
    name: "",
    summary: "",
    image: "",
    healthScore: "",
    stepByStep: "",
    typeofdiets: "",
  });

  useEffect(() => {
    dispatch(getDiets());
  }, []);

  const diets = useSelector((state) => state.diets);

  const changeInput = (e) => {
    setErrors(validation({ ...recipeData, [e.target.name]: e.target.value }));
    setRecipeData({ ...recipeData, [e.target.name]: e.target.value });
  };

  const changeDiets = (e) => {
    if (recipeData.typeofdiets.includes(e.target.value)) return;
    setRecipeData({
      ...recipeData,
      typeofdiets: [...recipeData.typeofdiets, e.target.value],
    });
    setErrors(
      validation({
        ...recipeData,
        typeofdiets: [...recipeData.typeofdiets, e.target.value],
      })
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(postRecipe(recipeData));
    swal({
      title: "Congratulations!",
      text: "Your recipe has been successfully created.",
      icon: "success",
      button: "Ok",
    }).then(() => history.push("/home"));
    // alert("Recipe Created");
    setRecipeData({
      name: "",
      summary: "",
      image: "https://cutt.ly/b2FeLSa",
      healthScore: "",
      stepByStep: "",
      typeofdiets: [],
    });
    // history.push("/home");
  };

  const filterDiets = (e) => {
    // e.preventDefault();
    setRecipeData({
      ...recipeData,
      typeofdiets: recipeData.typeofdiets.filter((t) => t !== e.target.value),
    });
  };
  return (
    <div className={style.form_container}>
      <div className={style.form_create}>
        <div>
          <div>
            <Link className={style.nose} to="/home">
              <button className={style.form_back}>Go Back</button>
            </Link>
          </div>
          <h2>Create your recipe</h2>
          <form className={style.form_document} onSubmit={(e) => onSubmit(e)}>
            <div className={style.prob}>
              {/* <label htmlFor="name">Name: </label> */}
              <input
                className={style.form_input}
                type="text"
                value={recipeData.name}
                size="40"
                name="name"
                maxLength="40"
                onChange={changeInput}
                autoComplete="off"
                placeholder="Must provide a recipe name"
              />
              {errors.name && <p className={style.error}>{errors.name}</p>}
              {/* {console.log(diets)}
              {console.log(recipeData)} */}

              <div>
                {/* <label htmlFor="image">Image: </label> */}
                <input
                  type="text"
                  value={recipeData.image}
                  className={style.form_input}
                  size="40"
                  name="image"
                  onChange={changeInput}
                  placeholder="Must set url image, jpeg,jpg or png"
                />
                {errors.image && <p className={style.error}>{errors.image}</p>}
              </div>
            </div>
            <div className={style.prob}>
              {/* <label htmlFor="healthScore">HealthScore: </label> */}
              <input
                type="number"
                value={recipeData.healthScore}
                className={style.form_input_number}
                size="100"
                name="healthScore"
                placeholder="Must set health Score (0-100)"
                onChange={changeInput}
              />
              {errors.healthScore && (
                <p className={style.error}>{errors.healthScore}</p>
              )}
            </div>
            <div>
              {/* <label htmlFor="summary"> Summary: </label> */}
              <textarea
                type="text"
                value={recipeData.summary}
                className={style.form_input_textarea}
                name="summary"
                onChange={changeInput}
                rows="4"
                cols="40"
                placeholder="Must set summary of the recipe"
              />
              {errors.summary && (
                <p className={style.error}>{errors.summary}</p>
              )}
            </div>

            <div>
              {/* <label htmlFor="stepByStep">Steps: </label> */}
              <textarea
                type="text"
                value={recipeData.stepByStep}
                className={style.form_input_textarea}
                name="stepByStep"
                onChange={changeInput}
                rows="4"
                cols="40"
                placeholder="You must the steps to make the recipe."
              />
            </div>
            <div className={style.form_select}>
              <div>
                <label htmlFor="">Select a diet: </label>
                <select
                  defaultValue={"Select a diet"}
                  onChange={(e) => changeDiets(e)}
                >
                  <option disabled value="Select a diet">
                    Select a diet
                  </option>
                  {diets.map((diet, index) => (
                    <option key={index} value={diet.name}>
                      {diet.name}
                    </option>
                  ))}
                </select>
                {errors.typeofdiets && (
                  <p className={style.error}>{errors.typeofdiets}</p>
                )}
              </div>
              <div className={style.form_option_button}>
                {recipeData.typeofdiets.length > 0 &&
                  recipeData.typeofdiets.map((recipe) => (
                    <button
                      onClick={filterDiets}
                      value={recipe}
                      key={recipe}
                      className={style.button_diet}
                    >
                      {recipe}
                    </button>
                  ))}
              </div>
            </div>
            <button
              type="submit"
              className={
                !recipeData.name ||
                !recipeData.summary ||
                !recipeData.healthScore ||
                !recipeData.typeofdiets.length ||
                errors.name ||
                errors.healthScore ||
                errors.image ||
                errors.summary ||
                errors.typeofdiets
                  ? style.form_submit
                  : style.form_submit_active
              }
              disabled={
                !recipeData.name ||
                !recipeData.summary ||
                !recipeData.healthScore ||
                !recipeData.typeofdiets.length ||
                errors.name ||
                errors.healthScore ||
                errors.image ||
                errors.summary ||
                errors.typeofdiets
              }
            >
              Create Recipe
            </button>
            {console.log(errors)}
          </form>
        </div>
        <div className={style.form_card}>
          <img
            className={style.form_img}
            src={
              recipeData.image === ""
                ? "https://cutt.ly/b2FeLSa"
                : recipeData.image
            }
            alt={recipeData.name}
          />
          <div className={style.form_card_name}>
            <p>Name: {recipeData.name}</p>
          </div>
          <div className={style.form_card_name}>
            <p>HealtScore: {recipeData.healthScore}</p>
          </div>
          <div className={style.form_card_name}>
            <p>DietsList: {recipeData.typeofdiets.join(", ")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
