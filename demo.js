function Demo() {

    var scrollY = 0;


    //INITIATE SCROLLME LIB
    var scrollMe = new ScrollMe();
    var totalScrollAreaHeight = $('body').height();
    var clientHeight = $(window).innerHeight();

    scrollMe.init(totalScrollAreaHeight, clientHeight);

    //LISTENS TO SCROLL EVENT
    $(window).scroll(function() {

        //CROSS PLATFORM SCROLL GET
        scrollY = window.scrollY || window.pageYOffset;
    });


    //OPACITY
    //SETUP OPACITY ANIMATION FROM 0% TO 20% OF TOTAL SCROLLING AREA
    scrollMe.addAnimation({
        init: 0, //PERCENT
        end: 20, //PERCENT
        onUpdate: function(data, value) {
            TweenLite.to($('.box-opacity'), .3, { opacity: value });
        },
        propStart: 0,
        propEnd: 1
    });

    //SCALE
    //SETUP SCALE ANIMATION FROM 20% TO 50% OF TOTAL SCROLLING AREA
    scrollMe.addAnimation({
        init: 20, //PERCENT
        end: 50, //PERCENT
        onUpdate: function(data, value) {
            TweenLite.to($('.box-scale'), .3, { scale: value });
        },
        propStart: 0,
        propEnd: 1
    });

    //ROTATION
    //SETUP ROTATION ANIMATION FROM 50% TO 100% OF TOTAL SCROLLING AREA
    scrollMe.addAnimation({
        init: 50, //PERCENT
        end: 100, //PERCENT
        onUpdate: function(data, value) {
            TweenLite.to($('.box-rotation'), .3, { rotation: value });
        },
        propStart: 0,
        propEnd: 360
    });

    //LEFT (depends on postion:relative|absolute)
    //SETUP LEFT ANIMATION FROM 50% TO 100% OF TOTAL SCROLLING AREA
    scrollMe.addAnimation({
        init: 50, //PERCENT
        end: 100, //PERCENT
        onUpdate: function(data, value) {
            TweenLite.to($('.box-left'), .3, { x: value });
        },
        propStart: 0,
        propEnd: 550
    });

    //RENDERING LOOP
    function renderLoop() {

        //SENDS CURRENT SCROLLY POSITION TO SCROLLME 
        scrollMe.render(scrollY);

        requestAnimationFrame(renderLoop);
    };

    requestAnimationFrame(renderLoop);
};

window.demo = new Demo();