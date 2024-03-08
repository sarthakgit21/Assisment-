import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


// Connection URL
const mongoURI = process.env.MONGO_URI;
// console.log(mongoURI);

export const dbconnect = () => {
  mongoose
    .connect(mongoURI, { dbName: "INTERN_ASSISMENT" })
    .then(() => {
      console.log("db connected");
    })
    .catch((e) => {
      console.log("error", e);
    });
};
