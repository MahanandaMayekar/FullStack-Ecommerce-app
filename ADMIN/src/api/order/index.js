import axiosConfig from '@/config/axiosConfig';
import axios from 'axios';


export const adminOrderDetailsRequest = async ({ token }) => {
    try {
          
    const response = await axios.get(
      "http://localhost:8000/api/order/list-orders",
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
    console.log("Successfully fetched admin order details", response.data.Response);

    return response.data.Response;
  } catch (error) {
    console.error("Error from API:", error.response?.data || error);
    throw new Error(
      error.response?.data?.message || "Error in fetching admin order details"
    );
  }
};
