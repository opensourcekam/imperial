import React from 'react'
import { configure, setAddon, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs/react";
import JSXAddon from "storybook-addon-jsx";
import styled from '../src/styled-components';
import Imperial from '../src/Imperial';
import { theme } from '../src/theme';

const Wrapper = styled.div`
  * {
    box-sizing: inherit;
  }

  *:before, *:after {
    box-sizing: inherit;
  }
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', "sans-serif";
`;

addDecorator(story =>
  <Wrapper>
    <Imperial
      colors={{
        primary: "rebeccapurple",
        secondary: "silver",
        tertiary: "orange"
      }} />
    {story()}
  </Wrapper>
);

addDecorator(withKnobs);
setAddon(JSXAddon);

const req = require.context("../src/components", true, /story.js$/);
const loadStories = () => {
  require("./welcomeStory.js");
  req.keys().forEach(file => req(file));
};
configure(loadStories, module);
