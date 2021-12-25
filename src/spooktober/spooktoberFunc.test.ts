import { expect } from 'chai';
import { solution } from './spooktoberFunc';

describe('Spooktober solution test', () => {
    it('check for [2,3,1,3]', () => {
        expect(solution([2, 3, 1, 3])).to.equal(5);
    });

    it('check for [3,7,0,5]', () => {
        expect(solution([3, 7, 0, 5])).to.equal(9);
    });

    it('check for [5,0,7,3]', () => {
        expect(solution([5, 0, 7, 3])).to.equal(9);
    });

    it('check for [1,1,1,1,1]', () => {
        expect(solution([1, 1, 1, 1, 1])).to.equal(1);
    });

    it('check for []', () => {
        expect(solution([])).to.equal(0);
    });
    it('check for [0,0]', () => {
        expect(solution([0, 0])).to.equal(0);
    });
    it('check for [3,3,3,3,3,3,3,3]', () => {
        expect(solution([3, 3, 3, 3, 3, 3, 3, 3])).to.equal(7);
    });
});
