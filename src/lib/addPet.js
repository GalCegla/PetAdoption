import axios from "axios";
import SERVER_URL from "./SERVER_URL";

export default async function addPet(data) {
  const hypoallergenic = data.hypoallergenic === "Yes" ? true : false;
  const formatData = {
    ...data,
    weight: Number(data.weight),
    height: Number(data.height),
    hypoallergenic,
  };
  const response = await axios.post(SERVER_URL + "pet", formatData);
  if (response.status == 400) {
    console.log(response);
    throw new Error("Something went wrong.");
  }
  console.log("added");
  return response;
}
