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
#         plurial_curr = self.currency
#         if self.amount > 1 :
#             plurial_curr += "s"
#             return f'{self.amount} {plurial_curr}'
#         else:
#             return f'{self.amount} {plurial_curr}'
    
#     def __int__(self):
#         return self.amount
    
#     def __repr__(self):
#         plurial_curr = self.currency
#         if self.amount > 1 :
#             plurial_curr += "s"
#             return f'{self.amount} {plurial_curr}'
#         else:
#             return f'{self.amount} {plurial_curr}'
        
#     def __call__(self):
#         plurial_curr = self.currency
#         if self.amount > 1:
#             plurial_curr += "s"
#         return self.amount, plurial_curr
    
#     def __add__(self, other):
    
#         if isinstance(other, int):
#             return (self.amount + other)
        
#         elif isinstance(other, Currency):
#             return (self.amount + other.amount)
        
#     def __iadd__(self, other):
#         if isinstance(other, Currency):
#             if self.currency != other.currency:
#                 raise TypeError(f"Cannot add between Currency type {self.currency} and {other.currency}")
#         elif isinstance(other, int):
#                 self.amount += other
#         else:
#             self.amount += other.amount
#             return self ##can;t get the exeption to be raised and interrupt the program ...

# c1 = Currency('dollar', 5)
# c2 = Currency('dollar', 10) 
# c3 = Currency('shekel', 1)
# c4 = Currency('shekel', 10)

##1
# print(c1)
##2
# print(int(c1))
#4
# print(c1 + 5)
#5
# print(c1 + c2)
##6
# print(c1) ##  for this one the call dunder did the trick apparently not only for methods as i thought.
#7
# c1+=5
# print(c1)
#8
# c1 += c2
# print(c1)
#9

# print(c1 + c3)

##ex 2 in -- exercise_1.py

# 🌟 Exercise 3: String module
# Instructions
# Generate random String of length 5
# Note: String must be the combination of the UPPER case and lower case letters only. No numbers and a special symbol.
# Hint: use the string module

# random_string = ''.join(random.choices(string.ascii_letters, k=5))

# print(random_string)

# #ex 4
# def current_date():
#     current_date = datetime.date.today()
#     print("current date:", current_date)
#     return current_date

# current_date()

#ex 5
# def new_year_countdown():
#     now = datetime.datetime.now()
#     next_year = now.year + 1
#     new_year = datetime.datetime(next_year, 1, 1)
#     time_left = new_year - now
#     days = time_left.days
#     hours, remainder = divmod(time_left.seconds, 3600) 
#     minutes, seconds = divmod(remainder, 60)
#     return f"The {new_year} is in {days} days and {hours} hours, {minutes} min and {seconds} sec"
##The divmod() function returns both the quotient(result) and remainder when dividing two numbers!! returns a tuple :self reminder:.
# print(new_year_countdown())


#ex 6
# def feel_old():
#     birth_date_string = input("please enter your birthdate separated with '/' ex: dd/mm/yyyy : ")
#     birth_date_list = birth_date_string.split("/")
#     day, month, year = birth_date_list
#     day_int, month_int, year_int = int(day), int(month), int(year)
#     ##I really need to learn that map function....
#     birth_date = datetime.datetime(year_int, month_int, day_int)
#     now = datetime.datetime.now()
#     time_diff =  now - birth_date 
#     #you can actually substract it returns a TimeDelta obj which is a durration/time difference between 2 date obj.
#     #(only substract!!) on date objcts uhh.
#     minutes_lived = time_diff.total_seconds() / 60 #to get minutes
#     print(f"You are {minutes_lived} minutes old!👴")

# feel_old()
#ex7
####to be finnished