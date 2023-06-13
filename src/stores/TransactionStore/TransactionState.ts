import { TransactionValues } from "../../domains/transaction";

export interface TransactionState {
    isLoading: boolean;
    transactions: TransactionValues[];
    hasError: boolean;
    errorMessage: string;
}