## Price like Humans
[![Build Status](https://travis-ci.org/irodger/price-like-humans.svg?branch=master)](https://travis-ci.org/irodger/price-like-humans)
[![NPM version](https://badge.fury.io/js/price-like-humans.svg)](http://badge.fury.io/js/price-like-humans)
[![Downloads](https://img.shields.io/npm/dm/price-like-humans.svg)](http://npm-stat.com/charts.html?package=price-like-humans)
[![License](https://img.shields.io/github/license/irodger/price-like-humans.svg?style=flat-square)](https://github.com/irodger/price-like-humans/blob/master/LICENSE)
[![Issues](https://img.shields.io/github/issues/irodger/price-like-humans.svg?style=flat-square)](https://github.com/irodger/price-like-humans/issues)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/irodger/price-like-humans/pulls)
----
JavaScript Kit for formatting price or numbers to human likes format. Actually for cryptocurrency with 7+ numbers after delimiter
  
### Breaking updates (^0.3.1)
----
Change incoming arguments type at version 0.3.1. Now priceFormatter takes an object with value, delimiter, separator or only value 
  
#### Changelog
version 0.3.1
- Change priceFormatter incoming arguments type. Now it takes an object or once value
- Testing with [Jest](https://github.com/facebook/jest)
- Refactoring locale.js
- Refactoring formattedPrice: Add default values 
  
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
| `formattedPrice({value, delimiter, separator})` | `string` | Formatting incoming numbers to humans like price with current locale delimeter |
| `exponentFormatter(value)` | `string` | Formatting exponential numbers to human likes numbers. Exponent free |
| `excessZeroes(value)` | `number` | Remove excess zeroes after dot |

### Arguments
| Argument | Argument type | Default | Description |
| --- | --- | --- | --- |
| `value` | `number`, `string` | _Required_ | Incoming numbers who will be formatting |
| `delimiter` | `string` | Value delimiter | Delimiter symbol. Number who split decimal. Can be replaced |
| `separator` | `string` | Your local separator | Symbol who separate grouped number. Can be replaced |

### Usage
----
###### NodeJS
```javascript
var priceLikeHumans = require('price-like-humans');
```

###### ES6
```javascript
import priceLikeHumans from 'price-like-humans';
```

### Examples
----
#### FormattedPrice
###### formattedPrice with your local separator
```javascript
priceLikeHumans.formattedPrice(12345.6789) 
//> EU Locale "12,345.678,9"
//> RU Locale "12 345.678 9"
```
###### formattedPrice without separator 
```javascript
priceLikeHumans.formattedPrice(12345.6789) 
//> UK Locale "12,345.678,9"
//> RU Locale "12 345.678 9"
```

###### formattedPrice with separator
```javascript
priceLikeHumans.formattedPrice( {value: 12345.6789, delimiter:','} ) 
//> EN Locale "12,345,678,9"
//> RU Locale "12 345,678 9"
```

#### ExponentFormatter
###### exponentFormatter   
```javascript
priceLikeHumans.exponentFormatter(1e-7) 
//> "0.0000001"
```

#### ExcessZeroes
###### excessZeroes
```javascript
priceLikeHumans.excessZeroes(100.0) 
//> 100
```

###### excessZeroes with exponential
```javascript
priceLikeHumans.excessZeroes(10e-8) 
//> 1e-7
```

#### Also you can combine methods
###### Formatted excessZeroes with exponential
```javascript
priceLikeHumans.exponentFormatter( priceLikeHumans.excessZeroes(10e-8) )
//> "0.0000001"
```
#### We need more combine!
###### Formatted excessZeroes with exponential with humans like price
```javascript
priceLikeHumans.formattedPrice( 
  priceLikeHumans.exponentFormatter( 
    priceLikeHumans.excessZeroes(10e-8) 
  ) 
)
//> "0.000 000 1"
```

### License
Price Like Humans is [MIT licensed](https://github.com/irodger/price-like-humans/LICENSE).