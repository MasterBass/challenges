export const solution = (s: string): number => {

    let resultA = 0;
    let resultB = 0;
    const resultArrA: Array<number> = [];
    const resultArrB: Array<number> = [];
    const arr = s.split('');

    if (s.length < 6) {
        return -1;
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'a') {
            if (!resultArrA[0]) {
                resultArrA[0] = i;
            } else if (!resultArrA[1]) {
                resultArrA[1] = i;
            } else if (!resultArrA[2]) {
                resultArrA[2] = i;
                resultA = calculateStep(resultArrA, 0);
            } else {
                const steps = calculateStep(resultArrA, i);
                if (steps < resultA) {
                    resultA = steps;
                }
            }
        } else {
            if (!resultArrB[0]) {
                resultArrB[0] = i;
            } else if (!resultArrB[1]) {
                resultArrB[1] = i;
            } else if (!resultArrB[2]) {
                resultArrB[2] = i;
                resultA = calculateStep(resultArrB, 0);
            } else {
                const steps = calculateStep(resultArrB, i);
                if (steps < resultB) {
                    resultA = steps;
                }
            }
        }
    }
    if (!resultArrA[2] || !resultArrB[2]) {
        return -1;
    }
    return resultA > resultB ? resultA : resultB;
};

const calculateStep = (result: Array<number>, index: number): number => {
    if (index) {
        result[0] = result[1];
        result[1] = result[2];
        result[2] = index;
    }
    return result[2] - result[0];
}
