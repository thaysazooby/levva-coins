import { AxiosError } from "axios";

import Api from "../../clients/api/Api";

import { LoginParams, LoginValues } from "../../domains/login";
import { RequestError } from "../../domains/requestError";

const authenticateUser = async ({
  email,
  password,
}: LoginParams): Promise<LoginValues> => {
  return Api.post({
    url: "/auth",
    body: {
      email,
      password,
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((err: AxiosError<RequestError>) => {
      throw err.response?.data;
    });
};

export const LoginService = {
  authenticateUser,
};
