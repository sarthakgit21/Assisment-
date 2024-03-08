import mongoose from "mongoose";

// Define a schema for the data
const formDataSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  hobbies: {
    type: String,
    required: true,
  },
});

// Create a model using the schema
const FormData = mongoose.model("FormData", formDataSchema);

export default FormData;
