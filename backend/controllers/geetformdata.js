import FormData from "../models/model.js";
export const getformdata = async (req,res) => {
  const data = await FormData.find({});
  res.send(data);
};
