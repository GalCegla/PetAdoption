import axios from "axios";
import SERVER_URL from "./SERVER_URL";

export default async function savePet(petId, userId, method) {
  try {
    if (method === "save") {
      const response = await axios.post(`${SERVER_URL}pet/${petId}/save`, {
        userId,
      });
      return response.data;
    } else if (method === "delete") {
      const response = await axios.delete(`${SERVER_URL}pet/${petId}/save`, {
        params: {
          userId,
        },
      });
      return response.data;
    } else {
      console.log("method should be either 'save' or 'delete'");
    }
  } catch (error) {
    throw new Error(error);
  }
}
