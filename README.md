# Introduction
[![Build Status](https://travis-ci.org/dashawk/angularOwlCarousel.svg?branch=master)](https://travis-ci.org/dashawk/angularOwlCarousel)
[![Dependency Status](https://gemnasium.com/badges/github.com/dashawk/angularOwlCarousel.svg)](https://gemnasium.com/github.com/dashawk/angularOwlCarousel)
[![Donation Status](http://img.shields.io/gratipay/user/dashawk.svg)](https://gratipay.com/~dashawk/)

Angular directive that uses owl carousel by David Deutsch.
You can use any options from [OwlCarousel2 Docs](https://owlcarousel2.github.io/OwlCarousel2/docs/api-options.html) in this directive.

This directive is only usable for Angular 1.6.*.

## Installation

To install this package, run:
```cli
bower install angularOwlCarousel --save
```
then in your angular module add `jmp.carousel` as dependency:
```js
(function () {
    'use strict';

    angular.module('mgApp', ['jmp.carousel']);
    ...
```

## Usage

You can use this directive like this:
```html
<div owl-carousel="owlOptions" owl-instance="getOwlInstance($owl)">
    <div class="item"><h4>1</h4></div>
    <div class="item"><h4>2</h4></div>
    <div class="item"><h4>3</h4></div>
    <div class="item"><h4>4</h4></div>
    <div class="item"><h4>5</h4></div>
    ...
</div>
```

or just this:
```js
<div owl-carousel>
    <div class="item"><h4>1</h4></div>
    <div class="item"><h4>2</h4></div>
    <div class="item"><h4>3</h4></div>
    <div class="item"><h4>4</h4></div>
    <div class="item"><h4>5</h4></div>
    ...
</div>
```

and in your controller:
```js
angular
    .module('myApp')
    .controller('testController', function ($scope) {
        // You can use all options from OwlCarousel2 Documentation
        $scope.owlOptions = {
            items: 5,
            loop: true,
            nav: true
        };
        $scope.getOwlInstance = function (owlInstance) {
            console.log(owlInstance);
        };
    });
```
## License

This project is licensed under the terms of the MIT license.
