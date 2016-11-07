import * as chai from 'chai'

describe('Const', () => {
    it('Declare', () => {
        // TODO : create a new const 'salt' with value 421
        chai.expect(salt).to.be.equal(421);
    })
    it('Initializer', () => {
        // TODO : fix the test and the TS error
        const foo = 2;
        foo = 8;
        chai.expect(foo).to.be.equal(19);
    })
    it('BlockScope', () => {
        // TODO : use const to create a new scope and fix this test
        var foo = 123;
        if (true) {
            var foo = 456;
        }
        chai.expect(foo).to.be.equal(123);
    })
});