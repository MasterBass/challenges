import { expect } from 'chai';
import { solution } from './yearOfTheTigerFunc';

describe('Year of the tiger solution test', () => {
    it('check for empty array', () => {
        expect(solution([])).to.equal(0);
    });
    it('check for one item in array', () => {
        expect(solution(["abc"])).to.equal(1);
    });
    it('check for identical items in array', () => {
        expect(solution(["abc", "abc", "abc", "abc", "abc"])).to.equal(5);
    });
    it('check for identical items in array (mixed order inside)', () => {
        expect(solution(["bac", "bac", "bac", "acb", "acb"])).to.equal(5);
    });
    it('check for ["aab","cab","baa","baa", "abb"]', () => {
        expect(solution(["aab", "cab", "baa", "baa", "abb"])).to.equal(3);
    });
    it('check for ["zzz","zbz","zbz","dfg"]', () => {
        expect(solution(["zzz", "zbz", "zbz", "dfg"])).to.equal(2);
    });
    it('check for ["abc","cba","cab","bac","bca"]', () => {
        expect(solution(["abc", "cba", "cab", "bac", "bca"])).to.equal(3);
    });
});
