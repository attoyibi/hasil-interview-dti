import axios from "axios";

const ApiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// interceptors
ApiClient.interceptors.response.use(
  (response) => response.data,
  (config) => {
    // error handling

    // 401

    // 403

    return Promise.reject(config);
  }
);

export default ApiClient;
