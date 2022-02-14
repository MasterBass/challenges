import { Edge, Point } from './types';

export const solution = (s: string): number => {
    const arr: Array<string> = s.split('');
    const sourceRec: Record<string, Array<number>> = {};

    if (arr.length === 0) {
        return 0;
    } else if (arr.length === 1) {
        return 1;
    }
    // extract information from array
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            sourceRec[arr[i]] = [i];
        } else if (arr[i - 1] !== arr[i] || arr[i + 1] !== arr[i] || i === arr.length - 1) {
            if (sourceRec[arr[i]]) {
                sourceRec[arr[i]].push(i);
            } else {
                sourceRec[arr[i]] = [i];
            }
        }
    }

    const allKeys = Object.keys(sourceRec);
    let edges: Array<Edge> = [];
    for (let i = 0; i < allKeys.length; i++) {
        if (sourceRec[allKeys[i]].length === 1) {
            delete sourceRec[allKeys[i]];
        }
    }

    const keys = Object.keys(sourceRec);


    let startKeyIndex = 0;
    let endKeyIndex = 0;
    for (let i = 0; i < keys.length; i++) {
        if (sourceRec[keys[i]][0] < sourceRec[keys[startKeyIndex]][0]) {
            startKeyIndex = i;
        }
        if (sourceRec[keys[i]][sourceRec[keys[i]].length - 1] > sourceRec[keys[endKeyIndex]][sourceRec[keys[i]].length - 1]) {
            endKeyIndex = i;
        }
    }
    let start: string = "";
    let end: string = "";
    let shift: number = arr.length;

    let point = getNext(sourceRec, keys, -1);
    if (point[0]) {
        shift += point[0].value - 1;
        start = `${keys[point[0].rowIndex]}:${point[0].letterIndex}`;
    }

    while (point[0]) {
        const oldValue = point[0].value;
        const oldRowIndex = point[0].rowIndex;
        const oldLetterIndex = point[0].letterIndex;
        point = getNext(sourceRec, keys, point[0].value);

        point[1].forEach(point => {

            if (oldRowIndex === point.rowIndex) {
                edges.push({
                    start: `${keys[oldRowIndex]}:${oldLetterIndex}`,
                    end: `${keys[point.rowIndex]}:${point.letterIndex}`,
                    cost: 0
                })
            } else if ((oldLetterIndex === 0 || point.letterIndex === sourceRec[keys[point.rowIndex]].length - 1) && point.rowIndex !== oldRowIndex) {
                edges.push({
                    start: `${keys[oldRowIndex]}:${oldLetterIndex}`,
                    end: `${keys[point.rowIndex]}:${point.letterIndex}`,
                    cost: point.value - oldValue
                })

            } else {
                edges.push({
                    start: `${keys[oldRowIndex]}:${oldLetterIndex}`,
                    end: `${keys[point.rowIndex]}:${point.letterIndex}`,
                    cost: point.value - oldValue - 1
                })
            }

        });

        if (!point[0]) {
            end = `${keys[oldRowIndex]}:${oldLetterIndex}`;
            shift -= oldValue;
        }
    }

    let result = [];
    let repeatable: null |[string, string]  = null;
    do {
        result = dijkstra(edges, start, end);
        repeatable = getRepeatable(result[0]);
        if (repeatable) {
            edges = edges.filter(item => repeatable && (item.start !== repeatable[0] || item.end !== repeatable[1]));
        }
    } while (repeatable);

    return result[1] + shift;

}

const getRepeatable = (path: string[]): null | [string, string] => {
    for (let i = 1; i < path.length - 2; i++) {
        if (path[i - 1].split(':')[0] !== path[i].split(':')[0] && path[i].split(':')[0] !== path[i + 1].split(':')[0]) {
            return [path[i], path[i + 1]];
        }
    }
    return null;
}

const getNext = (sourceRec: Record<string, Array<number>>, keys: Array<string>, value: number): [Point | null, Array<Point>] => {
    let newRowIndex = -1;
    let newLetterIndex = -1;
    let newValue = Infinity;

    const points: Array<Point> = [];

    for (let i = 0; i < keys.length; i++) {
        const nextInRow = getNextInRow(sourceRec, value, keys, i);
        if (nextInRow[0] !== -1 && nextInRow[1] !== -1) {
            if (nextInRow[0] < newValue) {
                newValue = nextInRow[0];
                newRowIndex = i;
                newLetterIndex = nextInRow[1];
            }
            points.push({
                rowIndex: i,
                letterIndex: nextInRow[1],
                value: nextInRow[0]
            });
        }
    }
    if (newRowIndex === -1 && newLetterIndex === -1) {
        return [null, []];
    }
    return [{
        rowIndex: newRowIndex,
        letterIndex: newLetterIndex,
        value: newValue
    }, points]
}

const getNextInRow = (sourceRec: Record<string, Array<number>>, value: number, keys: Array<string>, rowIndex: number): [number, number] => {
    for (let i = 0; i < sourceRec[keys[rowIndex]].length; i++) {
        if (sourceRec[keys[rowIndex]][i] > value) {
            return [sourceRec[keys[rowIndex]][i], i];
        }
    }
    return [-1, -1];
}


//
//  http://rosettacode.org/wiki/Dijkstra%27s_algorithm#JavaScript
//
const dijkstra = (edges: Array<Edge>, source: string, target: string): [Array<string>, number] => {
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
        //adj[v2][v1] = len; one directional
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
            //len += adj[u][prev[u]];
            len += adj[prev[u]][u];
            u = prev[u];
        }
        return [S, len];
    }
}
