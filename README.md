## Price like Humans
[![Build Status](https://travis-ci.org/irodger/price-like-humans.svg?branch=master)](https://travis-ci.org/irodger/price-like-humans)
[![NPM version](https://badge.fury.io/js/price-like-humans.svg)](http://badge.fury.io/js/price-like-humans)
[![Downloads](https://img.shields.io/npm/dm/price-like-humans.svg)](http://npm-stat.com/charts.html?package=price-like-humans)
[![License](https://img.shields.io/github/license/irodger/price-like-humans.svg?style=flat-square)](https://npmjs.org/package/price-like-humans)
[![Issues](https://img.shields.io/github/issues/irodger/price-like-humans.svg?style=flat-square)](https://github.com/irodger/price-like-humans/issues)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
----
JavaScript Kit for formatting price or numbers to human likes format.
  
### Features:
----
- [Price formatter](#getprice)
- [Exponential formatter](#exponentialformatter)
- [Remove excess zeroes after dot](#removezero)

### Table of contents
----
- [Features](#features)
- [Install](#install)
- [Methods](#pricelikehumans-methods)
- [Usage](#usage)
  - [NodeJS](#nodejs)
  - [ES6](#es6)
- [Examples](#examples)
  - [GetPrice](#getprice)
  - [ExponentialFormatter](#exponentialformatter)
  - [RemoveZero](#removezero)
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

### priceLikeHumans methods
| Methods | Argument types | Description |
| --- | --- | --- |
| `getPrice(value, separator)` | `value: number`<br>`decimal: string`<br>`separator: string` | Beautify incoming numbers to humans like price. Returns string with formatted number |
| `exponentialFormatter(value)` | `number` | Formatting exponential numbers to string human likes numbers |
| `removeZero(value)` | `number` | Remove excess zeroes after dot |

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
#### GetPrice
###### getPrice with your local separator
```javascript
priceLikeHumans.getPrice(12345.6789) 
//> "12,345.678,9"
```
###### getPrice without separator 
```javascript
priceLikeHumans.getPrice(12345.6789) 
//> "12 345.678 9"
```

###### getPrice with separator
```javascript
priceLikeHumans.getPrice(12345.6789, ',') 
//> "12 345,678 9"
```

#### ExponentialFormatter
###### exponentialFormatter   
```javascript
priceLikeHumans.exponentialFormatter(1e-7) 
//> "0.0000001"
```

#### RemoveZero
###### removeZero
```javascript
priceLikeHumans.removeZero(100.0) 
//> 100
```

###### removeZero with exponential
```javascript
priceLikeHumans.removeZero(10e-8) 
//> 1e-7
```
Also you can combine methods
###### Formatted removeZero with exponential
```javascript
priceLikeHumans.exponentialFormatter( priceLikeHumans.removeZero(10e-8) )
//> "0.0000001"
```
We need more combine!
###### Formatted removeZero with exponential with humans like price
```javascript
priceLikeHumans.getPrice( 
  priceLikeHumans.exponentialFormatter( 
    priceLikeHumans.removeZero(10e-8) 
  ) 
)
//> "0.000 000 1"
```

### License
Price Like Humans is [MIT licensed](https://github.com/irodger/price-like-humans/LICENSE).