var ScrollMe = require('./scrollme');

function Demo() {

    var scrollMe = new ScrollMe();
    console.log('Demo', scrollMe);


    this.scrollMe.init($('body'), $(window));

    //ANIMATE OPACITY
    this.scrollMe.addAnimation({
        init: 0,
        end: 20,
        callBackProperty: function(data, value) {
            var obj = {};
            obj.scale = value;
            TweenLite.to($('.box-opacity'), .3, obj);
        }.bind(this),
        propStart: 1,
        propEnd: this.scaleLogo
    });

    //ANIMATE WIDTH
    this.scrollMe.addAnimation({
        init: 20,
        end: 40,
        callBackProperty: function(data, value) {

            var obj = {};
            obj.width = value;
            TweenLite.to($('.box-width'), .5, obj);

        }.bind(this),
        propStart: $('.box-width').width(),
        propEnd: $('.box-width').width() + 200;
    });

};
window.demo = new Demo();