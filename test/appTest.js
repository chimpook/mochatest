const assert = require('chai').assert;
const app = require('../app');

// Results
sayHelloResult = app.sayHello();
addNumberResult = app.addNumbers(5, 5);

describe('App', function() {
    it('sayHello should return hello', function() {
        assert.equal(sayHelloResult, 'hello');
    });

    it('sayHello should return type string', function() {
        assert.typeOf(sayHelloResult, 'string');
    });

    it('addNumber should be above five', function() {
        assert.isAbove(addNumberResult, 5);
    });

    it('addNumbers should return type number', function() {
        assert.typeOf(addNumberResult, 'number');
    });

});