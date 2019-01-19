import React from "react";
import { storiesOf } from "@storybook/react";
import Text from "./";

storiesOf("Text", module)
  .add("base", () => <Text label="Input" />)
