import axios from "axios";
import SERVER_URL from "./SERVER_URL";

export default async function getPets() {
  const pets = await axios.get(SERVER_URL + "pet");
  return pets;
}
