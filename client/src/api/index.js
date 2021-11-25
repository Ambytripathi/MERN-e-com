import axios from "axios";


import { userRequest, BASE_URL } from "../requestMethods";

export const fetchProductsByCategory = (cat) => axios.get(`http://localhost:5000/api/products?category=${cat}`);
export const fetchAllProducts = () => axios.get("http://localhost:5000/api/products");
export const fetchProductbyId = (id) => axios.get(`${BASE_URL}products/find/${id}`);

export const signIn = ({ username, password }) => userRequest.post('/auth/login', { username, password });
export const signUp = (formData) => userRequest.post('/auth/register', formData);