const assert = require('chai').assert;
const app = require('../app');

// Results
sayHelloResult = app.sayHello();
addNumberResult = app.addNumbers(5, 5);

describe('App', function() {

    describe('sayHello()', function() {
        it('sayHello should return hello', function() {
            assert.equal(sayHelloResult, 'hello');
        });
    
        it('sayHello should return type string', function() {
            assert.typeOf(sayHelloResult, 'string');
        });
    });

    describe('addNumbers()', function() {
        it('addNumbers should be above five', function() {
            assert.isAbove(addNumberResult, 5);
        });
    
        it('addNumbers should return type number', function() {
            assert.typeOf(addNumberResult, 'number');
        });
    });
});