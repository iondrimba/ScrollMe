# scrollme
Animate CSS properties on scroll

[![Travis build status](https://travis-ci.org/iondrimba/scrollme.svg?branch=master)](https://travis-ci.org/iondrimba/scrollme) [![Build status](https://ci.appveyor.com/api/projects/status/ogcwtkm2fgsc7j4x?svg=true)](https://ci.appveyor.com/project/iondrimba/scrollme) [![Coverage Status](https://coveralls.io/repos/github/iondrimba/scrollme/badge.svg?branch=master)](https://coveralls.io/github/iondrimba/scrollme?branch=master)

### Requires:

* Nodejs
* Gulp

### Installation

```sh
$ npm install scrollme --save
```

#### AMD

```js
define(['scrollme'], function(ScrollMe){
    var scrollMe = ScrollMe;
});
```

#### CommonJS

```js
var scrollMe = require('scrollme');
```

#### Global namespace

```js
var scrollMe = window.ScrollMe;
```

### [Live demo]

### TODO:

* Write proper documentation

### Testing:

* $ npm test

### Code:

```js
//store scroll position
var scrollY = 0;

var scrollMe = new ScrollMe();

//get total scroll area
var totalScrollAreaHeight = $('body').height();

//get total visible area
var clientHeight = $(window).innerHeight();

//init the lib
scrollMe.init(totalScrollAreaHeight, clientHeight);

//add listener to update scrollY position
$(window).scroll(function() {
    //get scroll position
    scrollY = window.scrollY || window.pageYOffset;
});
```

```js
//add animation to element
scrollMe.addAnimation({
    init: 0, //scroll start point percent values
    end: 20, //scroll end point percent values
    onUpdate: function(data, value) {

        //TweenLite used for demo
        TweenLite.to($('.box-opacity'), .3, {opacity:value});
    },
    propStart: 0,
    propEnd: 1
});
```

```js
//add animation with percentage string values
scrollMe.addAnimation({
    init: 0, //scroll start point percent values
    end: 20, //scroll end point percent values
    onUpdate: function(data, value) {

        //TweenLite used for demo
        TweenLite.to($('.box'), .3, {width:value});
    },
    propStart: '0%',
    propEnd: '100%'
});
```

```js
//add rendering loop
function renderLoop() {

    //updates scroll value
    scrollMe.render(scrollY);

    requestAnimationFrame(renderLoop);
};

requestAnimationFrame(renderLoop);
```



[scss-lint]:<https://github.com/brigade/scss-lint#installation>
[Live demo]:<http://iondrimba.github.io/scrollme/>
