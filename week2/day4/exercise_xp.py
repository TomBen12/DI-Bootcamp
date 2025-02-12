import os
import random

# def get_word_from_file():
#     try:
#         with open('./word-list.txt', mode='r') as wordlist:
#             words = wordlist.read()
#             word_list = words.split('\n')
#             return word_list
#     except Exception as e:
#         print("a problem has occured",e)
        
# print(get_word_from_file())

#2 #3 #4 #5

def get_random_sentence(length:int):
    try:
        new_list = []
        with open('./word-list.txt', mode='r') as wordlist:
            words = wordlist.read()
            word_list = words.split('\n')
            word_list_length = len(word_list)
            for _ in range(length):
                random_index = random.randint(0,word_list_length-1)
                new_list.append(word_list[random_index])
        my_sentence = " ".join(new_list).lower()
        return my_sentence
    except Exception as e:
        print("a problem has occured",e)
# print(get_random_sentence(5))

def main():
    print("1.function takes in a int 2. it will open the word-list file then reads from the file 3. turn the big srt into a list by splitting it every new line 4. the length of the sentence will be set with the length parameter of the function. going through a loop 'length' time and appending to my empty list in the index of a random number, joining the list ,formatting it to lower and returning the giberrish sentence")
    ask_len = int(input("pick a number  between 2 and 20"))
    if 2 <= ask_len <=20:
        print(get_random_sentence(ask_len))
    else: 
        raise Exception("ERORRRRRR!!!")
    

main()
    
    











        

    

