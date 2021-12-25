import { ResultParams } from './types';


export const solution = (s: string): number => {
    const arr = s.split('');

    if (arr.length === 0) {
        return 0;
    }

    if (arr.length === 1) {
        return 1;
    }

    let result = 1;
    let current = 1;
    let previous = 1;
    let qMarks = 0;
    let jokerFactor = false;
    let lastCharBeforeQMark = '';
    let lastChar = '';

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '?') {
            if (lastChar && lastChar !== '?') {
                //set result
                ({ result, current, previous, jokerFactor } =
                    setResult({
                        result, current, previous,
                        jokerFactor, lastCharBeforeQMark
                    }));
            }

            if (lastChar && lastChar === '?') {
                qMarks++;
            } else {
                qMarks = 1;
            }
        } else {
            if (lastChar === '?') {
                //set jokerFactor
                if (lastCharBeforeQMark === arr[i] && qMarks % 2 === 0 &&
                  (qMarks < 2 || result < 2)) {
                    jokerFactor = true;
                } else if (lastCharBeforeQMark && lastCharBeforeQMark !== '?' &&
                    lastCharBeforeQMark !== arr[i] && qMarks % 2 !== 0 &&
                    (qMarks < 2 || result < 2)) {
                    jokerFactor = true;
                } else {
                    jokerFactor = false;
                }
                //reset counter
                lastCharBeforeQMark = '';
                qMarks = 0;
            }
            if (lastChar === arr[i]) {
                //calculate
                current++;

            } else if (lastChar && lastChar !== '?') {
                //set  result
                ({ result, current, previous } =
                    setResult({
                        result, current, previous,
                        jokerFactor, lastCharBeforeQMark
                    }));
                jokerFactor = false;

            }

            lastCharBeforeQMark = arr[i];
        }
        lastChar = arr[i];
    }
    if (current === previous && jokerFactor) {
        current++;
    }
    return current > result ? current : result;
}

const setResult = (params: ResultParams): ResultParams => {
    if (params.current === params.previous && params.jokerFactor) {
        params.current++;
    }
    if (params.current > params.previous + 1 && params.jokerFactor) {
        params.previous++;
    }
    if(!params.jokerFactor) {
      params.previous = params.current;
    }
    if (params.result < params.current) {
        params.result = params.current;
    }


    params.current = 1;

    return params;
}
