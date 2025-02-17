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
        console.log("error in login",error);
        throw new Error("error in login ",error||"failed to log in");
        
        
    }
}