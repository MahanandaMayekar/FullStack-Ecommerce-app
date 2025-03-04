import axiosConfig from '@/config/axiosConfig.js';
import axios from 'axios';

export const loginRequest = async ({ email, password,token}) => {
  try {
    const response = await axios.post("http://localhost:8000/api/users/Login/admin", {
      email,
      password,
    },
      {
        headers: {
        "x-access-token":token
      }
    });
    console.log("response data in login req",response.data.Response);
    
    return response.data.Response;
  } catch (error) {
    console.error("login Error:", error.response.data.message.explanation);
    throw new Error(
      error.response.data.message.message ||
      "Unable to login Please check your credentials and try again."
    );
  }
};
