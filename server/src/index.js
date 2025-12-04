/* --------------------------------
// Server/API for Product Feedback App

// DB Fiddle Link:
// https://www.db-fiddle.com/f/nNLWQEWEkUdLZuHyjGdVW6/0
// ----------------------------------*/

/*----------------------------------
// Boilerplate Code to Set Up Server
// ----------------------------------*/

import express from "express";
import pg from "pg";
import config from "./config.js";
import cors from "cors";

const db = new pg.Pool({
  connectionString: config.databaseUrl,
  ssl: true,
});
const app = express();
app.use(express.json());
app.use(cors());

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port #${port}`);
});

/*----------------------------------
// Helper Functions
// ----------------------------------*/

// get all suggestions
async function getAllSuggestions() {
  const dataText = `
    SELECT * FROM suggestions
  `;
  const data = await db.query(dataText);
  return data.rows;
}

// get suggestions filtered by category
async function getSuggestionsByCategory(category) {
  const dataText = `
    SELECT * FROM suggestions
    WHERE category = $1
  `;
  const data = await db.query(dataText, [category]);
  return data.rows;
}

// add one suggestion
async function addOneSuggestion(feedbackTitle, category, feedbackDetail) {
  const dataText = `
    INSERT INTO suggestions (feedback_title, category, feedback_detail)
    VALUES ($1, $2, $3)
    RETURNING *
  `;
  const data = await db.query(dataText, [
    feedbackTitle,
    category,
    feedbackDetail,
  ]);
  return data.rows[0];
}

/*----------------------------------
// API Endpoints
// ----------------------------------*/

// get /get-all-suggestions
app.get("/get-all-suggestions", async (req, res) => {
  const allSuggestions = await getAllSuggestions();
  res.json(allSuggestions);
});

// get /get-suggestions-by-category/:category
app.get("/get-suggestions-by-category/:category", async (req, res) => {
  const category = req.params.category;
  const filteredSuggestions = await getSuggestionsByCategory(category);
  res.json(filteredSuggestions);
});

// post /add-one-suggestion
app.post("/add-one-suggestion", async (req, res) => {
  const data = req.body;
  await addOneSuggestion(
    data.feedback_title,
    data.category,
    data.feedback_detail
  );
  res.send("Success! Suggestion has been added.");
});
