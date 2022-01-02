import axios from "axios";
import SERVER_URL from "./SERVER_URL";

export default async function getUsers() {
  const response = await axios(SERVER_URL + "user");
  return response.data;
}
