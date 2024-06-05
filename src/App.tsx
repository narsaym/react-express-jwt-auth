import "./App.css";
import Login from "./Components/Login";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Profile from "./Components/Profile";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
