const jwt = require("jsonwebtoken");

const getMockUserInfoFromDB = () => {
  return {
    name: "Jon Doe",
  };
};

exports.user = async (req, res) => {
  const user = getMockUserInfoFromDB();
  return res.json(user);
};
