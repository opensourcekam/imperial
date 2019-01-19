import React from 'react';
import { storiesOf } from '@storybook/react';
import SegmentedControl from './';

storiesOf('SegmentedControl', module)
	.add('base', () =>
		<SegmentedControl values={["A", "B", "C"]} />
	);
