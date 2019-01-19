import React from "react";
import styled from "styled-components";
import Base from "../Input/Base";

const R = styled.input.attrs({
  type: "checkbox"
})`
  & + span {
    padding-left: 22px;
    &:not(:empty) {
      padding-left: 30px;
    }
    &:before {
      width: 22px;
    }
    &:after {
      opacity: 0;
    }
  }
  &:checked + span {
    &:after {
      opacity: 1;
    }
  }
  & + span {
    &:before {
      border-radius: var(--radius-border);
    }
    &:after {
      width: 5px;
      height: 9px;
      border: 2px solid #fff;
      border-top: 0;
      border-left: 0;
      left: 8px;
      top: 5px;
      transform: rotate(20deg);
    }
  }
  &:checked + span {
    &:after {
      transform: rotate(43deg) translate(1px, 0);
    }
  }
`;

const Checkbox: React.SFC<any> = ({ children, ...props }) => {
  return (
    <Base>
      <R {...props} />
      <span>{children}</span>
    </Base>
  );
};

export default Checkbox;
