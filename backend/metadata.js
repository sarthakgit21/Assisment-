const defaultFormData = [];

for (let i = 0; i < 20; i++) {
  defaultFormData.push({
    name: "John doe " + (i + 1),
    phoneNumber: 92927847 + i,
    email: "sdadns" + (i + 1) + "@gmail.com",
    hobbies: "badminton " + (i + 1),
  });
}



export default defaultFormData;
