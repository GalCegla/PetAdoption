import axios from "axios";
import SERVER_URL from "./SERVER_URL";

export default async function searchPets(queryData) {
  const pets = await axios.get(`${SERVER_URL}pet/search`, {
    params: {
      queryData: queryData,
    },
  });
  return pets.data;
}
