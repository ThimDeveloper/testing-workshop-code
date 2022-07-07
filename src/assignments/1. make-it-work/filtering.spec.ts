import  { even, odd, multiFunctional } from "./filtering";

describe("filtering", () => {
    describe("even", () => {
        it("should filter out odd numbers and only return the values that are even", () => {
            const result = even([1,2,3,4]);
            expect(result).toEqual([2, 4]);
        });
    });
});

describe("filtering", () => {
    describe("odd", () => {
        it("should filter out even numbers and only return the values that are odd", () => {
            const result = odd([1,2,3,4]);
            expect(result).toEqual([1, 3]);
        });
    });
});

describe("filtering", () => {
    describe("multiFunctional", () => {
        it("should filter out odd numbers and return the even numbers", () => {
            const result = multiFunctional([1,2,3,4], {sortBy: "even"});
            expect(result).toEqual([2,4]);
        });

        it("should filter out even numbers and return the odd numbers", () => {
            const result = multiFunctional([1,2,3,4], {sortBy: "odd"});
            expect(result).toEqual([1,3]);
        });

        it("should sort in ascending direction", () => {
            const result = multiFunctional([1,2,3,4], {sortDirection: "asc"});
            expect(result).toEqual([1,2,3,4]);
        });

        it("should sort in descending direction", () => {
            const result = multiFunctional([1,2,3,4], {sortDirection: "desc"});
            expect(result).toEqual([4,3,2,1]);
        });

        it("should sort in descending direction and filter out odd numbers", () => {
            const result = multiFunctional([1,2,3,4], {sortBy:"even", sortDirection: "desc"});
            expect(result).toEqual([4,2]);
        });

        it("should sort in ascending direction and filter out odd numbers", () => {
            const result = multiFunctional([1,2,3,4], {sortBy:"even", sortDirection: "asc"});
            expect(result).toEqual([2,4]);
        });

        it("should sort in ascending direction and filter out even numbers", () => {
            const result = multiFunctional([1,2,3,4], {sortBy:"odd", sortDirection: "asc"});
            expect(result).toEqual([1,3]);
        });

        it("should sort in descending direction and filter out odd numbers", () => {
            const result = multiFunctional([1,2,3,4], {sortBy:"even", sortDirection: "desc"});
            expect(result).toEqual([4,2]);
        });

        it("should return the original array if no options are passed", () => {
            const result = multiFunctional([1,2,3,4]);
            expect(result).toEqual([1,2,3,4]);
        });
    });
});
