import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { MagnifyingGlass } from "phosphor-react";

import { SearchFormContainer } from "./styles";
import { FormInput } from "../../styles/global";
import GetTransactionsBySearchUseCase from "../../useCases/GetTransactionsBySearchUseCase/GetTransactionsBySearchUseCase";

export interface SearchFormProps {
  busca: string;
}

const formSchema = yup
  .object({
    busca: yup.string().required("Digite uma palavra."),
  })
  .required();

export function SearchForm() {
  const { register, handleSubmit } = useForm<SearchFormProps>({
    resolver: yupResolver(formSchema),
  });

  function handleSearch({ busca }: SearchFormProps) {
    //console.log({ busca });

    GetTransactionsBySearchUseCase.execute({ busca });
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearch)}>
      <FormInput
        {...register("busca")}
        type="text"
        placeholder="Busque por transacões"
      />

      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
}
