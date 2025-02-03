import random

print('Daily Challenge')
print('1-------------------------')

user_string = (input('write a 10 character string: '))
if len(user_string) < 10:
    print('string not long enough')
elif len(user_string) > 10:
    print('string too long')
else: print('perfect string ^_^')

print('2-------------------------')

print(f'the first and last characters are: {user_string[0]+user_string[-1]}')

print('3------------------------')
y = ''
for x in user_string:
    y+=x
    print(y)

print('4------BONUS------------')
string_letters = list(user_string)
random.shuffle(string_letters)
print("Everyday I'm shuffling:", "".join(string_letters))