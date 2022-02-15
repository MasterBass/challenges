export type Params = {
    letterIndex: number,
    rowIndex: number,
    elementValue: number,
    sourceRec: Record<string, Array<number>>,
    result: number,
    keys: Array<string>,
    costsRec: Record<number, number>,
    length: number
}
