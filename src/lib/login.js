import axios from "axios";

export default async function login(data) {
  const { email, password } = data;
  try {
    const resData = await axios.post(`http://localhost:5000/login`, {
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
