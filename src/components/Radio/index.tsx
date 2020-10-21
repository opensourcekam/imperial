import * as React from "react";
import styled from "../../styled-components";
import Base from "../Input/Base";

const R = styled.input.attrs({
  type: "radio"
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
    &:before,
    &:after {
      border-radius: 50%;
    }
    &:after {
      width: 22px;
      height: 22px;
      background: #fff;
      opacity: 0;
    }
  }
  &:checked + span {
    &:after {
      background: #fff;
      transform: scale(0.4);
    }
  }
`;

const Radio: React.SFC<any> = ({ children, ...props }) => {
  return (
    <Base>
      <R {...props} />
      <span>{children}</span>
    </Base>
  );
};

export default Radio;
