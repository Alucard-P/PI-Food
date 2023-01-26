const { Router } = require("express");
const axios = require("axios");
const { Typeofdiet } = require("../db");
const { API } = process.env;

const diets = Router();

diets.get("/", async (req, res) => {
  const dietsapi = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API}&number=100&addRecipeInformation=true`
  );
  const diets_api_data = await dietsapi.data;
  const probdiet = diets_api_data.results.flatMap((e) => e.diets);
  probdiet.forEach((e) => {
    Typeofdiet.findOrCreate({
      where: { name: e },
    });
  });

  const list_diet = await Typeofdiet.findAll();
  res.status(200).send(list_diet);
});

module.exports = diets;
