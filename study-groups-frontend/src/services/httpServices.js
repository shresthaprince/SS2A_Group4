import Axios from "axios";
import { toast } from "react-toastify";

Axios.interceptors.response.use(
  async (response) => {
    const minimumDelay = 1000;
    const [responseWithDelay] = await Promise.all([
      response,
      new Promise((resolve) => setTimeout(resolve, minimumDelay)),
    ]);

    return responseWithDelay;
  },
  (error) => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

    if (!expectedError) {
      console.log(error);
      toast.error("Unexpected error occured");
    }

    return Promise.reject(error);
  }
);

function setJwt(jwt) {
  Axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
  get: Axios.get,
  post: Axios.post,
  put: Axios.put,
  delete: Axios.delete,
  setJwt,
};
