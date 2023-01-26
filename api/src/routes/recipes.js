const { Router } = require("express");
const { Recipe, Typeofdiet } = require("../db");
const axios = require("axios");

const { API } = process.env;
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

console.log(API, "soy el api");

const recipes = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const getByApi = async () => {
  const constapi = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API}&number=100&addRecipeInformation=true`
  );
  const constresult = await constapi.data;
  if (Array.isArray(constresult.results)) {
    const dataApi = await constresult.results.map((info) => {
      return {
        id: info.id,
        name: info.title,
        summary: info.summary,
        healthScore: info.healthScore,
        typeofdiets: info.diets,
        image: info.image,
      };
    });
    return dataApi;
  } else {
    return "no se puede mostrar la api";
  }
};

const getByBd = async () => {
  const myBd = await Recipe.findAll({
    include: {
      model: Typeofdiet,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  const filterBd = myBd.map((e) => {
    return {
      id: e.id,
      name: e.name,
      summary: e.summary,
      healthScore: e.healthScore,
      typeofdiets: e.typeofdiets.map((e) => e.name),
      image: e.image,
      stepByStep: e.stepByStep,
    };
  });

  return filterBd;
};

const getTotal = async () => {
  const apiInfo = await getByApi();
  const apiBd = await getByBd();
  const apiTotal = apiInfo.concat(apiBd);
  return apiTotal;
};

recipes.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    const newRecipes = await getTotal();
    if (name) {
      const nameRecipes = newRecipes.filter((e) =>
        e.name.toLowerCase().includes(name.toLowerCase())
      );
      nameRecipes.length
        ? res.status(200).send(nameRecipes)
        : res.status(404).send("no existe el platillo");
    } else {
      return res.status(201).send(newRecipes);
    }
  } catch (error) {
    res.status(404).json(error.message);
  }
});

recipes.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) throw new Error("No se envio el id necesario");
    const outDb = await getTotal();
    const filterById = outDb.find((e) => e.id === id);
    if (!filterById) {
      const diet = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API}`
      );
      const dietdata = await diet.data;
      if (!dietdata) throw new Error("No existe la receta solicitada");

      const newDiet = {
        id: dietdata.id,
        name: dietdata.title,
        summary: dietdata.summary,
        stepByStep: dietdata.instructions,
        typeofdiets: dietdata.diets,
        healthScore: dietdata.healthScore,
        image: dietdata.image,
      };
      return res.status(201).send(newDiet);
    }
    return res.status(200).send(filterById);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

recipes.post("/", async (req, res) => {
  const { name, summary, typeofdiets } = req.body;
  try {
    if (!name || !summary) throw new Error("Faltan los datos obligatorios");
    const newestRecipe = await Recipe.create(req.body);
    const dietas = await Typeofdiet.findAll({
      where: { name: typeofdiets },
    });
    newestRecipe.addTypeofdiet(dietas);
    res.status(200).json(newestRecipe);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = recipes;
