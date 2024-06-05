const jwt = require("jsonwebtoken");

exports.verify = async (req, res, next) => {
  const token = req.cookies.token;

  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.JWT_SECRET, (error) => {
    if (error) {
      return res.sendStatus(403);
    }
    next();
  });
};
