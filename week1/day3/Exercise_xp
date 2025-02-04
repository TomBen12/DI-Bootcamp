''' EX1
Convert the two following lists, into dictionaries.
Hint: Use the zip method

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
Expected output:
{'Ten': 10, 'Twenty': 20, 'Thirty': 30}
'''
# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]
# dict_1 = dict(zip(keys,values))
# print(dict_1)

'''EX2
1. A movie theater charges different ticket prices depending on a person's age.
if a person is under the age of 3, the ticket is free.
if they are between 3 and 12, the ticket is $10.
if they are over the age of 12, the ticket is $15.

2. Given the following object:

family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}


3. How much does each family member have to pay ?

4. Print out the family's total cost for the movies.
5. Bonus: Ask the user to input the names and ages instead of using the provided family variable (Hint: ask the user for names and ages and add them into a family dictionary that is initially empty).
'''

##Bonus##

# age_list = []
# name_list = input("HI! Please Enter the name of each family member SEPARATED BY SPACE then press enter:  ").split()
# for name in name_list:
#     age = int(input(f'Enter {name}\'s age: '))
#     age_list.append(age)

# family = dict(zip(name_list, age_list))
# print(family)

#^^^Bonus^^^

# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
# total_cost = 0
# youg_tarif = 10
# adult_tarif = 15
# people_price = {}

# for name, age in family.items():
#     if age < 3 :
#         people_price[name] = 0
#         pass
#     elif 3 < age <= 12: #12 included
#         people_price[name] = youg_tarif
#         total_cost += youg_tarif
#     elif age > 12:
#         people_price[name] = adult_tarif
#         total_cost += adult_tarif

# for person , price in people_price.items():
#     print(f'{person} will have to pay {price}')

# print('\n' ,f'here is the total cost {total_cost} $ !','\n')

'''EX3
1.Here is some information about a brand.

name: Zara 
creation_date: 1975 
creator_name: Amancio Ortega Gaona 
type_of_clothes: men, women, children, home 
international_competitors: Gap, H&M, Benetton 
number_stores: 7000 
major_color: 
    France: blue, 
    Spain: red, 
    US: pink, green

2. Create a dictionary called brand which value is the information from part one (turn the info into keys and values).
The values type_of_clothes and international_competitors should be a list. The value of major_color should be a dictionary.
3. Change the number of stores to 2.
4. Use the key [type_of_clothes] to print a sentence that explains who Zaras clients are.
5. Add a key called country_creation with a value of Spain.
6. Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.
7. Delete the information about the date of creation.
8. Print the last international competitor.
9. Print the major clothes colors in the US.
10. Print the amount of key value pairs (ie. length of the dictionary).
11. Print the keys of the dictionary.
12. Create another dictionary called more_on_zara with the following details:

creation_date: 1975 
number_stores: 10 000

13. Use a method to add the information from the dictionary more_on_zara to the dictionary brand.
14. Print the value of the key number_stores. What just happened ?
'''

#2
# brand = {"name":"Zara",
#          "creation_date":"1975", 
#          "creator_name": "Amancio Ortega Gaona", 
#          "type_of_clothes": ["men", "women", "children", "home"], 
#         "international_competitors": ["Gap", "H&M", "Benetton"], 
#         "number_stores": 7000, 
#         "major_color": { "France": "blue", "Spain": "red", 
#                         "US": ["pink", "green"]}}

# #3
# brand["number_stores"] = 2

# #4
# print(f"Zara's clients sell articles for {brand['type_of_clothes'][0]}, {brand['type_of_clothes'][1]}, {brand['type_of_clothes'][2]}, and {brand['type_of_clothes'][3]}")

# #5
# brand["country_creation"] = "Spain"

# #6
# if "international_competitors" in brand :
#     brand["international_competitors"].append("Desigual")
# #7
# del brand["creation_date"]

# #8
# print(brand["international_competitors"][-1])

# #9
# print(", ".join(brand["major_color"]["US"]))

# #10
# print(len(brand))

# #11
# print(", ".join(brand.keys()))

# #12
# more_on_zara = {"creation_date": 1975 ,
#                 "number_stores": 10000
#                 }

# #13
# brand.update(more_on_zara)

##  brand["creation_date"] = more_on_zara["creation_date"]
##  brand["number_stores"] = more_on_zara["number_stores"]

# for key, val in more_on_zara.items():
#     brand[key] = val
# 

#14
# print(brand["creation_date"])
#because it was deleted in exercise 6 it got created and sent to the back of the listt

#######EX4 
'''
 Exercise 4 : Disney characters
 Instructions

Exercise 4 : Disney characters
Instructions
Use this list :

users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
Analyse these results :

#1/

/ print(disney_users_A)
{"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}

#2/

/ print(disney_users_B)
{0: "Mickey",1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}

#3/ 

/ print(disney_users_C)
{"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}


Use a for loop to recreate the 1st result. Tip : don't hardcode the numbers.
Use a for loop to recreate the 2nd result. Tip : don't hardcode the numbers.
Use a method to recreate the 3rd result. Hint: The 3rd result is sorted alphabetically.
Only recreate the 1st result for:
The characters, which names contain the letter “i”.
The characters, which names start with the letter “m” or “p”.
'''

# users = ["Mickey","Minnie","Donald","Ariel","Pluto"]

# user_nums = []
# user_names= []

# for i, usr in enumerate(users):
#     user_nums.append(i)
#     user_names.append(usr)

# #1
# disney_users_A = dict(zip(user_names, user_nums))
# print(disney_users_A)

# #2
# disney_users_B = dict(zip(user_nums, user_names))
# print(disney_users_B)

# #3
# sorted_users = sorted(users)
# print(sorted_users)
# print(dict(zip(sorted_users,user_nums)))
# #4
# #a

# no_i_usr_list = []

# for usr in users:
#     if 'i' in usr:
#         no_i_usr_list.append(usr)

# print(dict(zip(no_i_usr_list,user_nums)))

#b
# no_mp_usr_list = []
# for usr in users:
#     if not usr.lower().startswith(("m", "p")):
#         no_mp_usr_list.append(usr)

# print(dict(zip(no_mp_usr_list,user_nums)))




