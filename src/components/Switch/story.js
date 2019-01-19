import React from 'react';
import { storiesOf } from '@storybook/react';
import Switch from './';

storiesOf('Switch', module)
	.add('base', () =>
		<Switch>Yo</Switch>
	);
