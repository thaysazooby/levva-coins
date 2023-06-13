import { ReactNode } from "react";

import {
  HeaderContainer,
  HeaderContent,
  SignOutButton,
  UserAvatar,
} from "./styles";

import levvaCoinsLogo from "../../assets/logo.svg";
import { Modal } from "../Modal";
import { Form, FormButton, FormInput } from "../../styles/global";
import { router } from "../../Router";
import { CategoryModal } from "./CategoryModal";
import { TransactionModal } from "./TransactionModal";

export function Header() {
  const userAvatar: ReactNode = (
    <UserAvatar src="https://github.com/jemluz.png" alt="Jemima Luz" />
  );

  function handleSignOut() {
    window.localStorage.removeItem("token");
    router.navigate("/login");
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={levvaCoinsLogo} alt="levva Coins" />

        <div>
          <CategoryModal />

          <TransactionModal />
        </div>

        <Modal title="Meu perfil" trigger={userAvatar}>
          <Form>
            <UserAvatar
              src="https://github.com/jemluz.png"
              alt="Jemima Luz"
              variant="large"
            />
            <FormInput type="name" value="Jemima Luz" />
            <FormInput
              type="email"
              placeholder="jemima.luz@levva.io"
              disabled
            />
            <FormButton type="submit">Atualizar</FormButton>
            <SignOutButton type="button" onClick={handleSignOut}>
              Sair
            </SignOutButton>
          </Form>
        </Modal>
      </HeaderContent>
    </HeaderContainer>
  );
}