export const solution = (s: string): number => {
    const arr: Array<string> = s.split('');
    const rec: Record<string, Array<number>> = {};
    let result = arr.length;

    if (arr.length === 0) {
        return 0;
    } else if (arr.length === 1) {
        return 1;
    }
    // extract information from array
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            rec[arr[i]] = [i];
        } else if (arr[i - 1] !== arr[i] || arr[i + 1] !== arr[i] || i === arr.length - 1) {
            if (rec[arr[i]]) {
                rec[arr[i]].push(i);
            } else {
                rec[arr[i]] = [i];
            }
        }
    }
    // iterate to find the best
    const keys = Object.keys(rec);
    for (let i = 0; i < keys.length; i++) {
        if (i >= result) {
            return result;
        }
        if (rec[keys[i]].length > 1) {
            const startResult = rec[keys[i]][0];
            for (let j = rec[keys[i]].length - 1; j > 0; j--) {
                if (startResult < result) {
                    const currentResult = calculateResult(rec, i, j, startResult, arr.length);
                    if (currentResult === 0) {
                        return 0;
                    } else if (currentResult < result) {
                        result = currentResult;
                    }
                }
            }
        }
    }
    return result;
}

const calculateResult = (rec: Record<string, Array<number>>,
    keyIndex: number, letterIndex: number, result: number, arrLength: number): number => {
    const keys = Object.keys(rec);
    const value = rec[keys[keyIndex]][letterIndex];
    for (let i = keyIndex + 1; i < keys.length; i++) {
        for (let j = 0; j < rec[keys[i]].length - 1; j++) {
            if (rec[keys[i]][j] > value) {
                const newResult = result + rec[keys[i]][j] - value - 1;
                // recursion
                return calculateResult(rec, i, j + 1, newResult, arrLength);
            }
        }
    }
    return arrLength - value - 1 + result;
}
