import axios from "axios";

const getCSRFToken = async () => {
  let result = await axios({
    method: "GET",
    url: "https://backend.jujitsu-upnvjatim.xyz/api/check_csrf/honeybadger",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  if (result.data) {
    return result.data;
  } else {
    return result;
  }
};

const viewData = async (url) => {
  let result = await axios({
    method: "GET",
    url: url,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });

  if (result.data) {
    return result.data;
  } else {
    return result;
  }
};

const insertData = async (api) => {
  let token = await getCSRFToken();
  let result = await axios({
    method: "POST",
    url: api.url,
    headers: {
      "Content-Type": "application/json",
      "X-XSRF-TOKEN": token,
    },
    data: api.body,
  });

  return result;
};

const deleteData = async (api) => {
  let token = await getCSRFToken();
  let result = await axios({
    method: "POST",
    url: api.url,
    headers: {
      "Content-Type": "application/json",
      "X-XSRF-TOKEN": token,
    },
    data: api.body,
  });

  return result;
};

export { getCSRFToken, viewData, insertData, deleteData };
