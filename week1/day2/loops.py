#For loop

# for <variable> in <iterable/sequence>:
# block of code


#loop on a sequence
# fruits = ['apple', 'banana', 'kiwi', 'pear']

# for fruit in fruits:
#     print(fruit)

# looping on a range of number
#range(start,stop,step)

# for i in range(5):
#     print(i)

# for i in range(1,6):
#     print(i)

# for i in range(2,10,2):
#     print(i)

#enumerate()

# fruits = ['apple', 'banana', 'kiwi', 'pear']

# for i, fruit in enumerate(fruits):
#     if fruit == fruit[3]:
#         print('this is the last one')
#     print(i, fruit)

# for i, fruit in enumerate(fruits):
#     if fruit == 'kiwi':
#         fruits[i] = 'lime'
#     else:
#         print('this is the last one')
#     print(i, fruit)

# usr_number = int(input("hey bro, enter a number and I'll show you it's multiplication table :)  :"))

# for i in range(0,11):
#     print(usr_number * i)

#while loop

# i = 0

# while i < 5:
#     print(1)
#     i += 1

# fruits = ['apple','banana','kiwi', 'pear']

# i = 0

# while i < len(fruits):
#     print(fruits[i])
#     i += 1

pizzas_order = []
max_pizza = 5

while len(pizzas_order) < max_pizza:
    flavor = input('what pizza?, if finish type"done"')

    if flavor == 'done':
        print('succesfully added')
        print(pizzas_order)
        break
    pizzas_order.append(flavor)
