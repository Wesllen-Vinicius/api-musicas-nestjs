import axios from "axios";

function getAPIClient(_ctx?: any) {
  const api = axios.create({
    baseURL: "http://localhost:3001",
  });

  api.interceptors.request.use((config: any) => {
    return config;
  });

  return api;
}

export const api = getAPIClient();
