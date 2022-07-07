import { even, odd, multiFunctional } from "./filtering";

describe('filtering', () => {
     describe('even', () => {
        it('should add to numbers together', () => {
            const even_array = [0,1,5,2,3,54]
            const result = even(even_array);

            expect(result).toEqual([0,2,54]);
        });
    })

    describe('odd', () => {
        it('should add to numbers together', () => {
            const odd_array = [0,1,5,2,3,54]
            const result = odd(odd_array);
            expect(result).toEqual([1,5,3]);
        });
    }) 

    describe('multiFunctional', () => {
        it('should add to numbers together', () => {
            const result = multiFunctional([1,2,4]);
            expect(result).toEqual([1,2,4]);
        });
        it('should return the same array ', () => {
            const result2 = multiFunctional([1,2,4,5], {sortBy:"even",sortDirection:"asc" });
            expect(result2).toEqual([2,4]);
        });
        it('should return the same array ', () => {
            const result3 = multiFunctional([1,2,4,5], {sortBy:"odd",sortDirection:"asc" });
            expect(result3).toEqual([1,5]);
        });
        it('should return the same array ', () => {
            const result4 = multiFunctional([1,2,4,5], {sortBy:"even",sortDirection:"desc" });
            expect(result4).toEqual([4,2]);
        });
        it('should return the same array ', () => {
            const result5 = multiFunctional([1,2,4,5], {sortBy:"odd",sortDirection:"desc" });
            expect(result5).toEqual([5,1]);
        }); 
    })

})
