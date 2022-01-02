import axios from "axios";
import SERVER_URL from "./SERVER_URL";

export default async function getUser(id) {
  const user = await axios.get(`${SERVER_URL}user/${id}`);
  return user.data;
}
