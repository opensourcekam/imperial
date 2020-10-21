import * as React from "react";
import { storiesOf } from "@storybook/react";
import TextArea from ".";

storiesOf("TextArea", module)
  .add("base", () => <TextArea label="Input" />)
