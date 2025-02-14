"""Exercise 1: Formula
Instructions
Write a program that calculates and prints a value according to this given formula:
Q = Square root of [(2 * C * D)/H]
Following are the fixed values of C and H:
C is 50.
H is 30.
Ask the user for a comma-separated string of numbers, use each number from the user as D in the formula and return all the results
For example, if the user inputs: 100,150,180
The output should be:

18,22,24"""

import math

C = 50
H = 30
D = (
    int(d)
    for d in input(
        'please enter 3 values separated by commas such ex: 100,150,180 : '
    ).split(',')
)

Q = round(math.sqrt((2 * C * next(D)) / H))
Q1 = round(math.sqrt((2 * C * next(D)) / H))
Q2 = round(math.sqrt((2 * C * next(D)) / H))

print(f'{Q}, {Q1}, {Q2}')
# self: note created a generator expression and assigning it to C, because there is only one variable to unpack, the expression yields and i need to use the generator next() function on it each time i want a new iteration ef the expression.kida useful... if i would have used list comprehention instead (and no next() in print) it would have returned a list)

