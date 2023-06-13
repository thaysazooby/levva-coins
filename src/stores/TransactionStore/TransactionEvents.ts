import { createEvent } from "effector";

import { RequestError } from "../../domains/requestError";
import { TransactionValues } from "../../domains/transaction";

export const loadTransaction = createEvent("loadTransaction");
export const loadCreateTransactionDone = createEvent(
  "loadCreateTransactionDone"
);
export const loadTransactionDone = createEvent<TransactionValues[]>("loadTransactionDone");
export const loadTransactionFail = createEvent<RequestError>("loadTransactionFail");
