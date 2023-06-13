import * as Dialog from "@radix-ui/react-dialog";

import styled, { css } from "styled-components";

export const HeaderContainer = styled.div`
  height: 212px;

  background: linear-gradient(
    to bottom,
    ${(props) => props.theme.black},
    ${(props) => props.theme["gray-600"]}
  );

  border-bottom: 1px solid ${(props) => props.theme["yellow-500"]}30;
`;

export const HeaderContent = styled.header`
  display: flex;
  justify-content: space-between;
  padding-top: 2.5rem;

  max-width: 1120px;
  margin: 0 auto;

  @media only screen and (min-width: 1440px) {
    position: relative;
  }

  @media only screen and (max-width: 1440px) {
    max-width: 1024px;
  }
`;

export const NewCategoryButton = styled.button`
  height: 50px;
  background: ${(props) => props.theme["gray-500"]};
  border: 1px solid transparent;
  color: ${(props) => props.theme.white};
  font-weight: bold;

  border-radius: 6px;

  padding: 0 1.25rem;
  margin-right: 1rem;

  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme["gray-600"]};
    color: ${(props) => props.theme["yellow-500"]};
    border: 1px solid ${(props) => props.theme["yellow-500"]};
  }
`;

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  background: ${(props) => props.theme["yellow-300"]};
  color: ${(props) => props.theme["gray-600"]};
  font-weight: bold;

  border-radius: 6px;

  padding: 0 1.25rem;

  transition: background-color 0.3s;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme["yellow-500"]};
  }
`;

interface UserAvatarProps {
  variant?: "large";
}

export const UserAvatar = styled.img<UserAvatarProps>`
  width: 3.1rem;
  height: 100%;

  border-radius: 50%;
  border: 2px solid transparent;
  box-shadow: 0px 0px 10px 10px #00000010;

  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    border: 2px solid ${(props) => props.theme["yellow-500"]};
    box-shadow: 0px 0px 10px 20px #00000015;
  }

  ${(props) =>
    props.variant === "large"
      ? css`
          width: 8rem;
          height: 8rem;
          margin-bottom: 1rem;
        `
      : css`
          @media only screen and (min-width: 1440px) {
            position: absolute;
            height: auto;
            right: -6rem;
          }
        `}
`;

export const SignOutButton = styled.button`
  background: ${(props) => props.theme["gray-600"]};
  color: ${(props) => props.theme["white"]};
  width: 100%;

  padding: 1rem 0;
  margin-top: 1.5rem;

  border-radius: 6px;
  border: 1px solid ${(props) => props.theme["yellow-300"]};
  font-weight: bold;

  transition: all 0.5s ease;

  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme["yellow-500"]};
    border: 1px solid ${(props) => props.theme["yellow-500"]};
    color: ${(props) => props.theme["black"]};
  }
`;

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: #00000075;
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme["gray-600"]};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CloseButton = styled(Dialog.Close)`
  cursor: pointer;
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  color: ${(props) => props.theme["gray-400"]};
`;
