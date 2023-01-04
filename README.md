# Morning SDK

[![Package Version][package-image]][package-url]
[![Open Issues][issues-image]][issues-url]
[![Build Status][build-image]][build-url]
[![Coverage Status][coverage-image]][coverage-url]
[![Dependencies Status][dependencies-image]][dependencies-url]
[![Dev Dependencies Status][dev-dependencies-image]][dev-dependencies-url]
[![Commitizen Friendly][commitizen-image]][commitizen-url]

<div align="center">
	<br>
    <h1>Morning Metrics</h1>
	<p>Do more with your metrics.</p>
	<a href="https://www.npmjs.com/package/morning.js"><img src="https://img.shields.io/npm/v/morning.js" alt="NPM Version"></a>
	<a href="https://docs.morning.so"><img src="https://img.shields.io/badge/Docs-LogSnag" alt="Documentation"></a>
	<br>
	<br>
</div>


## Installation

```sh
npm install --save morning.js
```

## Usage

### Import Library

```js
import { Morning } from 'morning.js';
```

### Initialize Client

```js
const morning = new Morning(`<API KEY>`);
```

### Update Metrics

```js
// Incrementing the base metric
await morning.metrics.increment(`METRIC ID`, 1)
```

```js
// Incrementing a metric with user data
await morning.metrics.increment(`METRIC ID`, 1, {
	email: 'user@email.com',
	personProperties: {
		name: 'John Smith',
		avatar: 'https://profile.com/image.png',
	}
})
```

### Reading Metrics

```js
const metric = await morning.metrics.get(`METRIC ID`);
```

### Reading Customer Profiles

**Reading by id:**

```js
const customer = await morning.people.get(`PERSON ID`);
```

**Searching by email or person id:**

```js
const customer = await morning.people.search({ email: 'email@domain.com' });
```

```js
const customer = await morning.people.search({ personId: '123456' });
```

## Contributing

This section is here as a reminder for you to explain to your users how to contribute to the projects you create from this template.

[project-url]: https://github.com/chriswells0/node-typescript-template
[package-image]: https://badge.fury.io/js/typescript-template.svg
[package-url]: https://badge.fury.io/js/typescript-template
[issues-image]: https://img.shields.io/github/issues/chriswells0/node-typescript-template.svg?style=popout
[issues-url]: https://github.com/chriswells0/node-typescript-template/issues
[build-image]: https://travis-ci.org/chriswells0/node-typescript-template.svg?branch=master
[build-url]: https://travis-ci.org/chriswells0/node-typescript-template
[coverage-image]: https://coveralls.io/repos/github/chriswells0/node-typescript-template/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/chriswells0/node-typescript-template?branch=master
[dependencies-image]: https://david-dm.org/chriswells0/node-typescript-template/status.svg
[dependencies-url]: https://david-dm.org/chriswells0/node-typescript-template
[dev-dependencies-image]: https://david-dm.org/chriswells0/node-typescript-template/dev-status.svg
[dev-dependencies-url]: https://david-dm.org/chriswells0/node-typescript-template?type=dev
[commitizen-image]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli
