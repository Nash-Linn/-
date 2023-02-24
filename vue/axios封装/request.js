import api from "axios.js";

export const login = (params) =>
  api({
    url: "",
    method: "get",
    params,
  });
