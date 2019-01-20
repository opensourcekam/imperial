import * as React from 'react';
import { storiesOf } from '@storybook/react';
import CheckBox from '.';

storiesOf('CheckBox', module)
	.add('base', () =>
		<CheckBox>Yo</CheckBox>
	);
