#### Price like Humans
[![Build Status](https://travis-ci.org/irodger/price-like-humans.svg?branch=master)](https://travis-ci.org/irodger/price-like-humans)
[![NPM version](https://badge.fury.io/js/price-like-humans.svg)](http://badge.fury.io/js/price-like-humans)
----
JavaScript function beautify incoming numbers to human likes format.
  
#### Install
###### NPM users
```
npm install --save-dev price-like-humans
```

###### Yarn users
```
yarn add price-like-humans -D
```

  Features:

- Price formatter


#### Example
###### Without separator   
```javascript
getHumansPrice(12345.6789) 
//> "12 345.678 9"
```
###### With separator
```javascript
getHumansPrice(12345.6789, ',') 
//> "12 345,678 9"
```


#### Usage
###### NodeJS
```javascript
var getHumansPrice = require('price-like-humans');
```

###### ES6
```javascript
import getHumansPrice from 'price-like-humans';
```
