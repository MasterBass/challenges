import { Params } from './types';

export const solution = (s: string): number => {
    const arr: Array<string> = s.split('');
    const sourceRec: Record<string, Array<number>> = {};

    if (arr.length === 0) {
        return 0;
    } else if (arr.length === 1) {
        return 1;
    }
    // extract useful information from array
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
    // remove redundant elements
    const allKeys = Object.keys(sourceRec);
    for (let i = 0; i < allKeys.length; i++) {
        if (sourceRec[allKeys[i]].length === 1) {
            delete sourceRec[allKeys[i]];
        }
    }

    const keys = Object.keys(sourceRec);
    if (keys.length === 0) {
        return arr.length;
    }

    const params: Params = {
        letterIndex: 0,
        rowIndex: 0,
        sourceRec: sourceRec,
        result: arr.length,
        keys: keys,
        costsRec: {},
        length: arr.length,
        elementValue: sourceRec[keys[0]][0]
    };
    if (keys.length) {
        for (let i = 0; i < keys.length; i++) {
            for (let j = 0; j < sourceRec[keys[i]].length; j++) {
                params.letterIndex = j;
                params.rowIndex = i;
                params.elementValue = sourceRec[keys[i]][j];
                setElementsCost(params);
            }
        }
    }
    return params.result;
}

const setElementsCost = (params: Params): void => {
    const { rowIndex, keys } = params;
    for (let i = rowIndex; i < keys.length; i++) {
        setRowCosts(params, i);
    }
}

const setRowCosts = (params: Params, rowIndex: number) => {
    const { sourceRec, keys, length, elementValue, costsRec } = params;
    let isCalculationStarted = false;
    let initialValue = 0;
    for (let j = 0; j < sourceRec[keys[rowIndex]].length; j++) {
        if (params.letterIndex > 0) {
            if (sourceRec[keys[rowIndex]][j] > elementValue && params.rowIndex < rowIndex) {
                if (!isCalculationStarted) {
                    isCalculationStarted = true;
                    initialValue = sourceRec[keys[rowIndex]][j];
                } else {
                    const value = sourceRec[keys[rowIndex]][j];
                    setCost(params, value, costsRec[elementValue] - (value - initialValue + 1));
                }
            }
        } else if (params.rowIndex === 0 && j > 0) {
            const value = sourceRec[keys[rowIndex]][j];
            const rowShift = sourceRec[keys[rowIndex]][0];
            setCost(params, value, length - (value - rowShift + 1));
        }
    }
}

const setCost = (params: Params, value: number, cost: number) => {
    if (!params.costsRec[value] || params.costsRec[value] > cost) {
        params.costsRec[value] = cost;
    }
    if (params.result > cost) {
        params.result = cost;
    }
}
