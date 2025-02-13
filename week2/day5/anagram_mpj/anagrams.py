from anagram_checker import Anagram as anacheck

def check_word():
    user_input = input("Please, enter a word (no spaces! or weird signs):  ").strip()
    if user_input.isalpha():
        print("Thank you, our service will process your word...")
        anagram = anacheck()
        if anagram.is_valid_word(user_input):
            return user_input
        else:
            print("Word is not in our database!")
    else:
        print("ERROR ONLY ALPHANUMERIC!")

def main():
    flag = True

    while flag:
        usr_word = check_word()
        if usr_word != None:
            flag = False
    else:
        choice = input("would you like to check anagrams?\n type y for yes or anything else for no  ")
        if choice == "y":
            anagram = anacheck()
            anagram_list = anagram.get_anagrams(usr_word)
            if anagram_list:
                print(anagram_list)
            else:
                print("anagram not found in database")
                flag = True
                main()
        else:
            print("bye bye!")

main()