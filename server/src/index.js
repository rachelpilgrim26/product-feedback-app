import express from "express";
import pg from "pg";
import config from "./config.js";

const db = new pg.Pool({
  connectionString: config.databaseUrl,
  ssl: true,
});
const app = express();
app.use(express.json());
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port #${port}`);
});
