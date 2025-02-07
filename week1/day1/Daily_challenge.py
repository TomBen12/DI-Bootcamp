import random

#####'Daily Challenge ######
#1
# user_string = (input('write a 10 character string: '))
# if len(user_string) < 10:
#     print('string not long enough')
# elif len(user_string) > 10:
#     print('string too long')
# else: print('perfect string ^_^')

### 2  ###

# given_text = "HelloWorld"

# print(f'the first and last characters are: {given_text[0]+given_text[-1]}')

### 3 ###

# usr_input = input('Write a word')
# word = ''

# for letter in usr_input:
#     word += letter
#     print(word)

### 4 BONUS ###
usr_word = input("enter a string to jumble: ")
usr_word_list = list(usr_word)
random.shuffle(usr_word_list)
print("".join(usr_word_list))