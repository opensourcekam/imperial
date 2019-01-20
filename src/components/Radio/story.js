import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Radio from '.';

storiesOf('Radio', module)
	.add('base', () =>
		<Radio checked>Yo</Radio>
	);
