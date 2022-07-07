import { even, odd, multiFunctional} from './filtering'

describe('filtering', () => {

    describe('even - Filters out odd numbers, returns even numbers', () => {
        it('should not filter any numbers', () => {
            const result = even([2, 4, 6])
            expect(result).toEqual([2, 4, 6])
        })

        it('should remove all numbers', () => {
            const result = even([1, 3, 5])
            expect(result).toEqual([])
        })

        it('should return only even numbers', () => {
            const result = even([1, 2, 5, 6])
            expect(result).toEqual([2, 6])
        })
    })

    describe('odd - Filters out even numbers, returns odd numbers', () => {
        it('should return empty array', () => {
            const result = odd([2, 4, 6])
            expect(result).toEqual([])
        })
    })

    describe('multiFunctional', () => {
        it('should return original array, no provided options', () => {
            const result = multiFunctional([1, 2, 3, 4, 5])
            expect(result).toEqual([1, 2, 3, 4, 5])
        })

        it('should return asc sorted even numbered array', () => {
            const result = multiFunctional([1, 2, 3, 4, 5], { filterBy: "even", sortBy: "asc" })
            expect(result).toEqual([2, 4])
        })

        it('should return asc sorted odd numbered array', () => {
            const result = multiFunctional([1, 2, 3, 4, 5], { filterBy: "odd", sortBy: "asc" })
            expect(result).toEqual([1, 3, 5])
        })

        it('should return desc sorted even numbered array', () => {
            const result = multiFunctional([1, 2, 3, 4, 5], { filterBy: "even", sortBy: "desc" })
            expect(result).toEqual([4, 2])
        })

        it('should return desc sorted odd numbered array', () => {
            const result = multiFunctional([1, 2, 3, 4, 5], { filterBy: "odd", sortBy: "desc" })
            expect(result).toEqual([5, 3, 1])
        })
    })
})