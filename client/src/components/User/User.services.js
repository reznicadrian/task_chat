import axios from "axios";
import history from "../../app/_utils/browserHistory";

const registerUser = async (data) => {
  return await axios
    .post("http://localhost:5000/api/users/register", data)
    .then((response) => {
      localStorage.setItem("user", JSON.stringify(response.data));
      history.push("/");
    });
};

export const userServices = {
  registerUser,
};
