const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    expect(shuffleArray([1,2,3,4,5])).toBe(3)
})