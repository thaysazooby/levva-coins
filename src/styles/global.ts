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

    padding-top: 1rem;
`;

export const FormInput = styled.input`
    background: ${props => props.theme.black};
    color: ${props => props.theme.white};
    border: 0;

    padding: 1rem;
    border-radius: 6px;

    //hack pra espaçar entre os campos do form excluindo o primeiro
    & + & {
        margin-top: 1rem;
    }
`;

export const FormButton = styled.button`
    background: ${props => props.theme["yellow-300"]};

    padding: 1rem 0;
    margin-top: 1rem;

    border-radius: 6px;
    border: 1px solid ${props => props.theme["yellow-300"]};
    font-weight: bold;

    transition: background 0.5s ease;

    &:hover {
        cursor: pointer;
        background: ${props => props.theme["yellow-500"]};
        border: 1px solid ${props => props.theme["yellow-500"]};
    }
`;