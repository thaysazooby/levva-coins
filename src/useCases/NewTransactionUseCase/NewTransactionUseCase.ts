import { TransactionService } from "../../services/TransactionService/TransactionService";

import {
    loadTransaction,
    loadCreateTransactionDone,
    loadTransactionFail,
} from "../../stores/TransactionStore/TransactionEvents";

import { NewTransactionParams } from "../../domains/transaction";
import { RequestError } from "../../domains/requestError";

const execute = async ({
    description,
    amount,
    type,
    transactionId,
}: NewTransactionParams): Promise<void> => {
    loadTransaction();

    return TransactionService.createTransaction({
        description,
        amount,
        type,
        transactionId,
    })
    .then(() => {
        loadCreateTransactionDone();
    })
    .catch(({ hasError, message }: RequestError) => {
        loadTransactionFail({ hasError, message });
        throw new Error();
    })
};

const NewTransactionUseCase = {
    execute,
};

export default NewTransactionUseCase;