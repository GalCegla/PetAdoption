import axios from "axios";
import SERVER_URL from "./SERVER_URL";

export default async function getUserPets(id) {
  const pets = await axios.get(`${SERVER_URL}user/${id}/pets`);
  return pets.data;
}
