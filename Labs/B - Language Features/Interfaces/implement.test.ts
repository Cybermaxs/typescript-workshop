import * as chai from 'chai'

describe('interface#implement', () => {
    it('single', () => {
        interface UIControl {
            name: string;
            select(): boolean;
        }

        // TODO : implement this interface in a class name Label and fix the test


        var lbl = new Label();
        lbl.name = 'mylabel';
        chai.expect(lbl).to.be.an('object');
        chai.expect(lbl.name).to.be.equal('mylabel');
        chai.expect(lbl.select()).to.be.true;;
    })
    it('multiple', () => {
        interface Disposable {
            isDisposed: boolean;
            dispose(): boolean;
        }

        interface Activatable {
            isActive: boolean;
            activate(): boolean;
            deactivate(): boolean;
        }

        // TODO : implement both interfaces in a class name Button and fix the test
        
        var btn = new Button();
        chai.expect(btn.isDisposed).to.be.false;
        chai.expect(btn.isActive).to.be.false;
        btn.activate();
        chai.expect(btn.isActive).to.be.true;
        btn.dispose();
        chai.expect(btn.isDisposed).to.be.true;
    })
    it('function', () => {
        interface Select {
            (source: string): string;
        }
        // TODO : create an uppercase selector called fn (ie JUST a function) from this interface
        var fn: Select = null;
        var actual = fn("foobar");
        chai.expect(fn).to.be.an('function');
        chai.expect(actual).to.be.equal('FOOBAR');
    })
    it('indexer', () => {
        class MyType {
            constructor(public someVal: string) { }
        }

        interface IDictionary {
            [name: string]: MyType;
        }

        var collection: IDictionary = {};

        // TODO : add new items to collection to fix this test 

        var actual = collection['item1'];
        chai.expect(actual).to.be.an('object');
        chai.expect(actual.someVal).to.be.equal('foobar');
    })
})