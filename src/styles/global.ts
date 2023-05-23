import * as RadioGroup from "@radix-ui/react-radio-group";

import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["yellow-500"]};
}

body {
    background-color: ${(props) => props.theme["gray-600"]};
    color: ${(props) => props.theme["gray-300"]};
    -webkit-font-smoothing: antialiased;
}

body, input, button {
    font: 400 1rem 'Roboto', sans-serif;
}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 1rem;
`;

export const FormInput = styled.input`
  background: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
  border: 0;

  padding: 1rem;
  border-radius: 6px;
  width: 100%;

  //hack pra espaçar entre os campos do form excluindo o primeiro
  & + & {
    margin-top: 1rem;
  }
`;

export const FormButton = styled.button`
  background: ${(props) => props.theme["yellow-300"]};
  width: 100%;

  padding: 1rem 0;
  margin-top: 1.5rem;

  border-radius: 6px;
  border: 1px solid ${(props) => props.theme["yellow-300"]};
  font-weight: bold;

  transition: background 0.5s ease;

  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme["yellow-500"]};
    border: 1px solid ${(props) => props.theme["yellow-500"]};
  }
`;

interface TransactionTypeButtonProps {
  variant: "income" | "outcome";
}

export const TransactionTypeContainer = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1 rem;
  margin-top: 1rem;
  width: 100%;
`;

//CORRIGIR ESPAÇO ENTRE BOTÔES
export const TransactionTypeButton = styled(
  RadioGroup.Item
)<TransactionTypeButtonProps>`
  cursor: pointer;
  background: ${(props) => props.theme["gray-700"]};
  color: ${(props) => props.theme["gray-300"]};
  padding: 1rem;
   
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  border-radius: 6px;
  border: 0;

  svg {
    color: ${(props) =>
      props.variant === "income"
        ? props.theme["green-500"]
        : props.theme["red-500"]};
  }

  &[data-state="checked"] {
    transition: background 0.3s;

    color: ${(props) => props.theme.white};
    background: ${(props) =>
      props.variant === "income"
        ? props.theme["green-500"]
        : props.theme["red-500"]};
    outline: ${(props) =>
      props.variant === "income"
        ? props.theme["green-500"]
        : props.theme["red-500"]};

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`;
