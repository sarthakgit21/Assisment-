import FormData from "../models/model.js";

export const submitformdata = async (req, res) => {
  const { name, phoneNumber, email, hobbies } = req.body;
  //   console.log(name);
  if (!name || !email || !phoneNumber || !hobbies) {
    res.status(400);
    throw new Error("Please Enter all the Feilds");
  }
  console.log(name, email, phoneNumber, hobbies);
  const formdata = await FormData.create({
    name: name,
    phoneNumber: phoneNumber,
    email: email,
    hobbies: hobbies,
  });

  if (formdata) {
    res.status(201).json({
      name: formdata.name,
      email: formdata.email,
      hobbies: formdata.hobbies,
      phoneNumber: formdata.phoneNumber,
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
};
