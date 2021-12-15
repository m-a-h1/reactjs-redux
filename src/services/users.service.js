import apiClient from "../helper/apiClient";

class userService {
  getAllUsers = () => apiClient().get("users");
}

export default new userService();
