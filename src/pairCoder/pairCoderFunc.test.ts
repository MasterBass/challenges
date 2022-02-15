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
    it('checking solution for => abcdefghijklmnopqrstuvwxcyz', () => {
        expect(solution('abcdefghijklmnopqrstuvwxcyz')).to.equal(4);
    });
    it('checking solution for => abcdefghijklmnopqrstuvwxyz', () => {
        expect(solution('abcdefghijklmnopqrstuvwxyz')).to.equal(26);
    });
    it('checking solution for => abcdefghijklmnopqrstuvwxyza', () => {
        expect(solution('abcdefghijklmnopqrstuvwxyza')).to.equal(0);
    });
    it('checking solution for => abcdefghijklmnopqrstuvwxyzab', () => {
        expect(solution('abcdefghijklmnopqrstuvwxyzab')).to.equal(1);
    });
    it('checking solution for => abcdefgbhijklmnopqirstuvswxyzx', () => {
        expect(solution('abcdefgbhijklmnopqhrstuvrwxyzx')).to.equal(2);
    });
    it('checking solution for => abcdefgbhijklmnopqirstuvswxyzx', () => {
        expect(solution('abcdefbghijklmnopqirstuvswxyxz')).to.equal(6);
    });
    it('checking solution for => abcbydefbyghbijybklmnybopqrbystubvywxyz', () => {
        expect(solution('abcbydefbyghbijybklmnybopqrbystubvywxyz')).to.equal(2);
    });
    it('checking solution for => aboxabghbaklbncpqrdtcdacyd', () => {
        expect(solution('aboxabghbaklbncpqrdtcdacyd')).to.equal(1);
    });
    it('checking solution for => aboxabghbaklbncpqrdtcdacydw', () => {
        expect(solution('aboxabghbaklbncpqrdtcdacydw')).to.equal(2);
    });
    it('checking solution for => aboxabghbaklbncpqrdtcdacydwd', () => {
        expect(solution('aboxabghbaklbncpqrdtcdacydwd')).to.equal(1);
    });
    it('checking solution for => zzaboxabghbaklbncpqrdtcdacydwd', () => {
        expect(solution('zzaboxabghbaklbncpqrdtcdacydwd')).to.equal(1);
    });
});
