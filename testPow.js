describe("pow", function() {

    describe("возводит x  в степень 3", function() {
        function makeTest(x) {
            let expected = x * x * x;
    
            it(`${x} в степени 3 будет ${expected}`, function() {
                assert.equal(pow(x, 3), expected);
            })
        }
    
        for (let x = 1; x <= 5; x++) {
            makeTest(x);
        }
    });

});

describe("тест", function() {

    // Обычно beforeEach/afterEach и before/after используются для инициализации, 
    // обнуления счётчиков или чего-нибудь ещё между тестами (или группами тестов).

    before(() => console.log("Тестирование началось - перед тестами"));
    after(() => console.log("Тестирование закончилось - после всех тестов"));

    beforeEach(() => console.log("Перед тестом - начинаем выполнять тест"));
    afterEach(() => console.log("После теста - заканчиваем выполнять тест"));

    it('тест1', () => console.log(1));

    it('тест2', () => console.log(2));

});
