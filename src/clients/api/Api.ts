import Axios, { AxiosRequestConfig } from "axios";

import { getApiHost } from "../../services/HostService/HostService";
import { LoginValues } from "../../domains/login";

export interface IRequest {
  url: string;
  body?: any;
  config?: AxiosRequestConfig;
}

Axios.interceptors.request.use((config) => {
  const user = JSON.parse(
    window.localStorage.getItem("user") ?? "{}"
  ) as LoginValues;

  if (user.token) config.headers.Authorization = user.token;

  return config;
});

const Api = {
  get: ({ url, body }: IRequest): Promise<any> => Axios.get(`${getApiHost()}${url}`, body),

  post: ({ url, body, config }: IRequest): Promise<any> =>
    Axios.post(`${getApiHost()}${url}`, body, config),

  put: ({ url, body }: IRequest): Promise<any> =>
    Axios.put(`${getApiHost()}${url}`, body),

  delete: ({ url }: IRequest): Promise<any> =>
    Axios.delete(`${getApiHost()}${url}`),
};

export default Api;
