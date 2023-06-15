import { AxiosError } from "axios";

import Api from "../../clients/api/Api";

import { CategoryValues, NewCategoryParams } from "../../domains/category";
import { RequestError } from "../../domains/requestError";

const createCategory = async ({
  description,
}: NewCategoryParams): Promise<any> => {
  return Api.post({
    url: "/category",
    body: {
      description,
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((err: AxiosError<RequestError>) => {
      throw err.response?.data;
    });
};

const getCategories = async (): Promise<CategoryValues[]> => {
  return Api.get({
    url: "/category",
  })
    .then((response) => {
      return response.data;
    })
    .catch((err: AxiosError<RequestError>) => {
      throw err.response?.data;
    });
};

export const CategoryService = {
  createCategory,
  getCategories,
};
