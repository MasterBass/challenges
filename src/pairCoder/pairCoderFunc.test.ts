import { solution, dijkstra } from './pairCoderFunc';
import { expect } from 'chai';
import { Edge } from './types';

describe('Pair a coder\'s solution tests', () => {
    it('checking dijkstra function', () => {
        const graph: Array<Edge> = [];
        graph.push({ start: "a", end: "b", cost: 7 });
        graph.push({ start: "a", end: "c", cost: 9 });
        graph.push({ start: "a", end: "f", cost: 14 });
        graph.push({ start: "b", end: "c", cost: 10 });
        graph.push({ start: "b", end: "d", cost: 15 });
        graph.push({ start: "c", end: "d", cost: 11 });
        graph.push({ start: "c", end: "f", cost: 2 });
        graph.push({ start: "d", end: "e", cost: 6 });
        graph.push({ start: "e", end: "f", cost: 9 });

        const [path, length] = dijkstra(graph, "a", "e");
        //expect(length).to.equal(20); //for multidirectional
        expect(length).to.equal(26);
        //expect(path).to.deep.equal(['a', 'c', 'f', 'e']); //for multidirectional
        expect(path).to.deep.equal(['a', 'c', 'd', 'e']);
    });
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
});
