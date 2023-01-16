const { Router } = require("express");
const axios = require("axios");
const { Typeofdiet } = require("../db");
const { API } = process.env;

const diets = Router();

diets.get("/", async (req, res) => {
  const dietsapi = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API}&number=100&addRecipeInformation=true`
  );
  const newdiet = await dietsapi.data;
  const probdiet = newdiet.results.flatMap((e) => e.diets);
  // const dobdiet = probdiet.map((e) => {
  //   for (let i = 0; i < e.length; i++) {
  //     return e[i];
  //   }
  // });
  probdiet.forEach((e) => {
    Typeofdiet.findOrCreate({
      where: { name: e.toLowerCase() },
    });
  });

  const nuevaesp = await Typeofdiet.findAll();
  // console.log(nuevaesp);
  res.status(200).send(nuevaesp);
});

module.exports = diets;
