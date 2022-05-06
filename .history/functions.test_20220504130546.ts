const {shuffleArray} = require('./utils')
// this test will make pass if we passed array length equal our returned array length 
describe('shuffleArray should', () => {
  it('some text', () => {
    const a = [1,2,3,2];
    expect(shuffleArray(a)).toHaveLength(4)

})
});
describe('shuffleArray should', () => {
    // we are just making shure our shuffled array is not the same as our passed array
    // basically we want to get random values for the game each time.
    it('somefsdfsdf text', () => {
      const a = [2,3,4,5,6];
      expect(shuffleArray(a)).not.toBe([2,3,4,5,6])
  
  })
  });
  

  describe('shuffleArray should', () => {
    // we are just making shure our shuffled array is not the same as our passed array
    // basically we want to get random values for the game each time.
    it('somefsdfsdf text', () => {
      const a = shuffleArray([7,6,5,4])
      
      expect(shuffleArray(a)).not.toBeNull

  
  })
  });

