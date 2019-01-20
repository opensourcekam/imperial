import * as React from "react";
import { storiesOf } from "@storybook/react";
import Button from ".";
import { Icon } from "..";
import { ICONS } from "../../icons";

storiesOf("Button", module)
  .addWithJSX("Base", () => <Button>Imperial</Button>)
  .addWithJSX("Border Button", () => (
    <Button className="border">Imperial</Button>
  ))
  .addWithJSX("Small", () => <Button className="sm">Imperial</Button>)
  .addWithJSX("Small Border", () => (
    <Button className="sm border">Imperial</Button>
  ))
  .addWithJSX("Base with Icon", () => (
    <Button>
      <Icon icon={ICONS.TWITTER} /> Imperial
    </Button>
  ))
  .addWithJSX("Icon", () => (
    <Button className="icon">
      <Icon icon={ICONS.TWITTER} />
    </Button>
  ))
  .addWithJSX("Small Icon", () => (
    <Button className="sm icon">
      <Icon icon={ICONS.CLOUD_CHECK} />
    </Button>
  ))
  .addWithJSX("Small Icon Border", () => (
    <Button className="sm border icon">
      <Icon icon={ICONS.CLOUD_CHECK} />
    </Button>
  ));
