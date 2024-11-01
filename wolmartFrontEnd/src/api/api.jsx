import axios from "axios";
import Cipher from "../utility/cipher";

const apiClient = axios.create({
  headers: {
    Authorization: "d64610ba366bfd18cAFoLnyRm+4M0EKDHSay3q4/rSvK+LR9xeMdQAEdz2WLLYcFG6fPxobKplgOD4MaPB4PE0aHVl3jM/ArdI/j4O0j3tebEKLZqXbtjUebijg8xLa3IQwyXaevgsCZgUroTObiYoxAjS/3FRrYNyC5HUbGhJVpJyoDF9nrHzDcEX5e4ReTW6TVEzaKCbjJBdZer2a5lTIsQjI4z2HiLg0CK5g5ZF1Fxm71Cx1YRXQwgUvB0ltAG67f4nVIo1C9xKzkjTRhYS+QjNxIXYXKY2oSdg==",
    "Content-Type": "application/json",
  },
});

export const fetchData = async (requestModel) => {

  const cipher = new Cipher();
  const encryptedRequestData = await cipher.encrypt(
    requestModel,
    "JzI0Fpt9Qap7tDiK5JyuGsVgE3BbbFH1"
  );

  // Print the headers before the request
  // console.log("Authorization header:", apiClient.defaults.headers);

  // Print the encrypted request data
  // console.log("Encrypted request data:", encryptedRequestData);

  try {
    const response = await apiClient.post("https://dreamdeal.codesprint.cloud/api/gateway", {
      query: encryptedRequestData,
    });

    // Print the response headers and data
    // console.log("Response headers:", response.headers);
    // console.log("Response data:", response.data);

    const decryptedResponse = await cipher.decrypt(
      response.data,
      "omdbKQg9jCZxeX4O1muy330nWDFpuWjL"
    );

    return decryptedResponse;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error("Error response headers:", error.response.headers);
      console.error("Error response data:", error.response.data);
      throw new Error(`Error: ${error.response.status}`);
    } else {
      console.error("Error:", error);
      throw new Error("An unknown error occurred");
    }
  }
};