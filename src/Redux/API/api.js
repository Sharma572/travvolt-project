import axios from "axios";

function api() {
  const userB2BRegistration = (formData1) => {
    return axios({
      method: "POST",
      url: "/travvolt/b2b/register",
      baseURL: "http://35.154.173.27:8000",
      data: formData1,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  return { userB2BRegistration };
}

const userLoginApi = api();

export default userLoginApi;
