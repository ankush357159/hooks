import { useEffect, useState } from "react";
import fetchGeoData from "../../services/fetchGeoData";
import NonReactWidget from "./NonReactWidget";

const GeoChartComponent = () => {
  const [getData, setGeoData] = useState({ latitudes: [], longitudes: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchGeoData();
        setGeoData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    getData();
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "70%",
        paddingInline: "15%",
        marginTop: "5%",
      }}
    >
      <NonReactWidget data={getData} chartLabel="Latitude vs Longitude data" />
    </div>
  );
};

export default GeoChartComponent;
