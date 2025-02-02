#Basic values types

# print("hello world!") #string, sequences of chars

# print(8+2) #numbers: 2 options- integer (not decimal), float(decimal numbers)

# print(5.75 + 3.10) #float

# print(type(5.35)) #float
# print(type("abc")) #string
# print(type(5)) #number


# print("--------------------------------------")
#discover the type of the folowing values:

#5
#2.54
#"Good Morning"

# print(type(5))
# print(type(2.54))
# print(type("Good morning"))

# print("----------------")

# print(type(False))
# print(5<7)
# print('5' == 5)

# value Types: Integer, Floats, Strings and Booleans

#Strings functions/methods

# string is a sequence of chars. I can use indexing

# name = 'Juliana'

# print(name[1])
# print(name[4:7]) #arrays start from 0 and when using the slice method the last number is not included

# len() = dicover the lenght of the string
# print(len('Harry Potter'))
# print(name[4:len(name)])
# print(name[4:])
# print(name[4:])

# ex: create a variable called my_name.
#asign it to your name as a string
#print just the second letter of your name
#print just the  2 last letters of your name

# my_name = 'Tom'
# print(my_name[1:2])
# print(my_name[1:4])

# name = 'tom benitah'

# print(name.capitalize())
# print(name.title())
# print(name.lower())

# new_name = name.replace('benitah', 'potter')
# print(new_name)

# user_name = '!John Doe!'
# clean_user_name = user_name.strip('!')
# print(clean_user_name)

# price = '$100'
# cleaned_price = price.strip('$')
# print(cleaned_price)
# print(price)

#Numbers
# print(4+3)
# print(4-2)
# print(4*2)
# print(4**2)
# print(4/2)

# print(5%2)

# name = 'ju'
# name += 'u'
# print(name)

# name[0] = 'L' #give error because strings are imutable

# user_age = input('What is your age?') #the output is a string 


# #type Casting (changing the type of a value)
# user_age_int = int(user_age)

# print(user_age_int + 7)

# print('hello world \n' * 4) #the \n represent a line break

# print('hello wordl \n' * 4)

first_name = 'tom'
last_name = 'benitah'
space = ' '
# full_name = first_name + space + last_name
# print(full_name)

#f-string

print(f'my name is {first_name} {last_name}')


