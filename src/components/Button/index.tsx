import * as React from "react";
import styled from "../../styled-components";

// interface Props {
//   children?: React.ReactNode;
//   onClick: () => void;
//   disabled?: boolean;
//   className: string;
// }

const Button = styled.button`
  border-radius: var(--radius-border);
  padding: 10px;
  border: none;
  display: inline-flex;
  background-color: var(--primary-color);
  cursor: pointer;

  
  &:disabled {
    background-color: var(--heavygrey-color);
    &:hover {
      cursor: default;
    }
  }
  
  &:first-child {
    margin: auto;
    text-align: center;
    color: white;

    &:disabled {
      color: var(--lightgrey-color);
    }
  }
`;

export default Button;
