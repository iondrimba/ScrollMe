    beforeEach(function() {
        fixture.load('/index.html');
    });

    describe('ScrollMe Tests', function() {

        //init the lib
        var scrollme = new ScrollMe();
        scrollme.init(8000, 3000);


        it('Demo should be defined ', function() {
            expect(demo).toBeDefined();
        });

        it('ScrollMe should be defined ', function() {
            expect(ScrollMe).toBeDefined();
        });

        it('Element should have end propertie set', function() {

            var elementOpacity = 0;
            var fullOpacity = 1;

            //add animation to element
            scrollme.addAnimation({
                init: 50, //scroll start point percent values
                end: 100, //scroll end point percent values
                onUpdate: function(data, value) {
                    elementOpacity = value;
                },
                propStart: 0,
                propEnd: 1
            });

            scrollme.render(7500);

            expect(elementOpacity).toEqual(fullOpacity);

        });

        it('Element should have start propertie set', function() {

            var elementOpacity = -1;
            var startValue = 0;

            //add animation to element
            scrollme.addAnimation({
                init: 50, //scroll start point percent values
                end: 100, //scroll end point percent values
                onUpdate: function(data, value) {
                    elementOpacity = value;
                },
                propStart: 0,
                propEnd: 1
            });

            scrollme.render(7500);

            scrollme.render(0);

            expect(elementOpacity).toEqual(startValue);

        });

        it('Percentage value as string should be 100%', function() {

            var elementValue = '0%';

            //add animation to element
            scrollme.addAnimation({
                init: 50, //scroll start point percent values
                end: 100, //scroll end point percent values
                onUpdate: function(data, value) {
                    elementValue = value;
                },
                propStart: '0%',
                propEnd: '100%'
            });

            scrollme.render(7500);

            expect(elementValue).toEqual('100%');

        });


        it('Should find element', function() {
            var cssClass = '.box.box-rotation';
            var boxRotation = $(cssClass);
            expect(boxRotation.length).not.toBe(0);
        });

    });