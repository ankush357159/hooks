import axios from "axios";

function fetchDataFromExternalSystem() {
  const url = process.env.REACT_APP_URL;
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((response) => resolve(response.data))
      .catch((error) => {
        reject(error);
      });
  });
}
export default fetchDataFromExternalSystem;
