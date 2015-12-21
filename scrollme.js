(function(root, factory) {
    if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define([], function() {
            return (root.ScrollMe = factory());
        });
    } else {
        // Global Variables
        root.ScrollMe = factory();
    }
}(this, function() {
    'use strict';

    function ScrollMe() {
        var totalHeight = 0,
            clientHeight = 0,
            scrollArea = 0,
            container,
            currentScrollPosition = 0,
            percentScrolled = 0,
            animations = [];

        this.init = function(target, targetContainer) {
            totalHeight = target.height();
            container = targetContainer;
            clientHeight = container.innerHeight;
            scrollArea = totalHeight - clientHeight;
        };
    };

    ScrollMe.prototype.addAnimation = function(options) {
        options.total = options.end - options.init;
        animations.push(options);
    };

    ScrollMe.prototype.render = function(options) {
        currentScrollPosition = container[0].scrollY;
        percentScrolled = Math.floor((currentScrollPosition / scrollArea) * 100);

        animations.forEach(function(item, index) {

            var elmt = item.elmt;
            item.current = currentScrollPosition - item.init;
            item.percent = Math.floor((item.current / item.total) * 100);
            if (item.percent <= 100) {
                item.start = item.percent * (item.propEnd - item.propStart) / 100;
                item.end = (item.propStart + item.start);

            }
            if ((item.percent > 100)) {
                item.end = item.propEnd;
            }
            if ((item.percent < 0)) {
                item.end = item.propStart;
            }


            var obj = {};
            obj[item.prop] = item.end;
            if (item.force3D) {
                obj['force3D'] = true;
            }
            TweenLite.to(elmt, .5, obj);

        });
    };

    return ScrollMe;
}));
