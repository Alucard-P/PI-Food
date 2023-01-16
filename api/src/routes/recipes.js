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

// let newAxios = axios.create({
//   headers: {
//     "Accept-Encoding": "null",
//   },
// });

const getByApi = async () => {
  const constapi = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API}&number=100&addRecipeInformation=true`
  );
  const constresult = await constapi.data;
  // console.log("este es el api.data", constresult.results);
  if (Array.isArray(constresult.results)) {
    const dataApi = await constresult.results.map((info) => {
      return {
        id: info.id,
        name: info.title,
        summary: info.summary,
        healthScore: info.healthScore,
        typeofdiets: info.diets.map((e) => e),
        image: info.image,
      };
    });
    // const dataApi = await api.data;
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

  return myBd;
};

const getTotal = async () => {
  const apiInfo = await getByApi();
  const apiBd = await getByBd();
  // console.log("haber el dato", apiBd);
  // console.log("esta es la api", apiInfo);
  const apiTotal = apiInfo.concat(apiBd);
  // console.log("esta es la api total", apiTotal);
  return apiTotal;
};

recipes.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    // if (!name) throw new Error("No envio el nombre de la receta");

    const newRecipes = await getTotal();
    console.log(name);
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

// recipes.get("/", async (req, res) => {
//   const baseTotal = await getTotal();

//   return res.status(200).json(baseTotal);
// });

recipes.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(typeof id);
  try {
    if (!id) throw new Error("No se envio el id necesario");

    const outDb = await getTotal();

    const probando = outDb.find((e) => e.id === id);

    if (!probando) {
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
        typeofdiets: dietdata.diets.map((e) => e),
        healthScore: dietdata.healthScore,
        image: dietdata.image,
      };
      return res.status(201).send(newDiet);
    }
    // const objetprob = outDb.find((e) => e.name === id);
    return res.status(200).send(probando);
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
