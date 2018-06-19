# react-autoheader

[![CircleCI](https://circleci.com/gh/dan1elhughes/react-autoheader/tree/master.svg?style=shield)](https://circleci.com/gh/dan1elhughes/react-autoheader/tree/master)
[![npm version](https://badge.fury.io/js/react-autoheader.svg)](https://badge.fury.io/js/react-autoheader)

Automatically sets `h1`, `h2` levels based on component nesting.

## Installation

Via npm:

```bash
$ npm install --save react-autoheader
```

## Usage

```jsx
// Input
import { Header, Section } from 'react-autoheader';

export const Example = () => (
	<Section>
		<Header>Top level</Header>
		<Section>
			<Header>Middle level</Header>
			<Section>
				<Header>Bottom level</Header>
			</Section>
			<Header>Middle level</Header>
		</Section>
		<Header>Top level</Header>
	</Section>;
);
```

```html
// Output
<h1>Top level</h1>
<h2>Middle level</h2>
<h3>Bottom level</h3>
<h2>Middle level</h2>
<h1>Top level</h1>
```

## Props

### Section

| Property | Type   | Default     | Description                                    |
| -------- | ------ | ----------- | ---------------------------------------------- |
| `level`  | Number | `undefined` | Resets the heading level for child components. |
