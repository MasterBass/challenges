import { expect } from 'chai';
import { solution } from './muaddibsFunc';

describe('Muaddibs solution test', () => {
    it('check for empty array', () => {
        expect(solution([])).to.equal(0);
    });
    it('checking solution for => 30', () => {
        expect(solution([30])).to.equal(2);
    });
    it('checking solution for => 1, 30', () => {
        expect(solution([1, 30])).to.equal(4);
    });
    it('checking solution for => 1, 2, 4, 5, 7, 29, 30', () => {
        expect(solution([1, 2, 4, 5, 7, 29, 30])).to.equal(11);
    });
    it('checking solution for => 11, 12, 13, 14, 15, 16', () => {
        expect(solution([11, 12, 13, 14, 15, 16])).to.equal(7);
    });
    it('checking solution for => 11, 12, 13, 14, 15, 16, 17', () => {
        expect(solution([11, 12, 13, 14, 15, 16, 17])).to.equal(7);
    });
    it('checking solution for => 2, 11, 12, 13, 14, 15, 16, 17', () => {
        expect(solution([2, 11, 12, 13, 14, 15, 16, 17])).to.equal(9);
    });
    it('checking solution for => 2, 11, 12, 13, 14, 15, 16, 17, 18', () => {
        expect(solution([2, 11, 12, 13, 14, 15, 16, 17, 18])).to.equal(11);
    });
});
