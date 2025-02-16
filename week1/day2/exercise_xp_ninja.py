import math
import random

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


# C = 50
# H = 30
# D = (
#     int(d)
#     for d in input(
#         'please enter 3 values separated by commas such ex: 100,150,180 : '
#     ).split(',')
# )

# Q = round(math.sqrt((2 * C * next(D)) / H))
# Q1 = round(math.sqrt((2 * C * next(D)) / H))
# Q2 = round(math.sqrt((2 * C * next(D)) / H))

# print(f'{Q}, {Q1}, {Q2}')
# self: note created a generator expression and assigning it to C, because there is only one variable to unpack, the expression yields and i need to use the generator next() function on it each time i want a new iteration on the G expression.kida useful... if i would have used list comprehention instead  it would have returned a whole list)


"""Exercise 2 : List of integers
Instructions
Given a list of 10 integers to analyze. For example:

    [3, 47, 99, -80, 22, 97, 54, -23, 5, 7] 
    [44, 91, 8, 24, -6, 0, 56, 8, 100, 2] 
    [3, 21, 76, 53, 9, -82, -3, 49, 1, 76] 
    [18, 19, 2, 56, 33, 17, 41, -63, -82, 1]
    
Store the list of numbers in a variable.
Print the following information:
a. The list of numbers - printed in a single line
b. The list of numbers - sorted in descending order (largest to smallest)
c. The sum of all the numbers
A list containing the first and the last numbers.
A list of all the numbers greater than 50.
A list of all the numbers smaller than 10.
A list of all the numbers squared -eg. for [1, 2, 3] you would print “1 4 9”.
The numbers without any duplicates - also print how many numbers are in the new list.
The average of all the numbers.
The largest number.
10.The smallest number.
11.Bonus: Find the sum, average, largest and smallest number without using built in functions.
12.Bonus: Instead of using pre-defined lists of numbers, ask the user for 10 numbers between -100 and 100. Ask the user for an integer between -100 and 100 - repeat this question 10 times. Each number should be added into a variable that you created earlier.
13.Bonus: Instead of asking the user for 10 integers, generate 10 random integers yourself. Make sure that these random integers are between -100 and 100.
14.Bonus: Instead of always generating 10 integers, let the amount of integers also be random! Generate a random positive integer no smaller than 50.
15.Bonus: Will the code work when the number of random numbers is not equal to 10?"""

# 1
# l1 = [3, 47, 99, -80, 22, 97, 54, -23, 5, 7]
# l2 = [44, 44, 8, 44, -6, 44, 56, 8, 100, 44]

# # 2 a b c
# str_l1 = ", ".join(str(l) for l in l1)
# print(str_l1)
# revrse_l1 = sorted(l1, reverse=True)
# print(revrse_l1)
# print(sum(l1))
# # 3
# f_and_l = [l1[0], l1[-1]]
# print(f_and_l)  # 4
# over_50 = [n for n in l1 if n > 50]
# print(over_50)
# # 5
# less_10 = [n for n in l1 if n < 10]
# print(less_10)
# # 6
# sqred = [n * n for n in l1]
# print(sqred)
# # 7
# no_dupes = list(set(l2))
# print(no_dupes, f'count: {len(no_dupes)}')
# # 8
# l1_average = sum(l1) / len(l1)
# print(l1_average)
# # 9
# print(max(l1))
# # 10
# print(min(l1))
# ##11
# ##biggest number
# big_n = 0
# for n in l1:
#     if big_n < n:
#         big_n = n
#     else:
#         continue
# print(big_n)

# ##smallest number
# small_n = 0
# for n in l1:
#     if small_n > n:
#         small_n = n
#     else:
#         continue
# print(small_n)
# ##avg
# l1_average = sum(l1) / len(l1)
# ##sum
# sum(l1)
##12
# l3 = []

# while len(l3) < 10:
#     try:
#         number = int(input('enter a number between -100 and 100 to add to the list: '))
#     except ValueError:
#         print('wrong value entered, retry...')
#         continue
#     else:
#         l3.append(number) if -100 < number < 100 else print('not in, range retry...')

# print(l3)
# 13

# random_int = [random.randint(-100, 100) for _ in range(10)]
# print(random_int)

##14

# mega_random_int = [
#     random.randint(-100, 100)
#     for _ in range(49, random.randint(49, 10000000))
# ]
# print(mega_random_int)

"""Exercise 3: Working on a paragraph
1.Find an interesting paragraph of text online. (Please keep it appropriate to the social context of our class.)
2.Paste it to your code, and store it in a variable.
3.Let's analyze the paragraph. Print out a nicely formatted message saying:
4.How many characters it contains (this one is easy…).
5.How many sentences it contains.
6.How many words it contains.
7.How many unique words it contains.
8.Bonus: How many non-whitespace characters it contains.
9.Bonus: The average amount of words per sentence in the paragraph.
10.Bonus: the amount of non-unique words in the paragraph.
"""
# # 1,2
# paragraph = 'I\'ve never subscribed to the "words can never hurt me" point of view. Because if words can\'t hurt, then neither can they help or heal or inspire. Yes, words can brutalize. They can shame and scar. But people must be free to say them anyway. We protect free speech not because words are harmless, but because they are powerful.'
# paragraph_clean = paragraph.replace('\'', ' ').replace("\"", "")
# # 3,4
# char_num = len(paragraph)
# print(f"This paragraph contains {char_num} characters in total.")
# # 5
# sentence_list = paragraph.replace("\n", " ").split('.')
# sentence_count = len(sentence_list)
# print(f'There is {sentence_count} sentences, ')
# paragraph_words = paragraph.replace('\'', ' ').replace("\"", "").split(' ')
# # 6
# word_count = len(paragraph_words)
# print(f'and it contains {word_count} words.')
# # 7
# unique_words = set(paragraph_words)
# unique_word_count = len(unique_words)
# print(f'Just so you know, it has {unique_word_count} unique words, ')
# # 8
# white_spaces = [s for s in paragraph_clean if s == ' ']
# white_spaces_count = len(white_spaces)
# print(f'contains {white_spaces_count} white spaces, ')
# # 9
# average_words_per_sentence = round(word_count / sentence_count, 1)
# print(f'on average {average_words_per_sentence} words per sentence and finally, ')
# # 10
# non_unique_words = word_count - unique_word_count
# print(f'{non_unique_words} non-unique words! ')

# Exercise 4 : Frequency Of The Words
# Instructions
# Write a program that prints the frequency of the words from the input.

# Suppose the following input is supplied to the program:
# New to Python or choosing between Python 2 and Python 3? Read Python 2 or Python 3.

# Then, the output should be:

#     2:2
#     3.:1
#     3?:1
#     New:1
#     Python:5
#     Read:1
#     and:1
#     between:1
#     choosing:1
#     or:2
#     to:1


# this_string = "New to Python or choosing between Python 2 and Python 3? Read Python 2 or Python 3."

that_string = input('enter words separated by space: ')
this_list = sorted(that_string.split(' '))
unique_words = sorted(set(this_list))
for word in unique_words:
    print(f"{word}:{this_list.count(word)}")
##just learned that there is a 're' module which contains fuctions to format strings ... will look into that.
