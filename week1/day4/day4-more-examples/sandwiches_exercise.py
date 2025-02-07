# MODIFYING LISTS WITHIN A FOR LOOP: THE INDEXES CHANGES EACH TIME YOU REMOVE AN ELEMENT

sandwich_orders = ["Tuna sandwich", "Pastrami sandwich",
                   "Avocado sandwich", "Pastrami sandwich",
                   "Egg sandwich", "Chicken sandwich",
                   "Pastrami sandwich"]

finished_sand = []

# This for loop will "jump" over elements when removing items
for sandwich in sandwich_orders:
    if sandwich == 'Pastrami sandwich':
        sandwich_orders.remove('Pastrami sandwich')

for sandwich in sandwich_orders:
    finished_sand.append(sandwich)

print(f'I made your {", ".join(finished_sand)}')

# SOLUTIONS
#1 - USE A WHILE LOOP AND REMOVE()

sandwich_orders = ["Tuna sandwich", "Pastrami sandwich",
                   "Avocado sandwich", "Pastrami sandwich",
                   "Egg sandwich", "Chicken sandwich",
                   "Pastrami sandwich"]

finished_sand = []
while 'Pastrami sandwich' in sandwich_orders:
    sandwich = sandwich_orders.remove('Pastrami sandwich')

for sandwich in sandwich_orders:
    finished_sand.append(sandwich)

print(f'I made your {", ".join(finished_sand)}')


#2 - USE COUNT() TO STORE THE NUMBER OF OCCURENCES AND THEN REMOVE BY THE NUMBER OF OCURRANCES
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

occurrences = sandwich_orders.count("Pastrami sandwich") #stores number of occurances
for n in range(occurrences):
    sandwich_orders.remove("Pastrami sandwich")
print(sandwich_orders)

#3 - USE LIST COMPREHENSION
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich",
                   "Avocado sandwich", "Pastrami sandwich",
                   "Egg sandwich", "Chicken sandwich",
                   "Pastrami sandwich"]

# Use list comprehension to remove all 'Pastrami sandwich' items
sandwich_orders = [sandwich for sandwich in sandwich_orders if sandwich != 'Pastrami sandwich']

# The remaining sandwiches are added to finished_sand
finished_sand = [sandwich for sandwich in sandwich_orders]

print(f'I made your {", ".join(finished_sand)}')

# THE BEST SOLUTION IS THE 3TH BECAUSE OF IT COMPLEXITY O(n), IT IS CLEAR AND CONCISE