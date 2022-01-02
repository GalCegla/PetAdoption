import axios from "axios";
import SERVER_URL from "./SERVER_URL";

export default async function updateUser(data, id) {
  const newData = { ...data };
  if (newData._id) {
    delete newData._id;
  }
  const response = await axios.put(`${SERVER_URL}user/${id}`, newData);
  if (response.status != 200) {
    console.log(response);
    throw new Error("Something went wrong.");
  }
  console.log("Updated user.");
  return response;
}
