const {shuffleArray} = require('./utils')

test('shuffleArray should', () => {
         const a = [1,2,3];
  expect(shuffleArray(a)).toHaveLength(5)
  
});