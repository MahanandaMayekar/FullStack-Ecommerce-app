import axiosconfig from '@/config/axiosconfig';

export const loginRequest = async ({email,password}) => {
    try {
        const response = await axiosconfig.post("/users/Login",{email,password});
        console.log(
          "Successfully login",
          response.data.Response
        );
        return response.data.Response;
        
    } catch (error) {
        console.log("error in login",error.response.data.message);
        throw new Error(
          "error in login ",
          error.response.data.message || "failed to log in"
        );
        
        
    }
}


export const registerUserRequest = async ({email,password,name}) => {
  try {
    const response = await axiosconfig.post("/users/register", { email, password, name });
     console.log("Successfully registered a new user", response.data.Response);
     return response.data.Response;
    
  } catch (error) {
    console.log("error in signIn", error.response.data);
    throw new Error(
      "error in signIn ",
      error.response.data || "failed to register a new user"
    );
    
  }
}