import axios from "axios";

export const addProductRequest = async ({ token, formData }) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/products/add",

      formData,
      {
        headers: {
          "x-access-token": token,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("response of add product", response.data.Response)

    return response.data.Response;
  } catch (error) {
    console.error("error in adding product", error.response);
    throw new Error(
      error.response ||
        "Unable to login Please check your credentials and try again."
    );
  }
};
