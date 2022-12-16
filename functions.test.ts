const {shuffleArray} = require('./utils')

let testArr = ['one', 'two', 'three']
let resultArr = shuffleArray(testArr)

describe('shuffleArray should', () => {
    test('return an array', () => {
        expect(Array.isArray(resultArr)).toBe(true)
    })
    test('scramble an array', () => {
        expect(resultArr).not.toEqual(testArr)
    })
})