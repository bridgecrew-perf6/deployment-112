const {shuffleArray} = require('./utils')

test('shuffleArray should', () => {
         const a = [1,2,3,4,5];
  expect(shuffleArray(a)).toHaveLength(5)
  
});