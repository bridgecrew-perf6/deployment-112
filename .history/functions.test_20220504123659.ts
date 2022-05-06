const {shuffleArray} = require('./utils')

describe('shuffleArray should return same number of values that are passed to ', () => {
// test 1 , this is useful to make sure our passed array and our return array have the same length 
    it('shuffleArray should return same number of values that are passed to', () => {
        const a = [1,2,3];
        expect(shuffleArray(a)).toHaveLength(3)
    })

})

describe('shuffleArray should return same number of values that are passed to ', () => {
    // test 1 , this is useful to make sure our passed array and our return array have the same length 
        it('shuffleArray should return same number of values that are passed to', () => {
            const a = [1,2,3,4,5,6];
            const b = [1,2,3,4,5,6];
            expect(shuffleArray(a)).not.toBe(b)
    
    })

