export const solution = (A: Array<number>): number => {
    let result: Array<number> = [];
    const ticketPrices: Array<[number, number]> = [[1, 2], [7, 7], [30, 25]];
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < ticketPrices.length; j++) {
            setCost(i, ticketPrices[j][0], ticketPrices[j][1], result, A);
        }
    }
    return result.length ? result[result.length - 1] : 0;
};

const setCost = (index: number, days: number, price: number, result: Array<number>, arr: Array<number>): void => {
    let sum = 0;
    if (index > 0) {
        sum = result[index - 1];
    } else {
        if (!result[index]) {
            result[index] = price;
        }
    }

    for (let i = index; i < arr.length; i++) {
        if (arr[i] - arr[index] < days) {
            const cost = sum + price;
            if (!result[i] || result[i] > cost) {
                result[i] = cost;
            }
        } else {
            return;
        }
    }
}
