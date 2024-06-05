import { useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../AuthContext";

const Profile = () => {
  const context = useContext(AuthContext);

  const fetchUser = async () => {
    axios
      .get("/api/user", { withCredentials: true })
      .then((res) => {
        context?.setName(res.data.name);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {context?.name && context.isAuthenticated ? (
        <div>
          <div>
            Hello <strong>{context.name}</strong>, you are successfully logged
            in!{" "}
          </div>
        </div>
      ) : (
        <div>
          You are not authenticated, you must be be authenticated to view this
          page. Please login first.
        </div>
      )}
    </div>
  );
};
export default Profile;
