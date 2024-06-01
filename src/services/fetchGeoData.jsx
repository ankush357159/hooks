import axios from "axios";

const fetchGeoData = () => {
  const url = process.env.REACT_APP_URL;
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((response) => {
        console.log("Response: ", response)
        const latitudes = response.data.map((res) => parseFloat(res.address.geo.lat));
        const longitudes = response.data.map((res) => parseFloat(res.address.geo.lng));
        resolve({ latitudes, longitudes });
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default fetchGeoData;
