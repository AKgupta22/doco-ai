import express from "express";
import dotenv from "dotenv";
import { connectToDatabase } from "./config/db.ts";

dotenv.config();

// Connect to the database
// connectToDatabase();

// import v1 routes

import userRouter from "./routes/v1/users.routes.ts";
import { executeWeatherAgent } from "./agents/weather/weather.agent.ts";

// ------ end of v1 routes ------

const app = express();

// use v1 routes

app.use("/api/v1", userRouter);

// ------ end of v1 routes use ------

// LLM Calls

executeWeatherAgent("Who are you?")


app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Express server!" });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
