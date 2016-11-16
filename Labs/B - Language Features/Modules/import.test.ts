import * as chai from 'chai'
import {Calculator} from './Calculators/Calculator'
import DefaultCalculator from './Calculators/AddCalculator'
// IMPORTANT NOTE : tests should NOT be changed 
// we're working with import directives ONLY, so nothing should be changed below this comment

describe('import', () => {
    it('importItem', () => {
        // TODO : import the interface defined in calculator and implements your own calculator
        // Tip : import should be at he beginning of the file
        class UniverseCalculator implements Calculator {
          Calculate(a:number, b:number) {
              return 42;
          }
        }
        var mycalculator = new UniverseCalculator();
        var answer = mycalculator.Calculate(4564,645464);
        chai.expect(answer).to.be.equal(42)
    })
    it('importDefault', () => {
        // TODO : import the default AddCalculator to DefaultCalculator
        // Note : nothing to change in this test
        var calc = new DefaultCalculator();

        chai.expect(calc.Calculate(1,2)).to.be.equal(3)
    })
})
