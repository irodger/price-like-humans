## Price like Humans
[![Build Status](https://travis-ci.org/irodger/price-like-humans.svg?branch=master)](https://travis-ci.org/irodger/price-like-humans)
[![NPM version](https://badge.fury.io/js/price-like-humans.svg)](http://badge.fury.io/js/price-like-humans)
[![Downloads](https://img.shields.io/npm/dm/price-like-humans.svg)](http://npm-stat.com/charts.html?package=price-like-humans)
[![License](https://img.shields.io/github/license/irodger/price-like-humans.svg?style=flat-square)](https://github.com/irodger/price-like-humans/blob/master/LICENSE)
[![Issues](https://img.shields.io/github/issues/irodger/price-like-humans.svg?style=flat-square)](https://github.com/irodger/price-like-humans/issues)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/irodger/price-like-humans/pulls)
----
JS kit for formatting price or numbers to human likes format. Also kit will be useful for crypto-currency with 7+ numbers after a delimiter
  
#### Changelog
##### version 0.5.0
- Built with RollUp and Babel
##### version 0.4.0
- Updated jest dependencies
##### version 0.3.5
- Minor fixes 
##### version 0.3.1
- Changed priceFormatter incoming arguments type. Now it takes an object or once value
- Tested with [Jest](https://github.com/facebook/jest)
- Refactored locale.js
- Refactored formattedPrice: Add default values 
  
### Features:
----
- [Price formatter](#formattedprice)
- [Exponential formatter](#exponentformatter)
- [Remove excess zeroes after dot](#removezero)

### Table of contents
----
- [Features](#features)
- [Install](#install)
- [Methods](#methods)
- [Arguments](#arguments)
- [Usage](#usage)
  - [NodeJS](#nodejs)
  - [ES6](#es6)
- [Examples](#examples)
  - [FormattedPrice](#formattedprice)
  - [ExponentFormatter](#exponentformatter)
  - [ExcessZeroes](#excesszeroes)
- [License](#license)


### Install
----
###### NPM users:
```
npm install --save-dev price-like-humans
```

###### Yarn users:
```
yarn add price-like-humans -D
```

### Methods
| Methods | Returns | Description |
| --- | --- | --- |
| `formattedPrice(value)` | `string` | Formatting incoming numbers to humans like price with current locale delimiter |
| `exponentFormatter(value)` | `string` | Formatting exponential numbers to human likes numbers. Exponent free |
| `excessZeroes(value)` | `number` | Remove excess zeroes after dot |

### formattedPrice options
| Argument | Argument type | Default | Description |
| --- | --- | --- | --- |
| `value` | `number`, `string`, `object` | _*required_ | Incoming numbers who will be formatting |
| `delimiter` | `string` | Value delimiter,  _(optional)_ | Delimiter symbol. Number who split decimal. Can be replaced |
| `separator` | `string` | Your local separator  _(optional)_ | Symbol who separate grouped number. Can be replaced |

### Usage
----
###### NodeJS
```javascript
const priceLikeHumans = require('price-like-humans');
```

###### ES6
```javascript
import priceLikeHumans from 'price-like-humans';
// or methods only
import { formattedPrice, exponentFormatter, excessZeroes } from 'price-like-humans';
```

### Examples
----
#### `formattedPrice`
###### Without separator arguments (putted your local separator)
```javascript
priceLikeHumans.formattedPrice(12345.6789) 

//> EU Locale "12,345.678,9"
//> RU Locale "12 345.678 9"
```

###### Using with options
```javascript
formattedPrice( {value: 12345.6789, delimiter:','} ) 

//> EN Locale "12,345,678,9"
//> RU Locale "12 345,678 9"
```

#### `exponentFormatter`
```javascript
exponentFormatter(1e-7) 

//> "0.0000001"
```

#### `excessZeroes`
```javascript
excessZeroes(100.0) 

//> 100
```

###### `excessZeroes` with exponential
```javascript
excessZeroes(10e-8) 

//> 1e-7
```

#### Also you can combine methods
###### Formatted `excessZeroes` with exponential
```javascript
exponentFormatter( excessZeroes(10e-8) )

//> "0.0000001"
```

#### Needs more combine!
###### Formatted `excessZeroes` with exponential with humans like price
```javascript
formattedPrice( 
  exponentFormatter( 
    excessZeroes(10e-8) 
  ) 
)

//> "0.000 000 1"
```

### License
Price Like Humans is [MIT licensed](https://github.com/irodger/price-like-humans/LICENSE).
