print('Exercise 1 : Hello World -I love Python\n')

print('Hello world\n' * 4 + 'I love python\n' *4)
print('-------------------------------------')


print('Exercise 2 : What is the Season ?')

month = int(input("hey!... enter a month by number 1-12 and I'll tell you which season! :  "))

if month > 12 :
    print('WHAT HAVE YOU DONE!?')
elif month < 0:
    print("REALLY??!")
elif month >=3 and month <=5 :
    print("Spring Time!")
elif month >=6 and month <=8:
    print("Summer is HOTT!")
elif month >=9 and month <=11 :
    print("Autumn... Beautiful..")
elif month == 12 or month <=2 :
    print("WINTER IS COMMING")