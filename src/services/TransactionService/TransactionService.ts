import { AxiosError } from "axios";

import Api from "../../clients/api/Api";

import { RequestError } from "../../domains/requestError";
import {
  NewTransactionParams,
  TransactionValues,
} from "../../domains/transaction";
import { SearchFormProps } from "../../components/SearchForm";

const createTransaction = async ({
  description,
  amount,
  type,
  categoryId,
}: NewTransactionParams): Promise<any> => {
  return Api.post({
    url: "/transaction",
    body: {
      description,
      amount,
      type,
      categoryId,
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((err: AxiosError<RequestError>) => {
      throw err.response?.data;
    });
};

const getTransactions = async (): Promise<TransactionValues[]> => {
  return Api.get({
    url: "/transaction",
  })
    .then((response) => {
      return response.data;
    })
    .catch((err: AxiosError<RequestError>) => {
      throw err.response?.data;
    });
};

const getTransactionBySearch = async ({busca}: SearchFormProps): Promise<TransactionValues[]> => {
  if(busca === null || busca.length <= 0) getTransactions();
  
  return Api.get({
    url: "/transaction",
    config:{
      params: {
        search: busca
      }
    }
  }).then((response) => {
    //console.log(JSON.stringify(busca))

    return response.data;
    /*
    return response.data.filter((transaction: any) => {
      transaction.description.toUpperCase.includes(
        JSON.stringify(busca).toUpperCase()
      ) ||
        transaction.category.description
          .toUpperCase()
          .includes(JSON.stringify(busca).toUpperCase());
    });*/
  }).catch((error: AxiosError<RequestError>) => {
    throw error.response?.data;
    
  });
};

//return response.data.map(transaction => transaction.description.toUpperCase().filter(JSON.stringify(busca).toUpperCase()))

export const TransactionService = {
  createTransaction,
  getTransactions,
  getTransactionBySearch,
};
