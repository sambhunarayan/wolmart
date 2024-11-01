import axios from "axios";
import Cipher from "../utility/cipher";
const apiUrl = import.meta.env.VITE_API_URL;
const encKey = import.meta.env.VITE_ENC_KEY;
const decKey = import.meta.env.VITE_DEC_KEY;

console.log("ENC KEY", encKey)
console.log("DEC KEY", decKey)




const apiClient = axios.create({
  headers: {
    Authorization: localStorage.getItem("accessToken"),
    "Content-Type": "application/json",
  },
});

export const fetchData = async (requestModel) => {

  const cipher = new Cipher();
  const encryptedRequestData = await cipher.encrypt(
    requestModel, encKey
  );

  // Print the headers before the request
  // console.log("Authorization header:", apiClient.defaults.headers);

  // Print the encrypted request data
  // console.log("Encrypted request data:", encryptedRequestData);

  try {
    const response = await apiClient.post(apiUrl, {
      query: encryptedRequestData,
    });

    // Print the response headers and data
    // console.log("Response headers:", response.headers);
    // console.log("Response data:", response.data);

    const decryptedResponse = await cipher.decrypt(
      response.data, decKey
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