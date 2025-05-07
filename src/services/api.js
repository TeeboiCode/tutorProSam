import axios from "axios";
import Swal from "sweetalert2";

const API_URL = "http://localhost:3000";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || "An error occurred";
    Swal.fire({
      icon: "error",
      title: "Error",
      text: message,
    });
    return Promise.reject(error);
  }
);

export default api;
