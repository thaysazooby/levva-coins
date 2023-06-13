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
  transactionId,
}: NewTransactionParams): Promise<void> => {
  return Api.post({
    url: "/transaction",
    body: {
      description,
      amount,
      type,
      transactionId,
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

export const getTransactionBySearch = async ({
  busca,
}: SearchFormProps): Promise<TransactionValues[]> => {
  return Api.get({
    url: "/transaction",
  }).then((response) => {
    return response.data.filter((transaction: any) => {
      transaction.description.toUpperCase.includes(
        JSON.stringify(busca).toUpperCase()
      ) ||
        transaction.category.description
          .toUpperCase()
          .includes(JSON.stringify(busca).toUpperCase());
    });
  });
};

//return response.data.map(transaction => transaction.description.toUpperCase().filter(JSON.stringify(busca).toUpperCase()))

export const TransactionService = {
  createTransaction,
  getTransactions,
  getTransactionBySearch,
};
