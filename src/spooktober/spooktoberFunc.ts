export const solution = (a: number[]): number => {
    let max = 0;
    let arr: Array<number> = [];
    let acc = 0;

    for (let i = a.length - 1; i > -1; i--) {
        arr[i] = a[i] + acc;
        acc = (Math.floor((a[i] + acc) / 2));
    }
    acc = 0;
    for (let i = 0; i < a.length; i++) {
        if (arr[i] + acc > max) {
            max = arr[i] + acc;
        }
        acc = (Math.floor((a[i] + acc) / 2));
    }
    return max;
};
