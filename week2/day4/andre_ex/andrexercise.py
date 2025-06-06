import os
from translate import Translator
# os.chdir('/Users/tom/Documents/DI-Bootcamp/week2/day4/andre_ex/')

translator = Translator(to_lang="ja")

try :
    with open('./test.txt', mode='r') as my_file:
       text = my_file.read()
    translation = translator.translate(text)
    with open('./test-translated.txt', mode='w') as my_file2:
        my_file2.write(translation)
except FileNotFoundError as e:
    print('check your filepath silly!')
