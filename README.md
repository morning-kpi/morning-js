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
