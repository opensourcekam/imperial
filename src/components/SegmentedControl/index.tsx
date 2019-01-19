import * as React from "react";
import styled from "../../styled-components";
import Input from "../Input";

interface ISegmentedControlProps {
  name?: string;
  values: string[];
}

const Wrapper = styled.div`
  --color: var(--primary-color);
  --border-width: 2px;
  display: flex;
  font-size: 14px;
  font-weight: 600;
  label {
    cursor: pointer;
    input {
      display: none;
      & + span {
        display: block;
        position: relative;
        padding: 7px 20px;
        border: var(--border-width) solid var(--lightgrey-color);
        transition: background 0.3s ease, border-color 0.3s ease;
      }
      &:checked {
        & + span {
          z-index: 2;
          background: var(--color);
          border-color: var(--color);
          color: #fff;
        }
      }
    }
    &:hover {
      input {
        & + span {
          z-index: 1;
          border-color: var(--color);
        }
      }
    }
    &:first-child {
      input {
        & + span {
          border-radius: 6px 0 0 6px;
        }
      }
    }
    &:last-child {
      input {
        & + span {
          border-radius: 0 6px 6px 0;
        }
      }
    }
    &:not(:first-child) {
      margin-left: calc(var(--border-width) * -1);
    }
  }
`;

const SegmentedControl: React.SFC<ISegmentedControlProps> = ({
  name,
	values,
	children,
  ...props
}) => {
  return (
    <Wrapper>
      {(values).map(value => (
        <label>
          <input type="radio" {...props} name={name} />
          <span>{value}</span>
        </label>
      ))}
    </Wrapper>
  );
};

SegmentedControl.defaultProps = {
	name: "SegmentedControl",
	values: [],
};

export default SegmentedControl;
