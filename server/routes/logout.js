const jwt = require("jsonwebtoken");

exports.logout = async (req, res) => {
  res.clearCookie("token");
  return res.sendStatus(200);
};
