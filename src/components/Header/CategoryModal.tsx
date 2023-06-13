import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useStore } from "effector-react";

import NewCategoryUseCase from "../../useCases/NewCategoryUseCase/NewCategoryUseCase";

import CategoryStore from "../../stores/CategoryStore/CategoryStore";

import { NewCategoryButton } from "./styles";

import { Modal } from "../Modal";
import { Form, FormButton, FormError, FormInput } from "../../styles/global";
import { useRef } from "react";

interface FormProps {
  description: string;
}

const formSchema = yup
  .object({
    description: yup.string().required("O nome da categoria é obrigatório."),
  })
  .required();

export function CategoryModal() {
  const closeModalRef = useRef<HTMLButtonElement>(null);

  const { isLoading, hasError, errorMessage } = useStore(CategoryStore);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: yupResolver(formSchema),
  });

  async function handleCreateCategory({ description }: FormProps) {
    NewCategoryUseCase.execute({ description })
      .then(() => closeModalRef.current?.click())
      .finally(() => reset());
  }

  return (
    <Modal
      title="Nova categoria"
      closeModalRef={closeModalRef}
      trigger={<NewCategoryButton>Nova categoria</NewCategoryButton>}
    >
      <Form onSubmit={handleSubmit(handleCreateCategory)}>
        <FormInput {...register("description")} placeholder="Descrição" />
        {errors.description && (
          <FormError>{errors.description.message}</FormError>
        )}

        {hasError && <FormError>{errorMessage}</FormError>}

        <FormButton type="submit">
          {isLoading ? "Carregando..." : "Cadastrar"}
        </FormButton>
      </Form>
    </Modal>
  );
}