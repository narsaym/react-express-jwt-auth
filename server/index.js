const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const cors = require("cors");
const { login } = require("./routes/login");
const { verify } = require("./verify");
const { logout } = require("./routes/logout");
const { user } = require("./routes/user");

const app = express();
const port = 3010;

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.post("/api/login", login);
app.get("/api/logout", verify, logout);
app.get("/api/user", verify, user);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
