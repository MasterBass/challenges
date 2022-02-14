import { Edge } from './types';

//
//  http://rosettacode.org/wiki/Dijkstra%27s_algorithm#JavaScript
//
export const dijkstra = (edges: Array<Edge>, source: string, target: string): [Array<string>, number] => {
    const Q = new Set<string>();
    const prev: Record<string, string> = {};
    const dist: Record<string, number> = {};
    const adj: Record<string, Record<string, number>> = {};

    const vertex_with_min_dist = (Q: Set<string>, dist: Record<string, number>): string => {
        let min_distance = Infinity;
        let u: string = '';

        for (let v of Q) {
            if (dist[v] < min_distance) {
                min_distance = dist[v];
                u = v;
            }
        }
        return u;
    }

    for (let i = 0; i < edges.length; i++) {
        let v1 = edges[i].start;
        let v2 = edges[i].end;
        let len = edges[i].cost;

        Q.add(v1);
        Q.add(v2);

        dist[v1] = Infinity;
        dist[v2] = Infinity;

        if (adj[v1] === undefined) adj[v1] = {};
        if (adj[v2] === undefined) adj[v2] = {};

        adj[v1][v2] = len;
        adj[v2][v1] = len;
    }

    dist[source] = 0;

    while (Q.size) {
        let u: string = vertex_with_min_dist(Q, dist);
        let neighbors: Array<string> = Object.keys(adj[u]).filter(v => Q.has(v)); //Neighbor still in Q


        Q.delete(u);

        if (u === target) break; //Break when the target has been found

        for (let v of neighbors) {
            let alt: number = dist[u] + adj[u][v];
            if (alt < dist[v]) {
                dist[v] = alt;
                prev[v] = u;
            }
        }
    }

    {
        let u = target;
        let S = [u];
        let len = 0;

        while (prev[u] !== undefined) {
            S.unshift(prev[u]);
            len += adj[u][prev[u]];
            u = prev[u];
        }
        return [S, len];
    }
}
