import dotenv from "dotenv";
import express from "express";
import { sequlize } from "./config/database";

dotenv.config();

const app = express();

const port = process.env.PORT || 4000;

(async () => {
  try {
    await sequlize.sync();
    console.log("database sync successfully");
  } catch (error) {
    console.error("❌ Error syncing database:", error);
  }
})();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
