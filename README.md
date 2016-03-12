# scrollme (Work in progress)
Animate CSS properties on scroll

[![Travis build status](https://travis-ci.org/iondrimba/scrollme.svg?branch=master)](https://travis-ci.org/iondrimba/scrollme) [![Coverage Status](https://coveralls.io/repos/github/iondrimba/scrollme/badge.svg?branch=master)](https://coveralls.io/github/iondrimba/scrollme?branch=master)

### Requires:

* Nodejs
* Gulp

### Installation

```sh
$ npm install scrollme --save
```

### [Live demo]

### TODO:

* Write proper tests
* Write proper documentation

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
//add rendering loop
function renderLoop() {

    //updates scroll value
    scrollMe.render(scrollY);

    requestAnimationFrame(renderLoop);
};

requestAnimationFrame(renderLoop);
```


### Testing:

* $ npm test (not working yet)

### Structure:

````bash
├── dist/
│    └─ scrollme.js.gz
│    └─ scrollme.js
│
│── spec/(jasmine tests)
│── src/
│    └─ js/
│
│── tasks/
│── test/(coverage report)
│
│── .gitignore
│── .travis.yml
│── demo.js
│── gulpfile.js
│── index.html
│── karma.conf.js
│── LICENSE
│── lint.yml
│── package.json
└── README.md
````

[scss-lint]:<https://github.com/brigade/scss-lint#installation>
[Live demo]:<http://iondrimba.github.io/scrollme/>
