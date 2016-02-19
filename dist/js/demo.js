(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var ScrollMe = require('./scrollme');

function Demo() {

    var scrollMe = new ScrollMe();
    console.log('Demo', scrollMe);

};
window.demo = new Demo();
},{"./scrollme":2}],2:[function(require,module,exports){
(function(root, factory) {
    if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define(function() {
            return (root.ScrollMe = factory());
        });
    } else {
        // Global Variables
        root.ScrollMe = factory();
    }
}(this, function() {
    'use strict';

    function ScrollMe() {
        this.totalHeight = 0;
        this.clientHeight = 0;
        this.scrollArea = 0;
        this.container = {};
        this.currentScrollPosition = 0;
        this.percentScrolled = 0;
        this.animations = [];

        this.init = function(target, targetContainer) {
            this.totalHeight = target.height();
            this.container = targetContainer;
            this.clientHeight = this.container.innerHeight();
            this.scrollArea = this.totalHeight - this.clientHeight;

        };
    };

    ScrollMe.prototype.addAnimation = function(options) {
        options.notNumber = isNaN(options.propStart);

        options.total = options.end - options.init;

        if (options.notNumber) {
            options.startNum = Number(options.propStart.replace(/\D/g, ''));
            options.endNum = Number(options.propEnd.replace(/\D/g, ''));
            options.unit = options.propStart.replace(/\d/g, '');
            options.signal = options.propStart.replace(/\d.*/g, '');
        } else {
            options.startNum = options.propStart;
            options.endNum = options.propEnd;
        }

        this.animations.push(options);
    };
    ScrollMe.prototype.reset = function() {
        this.animations = [];
    };
    ScrollMe.prototype.render = function(scrollY) {
        this.currentScrollPosition = scrollY;

        this.percentScrolled = Math.floor((this.currentScrollPosition / this.scrollArea) * 100);

        this.animations.forEach(function(item, index) {

            var elmt = item.elmt,
                out = 0,
                percentInit = item.init,
                percentEnd = item.end;



            item.current = this.percentScrolled - percentInit;
            item.percent = Math.floor((item.current / item.total) * 100);

            if (item.percent <= 100) {
                item.start = item.percent * (item.endNum - item.startNum) / 100;
                out = item.startNum + item.start
                item.endX = out;
                if (item.notNumber) {
                    item.endX = item.signal + out + item.unit;
                }
            }
            if ((item.percent > 100)) {
                item.endX = item.propEnd;
            }
            if ((item.percent < 0)) {
                item.endX = item.propStart;
            }

            //UPDATES PROPERTY CONTANTLY
            if (item.callBackProperty) {
                item.callBackProperty(this, item.endX);
            }

            if (this.percentScrolled >= percentInit && this.percentScrolled < percentEnd) {

                //UPDATES PROPERTY INSIDE RANGE
                if (item.callBackInsideRange) {
                    item.callBackInsideRange(this, item.endX);
                }

            } else if (this.percentScrolled >= percentEnd) {

                //UPDATES PROPERTY AFTER RANGE
                if (item.callBackLoop) {
                    item.callBackLoop(this, item.endX);
                }
            }



        }.bind(this));
    };

    return ScrollMe;
}));
},{}]},{},[1]);
