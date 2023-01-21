import axios from "axios";
import { apiURL } from "../../Constants/constant";

function api() {
  const userIP = (formData) => {
    return axios.get("https://api.ipify.org?format=json");
  };
// user table data 
  const usersTableData =(payload)=>{
    
   return axios.get("http://api.travvolt.com/travvolt/user/getallusers")
   
  }

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

  const adminAuth = (payload) => {
    return axios({
      method: "POST",
      url: "/api/auth/signin",
      baseURL: `${apiURL.baseURL}`,
      data: payload,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const adminSignOut = (payload) => {
    return axios({
      method: "POST",
      url: "/api/auth/signout",
      baseURL: `${apiURL.baseURL}`,
      data: payload,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const activeStatus = (payload) => {
    return axios({
      method: "POST",
      url: "/travvolt/user/update",
      baseURL: `${apiURL.baseURL}`,
      data: payload,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  const markUpStatus = (payload) => {
    return axios({
      method: "POST",
      url: "/travvolt/user/setmarkup",
      baseURL: `${apiURL.baseURL}`,
      data: payload,
      headers: {
        "Content-Type": "application/json",
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

  return { userB2BRegistration, userIP, oneWaySearch, userB2BLogin,usersTableData,adminAuth,adminSignOut,activeStatus,markUpStatus };
}

const userApi = api();

export default userApi;
