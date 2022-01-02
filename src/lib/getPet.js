import axios from "axios";
import SERVER_URL from "./SERVER_URL";

export default async function getPet(id) {
  const response = await axios.get(`${SERVER_URL}pet/${id}`);
  if (response.status == 400) {
    throw new Error("Something went wrong.");
  }
  return response.data;
}
