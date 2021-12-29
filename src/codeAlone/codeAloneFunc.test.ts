import { expect } from 'chai';
import { solution } from './codeAloneFunc';

describe('Alone solution test', () => {
    it('check for empty', () => {
        expect(solution('')).to.equal(-1);
    });

    it('check for <abbab>', () => {
        expect(solution('abbab')).to.equal(-1);
    });

    it('check for <aaabaaaabaaaaaabaaa>', () => {
        expect(solution('aaabaaaabaaaaaabaaa')).to.equal(10);
    });

    it('check for <bbbababaaab>', () => {
        expect(solution('bbbababaaab')).to.equal(0);
    });

    it('check for <abbabb>', () => {
        expect(solution('abbabb')).to.equal(-1);
    });
    it('check for <abbbbaa>', () => {
        expect(solution('abbbbaa')).to.equal(4);
    });

    it('check for <ababab>', () => {
        expect(solution('ababab')).to.equal(3);
    });

    it('check for <aabbaabbaabbaabb>', () => {
        expect(solution('aabbaabbaabbaabb')).to.equal(3);
    });

    it('check for <baabaab>', () => {
        expect(solution('baabaab')).to.equal(5);
    });

    it('check for <aababaab>', () => {
        expect(solution('aababaab')).to.equal(3);
    });
    it('check for <bbabababab>', () => {
        expect(solution('bbabababab')).to.equal(2);
    });
    it('check for <ababababaa>', () => {
        expect(solution('ababababaa')).to.equal(2);
    });
    it('check for <abaabaaba>', () => {
        expect(solution('abaabaaba')).to.equal(4);
    });

    it('check for <ababbaabba>', () => {
        expect(solution('ababbaabba')).to.equal(2);
    });

    it('check for <bbabbaababaababb>', () => {
        expect(solution('bbabbaababaababb')).to.equal(1);
    });

    it('check for <abbababaab>', () => {
        expect(solution('abbababaab')).to.equal(2);
    });


    it('check for <bbabbaababaababbabababaa>', () => {
        expect(solution('bbabbaababaababbabababaa')).to.equal(1);
    });

});
