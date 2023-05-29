import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
  display: flex;

  width: 100%;
  max-width: 1120px;
  margin: -5rem auto 4rem;

  gap: 1rem;

  @media only screen and (max-width: 1440px) {
    max-width: 1024px;
  }
`;

interface SummaryCardProps {
  variant?: "balance";
}

export const SummaryCard = styled.div<SummaryCardProps>`
  flex: 1;
  height: 140px;
  
  background: ${(props) => props.theme["gray-500"]};
  border-radius: 6px;
  padding: 2rem;
  box-shadow: 0px 0px 10px 5px #00000010;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;

    @media only screen and (max-width: 1440px) {
      font-size: 1.7rem;
    }
  }

  ${(props) =>
    props.variant === "balance" &&
    css`
      background: linear-gradient(
        to bottom,
        ${props.theme["gray-500"]},
        ${props.theme["gray-700"]}
      );
      border-right: 2px solid ${props.theme["yellow-500"]};
      header {
        color: ${props.theme["yellow-500"]};
      }
      strong {
        color: ${props.theme["yellow-500"]};
      }
    `}
`;
