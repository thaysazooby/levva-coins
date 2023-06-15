import { useEffect } from "react";
import { useStore } from "effector-react/effector-react.mjs";

import TransactionStore from "../../stores/TransactionStore/TransactionStore";

import GetTransactionsUseCase from "../../useCases/GetTransactionsUseCase/GetTransactionsUseCase";

import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import {
  HomeWrapper,
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
  TransactionsTableEmpty,
} from "./styles";

export function Home() {
  const { isLoading, transactions } = useStore(TransactionStore);

  const money = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const data = new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  useEffect(() => {
    GetTransactionsUseCase.execute();
  }, []);

  return (
    <HomeWrapper>
      <Header />
      <Summary />

      <SearchForm />

      <TransactionsContainer>
        <TransactionsTable>
          <thead>
            <tr>
              <td>Descrição</td>
              <td>Preço</td>
              <td>Categoria</td>
              <td>Data</td>
            </tr>
          </thead>
          <tbody>
            {transactions.length > 0 &&
              transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighLight
                      variant={transaction.type === 0 ? "income" : "outcome"}
                    >
                      {money.format(transaction.amount)}
                    </PriceHighLight>
                  </td>
                  <td>{transaction.category.description}</td>
                  <td>{data.format(new Date(transaction.createdAt))}</td>
                </tr>
              ))}
          </tbody>
        </TransactionsTable>
        {!isLoading && transactions.length === 0 && (
          <TransactionsTableEmpty>
            Adicione uma categoria e a sua primeira transação :)
          </TransactionsTableEmpty>
        )}
      </TransactionsContainer>
    </HomeWrapper>
  );
}
