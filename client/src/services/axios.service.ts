import axios from "axios";

class AxiosService {
  init() {
    axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
  }
};

export default new AxiosService();
