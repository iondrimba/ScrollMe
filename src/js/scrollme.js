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
        this.currentScrollPosition = 0;
        this.percentScrolled = 0;
        this.animations = [];

        this.init = function(totalScrollArea, visibleScrollArea) {
            this.totalHeight = totalScrollArea;
            this.clientHeight = visibleScrollArea;
            this.scrollArea = this.totalHeight - this.clientHeight;
        };
    };

    ScrollMe.prototype.addAnimation = function(options) {
        options.notNumber = isNaN(options.propStart);
        options.total = options.end - options.init;

        //check values for string percentage like '89%'
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

            if (item.onUpdate) {
                item.onUpdate(this, item.endX);
            }

        }.bind(this));
    };

    return ScrollMe;
}))