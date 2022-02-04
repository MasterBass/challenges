import { solution } from './pairCoderFunc';
import { expect } from 'chai';

describe('Pair a coder\'s solution tests', () => {
    it('checking solution for empty string', () => {
        expect(solution('')).to.equal(0);
    });
    it('checking solution for one symbol', () => {
        expect(solution('a')).to.equal(1);
    });
    it('checking solution for => abccac', () => {
        expect(solution('abccac')).to.equal(1);
    });
    it('checking solution for => abcdabcdabcd', () => {
        expect(solution('abcdabcdabcd')).to.equal(2);
    });
    it('checking solution for => axaabyab', () => {
        expect(solution('axaabyab')).to.equal(0);
    });
    it('checking solution for => abcdefghijklmnopqrstuvwxyz', () => {
        expect(solution('abcdefghijklmnopqrstuvwxyz')).to.equal(26);
    });
});
