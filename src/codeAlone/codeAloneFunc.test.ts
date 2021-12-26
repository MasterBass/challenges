import { expect } from 'chai';
import { solution } from './codeAloneFunc';

describe('Alone solution test', () => {

    it('check for <ababab>', () => {
        expect(solution('ababab')).to.equal(3);
    });

    it('check for <abbbbaa>', () => {
        expect(solution('abbbbaa')).to.equal(4);
    });

    it('check for <bbbababaaab>', () => {
        expect(solution('bbbababaaab')).to.equal(0);
    });

    it('check for <abbabb>', () => {
        expect(solution('abbabb')).to.equal(-1);
    });

    it('check for <abbab>', () => {
        expect(solution('abbab')).to.equal(-1);
    });

    it('check for <aabbaabbaabbaabb>', () => {
        expect(solution('aabbaabbaabbaabb')).to.equal(3);
    });
    it('check for empty', () => {
        expect(solution('')).to.equal(-1);
    });
});
