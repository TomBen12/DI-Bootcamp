import random
import string
import datetime
# class Currency:
#     def __init__(self, currency, amount):
#         self.currency = currency
#         self.amount = amount

#     #Your code starts HERE


# Using the code above, implement the relevant methods and dunder methods which will output the results below.
# Hint : When adding 2 currencies which don’t share the same label you should raise an error.
# >>> c1 = Currency('dollar', 5)
# >>> c2 = Currency('dollar', 10)
# >>> c3 = Currency('shekel', 1)
# >>> c4 = Currency('shekel', 10)

# >>> str(c1)
# '5 dollars'

# >>> int(c1)
# 5

# >>> repr(c1)
# '5 dollars'

# >>> c1 + 5
# 10

# >>> c1 + c2
# 15

# >>> c1 
# 5 dollars

# >>> c1 += 5
# >>> c1
# 10 dollars

# >>> c1 += c2
# >>> c1
# 20 dollars

# >>> c1 + c3
# TypeError: Cannot add between Currency type <dollar> and <shekel>

#ex 1
# class Currency:
#     def __init__(self, currency, amount):
#         self.currency = currency
#         self.amount = amount
    
#     def __str__(self):
#         return f'{self.amount} {self.currency}'
    
#     def __int__(self):
#         return self.amount
    
#     def __repr__(self):
#         return f"{self.amount}, {self.currency}"
    
#     def __add__(self, other):
    
#         if isinstance(other, int):
#             return (self.amount + other)
        
#         elif isinstance(other, Currency):
#             return (self.amount + other.amount)
        
#     def __iadd__(self, other):
#         if isinstance(other, int):
#             sum_ = self.amount + other
#             return sum_
#         elif isinstance(other, Currency):
#             sum_ = self.amount + other
#             return sum_

# c1 = Currency('dollar', 5)
# c2 = Currency('dollar', 10) 
# c3 = Currency('shekel', 1)
# c4 = Currency('shekel', 10)

# print(int(c1))
# c1 + 5
# c1 + c2

# print(c1)
# c1 += 5

# print(c1)

# c1 += c2
# print(c1)

##ex 2 in -- exercise_1.py

# 🌟 Exercise 3: String module
# Instructions
# Generate random String of length 5
# Note: String must be the combination of the UPPER case and lower case letters only. No numbers and a special symbol.
# Hint: use the string module

random_string = ''.join(random.choices(string.ascii_letters, k=5))

print(random_string)

#ex 4
def current_date():
    current_date = datetime.date.today()
    print("current date:", current_date)

current_date()

#ex 5

#ex 6
