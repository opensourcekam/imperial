import styled from "../../styled-components";

const Button = styled.button`
  border-radius: var(--radius-border);
  --color: var(--primary-color);
  --text: #fff;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  position: relative;
  white-space: nowrap;
  border: none;
  color: var(--text);
  padding: 9px 24px;
  font-size: 14px;
  line-height: 22px;
  font-weight: 600;
  background: var(--color);
  text-decoration: none;
  transition: color 0.3s ease, box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: var(--shadow-box);

  &:link,
  &:active,
  &:visited,
  &:focus {
    color: var(--text-color);
    svg {
      transition: fill 0.2s ease;
      fill: var(--text-color);
    }
  }

  &:hover {
    box-shadow: var(--hovershadow-box);
  }

  svg {
    position: relative;
    left: -4px;
    width: 18px;
    height: 18px;
    display: inline-block;
    vertical-align: top;
    font-weight: normal;
    margin: 2px 0;
    fill: var(--text);
    &.right {
      left: auto;
      right: -4px;
    }
  }

  &.icon {
    padding: 9px;
    svg {
      left: auto;
      right: auto;
      display: block;
      margin: 2px;
    }
  }

  &.sm {
    font-size: 14px;
    border-radius: var(--radius-border);
    padding: 6px 16px;
    &.icon {
      padding: 6px;
      svg {
        margin: 3px;
      }
    }
    svg {
      width: 16px;
      height: 16px;
      margin: 3px 0;
    }
  }

  &.border {
    --text: var(--color);
    background: none;
    &:before {
      content: "";
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      position: absolute;
      z-index: 0;
      border-radius: inherit;
      transition: border-color 0.3s ease;
      border: 1px solid var(--color);
    }
  }
`;

export default Button;
