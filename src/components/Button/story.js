import React from "react";
import { storiesOf } from "@storybook/react";
import { color } from '@storybook/addon-knobs/react';
import Button from "./";

storiesOf("Button", module)
  .add("base", () => <Button disabled>Click me</Button>)
  .addWithJSX("base withJSX", () => <Button color={color('color', 'green', 'group1')}>Hello</Button>);
