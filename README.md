# Price like Humans

[![Build Status](https://travis-ci.org/irodger/price-like-humans.svg?branch=master)](https://travis-ci.org/irodger/price-like-humans)
[![Codacy Badge Code Grade](https://api.codacy.com/project/badge/Grade/d28c98d454e4433e8cd643a824be8848)](https://www.codacy.com/manual/irodger/price-like-humans?utm_source=github.com&utm_medium=referral&utm_content=irodger/price-like-humans&utm_campaign=Badge_Grade)
[![Codacy Badge Coverage](https://api.codacy.com/project/badge/Coverage/d28c98d454e4433e8cd643a824be8848)](https://www.codacy.com/manual/irodger/price-like-humans?utm_source=github.com&utm_medium=referral&utm_content=irodger/price-like-humans&utm_campaign=Badge_Coverage)
[![NPM version](https://badge.fury.io/js/price-like-humans.svg)](http://badge.fury.io/js/price-like-humans)
[![Dist size](https://img.shields.io/github/size/irodger/price-like-humans/dist/index.js?label=npm%20package%20size)](http://badge.fury.io/js/price-like-humans)
[![Downloads](https://img.shields.io/npm/dm/price-like-humans.svg)](http://npm-stat.com/charts.html?package=price-like-humans)
[![License](https://img.shields.io/github/license/irodger/price-like-humans.svg?style=flat-square)](https://github.com/irodger/price-like-humans/blob/master/LICENSE)
[![Issues](https://img.shields.io/github/issues/irodger/price-like-humans.svg?style=flat-square)](https://github.com/irodger/price-like-humans/issues)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/irodger/price-like-humans/pulls)

JS kit for formatting price or numbers to human likes format. Also kit will be useful for crypto-currency with 7+ numbers after a delimiter

- Written with [TypeScript](https://github.com/microsoft/TypeScript)
- Corrected with [Prettier](https://github.com/prettier/prettier)
- Tested with [Jest](https://github.com/facebook/jest)
- Bundled with [Rollup](https://github.com/rollup/rollup)

⚠️ Breaking changes from 0.6.0 to 0.7.0 see the [changelog](#changelog) (spoiler: changed [arguments](#formattedprice-options-1) in formattedPrice)

## Table of contents

- [Install](#install)
- [Methods](#methods)
  - [Price formatter](#formattedprice)
    - [formattedPrice options](#formattedprice-options)
  - [Exponential formatter](#exponentformatter)
- [Usage](#usage)
  - [NodeJS](#nodejs)
  - [ES6](#es6)
- [Examples](#examples)
  - [FormattedPrice](#formattedprice-examples)
  - [ExponentFormatter](#exponentformatter-examples)
- [Changelog](#changelog)
- [License](#license)

## Install

### NPM users:

```
npm i --save-dev price-like-humans
```

### Yarn users:

```
yarn add price-like-humans -D
```

## Methods

| Methods                          | Returns  | Description                                                                 |
| -------------------------------- | -------- | --------------------------------------------------------------------------- |
| `formattedPrice(value, options)` | `string` | Formatting incoming numbers to humans like price with user locale delimiter |
| `exponentFormatter(value)`       | `string` | Formatting exponential numbers to human likes numbers. Exponent free        |

### formattedPrice

| Argument | Required     | Argument type    | Description                                                                                                      |
| -------- | ------------ | ---------------- | ---------------------------------------------------------------------------------------------------------------- |
| value    | _\*required_ | `number, string` | Incoming numbers which will be formatted                                                                         |
| options  | _optional_   | `object`         | Settings list, see [formattedPrice options](#formattedprice-options) |

### exponentformatter

| Argument | Required     | Argument type    | Description                              |
| -------- | ------------ | ---------------- | ---------------------------------------- |
| value    | _\*required_ | `number, string` | Incoming numbers which will be formatted |

### formattedPrice options

| Argument  | Argument type | Description                                                   |
| --------- | ------------- | ------------------------------------------------------------- |
| delimiter | `string`      | Delimiter symbol. Number which split decimal. Can be replaced |
| separator | `string`      | Symbol which separates grouped number. Can be replaced        |
| lang      | `string`      | You can set locale option. Using user locale by default       |

⚠️ Warning: When works in Nodejs environment, intl.NumberFormat contains 'en-US' locale only, so use the `separator` with `delimiter` when the code needs to run on a server-side.

## Usage

### NodeJS

```javascript
const priceLikeHumans = require('price-like-humans');
```

### ES6

```javascript
import priceLikeHumans from 'price-like-humans';
// or methods only
import { formattedPrice, exponentFormatter } from 'price-like-humans';
```

## Examples

### `formattedPrice` examples

Without separator arguments (putted your local separator)

```javascript
formattedPrice(12345.6789);

//> "12,345.678,9" // EU Locale
//> "12 345.678 9" // RU Locale
```

#### Using with options

```javascript
formattedPrice(12345.6789, { delimiter: ',' });

//> "12.345,678.9" // EN Locale
//> "12 345,678 9" // RU Locale
```

```javascript
formattedPrice(12345.6789, { separator: '.' });

//> "12.345,678.9" // EN Locale
//> "12.345,678.9" // RU Locale
```

```javascript
formattedPrice(12345.6789, { delimiter: '.', separator: ',' });

//> "12,345.678,9"
```

```javascript
formattedPrice(12345.6789, { lang: 'ru' });

//> "12 345,678 9"
```

```javascript
formattedPrice(12345.6789, { lang: 'en' });

//> "12,345.678,9"
```

### `exponentFormatter` examples

```javascript
exponentFormatter(1e-7);

//> "0.0000001"
```

### Also you can combine methods

Exponential with price like humans

```javascript
formattedPrice(1e-7);

//> '1e-7' // Needs to combine
```

```javascript
formattedPrice(exponentFormatter(1e-7));

//> "0.000 000 1"
```

## Changelog

<details>
    <summary>Show changelog</summary>
    
    v0.7.0
    - Changed arguments in formattedPrice
    - Add more coverage and tests
    - Remove debian lang detector
    v0.6.7
    - Added prettier
    - Added dev unit tests
    - Fix imports with methods only
    v0.6.1
    - Added typescript
    - Added custom locale to formattedPrice
    - Added several tests
    - Added minifying
    - Removed excessZero function (if you need that func, just parseFloat your number)
    - Removed babel, compiling by rollup & typescript
    v0.5.0
    - Built with RollUp and Babel
    v0.4.0
    - Updated jest dependencies
    v0.3.5
    - Minor fixes 
    v0.3.1
    - Changed priceFormatter incoming arguments type. Now it takes an object or once value
    - Tested with Jest
    - Refactored locale.js
    - Refactored formattedPrice: Add default values 
</details>

## License

Price Like Humans is [MIT licensed](https://github.com/irodger/price-like-humans/LICENSE).
