# Price like Humans
[![Build Status](https://travis-ci.org/irodger/price-like-humans.svg?branch=master)](https://travis-ci.org/irodger/price-like-humans)
[![NPM version](https://badge.fury.io/js/price-like-humans.svg)](http://badge.fury.io/js/price-like-humans)
[![Downloads](https://img.shields.io/npm/dm/price-like-humans.svg)](http://npm-stat.com/charts.html?package=price-like-humans)
[![License](https://img.shields.io/github/license/irodger/price-like-humans.svg?style=flat-square)](https://github.com/irodger/price-like-humans/blob/master/LICENSE)
[![Issues](https://img.shields.io/github/issues/irodger/price-like-humans.svg?style=flat-square)](https://github.com/irodger/price-like-humans/issues)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/irodger/price-like-humans/pulls)

JS kit for formatting price or numbers to human likes format. Also kit will be useful for crypto-currency with 7+ numbers after a delimiter

Breaking changes from 0.5.0 to 0.6.0 see the changelog (spoiler: excessZero is deprecated)
  
## Features:
----
- [Price formatter](#formattedprice)
- [Exponential formatter](#exponentformatter)

## Table of contents
----
- [Features](#features)
- [Install](#install)
  - [excessZero (Deprecated)](#excesszero-is-deprecated)
- [Methods](#methods)
- [formattedPrice options](#formattedprice-options)
- [Usage](#usage)
  - [NodeJS](#nodejs)
  - [ES6](#es6)
- [Examples](#examples)
  - [FormattedPrice](#formattedprice)
  - [ExponentFormatter](#exponentformatter)
- [Changelog](#changelog)
- [License](#license)


## Install
----
### NPM users:
```
npm i --save-dev price-like-humans
```

### Yarn users:
```
yarn add price-like-humans -D
```

### ⚠️ excessZero is deprecated ⚠️
If you want to use excessZero function you'll need to install v0.5.0 version
```
npm i --save-dev price-like-humans@0.5.0
```

## Methods
| Methods | Returns | Description |
| --- | --- | --- |
| `formattedPrice(value)` | `string` | Formatting incoming numbers to humans like price with user locale delimiter |
| `exponentFormatter(value)` | `string` | Formatting exponential numbers to human likes numbers. Exponent free |

## formattedPrice options
| Argument | Argument type | Description |
| --- | --- | --- |
| value * | `number, string, object` | Incoming numbers which will be formatted |
| delimiter | `string` | Delimiter symbol. Number which split decimal. Can be replaced |
| separator | `string` | Symbol which separates grouped number. Can be replaced |
| lang | `string` | You can set locale option. Using user locale by default |

⚠️ Warning: When works in Nodejs environment, intl.NumberFormat contains 'en-US' locale only, so use the `separator` with `delimiter` when the code needs to run on a server-side.

## Usage
----
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
----
### `formattedPrice`
Without separator arguments (putted your local separator)
```javascript
formattedPrice(12345.6789) 

//> "12,345.678,9" // EU Locale 
//> "12 345.678 9" // RU Locale 
```

#### Using with options
```javascript
formattedPrice( {value: 12345.6789, delimiter:','} ) 

//> "12.345,678.9" // EN Locale 
//> "12 345,678 9" // RU Locale 

formattedPrice( {value: 12345.6789, lang: 'ru'} ) 

//> "12 345,678 9"

formattedPrice( {value: 12345.6789, lang: 'en'} ) 

//> "12,345.678,9"
```

### `exponentFormatter`
```javascript
exponentFormatter(1e-7) 

//> "0.0000001"
```

### Also you can combine methods
Exponential with price like humans
```javascript
formattedPrice(1e-7)

//> '1e-7' // Needs to combine


formattedPrice( exponentFormatter(1e-7) )

//> "0.000 000 1"
```

## Changelog
<details>
    <summary>Show changelog</summary>
    
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
    - Tested with [Jest](https://github.com/facebook/jest)
    - Refactored locale.js
    - Refactored formattedPrice: Add default values 
</details>


## License
Price Like Humans is [MIT licensed](https://github.com/irodger/price-like-humans/LICENSE).
