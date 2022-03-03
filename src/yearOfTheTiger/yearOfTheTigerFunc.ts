export const solution = (T: Array<string>): number => {
    let result = 0;
    const grouppedData: Record<string, Array<Array<string>>> = getGrouppedData(T);
    const keys = Object.keys(grouppedData);
    for (let i = 0; i < keys.length; i++) {
        const possibleCombination = getAllPossibleCombination(keys[i]);
        let itemResult = 0;
        const items = grouppedData[keys[i]];
        for (let j = 0; j < possibleCombination.length; j++) {
            const templateResult = countForItem(possibleCombination[j], items);
            if (itemResult < templateResult) {
                itemResult = templateResult;
            }
        }
        if (itemResult > result) {
            result = itemResult;
        }
    }
    return result;
};

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
        const keys = Object.keys(result);
        let isAlreadyExist = false;
        for (let j = 0; j < keys.length; j++) {
            if (isIncludeAllChar(keys[j], tempArr)) {
                result[keys[j]].push(tempArr);
                isAlreadyExist = true;
                break;
            }
        }
        if (!isAlreadyExist) {
            result[arr[i]] = [tempArr];
        }
    }
    return result;
}

const isIncludeAllChar = (key: string, arr: Array<string>): boolean => {
    for (let i = 0; i < arr.length; i++) {
        const index = key.indexOf(arr[i]);
        if (index === -1) {
            return false;
        } else {
            key = key.slice(0, index) + key.slice(index + 1);
        }
    }
    return true;
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
