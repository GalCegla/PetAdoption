import axios from "axios";
import SERVER_URL from "./SERVER_URL";

export default async function login(data) {
  const { email, password } = data;
  try {
    const resData = await axios.post(`${SERVER_URL}login`, {
      email,
      password,
    });
    window.localStorage.setItem("token", resData.data.token);
    return resData.data;
  } catch (error) {
    console.log(error.message);
    return false;
  }
}
