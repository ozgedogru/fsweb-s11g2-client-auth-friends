import axios from "axios";

export const createAxiosInstance = () => {
  const token = localStorage.getItem("token");

  return token
    ? axios.create({
        baseURL: "http://localhost:9000/",
        headers: {
          Authorization: token,
        },
      })
    : axios.create({
        baseURL: "http://localhost:9000/",
        headers: {},
      });
};

export let AxiosInstance;

export const renewAxiosInstance = () => {
  AxiosInstance = createAxiosInstance();
};

renewAxiosInstance();
