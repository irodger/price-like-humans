#### Price like Humans
[![Build Status](https://travis-ci.org/irodger/price-like-humans.svg?branch=master)](https://travis-ci.org/irodger/price-like-humans)
[![NPM version](https://badge.fury.io/js/price-like-humans.svg)](http://badge.fury.io/js/price-like-humans)
[![Downloads](https://img.shields.io/npm/dm/price-like-humans.svg)](http://npm-stat.com/charts.html?package=price-like-humans)
[![License](https://img.shields.io/github/license/irodger/price-like-humans.svg?style=flat-square)](https://npmjs.org/package/price-like-humans)
[![Issues](https://img.shields.io/github/issues/irodger/price-like-humans.svg?style=flat-square)](https://github.com/DeanNeal/price-like-humans/issues)
----
JavaScript function beautify incoming numbers to human likes format.
  
#### Install
###### NPM users:
```
npm install --save-dev price-like-humans
```

###### Yarn users:
```
yarn add price-like-humans -D
```

  Features:

- Price formatter


#### Example
###### Without separator   
```javascript
priceLikeHumans(12345.6789) 
//> "12 345.678 9"
```
###### With separator
```javascript
priceLikeHumans(12345.6789, ',') 
//> "12 345,678 9"
```


#### Usage
###### NodeJS
```javascript
var priceLikeHumans = require('price-like-humans');
```

###### ES6
```javascript
import priceLikeHumans from 'price-like-humans';
```
