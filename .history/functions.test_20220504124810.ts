const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
  it('some text', () => {
    const a = [1,2,3,5,5,6,7,2,3,4];
    expect(shuffleArray(a)).toHaveLength(4)

})
  
});