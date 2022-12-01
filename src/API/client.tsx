import axios from 'axios';

const baseURL = 'http://www.thecocktaildb.com/api/json/v1/1';

export const client = axios.create({
  baseURL: baseURL,
});
