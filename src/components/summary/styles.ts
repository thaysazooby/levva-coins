import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
  grid-column: 2 / 3;

  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  margin-top: -5rem;
`;

interface SummaryCardProps {
  variant?: "balance";
}

export const SummaryCard = styled.div<SummaryCardProps>`
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
