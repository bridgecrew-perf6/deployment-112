const {shuffleArray} = require('./utils')
// this test will make pass if we passed array length equal our returned array length 
describe('shuffleArray should', () => {
  it('some text', () => {
    const a = [1,2,3,2];
    expect(shuffleArray(a)).toHaveLength(4)

})
});