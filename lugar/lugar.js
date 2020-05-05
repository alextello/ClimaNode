const axios = require("axios");

const getLugarLatLng = async (direccionArg) => {
  const encodeUrl = encodeURI(direccionArg);
  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
    headers: {
      "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
      "x-rapidapi-key": "76b5601b4emsh9eb6a9038071fb0p159781jsn278d8b87c5ba",
    },
  });

  const resp = await instance.get();
  if (resp.data.Results.length === 0) {
    throw new Error("No hay resultados para " + direccionArg);
  }

  const data = resp.data.Results[0];
  const direccion = data.name;
  const lat = data.lat;
  const lng = data.lon;

  return {
    direccion,
    lat,
    lng,
  };
};

module.exports = {
  getLugarLatLng,
};
