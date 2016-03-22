    beforeEach(function() {
        fixture.load('/index.html');
    });

    describe('ScrollMe Tests', function() {

        //init the lib
        var scrollme = new ScrollMe(),
            totalScrollArea = 8000,
            visibleScrollArea = 3000;

        scrollme.init(totalScrollArea, visibleScrollArea);

        it('Demo should be defined ', function() {
            expect(demo).toBeDefined();
        });

        it('ScrollMe should be defined ', function() {
            expect(ScrollMe).toBeDefined();
        });

        it('Value should have opacity equal to propEnd', function() {

            var elementOpacity = 0,
                fullOpacity = 1,
                scrollY = 7500;

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

            //scroll to position
            scrollme.render(scrollY);

            expect(elementOpacity).toEqual(fullOpacity);

        });

        it('Value should have opacity equal to propStart', function() {

            var elementOpacity = -1,
                startValue = 0,
                scrollY = 7500;

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

            //scroll to position
            scrollme.render(scrollY);

            //reset scroll position
            scrollme.render(0);

            expect(elementOpacity).toEqual(startValue);

        });

        it('Percentage value as string should be equal to propEnd', function() {

            var cssPropValue = '0%',
                endCssPropValue = '100%',
                scrollY = 7500;

            //add animation to element
            scrollme.addAnimation({
                init: 50, //scroll start point percent values
                end: 100, //scroll end point percent values
                onUpdate: function(data, value) {
                    cssPropValue = value;
                },
                propStart: '0%',
                propEnd: '100%'
            });

            //scroll to position
            scrollme.render(scrollY);

            expect(cssPropValue).toEqual(endCssPropValue);

        });

        it('Percentage value as string should be between 0% and 100%', function() {

            var elementValue = '0%',
                scrollY = 3000;

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

            //scroll to position
            scrollme.render(scrollY);

            expect(elementValue).not.toBe('0%');
            expect(elementValue).not.toBe('100%');

        });

        it('Should reset array of elements to animate', function() {

            var elementValue = '0%',
                scrollY = 3000;

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

            //scroll to position
            scrollme.render(scrollY);

            scrollme.reset();

            expect(scrollme.animations.length).toEqual(0);

        });

        it('Should find element', function() {
            var cssClass = '.box.box-rotation';
            var boxRotation = $(cssClass);
            expect(boxRotation.length).not.toBe(0);
        });

    });