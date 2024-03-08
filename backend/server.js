import express from "express";
import cors from "cors";
const app = express();
import data from "./metadata.js";

// console.log(data);

import { dbconnect } from "./database/database.js";
import dotenv from "dotenv";
import { submitformdata } from "./controllers/submitformdata.js";
import { getformdata } from "./controllers/geetformdata.js";
import { delformdata } from "./controllers/delformdata.js";
import { updateform } from "./controllers/updateform.js";

dotenv.config();

// Connection URL
const PORT = process.env.PORT;
// console.log(PORT);
dbconnect();

app.listen(PORT, () => {
  console.log("server running", { PORT });
});

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"], // here goes any Frontend IP Adress
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/",getformdata);
app.delete("/",delformdata);
app.post("/",submitformdata);
app.put("/",updateform);
