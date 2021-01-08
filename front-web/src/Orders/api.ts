import axios from "axios";

const API_URI = 'localhost:8080';

export function fetchProducts(){
    return axios(`${API_URI}/products`)
}