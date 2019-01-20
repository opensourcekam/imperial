import * as React from "react";
import styled from 'styled-components';
import { storiesOf } from "@storybook/react";
import Icon from ".";
import {ICONS} from "../../icons";

const Container = styled.div`
	height: 100vh;
	display: inline-flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
`;

const Wrap = styled.div`
	padding: 1rem;
	margin: 1rem;
	display: inline;
	border: 1px solid var(--heavygrey-color);
`;

storiesOf("Icon", module).add("base", () => (
  <Container>
    {Object.keys(ICONS).map(k => (
      <Wrap>
        <Icon icon={ICONS[k]} size={1.5} color="var(--secondary-color)" />
      </Wrap>
    ))}
  </Container>
));
