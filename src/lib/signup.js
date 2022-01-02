import axios from "axios";
import SERVER_URL from "./SERVER_URL";

export default async function signup(data) {
  const { firstName, lastName, email, password, phoneNumber } = data;
  const userData = { firstName, lastName, email, password, phoneNumber };
  try {
    const response = await axios.post(`${SERVER_URL}signup`, userData);
    const resData = response.data;
    console.log(resData);
    window.localStorage.setItem("token", resData.token);
    return resData;
  } catch (error) {
    console.log(error.message);
    return false;
  }
}
