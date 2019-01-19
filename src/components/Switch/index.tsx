import React from "react";
import styled from "styled-components";
import Base from "../Input/Base";

const R = styled.input.attrs({
  type: "checkbox"
})`
  & + span {
    padding-left: 38px;
    &:not(:empty) {
      padding-left: 46px;
    }
    &:before {
      width: 38px;
      border-radius: 11px;
    }
    &:after {
      left: 4px;
      top: 4px;
      border-radius: 50%;
      width: 14px;
      height: 14px;
      background: var(--lightgrey-color);
    }
  }
  &:not(:checked) + span {
    &:after {
      transform: translate(4px, 5px) scale(0.9);
    }
  }

  &:checked + span {
    &:after {
      background: #fff;
      transform: translate(23px, 5px) scale(0.9);
    }
  }

  &:hover {
    &:not(:checked) + span {
      &:after {
        background: var(--heavygrey-color);
      }
    }
  }
`;

const Switch: React.SFC<any> = ({ children, ...props }) => {
  return (
    <Base>
      <R {...props} />
      <span>{children}</span>
    </Base>
  );
};

export default Switch;
