import "../App.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import axios from "axios";
import { AuthContext } from "../AuthContext";

const Navbar = () => {
  const context = useContext(AuthContext);

  const handleLogout = () => {
    axios
      .get("/api/logout")
      .then(() => {
        context?.setName("");
        context?.setAuthenticated(false);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="nav-bar">
      <div className="nav-item">
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "blue" : "black",
          })}
          to="/"
        >
          Home
        </NavLink>
      </div>

      <div className="nav-item">
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "blue" : "black",
          })}
          to="/profile"
        >
          Profile
        </NavLink>
      </div>
      {context?.isAuthenticated && context.name ? (
        <div className="nav-item">
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "blue" : "black",
            })}
            onClick={handleLogout}
            to={"/"}
          >
            Log Out
          </NavLink>
        </div>
      ) : (
        <div className="nav-item">
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "blue" : "black",
            })}
            to="/login"
          >
            Login
          </NavLink>
        </div>
      )}
    </div>
  );
};
export default Navbar;
