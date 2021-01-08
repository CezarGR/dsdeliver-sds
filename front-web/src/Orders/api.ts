import axios from "axios";

const API_URI = 'https://cesar-dsdeliry.herokuapp.com';

export function fetchProducts(){
    return axios(`${API_URI}/products`)
}