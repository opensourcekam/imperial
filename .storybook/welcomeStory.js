import * as React from "react";
import { storiesOf } from "@storybook/react";

storiesOf("Welcome", module).add("to the imerial design lib", () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh"
    }}
  >
    <h1 style={{
      color: "var(--heavygrey-color)"
    }}>
      Imperial, a higly customizable rapid prototyping UI Kit ✌🏼
    </h1>
  </div>
));
