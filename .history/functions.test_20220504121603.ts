const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    const a = [1,2,3,4,5];
    const b = [1,2,3,4,5];
    expect(shuffleArray(a)).not.toBe(b)
})