/* @flow */

import axios from 'axios'

export const tethyrAxiosAPI = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 1000
});
