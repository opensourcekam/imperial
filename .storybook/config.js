import { configure, setAddon, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs/react";
import JSXAddon from "storybook-addon-jsx";

addDecorator(withKnobs);
setAddon(JSXAddon);

const req = require.context("../src/components", true, /story.js$/);
const loadStories = () => {
  require("./welcomeStory.js");
  req.keys().forEach(file => req(file));
};
configure(loadStories, module);
