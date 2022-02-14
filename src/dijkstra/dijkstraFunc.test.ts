import { dijkstra } from './dijkstraFunc';
import { expect } from 'chai';
import { Edge } from './types';

describe('Dijkstra\'s algorithm tests', () => {
    it('Test #1', () => {
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
        expect(length).to.equal(20);
        expect(path).to.deep.equal(['a', 'c', 'f', 'e']);
    });
});
