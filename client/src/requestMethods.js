import axios from "axios";

export const BASE_URL = "https://e-com-ekana-api.herokuapp.com/api/";

const user = JSON.parse(localStorage.getItem('profile'))
const TOKEN = user && user.accessToken

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
