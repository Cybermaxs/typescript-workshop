import * as chai from 'chai'

describe('interface#arguments', () => {
    it('callInline', () => {
        var fn= function(control: { label: string }) { 
            return control.label;
        };
        // TODO : call this method
        var actual = fn(/*FILL_ME_IN */);

        chai.expect(fn).to.be.an('function');
        chai.expect(actual).to.be.an('string');
        chai.expect(actual).to.be.equal('myuicontrol');
    })
    it('callViaInterface', () => {
        interface Control {
            label: string
        }

        var fn= function(control:Control) { 
            return control.label;
        };

         // TODO : call this method
        var actual = fn(/*FILL_ME_IN */);

        chai.expect(fn).to.be.an('function');
        chai.expect(actual).to.be.an('string');
        chai.expect(actual).to.be.equal('myuicontrol');
    })
})