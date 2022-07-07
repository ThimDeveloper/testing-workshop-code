import { addition, subtraction, division, multiplication} from "./math"

describe('math', () => {
    
    describe('addition', () => {
        it('should add two numbers together', () => {
            const result = addition(2, 2);
            expect(result).toBe(4);
        })
    })

    describe('subtraction', () => {
        it('should subtract two numbers', () => {
            const result = subtraction(2, 2);
            expect(result).toBe(0);
        })
    })

    describe('division', () => {
        it('should divide two numbers', () => {
            const result = division(2, 2);
            expect(result).toBe(1);
        })
    })

    describe('multiplication', () => {
        it('should multiply two numbers together', () => {
            const result = multiplication(2, 2);
            expect(result).toBe(4);
        })
    })

})