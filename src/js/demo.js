var ScrollMe = require('./scrollme');

function Demo() {

    var scrollY = 0;

    //INITIATE SCROLLME LIB
    this.scrollMe = new ScrollMe();
    this.scrollMe.init($('body'), $(window));

    //LISTENS TO SCROLL EVENT
    $(window).scroll(function() {
        scrollY = window.scrollY || window.pageYOffset;
    });


    //OPACITY
    //SETUP OPACITY ANIMATION FROM 0% TO 20% OF TOTAL SCROLLING AREA
    this.scrollMe.addAnimation({
        init: 0, //PERCENT
        end: 20, //PERCENT
        callBackProperty: function(data, value) {
            var obj = {};
            obj.opacity = value;
            TweenLite.to($('.box-opacity'), .3, obj);

        }.bind(this),
        propStart: 0,
        propEnd: 1
    });

    //SCALE
    //SETUP SCALE ANIMATION FROM 20% TO 50% OF TOTAL SCROLLING AREA
    this.scrollMe.addAnimation({
        init: 20, //PERCENT
        end: 50, //PERCENT
        callBackProperty: function(data, value) {
            var obj = {};
            obj.scale = value;
            TweenLite.to($('.box-scale'), .3, obj);

        }.bind(this),
        propStart: 0,
        propEnd: 1
    });

    //ROTATION
    //SETUP ROTATION ANIMATION FROM 50% TO 100% OF TOTAL SCROLLING AREA
    this.scrollMe.addAnimation({
        init: 50, //PERCENT
        end: 100, //PERCENT
        callBackProperty: function(data, value) {
            var obj = {};
            obj.rotation = value;
            TweenLite.to($('.box-rotation'), .3, obj);

        }.bind(this),
        propStart: 0,
        propEnd: 360
    });

    //LEFT (depends on postion:relative|absolute)
    //SETUP LEFT ANIMATION FROM 50% TO 100% OF TOTAL SCROLLING AREA
    this.scrollMe.addAnimation({
        init: 50, //PERCENT
        end: 100, //PERCENT
        callBackProperty: function(data, value) {
            var obj = {};
            obj.x = value;
            obj.force3d = true;
            TweenLite.to($('.box-left'), .3, obj);

        }.bind(this),
        propStart: 0,
        propEnd: 550
    });

    //RENDERING LOOP
    function renderLoop() {

        //SENDS CURRENT SCROLLY POSITION TO SCROLLME 
        this.scrollMe.render(scrollY);

        requestAnimationFrame(renderLoop.bind(this));
    };

    requestAnimationFrame(renderLoop.bind(this));

};
window.demo = new Demo();