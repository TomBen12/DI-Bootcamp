# Global scope: variable outside indented blocks
# if imutable = you need the global keywork to modify it.

count = 5

def increase_count():
    count += 5

# increase_count() #cannot access local variable 'count' where it is not associated with a value
print(count)

#now using the global keyword:

def increase_count():
    global count
    count += 5

increase_count() #cannot access local variable 'count' where it is not associated with a value
print(count) # 10 - the global variable was modified

#Local

def multiplication(a, b):
    result = a * b
    return result

# print(result) # Python doesn't recognize this variable because it exists only on the local scope of multiplication()
# To access the result vartiable we need to pass it to the global scope using return:
result = multiplication(5,4)
print(result)

# SPECIAL CASE: MUTABLE ITERABLES
# You can access and modify them in any scope:

# Mutable Iterable
students = ['Harry', 'Hermione', 'Ron']

def welcome():
    for student in students:
        print(f'Welcome to Hogwarts, {student}')

welcome() # we could access the list elements inside the function (local)

def new_student():
    students.append('George')

new_student()
print(students) # we can even add new elements to the global list

