const axios = require("axios");

const http = "https://api.opendota.com/api/";

const getPlayer = async (id) => {
  return await axios.get(http + "players/" + id);
};

export default getPlayer;
