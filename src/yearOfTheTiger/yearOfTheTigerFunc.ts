export const solution = (T: Array<string>): number => {
    let result = 0;
    const grouppedData: Record<string, Array<Array<string>>> = getGrouppedData(T);
    const keys = Object.keys(grouppedData);
    const handledKeys: Array<string> = [];
    for (let i = 0; i < keys.length; i++) {
        const key = getNextKey(grouppedData, handledKeys);
        if (result >= grouppedData[key].length) {
            return result;
        }
        const possibleCombination = getAllPossibleCombination(key);
        let itemResult = 0;
        const items = grouppedData[key];
        for (let j = 0; j < possibleCombination.length; j++) {
            const templateResult = countForItem(possibleCombination[j], items);
            if (itemResult < templateResult) {
                itemResult = templateResult;
            }
            if (templateResult === items.length) {
                break;
            }
        }
        if (itemResult > result) {
            result = itemResult;
        }
    }
    return result;
};

const getNextKey = (data: Record<string, Array<Array<string>>>, handledKeys: Array<string>): string => {
    let max = 0;
    let result: string = '';
    const keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
        if (data[keys[i]].length > max && !handledKeys.includes(keys[i])) {
            result = keys[i];
            max = data[keys[i]].length;
        }
    }
    handledKeys.push(result);
    return result;
}

const countForItem = (template: Array<string>, items: Array<Array<string>>): number => {
    let result = 0;
    for (let i = 0; i < items.length; i++) {
        if (isPotentiallyEqual(template, items[i])) {
            result = result + 1;
        }
    }
    return result;
}

const isPotentiallyEqual = (template: Array<string>, item: Array<string>): boolean => {
    return template[0] === item[0] || template[2] === item[2];
}

const getGrouppedData = (arr: Array<string>): Record<string, Array<Array<string>>> => {
    const result: Record<string, Array<Array<string>>> = {};
    for (let i = 0; i < arr.length; i++) {
        const tempArr = arr[i].split('');
        const key = [...tempArr].sort().join('');
        if (result[key]) {
            result[key].push(tempArr);
        } else {
            result[key] = [tempArr];
        }
    }
    return result;
}

const getAllPossibleCombination = (str: string): Array<Array<string>> => {
    const arr = str.split('');
    return [
        [arr[0], arr[1], arr[2]],
        [arr[0], arr[2], arr[1]],
        [arr[1], arr[0], arr[2]],
        [arr[1], arr[2], arr[0]],
        [arr[2], arr[0], arr[1]],
        [arr[2], arr[1], arr[0]]
    ];
}
