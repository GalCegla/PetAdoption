import axios from "axios";
import SERVER_URL from "./SERVER_URL";

export default async function verify(token) {
  try {
    const verified = await axios.post(SERVER_URL + "auth/verify", { token });
    return verified;
  } catch (error) {
    console.log(error.message);
    localStorage.removeItem("token");
    return false;
  }
}
