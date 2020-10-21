import * as React from "react";
import styled from "../../styled-components";

const T = styled.textarea.attrs({
  rows: 4,
  cols: 50
})`
  resize: ${({ resize }: { resize: boolean }) => (resize ? "initial" : "none")};
  --color: var(--primary-color);
  outline: none;
  display: block;
  width: 100%;
  -webkit-appearance: none;
  background: #fff;
  border: 1px solid var(--lightgrey-color);
  padding: 8px 16px;
  line-height: 22px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-color);
  border-radius: var(--radius-border);
  transition: border 0.3s ease;
  &::placeholder {
    color: var(--darkgrey-color);
  }
  &:focus {
    outline: none;
    border-color: var(--color);
  }
`;

const FormElement = styled.div`
  margin-bottom: 20px;
  label {
    display: block;
    margin-bottom: 4px;
    font-size: 14px;
    color: var(--headline-color);
    font-weight: 500;
  }
`;

const TextArea: React.SFC<any> = ({ label, resize, ...props }) => {
  return (
    <FormElement>
      <label>{label}</label>
      <T resize={resize} {...props} />
    </FormElement>
  );
};

export default TextArea;
