# Don't Mock Me!


The STAR Labs have built an amazing Number Sequence Detector, BUT they need to test it!
The problem is that the Number Detector can only recieve generated number as input from a specially developed Number Generator.

Your task is to ensure that the Number Sequence Detector work as expected. 
It should be able to detect the following valid patterns:
```
1,2,3
4,5,6
9,9,9
```

The sequence dector works by:
1. Generating three numbers using the Number Generator.
2. Calling the method `detectSequence` on the Number Sequence Detector.
3. The result is `true` if given sequence is one of the patterns that should be detected, or `false` otherwise.
   


## Assignment
- use `jest.mock` functionality to mock the returned values from the Number Generator.
- Write tests that should test if all three patterns can be detected.
- Write tests that test that it returns `false` for non-valid patterns. 
  

**NOTE**: You can ONLY use the `Number Generator` to generate your sequence of numbers.
