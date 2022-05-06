const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    const a = [1,2,3];
  expect(shuffleArray(a)).toHaveLength(3)
    
})