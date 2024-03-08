import FormData from "../models/model.js";

export const updateform = async (req, res) => {
  const val = req.body.id;
  const id = val;
  const {name,} = req.body;
  console.log(req.body);
  try {
    const values = await FormData.findByIdAndUpdate(id, {name:name});
    console.log("Document updated successfully:", values);
    res.status(202).json("done");
  } catch (error) {
    console.error("Error updating document:", error);
  }
};
