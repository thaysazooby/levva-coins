import { ReactNode } from "react";

import {
  HeaderContainer,
  HeaderContent,
  NewCategoryButton,
  NewTransactionButton,
  UserAvatar,
} from "./styles";

import levvaCoinsLogo from "../../assets/logo.svg";
import { Modal } from "../Modal";
import {
  Form,
  FormButton,
  FormInput,
  TransactionTypeButton,
  TransactionTypeContainer,
} from "../../styles/global";
import { ArrowCircleDown, ArrowCircleUp } from "phosphor-react";

export function Header() {
  const newCategoryButton: ReactNode = (
    <NewCategoryButton>Nova Categoria</NewCategoryButton>
  );
  const newTransactionButton: ReactNode = (
    <NewTransactionButton>Nova Transação</NewTransactionButton>
  );
  const userAvatar: ReactNode = (
    <UserAvatar src="https://github.com/jemluz.png" alt="Jemima Luz" />
  );

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={levvaCoinsLogo} alt=" Levva Coins" />

        <div>
          <Modal title="Nova categoria" trigger={newCategoryButton}>
            <Form>
              <FormInput title="Nova categoria" value="Descricao" />
              <FormButton type="submit">Cadastrar</FormButton>
            </Form>
          </Modal>
          
          <Modal title="Nova transação" trigger={newTransactionButton}>
            <Form>
              <FormInput type="text" placeholder="Descrição" required />
              <FormInput type="number" placeholder="Preço" required />
              <FormInput type="text" placeholder="Categoria" required />

              <TransactionTypeContainer>
                <TransactionTypeButton variant="income" value="income">
                  <ArrowCircleUp size={24} />
                  Entrada
                </TransactionTypeButton>
                <TransactionTypeButton variant="outcome" value="outcome">
                  <ArrowCircleDown size={24} />
                  Saída
                </TransactionTypeButton>
              </TransactionTypeContainer>

              <FormButton type="submit">Cadastrar</FormButton>
            </Form>
          </Modal>
        </div>

        <Modal title="Meu perfil" trigger={userAvatar}>
          <Form>
            <UserAvatar
              src="https://github.com/jemluz.png"
              alt="Foto de perfil"
              variant="large"
            />
            <FormInput type="name" value="Jemima Luz" />
            <FormInput
              type="email"
              placeholder="jemima.luz@levva.io"
              disabled
            />
            <FormButton type="submit">Atualizar</FormButton>
          </Form>
        </Modal>
      </HeaderContent>
    </HeaderContainer>
  );
}
