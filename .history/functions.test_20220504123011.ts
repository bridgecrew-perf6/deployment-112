const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
// test 1 , this is useful to make sure our passed array and our return array have the same length 
    it('shuffleArray should', () => {
        const a = [1,2,3];
        expect(shuffleArray(a)).toHaveLength(3)
    })

})