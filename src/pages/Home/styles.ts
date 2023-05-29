import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 1.5rem auto 0;

  @media only screen and (max-width: 1440px) {
    max-width: 1024px;
  }
`;

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  td {
    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }

  thead {
    td {
      padding: 1rem 2rem;
    }
  }

  tbody {
    td {
      padding: 1.25rem 2rem;
      background: ${(props) => props.theme["gray-500"]};
    }
  }
`;

interface PriceHighlightProps {
  variant?: "income" | "outcome";
}

export const PriceHighLight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === "income"
      ? props.theme["green-500"]
      : props.theme["red-500"]};
`;
