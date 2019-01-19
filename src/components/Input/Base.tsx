import styled from "../../styled-components";

export default styled.label`
  --color: var(--primary-color);
  --border-hover: var(--primary-color);
  --border-width: 2px;
  margin: 0 0 12px 0;
  display: table;
  cursor: pointer;
  &.inline {
    margin: 0 12px 0 0;
    display: inline-block;
  }
  input {
    display: none;
    & + span {
      color: var(--text-color);
      height: 22px;
      font-size: 14px;
      font-weight: 500;
      position: relative;
      display: block;
      &:before,
      &:after {
        content: "";
        display: block;
        left: 0;
        top: 0;
        position: absolute;
      }
      &:before {
        height: 22px;
        border: var(--border-width) solid var(--lightgrey-color);
        background: #fff;
        transition: background 0.3s ease, border-color 0.3s ease;
      }
      &:after {
        transition: transform 0.3s ease, opacity 0.2s ease, background 0.2s ease;
      }
    }
    &:checked + span {
      &:before {
        background: var(--color);
        border-color: var(--color);
      }
      &:after {
        transition: opacity 0.3s ease, background 0.3s ease,
          transform 0.6s cubic-bezier(0.175, 0.88, 0.32, 1.2);
      }
    }
  }
  &:hover {
    input {
      &:not(:checked) + span {
        &:before {
          border-color: var(--heavygrey-color);
        }
      }
    }
  }
`;
