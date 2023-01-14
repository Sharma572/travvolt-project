import axios from "axios";
import { apiURL } from "../../Constants/constant";

function api() {
  const userIP = (formData) => {
    return axios.get("https://api.ipify.org?format=json");
  };

  const userB2BLogin = (payload) => {
    return axios({
      method: "POST",
      url: "/travvolt/b2b/login",
      baseURL: `${apiURL.baseURL}`,
      data: payload,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const userB2BRegistration = (formData1) => {
    return axios({
      method: "POST",
      url: "/travvolt/b2b/register",
      baseURL: `${apiURL.baseURL}`,
      data: formData1,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  const oneWaySearch = (payload) => {
    return axios({
      method: "POST",
      url: "/travvolt/flight/search/oneway",
      baseURL: `${apiURL.baseURL}`,
      data: payload,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return { userB2BRegistration, userIP, oneWaySearch, userB2BLogin };
}

const userApi = api();

export default userApi;
