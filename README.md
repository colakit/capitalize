# @colakit/capitalize

`@colakit/capitalize` is designed to be simple and straightforward, similar to the `_.capitalize` function in lodash, but as a standalone module with no dependencies, making it perfect for projects where you want to keep your bundle size small.

## Installation

To install `@colakit/capitalize`, use npm or yarn:

```bash
npm install @colakit/capitalize
# OR
yarn add @colakit/capitalize
```

## Usage

Import `@colakit/capitalize` into your project and use it:

```javascript
const capitalize = require("@colakit/capitalize");

// Example string
const myString = "FRED";

// Call function
const result = capitalize(myString);

// Output: 'Fred'
console.log(result);
```
