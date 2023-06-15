import { TransactionService } from "../../services/TransactionService/TransactionService";

import {
  loadTransaction, loadTransactionDone,
} from "../../stores/TransactionStore/TransactionEvents";

import { SearchFormProps } from "../../components/SearchForm";
import { TransactionValues } from "../../domains/transaction";


const execute = async ({
    busca,
  }: SearchFormProps): Promise<void> => {
    loadTransaction();

    return TransactionService.getTransactionBySearch({busca})
    .then((transactions: TransactionValues[]) => 
      {

        loadTransactionDone(transactions)
        // transaction.description.toUpperCase.includes(
        //   JSON.stringify(busca).toUpperCase()
        // ) ||
        //   transaction.category.description
        //     .toUpperCase()
        //     .includes(JSON.stringify(busca).toUpperCase());
        }
        )
    };
  /*
return response.data.filter((transaction: any) => {
    transaction.description.toUpperCase.includes(
      JSON.stringify(busca).toUpperCase()
    ) ||
      transaction.category.description
        .toUpperCase()
        .includes(JSON.stringify(busca).toUpperCase());
    })}*/

const GetTransactionsBySearchUseCase = {
  execute,
};

export default GetTransactionsBySearchUseCase;
