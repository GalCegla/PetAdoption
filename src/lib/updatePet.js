import axios from "axios";
import SERVER_URL from "./SERVER_URL";

export default async function updatePet(data, id) {
  const formatData = {
    ...data,
  };
  if (data.hypoallergenic) {
    const hypoallergenic = data.hypoallergenic === "Yes" ? true : false;
    formatData["hypoallergenic"] = hypoallergenic;
  }
  if (data.weight) {
    formatData["weight"] = Number(data.weight);
  }
  if (data.height) {
    formatData["height"] = Number(data.height);
  }
  delete formatData._id;
  try {
    const response = await axios.put(`${SERVER_URL}pet/${id}`, formatData);
    console.log("updated");
    return response;
  } catch (error) {
    return error;
  }
}
