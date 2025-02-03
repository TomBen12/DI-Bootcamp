# # Tuples

# numbers = (10, 20, 30 ,40)
# print(type(numbers))

# print(numbers[1])

# #methods
# print(numbers.count(20))
# print(numbers.index(30))


# #concatenate tuples
# numbers2 = (2,3,5,7)
# mixed_tuples = numbers + numbers2
# print(mixed_tuples)

# #tuples cant be changed and they need to have at least 2 values


# #unpacking
# a,b,c,d = (5,10,15,20)
# print(a)
# print(b)
# print(c)
# print(d)

#exercise  Unpack the folowing tuple into 4 variables

# a_tuple = (10,20,30,40)
# a,b,c,d = a_tuple
# print(a)
# print(b)
# print(c)
# print(d)


"""SETSSSSSSSSSSS"""

"""
they are unordered data structure
"""

# my_set = { 1, 4, 8, 9}
# #my_set = set()

# my_set.add(12)

# print(my_set) 

# names = {'juliana','Israel', 'Dina'}
# countries = {'USA', 'Brazil', 'Israel'}
# print(names.intersection(countries)) #what in comon

# names_and_countries = names.union(countries) #join the 2 sets
# print(names_and_countries)

# print(countries.difference(names)) # difference

# names.clear
# print(names)

# create set of your fav num
# add a new number to the set
# find the comon elements between 2 sets (fav number and prime numbers for second set)
# remove all elements from set

favorite_nums = {12,24,30,7,1}

#
favorite_nums.add(2)
#
prime_num = {2, 3, 5, 7, 11, 13}

print(favorite_nums.intersection(prime_num))

favorite_nums.clear()
print(favorite_nums)