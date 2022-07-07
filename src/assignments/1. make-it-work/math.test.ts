import { addition, subtraction, division, multiplication } from "./math";

describe('math', () => {
    describe('addition', () => {
        it('should add to numbers together', () => {
            const result = addition(1,1);
            expect(result).toBe(2);
        });
    })

    describe('subtraction', () => {
        it('should subtract to numbers together', () => {
            const result = subtraction(1,5);
            expect(result).toBe(-4);
        });
    })



    describe('division', () => {
        it('should divide the first number with the second one', () => {
            const result = division(2,1);
            expect(result).toBe(2);
        });
    })


    describe('multiplication', () => {
        it('should multiply the numbers together', () => {
            const result = multiplication(5,1);
            expect(result).toBe(5);
        });
    })
})