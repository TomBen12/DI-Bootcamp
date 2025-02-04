"""
Exercise 1 : Favorite Numbers
Instructions:
a Create a set called my_fav_numbers with all your favorites numbers.
b Add two new numbers to the set.
c Remove the last number.
d Create a set called friend_fav_numbers with your friend's favorites numbers.
e Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.
"""

# #a & b
# my_fav_numbers = {2, 7, 1, 14, 21}
# my_fav_numbers.add(6)
# my_fav_numbers.add(9)
# # #alternative with update method
# # my_fav_numbers.update([6,9])
# print(my_fav_numbers)

# #c
# my_fav_numbers_list = list(my_fav_numbers)
# my_fav_numbers_list.pop()
# no_last_my_fav_num = set(my_fav_numbers_list)
# print(no_last_my_fav_num)

# #d
# friend_fav_numbers = {1, 3, 4, 6}
# our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
# print(our_fav_numbers) #number 1 is not in because set don't have duplicates.




"""
Exercise 2: Tuple
Instructions
Given a tuple which value is integers, is it possible to add more integers to the tuple?"""

"""
tuples can't be changed once created if you want, you can convert them to a list and then back to a tuple

"""


"""
Exercise 3: List
Instructions
Using this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];

a. Remove “Banana” from the list.
b. Remove “Blueberries” from the list.
c. Add “Kiwi” to the end of the list.
d. Add “Apples” to the beginning of the list.
e. Count how many apples are in the basket.
f. Empty the basket.
g. Print(basket)
"""
# basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# #a
# basket.remove("Banana")
# #b
# basket.pop(-1) #other way of removing
# #c
# basket.append("Kiwi")
# #d
# basket.insert(0,"Apples")
# #e
# apple_count = basket.count("Apples")
# print(apple_count)
# #f
# basket.clear()
# #g
# print(basket)



"""
Exercise 4: Floats
Instructions
a. Recap - What is a float? What is the difference between an integer and a float?

# b. Create a list containing the following sequence of floats and integers (it should be a list with mixed types): 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don't hard-code the sequence).


c. Can you think of another way to generate a sequence of floats?"""

#a
"""a float is a floating point number it allways have a point and an integer is  a number from minus infinite to infinite zero included but no decimal numbers! 
"""

#b -----
# num = 1
# list2 = []
# for i in range(1,9):
#     num += 0.5
#     list2.append(num)
# print("list2", list2)


#c ------


"""
Exercise 5: For Loop
Instructions
a. Use a for loop to print all numbers from 1 to 20, inclusive.
b. Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.
"""
#a
# list1 = []
# for i in range(1,21):
#     list1.append(i)
#     print(i)

# #b
# for i in range(1,21):
#     if i %2 == 0:
#         print(i)


"""
Exercise 6 : While Loop
Instructions
Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.
"""
# my_name = "tom"
# while True :
#     user_name = input("What is your name?")
#     if user_name == my_name:
#         break

"""
Exercise 7: Favorite fruits
Instructions
a. Ask the user to input their favorite fruit(s) (one or several fruits).
Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".
b. Store the favorite fruit(s) in a list (convert the string of words into a list of words).
c. Now that we have a list of fruits, ask the user to input a name of any fruit.
If the user's input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
If the user's input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.
"""

# a
# usr_fav_fruits = input("What is your favorite fruit (separate with space)")
# #b
# fruit_list = usr_fav_fruits.split()
# #c
# any_fruit_name = input("Write the name of any fruit")
# if fruit_list.count(any_fruit_name) > 0 :
#     print("You chose one of your favorite fruits! Enjoy!")
# else: print("You chose a new fruit. I hope you enjoy")

# """
# Exercise 8: Who ordered a pizza ?
# Instructions
# a. Write a loop that asks a user to enter a series of pizza toppings, when the user inputs 'quit' stop asking for toppings.
# b. As they enter each topping, print a message saying you'll add that topping to their pizza.
# c. Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).
# """

#a

# pizza_toppings = []
# while True:
#     toppings = input("Please enter a serie of pizza topping, type quit when done  :  ")
#     if toppings == "quit":
#         topping_count = len(pizza_toppings)
#         topping_price = (topping_count * 2.5) + 10
#         pizza_string = ", ".join(pizza_toppings)
#         print(f"your toppings are {pizza_string} and the price is {topping_price} please ! ")
#         break 
#     else: print("topping added to pizza!")
#     pizza_toppings.append(toppings)

"""
Exercise 9: Cinemax
Instructions
 A movie theater charges different ticket prices depending on a person's age.
if a person is under the age of 3, the ticket is free.
if they are between 3 and 12, the ticket is $10.
if they are over the age of 12, the ticket is $15.

b. Ask a family the age of each person who wants a ticket.

c. Store the total cost of all the family's tickets and print it out.

d. A group of teenagers are coming to your movie theater and want to watch a movie that is restricted for people between the ages of 16 and 21.
Given a list of names, write a program that asks teenager for their age, if they are not permitted to watch the movie, remove them from the list.
At the end, print the final list.
"""
# total_cost = 0
# int_age_list = []

# ages = input("enter each age of family members separated by space : ")
# str_age_list = ages.split()
# for str_age in str_age_list:
#     int_age = int(str_age)
#     int_age_list.append(int_age)

# for int_age in int_age_list:
#     if int_age < 3:
#         total_cost += 0
#     elif (3 < int_age <= 12):
#         total_cost += 10
#     elif int_age > 12:
#         total_cost += 15
# print(f"your total cost is {total_cost}")

#d

# people_list = ["patric", "daniel", "steeve", "simon"]
# alowed_people = []

# for person in people_list:
#     age = int(input("what is your age?"))
#     if (16 > age < 25):
#         alowed_people.append(person)

# print(alowed_people)

"""
Exercise 10 : Sandwich Orders
Instructions
Using the list below :

sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

a. The deli has run out of pastrami, use a while loop to remove all occurrences of “Pastrami sandwich” from sandwich_orders.
b. We need to prepare the orders of the clients:
Create an empty list called finished_sandwiches.
One by one, remove each sandwich from the sandwich_orders while adding them to the finished_sandwiches list.
c. After all the sandwiches have been made, print a message listing each sandwich that was made, such as:

"""
#a.
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

pastrami = "Pastrami sandwich"
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove(pastrami)
# print(sandwich_orders)

#b.
finished_sandwiches = []
copy_sandwich_orders = sandwich_orders.copy()

while sandwich_orders:
    for sw in copy_sandwich_orders:
        finished_sandwiches.append(sw)
        sandwich_orders.pop() ### how does this work?
        
# print(sandwich_orders)
# print(finished_sandwiches)

for sw in finished_sandwiches:
    print(f"I made your {sw} ! ")


