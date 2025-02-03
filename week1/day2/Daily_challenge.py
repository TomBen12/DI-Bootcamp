"""
Challenge 1
Ask the user for a number and a length.
Create a program that prints a list of multiples of the number until the list length reaches length.
"""
# multiple_list = []

# number = int(input('please, enter a number: '))
# lenght = int(input('now enter a lenght: '))

# for i in range(1 , lenght + 1):
#     multi = number * i
#     multiple_list.append(multi)
# print(multiple_list)

"""
Challenge 2
Write a program that asks a string to the user, and display a new string with any duplicate consecutive letters removed.
"""
dislex_string = input('please enter a string with double consecutive characters: ')
good_word = dislex_string[0]

for i in range(1, len(dislex_string)):
    if dislex_string[i] != dislex_string[i - 1]:
        good_word += dislex_string[i]
    
print(good_word)