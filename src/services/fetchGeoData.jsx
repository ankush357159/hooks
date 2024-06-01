import axios from "axios";

const fetchGeoData = () => {
  const url = process.env.REACT_APP_URL;
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((response) => {
        const latitudes = response.data.users.map((user) => parseFloat(user.address.geo.lat));
        const longitudes = response.data.user.map((user) => parseFloat(user.address.geo.lng));
        resolve({ latitudes, longitudes });
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default fetchGeoData;
