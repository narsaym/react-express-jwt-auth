const jwt = require("jsonwebtoken");

const mockUserInfoInDatabase = {
  userName: "jondoe",
  password: "jondoe",
};

exports.login = async (req, res) => {
  try {
    const { userName, password } = req.body;

    if (
      userName === mockUserInfoInDatabase.userName &&
      password === mockUserInfoInDatabase.password
    ) {
      const user = { username: mockUserInfoInDatabase.userName };
      const token = await jwt.sign(user, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      if (token) {
        res.cookie("token", token, { httpOnly: true });
        return res.json(user);
      }
    }

    return res.sendStatus(401);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
};
