import FormData from "../models/model.js";

export const delformdata = async (req, res) => {
  console.log(req.body);
  const { id } = req.body;
  try {
    const deletedDocument = await FormData.findByIdAndDelete(id);
    if (deletedDocument) {
      console.log("Document deleted successfully:", deletedDocument);
      res.status(200).json("done");
    } else {
      console.log("Document not found.");
    }
  } catch (error) {
    console.error("Error deleting document:", error);
  }
};
