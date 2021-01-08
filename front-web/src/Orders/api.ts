import axios from "axios";

const API_URI = 'http://localhost:8080';

export function fetchProducts(){
    return axios(`${API_URI}/products`)
}