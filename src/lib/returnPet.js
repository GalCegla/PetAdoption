import axios from "axios";
import SERVER_URL from "./SERVER_URL";

export default async function returnPet(petId, userId) {
  try {
    const response = await axios.post(`${SERVER_URL}pet/${petId}/return`, {
      userId,
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}
