import VectorUtilities from './VectorUtilities';

describe('VectorUtility functions test', () => {
    it('should return [0,0]', () => {
        expect(VectorUtilities.addVectors()).toEqual([0, 0])
    })
    it('should return [0,0]', () => {
        expect(VectorUtilities.reduceVectorArray()).toEqual([0, 0])
    })
    it('should return 5', () => {
        expect(VectorUtilities.addNumbers(2, 3)).toEqual(5)
    })
    it('should return [5,9]', () => {
        expect(VectorUtilities.addVectors([2, 5], [3, 4])).toEqual([5, 9]);
    })

    it('should return [8,13]', () => {
        expect(VectorUtilities.reduceVectorArray([[2, 5], [3, 4], [3, 4]])).toEqual([8, 13]);
    })

    it('should return [6,8]', () => {
        expect(VectorUtilities.multiplyVector([2, 4], 3)).toEqual([6, 12]);
    })
})
