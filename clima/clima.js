const axios = require("axios");

const getClima = async (lat, lng) => {
  const resp = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=8dd036fb578b44f2216e09e570fb2c11&units=metric`
  );
  return resp.data.main.temp;
};

module.exports = {
  getClima,
};
